import React, { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';

const PopupNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Configuration for easy message updates
  const POPUP_CONFIG = {
    // ✨ UPDATE THIS MESSAGE TEXT AS NEEDED ✨
    message: "Click on the floating icon to see my certifications in the career right",
    
    // ⏱️ TIMING CONFIGURATION (in milliseconds) ⏱️
    showDelay: 1000, // 3 seconds delay before showing (fixed from 0000)
    autoHideDelay: 3000, // Auto hide after 5 seconds of being visible
    
    // 🎨 VISUAL CONFIGURATION 🎨
    showActionHint: true, // Show the "Look for the floating icon" hint
    enableBackdropClose: true, // Allow closing by clicking backdrop
  };

  useEffect(() => {
    // Show popup after specified delay
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, POPUP_CONFIG.showDelay);

    // Auto hide popup after it's been visible for specified duration
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, POPUP_CONFIG.showDelay + POPUP_CONFIG.autoHideDelay);

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Manual close handler
  const handleClose = () => {
    setIsVisible(false);
  };

  // Backdrop click handler
  const handleBackdropClick = () => {
    if (POPUP_CONFIG.enableBackdropClose) {
      handleClose();
    }
  };

  // Don't render if not visible
  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop overlay with glass morphism effect */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 animate-in fade-in duration-500"
        onClick={handleBackdropClick}
        aria-label="Close notification overlay"
      />
      
      {/* Popup notification with enhanced design system integration */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-in zoom-in-95 fade-in duration-500">
        <div className="glass-card max-w-sm mx-4 p-6 relative animate-pulse-glow">
          {/* Enhanced close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted transition-all duration-300 hover:scale-110 active:scale-95 group"
            aria-label="Close notification"
          >
            <X className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
          </button>

          {/* Notification content */}
          <div className="pr-8">
            {/* Enhanced icon indicator with neon glow */}
            <div className="flex items-center justify-center w-14 h-14 rounded-full mb-6 mx-auto relative overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 gradient-bg rounded-full opacity-20"></div>
              
              {/* Icon with glow effect */}
              <div className="relative z-10 p-3 rounded-full bg-primary/10 backdrop-blur-sm">
                <Info className="w-6 h-6 text-primary animate-pulse" />
              </div>
              
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
            </div>

            {/* Message text with neon styling */}
            <div className="text-center space-y-4">
              <p className="text-foreground text-sm sm:text-base leading-relaxed font-medium">
                {POPUP_CONFIG.message}
              </p>

              {/* Optional action hint with enhanced styling */}
              {POPUP_CONFIG.showActionHint && (
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  <span className="neon-text font-medium">Look for the floating icon</span>
                  <span className="w-2 h-2 bg-accent-glow rounded-full animate-pulse animation-delay-500"></span>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced decorative elements with theme integration */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping opacity-75"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent-glow rounded-full animate-pulse"></div>
          
          {/* Additional floating particles for visual appeal */}
          <div className="absolute top-2 left-4 w-1 h-1 bg-primary/50 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-3 right-8 w-1.5 h-1.5 bg-accent-glow/50 rounded-full animate-pulse animation-delay-1500"></div>
        </div>
      </div>

    </>
  );
};

export default PopupNotification;