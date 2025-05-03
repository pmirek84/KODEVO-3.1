import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';
import { RainbowButton } from './rainbow-button';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const showDetails = () => {
    window.location.href = '/privacy-policy';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#001219]/95 backdrop-blur-lg border-t border-[#00E5FF]/20">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white text-center sm:text-left">
          Nasza strona działa dzięki kodowi, kreatywności i... odrobinie cookies.<br />
          <span className="text-gray-400">Nie są jadalne, ale pomagają nam myśleć szybciej i trafniej.</span>
        </p>
        <div className="flex gap-3">
          <button
            onClick={showDetails}
            className="flex items-center gap-2 px-4 py-2 text-[#00E5FF] hover:text-white transition-colors"
          >
            <Settings className="w-5 h-5" />
            <span>Pokaż szczegóły</span>
          </button>
          <RainbowButton onClick={acceptCookies} className="whitespace-nowrap">
            🧠 Jasne, zaakceptuję
          </RainbowButton>
        </div>
      </div>
    </div>
  );
};