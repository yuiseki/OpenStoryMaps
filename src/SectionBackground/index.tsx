import React from "react";

export const SectionBackground: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className="section-background">
      <div className="section-background-overlay"></div>
      <img src={src} />
    </div>
  );
};
