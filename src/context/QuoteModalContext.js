import { createContext, useContext, useState } from 'react';
const QuoteModalContext = createContext(undefined);
export function QuoteModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (<QuoteModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </QuoteModalContext.Provider>);
}
export function useQuoteModal() {
    const context = useContext(QuoteModalContext);
    if (context === undefined) {
        throw new Error('useQuoteModal must be used within a QuoteModalProvider');
    }
    return context;
}
