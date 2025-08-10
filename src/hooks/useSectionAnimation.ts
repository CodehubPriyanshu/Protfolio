import { useEffect, useState } from 'react';

interface UseSectionAnimationOptions {
  threshold?: number;
  delay?: number;
  rootMargin?: string;
}

export const useSectionAnimation = (
  sectionId: string,
  options: UseSectionAnimationOptions = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { threshold = 0.3, delay = 1500, rootMargin = '0px' } = options;

  useEffect(() => {
    // Reset animation state on page refresh
    const handlePageLoad = () => {
      setIsVisible(false);
      setHasAnimated(false);
    };

    // Check if page was refreshed
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      handlePageLoad();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Add delay before triggering animation
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      { 
        threshold,
        rootMargin
      }
    );

    const section = document.getElementById(sectionId);
    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, [sectionId, threshold, delay, rootMargin, hasAnimated]);

  // Reset animation on page refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem(`section-${sectionId}-animated`);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [sectionId]);

  return { isVisible, hasAnimated };
};
