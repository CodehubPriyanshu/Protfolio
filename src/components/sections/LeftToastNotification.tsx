import React, { useState, useEffect, useCallback } from 'react';
import { Info, X } from 'lucide-react';

const LeftToastNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);
  
  useEffect(() => {
    // Show notification after page loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Show after 1 second when page loads
    
    // Auto-dismiss after 5 seconds
    const autoDismissTimer = setTimeout(() => {
      setIsVisible(false);
    }, 6000); // 1s delay + 5s visible = 6s total
    
    return () => {
      clearTimeout(timer);
      clearTimeout(autoDismissTimer);
    };
  }, []); // Empty dependency array means this runs once on mount
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed top-20 left-4 right-4 z-[100] animate-fade-in lg:top-4 lg:left-4 lg:right-auto max-w-xs w-full px-4 mx-auto lg:mx-0">
      <div className="glass-card p-4 flex items-start gap-3 relative border border-primary/20 shadow-lg">
        <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 backdrop-blur-sm">
          <Info className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground">
            Click on the floating icon to view my certifications and career highlights.
          </p>
        </div>
        <button
          onClick={handleClose}
          className="p-1.5 rounded-full bg-muted hover:bg-secondary transition-all duration-200 hover:scale-110"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default LeftToastNotification;