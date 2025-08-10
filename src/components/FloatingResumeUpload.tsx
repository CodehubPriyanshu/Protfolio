import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const PersistentResumeIcon = () => {
  const handleResumeDownload = () => {
    // TODO: UPDATE RESUME LINK HERE
    // Replace the URL below with your latest updated resume file URL
    // This link will be used for the persistent main icon resume access
    const resumeUrl = 'https://www.canva.com/design/DAGvjMONgbw/3p-sGdZKSyg5rPtoheX2Ww/view?utlId=h1d9b24f7c4';

    // Open resume in new tab for viewing/downloading
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <TooltipProvider>
      {/* Persistent Main Icon - Always visible, no close option */}
      <div className="fixed top-6 right-6 z-50">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="btn-neon h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-glow"
              onClick={handleResumeDownload}
              aria-label="View Latest Resume"
            >
              <FileText className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="left"
            className="glass-card text-sm font-medium"
            sideOffset={8}
          >
            View Latest Resume
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default PersistentResumeIcon;
