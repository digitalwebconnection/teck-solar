export const WEB3FORMS_ACCESS_KEY =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_WEB3FORMS_ACCESS_KEY) ||
  "9674244f-e241-475f-84ac-96ba0559d404";

export interface Web3FormsPayload {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  from_name?: string;
  message?: string;
  [key: string]: any;
}

export interface Web3FormsResponse {
  success: boolean;
  message?: string;
  data?: any;
}

// Security Point: Input Sanitization to prevent XSS and Injection Attacks
function sanitizeInput(input: any): any {
  if (typeof input !== 'string') return input;
  // Remove HTML tags completely
  let sanitized = input.replace(/<[^>]*>?/gm, '');
  // Remove dangerous characters commonly used in Script/SQL injection
  sanitized = sanitized.replace(/[<>;={}]/g, '');
  return sanitized.trim();
}

export async function submitToWeb3Forms(
  data: Web3FormsPayload | FormData,
  options?: {
    subject?: string;
    from_name?: string;
  }
): Promise<Web3FormsResponse> {
  // Rate limiting to prevent duplicate spam (5 seconds cooldown)
  const lastSubmitTime = localStorage.getItem('lastFormSubmitTime');
  const now = Date.now();
  if (lastSubmitTime && now - parseInt(lastSubmitTime, 10) < 5000) {
    return {
      success: false,
      message: 'Please wait a few seconds before submitting another form.',
    };
  }

  try {
    let formData: FormData;

    if (data instanceof FormData) {
      formData = data;
    } else {
      formData = new FormData();
      Object.entries(data).forEach(([key, val]) => {
        if (val !== undefined && val !== null) {
          if (typeof val === 'object' && !(val instanceof File) && !(val instanceof Blob)) {
            formData.append(key, JSON.stringify(val));
          } else {
            // Apply sanitization to all string inputs
            formData.append(key, sanitizeInput(String(val)));
          }
        }
      });
    }

    if (!formData.has('access_key')) {
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    }
    if (options?.from_name && !formData.has('from_name')) {
      formData.append('from_name', options.from_name);
    }
    if (options?.subject && !formData.has('subject')) {
      formData.append('subject', options.subject);
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    
    if (result.success) {
      localStorage.setItem('lastFormSubmitTime', now.toString());
    }

    return {
      success: result.success === true,
      message: result.message || (result.success ? 'Form submitted successfully!' : 'Submission failed'),
      data: result,
    };
  } catch (error: any) {
    console.error('Web3Forms submission error:', error);
    return {
      success: false,
      message: error?.message || 'Network error occurred. Please try again.',
    };
  }
}
