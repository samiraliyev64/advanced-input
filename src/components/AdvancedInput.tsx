import React, { useState } from 'react';
import useStore from '../store';
import { useAutocomplete } from '../api';
import { Autocomplete } from './AutoComplete';
import { Tag } from './Tag';

export const AdvancedInput: React.FC = () => {
  const { tags, setTags } = useStore();
  const [query, setQuery] = useState('');
  const { data: suggestions } = useAutocomplete(query);

  const addTag = (tag: string | { label: string; value: string }) => {
    setTags([...tags, tag]);
    setQuery('');
  };

  const deleteTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query) {
      addTag(query);
    }
    if (e.key === 'Backspace' && query === '') {
      deleteTag(tags.length - 1);
    }
  };

  return (
    <div>
      {tags.map((tag, index) => (
        <Tag key={index} label={typeof tag === 'string' ? tag : tag.label} onDelete={() => deleteTag(index)} />
      ))}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type here..."
      />
      {suggestions && <Autocomplete suggestions={suggestions} onSelect={addTag} />}
    </div>
  );
};

