// /src/components/ContentItem.tsx
interface ContentItemProps {
    title: string;
    details?: string;
  }
  
  const ContentItem = ({ title, details }: ContentItemProps) => (
    <div className="content-item">
      <h3>{title}</h3>
      {details && <p>{details}</p>}
    </div>
  );
  
  export default ContentItem;
  