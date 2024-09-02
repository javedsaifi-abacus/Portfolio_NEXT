// /src/components/Section.tsx
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <section id={id} className="section">
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;
