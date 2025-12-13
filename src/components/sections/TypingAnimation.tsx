import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

interface TypingAnimationProps {
  onComplete?: () => void;
  onExploreClick?: () => void;
  onDownloadClick?: () => void;
}

const TypingAnimation = ({ onComplete, onExploreClick, onDownloadClick }: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const fullText = `👋 Hi, I'm Priyanshu Kumar

Passionate about creating innovative solutions that bridge the gap between cutting-edge technology and real-world problems.`;

  const typingSpeed = 50; // milliseconds per character
  const pauseAfterName = 1000; // pause after name
  const pauseAfterText = 500; // pause before showing buttons

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      // Animation complete, show buttons after a pause
      const timer = setTimeout(() => {
        setShowButtons(true);
        setIsComplete(true);
        onComplete?.();
      }, pauseAfterText);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText, isComplete, onComplete]);

  // Add pause after "Priyanshu Kumar"
  useEffect(() => {
    if (displayedText.includes('Priyanshu Kumar') && !displayedText.includes('\n\nPassionate')) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, pauseAfterName);

      return () => clearTimeout(timer);
    }
  }, [displayedText, currentIndex]);

  return (
    <div className="space-y-6 animate-fade-in-up text-center lg:text-left">
      <div className="space-y-4">
        <div className="text-lg sm:text-xl text-muted-foreground mb-4 min-h-[2rem]">
          {displayedText.split('\n')[0]}
          {currentIndex <= fullText.indexOf('\n') && (
            <span className="animate-pulse">|</span>
          )}
        </div>

        {displayedText.includes('\n') && (
          <div className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 min-h-[4rem]">
            {displayedText.split('\n').slice(1).join('\n')}
            {currentIndex > fullText.indexOf('\n') && currentIndex < fullText.length && (
              <span className="animate-pulse">|</span>
            )}
          </div>
        )}
      </div>

      {showButtons && (
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            className="btn-neon text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8"
            onClick={onExploreClick}
          >
            Explore My Work
            <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          
          <Button
            variant="outline"
            className="glass-card text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 hover:shadow-glow"
            onClick={onDownloadClick}
          >
            <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Download CV
          </Button>
        </div>
      )}
    </div>
  );
};

export default TypingAnimation;
