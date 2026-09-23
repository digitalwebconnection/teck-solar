export const WEB3FORMS_ACCESS_KEY = '931031ab-378b-41eb-9bc5-ca9d50b95e91';
export async function submitToWeb3Forms(data, options) {
    try {
        let formData;
        if (data instanceof FormData) {
            formData = data;
        }
        else {
            formData = new FormData();
            Object.entries(data).forEach(([key, val]) => {
                if (val !== undefined && val !== null) {
                    if (typeof val === 'object' && !(val instanceof File) && !(val instanceof Blob)) {
                        formData.append(key, JSON.stringify(val));
                    }
                    else {
                        formData.append(key, String(val));
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
        return {
            success: result.success === true,
            message: result.message || (result.success ? 'Form submitted successfully!' : 'Submission failed'),
            data: result,
        };
    }
    catch (error) {
        console.error('Web3Forms submission error:', error);
        return {
            success: false,
            message: error?.message || 'Network error occurred. Please try again.',
        };
    }
}
