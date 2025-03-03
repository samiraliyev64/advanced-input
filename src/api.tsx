// api.tsx
import axios from 'axios';

export interface Suggestion {
  label: string;
  value: string;
  category: string; // Category like "People", "Projects", etc.
}

export const fetchSuggestions = async (query: string): Promise<Suggestion[]> => {
  if (!query) return [];

  try {
    const { data } = await axios.get(`https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete`);
    console.log('API Response:', data); // Check API Response 🔥

    // Filter the results based on the query
    const filtered = data.filter((item: { suggestion: string }) =>
      item.suggestion.toLowerCase().includes(query.toLowerCase())
    );

    // Return suggestions grouped by category
    return filtered.map((item: { suggestion: string }) => ({
      label: item.suggestion,
      value: item.suggestion,
      category: item.suggestion.includes('Project') ? 'Projects' : 'People', // Example categorization
    }));
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};
