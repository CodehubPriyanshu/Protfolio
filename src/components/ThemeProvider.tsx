import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;