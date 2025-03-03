import React from 'react';
interface TagProps {
  label: string;
  onDelete: () => void;
}

export const Tag: React.FC<TagProps> = ({ label, onDelete }) => {
  return (
    <span className="tag">
      {label}
      <button onClick={onDelete}>&times;</button>
    </span>
  );
};