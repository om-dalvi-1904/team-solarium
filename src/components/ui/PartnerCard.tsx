'use client';

interface PartnerCardProps {
    children: React.ReactNode; 
    className?: string; 
  }
  
  export const PartnerCard = ({ children, className }: PartnerCardProps) => {
    return (
      <div
        className={`bg-[#1b1a1a] border border-orange-600 rounded-xl flex items-center justify-center py-6 ${className || ""}`}
      >
        {children}
      </div>
    );
  };
  