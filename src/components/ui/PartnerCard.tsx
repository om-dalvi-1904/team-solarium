'use client';

interface PartnerCardProps {
    children: React.ReactNode; 
    className?: string; 
  }
  
  export const PartnerCard = ({ children, className }: PartnerCardProps) => {
    return (
      <div
        className={`bg-neutral-500/30 border border-orange-600 rounded-xl flex items-center justify-center py-6 ${className || ""}`}
      >
        {children}
      </div>
    );
  };
  