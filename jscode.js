// script.js

const data = [
    { "country": "United States", "capital": "Washington, D.C.", "population": 331002651, "official_language": "English", "currency": "United States Dollar" },
    { "country": "Canada", "capital": "Ottawa", "population": 37742154, "official_language": ["English", "French"], "currency": "Canadian Dollar" },
    // ... (include the rest of your data here)
    { "country": "Poland", "capital": "Warsaw", "population": 38386000, "official_language": "Polish", "currency": "Polish Zloty" }
  ];
  
  const searchBar = document.getElementById('search-bar');
  const suggestionsContainer = document.getElementById('suggestions');
  
  searchBar.addEventListener('input', () => {
      const query = searchBar.value.toLowerCase();
      suggestionsContainer.innerHTML = '';
  
      if (query) {
          const filteredData = data.filter(item => 
              item.country.toLowerCase().includes(query) || 
              item.capital.toLowerCase().includes(query)
          );
  
          filteredData.forEach(item => {
              const suggestionItem = document.createElement('div');
              suggestionItem.className = 'suggestion-item';
              suggestionItem.textContent = `${item.country} - ${item.capital}`;
              suggestionItem.addEventListener('click', () => {
                  searchBar.value = `${item.country} - ${item.capital}`;
                  suggestionsContainer.innerHTML = '';
              });
              suggestionsContainer.appendChild(suggestionItem);
          });
      }
  });
  