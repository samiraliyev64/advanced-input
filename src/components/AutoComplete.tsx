import React from 'react';

interface AutocompleteProps {
  suggestions: { label: string; value: string }[];
  onSelect: (suggestion: { label: string; value: string }) => void;
  isLoading: boolean; // To indicate loading state
  noResults: boolean; // To indicate no results were found
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  suggestions,
  onSelect,
  isLoading,
  noResults,
}) => {
  return (
    <div>
      {isLoading && <p>Loading...</p>} {/* Show loading message */}
      {noResults && !isLoading && <p>No suggestions found.</p>} {/* Show no results message */}
      <ul>
        {suggestions.map((s, index) => (
          <li key={index} onClick={() => onSelect(s)}>
            {s.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
