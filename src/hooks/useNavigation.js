import { useState, useCallback } from 'react';

/**
 * Custom hook to manage active navigation tab and mobile drawer state
 */
export function useNavigation(initialTab = 'dashboard') {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = useCallback((tabId) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false); // Close mobile drawer upon selection
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return {
    activeTab,
    navigateTo,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
}
