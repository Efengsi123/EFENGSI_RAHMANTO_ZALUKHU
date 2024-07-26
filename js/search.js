

let data = [];

// Memuat data dari API
fetch('https://drakorin.vercel.app/api/movie/get-all')
  .then((response) => response.json()) 
  .then((res) => { 
    data = res.data;
    displayDrama(data);
  });

const displayDrama = (dramas) => {
    let content = document.querySelector('.content');
    // content.textContent = '';

    dramas.forEach((d) => {
        // let box = document.createElement('div');
        // box.classList.add("box");
        let img = document.createElement('img');
        img.setAttribute("src", d.poster);
        img.classList.add('poster');
        
        const title = document.createElement('p');
        title.classList.add('title');
        title.textContent = d.title;

        // box.appendChild(img);
        // box.appendChild(title);
        // content.appendChild(box);
    });

   // dramas.forEach(drama => {
   //    const suggestionItem = document.createElement('div');
   //    suggestionItem.classList.add('suggestion-item');
   //    suggestionItem.textContent = drama.title;
   //    suggestionItem.dataset.id = drama.id;
  
   //    // Tambahkan poster ke suggestion item
   //    const img = document.createElement('img');
   //    img.src = drama.poster;
   //    img.classList.add('suggestion-poster');
   //    suggestionItem.appendChild(img);
  
   //    suggestions.appendChild(suggestionItem);
   //  });

};

// Event listener untuk pencarian otomatis
document.getElementById('search-input').addEventListener('input', function() {
    const input = this.value.toLowerCase();
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.textContent = '';

    if (input.length === 0) {
        return;
    }

    const suggestions = data.filter(d => d.title.toLowerCase().includes(input));
    suggestions.forEach(suggestion => {
        const div = document.createElement('div');
        div.className = 'suggestion-item';

        const img = document.createElement('img');
        img.src = suggestion.poster;

        const title = document.createElement('span');
        title.textContent = suggestion.title;
        title.classList.add('judul-search');

        div.appendChild(img);
        div.appendChild(title);

        div.addEventListener('click', () => {
            document.getElementById('search-input').value = suggestion.title;
            suggestionsContainer.textContent = '';
            const filteredData = data.filter(d => d.title.toLowerCase().includes(suggestion.title.toLowerCase()));
            displayDrama(filteredData);
        });

        suggestionsContainer.appendChild(div);
    });
});

// Event listener untuk enter key
document.getElementById('search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const input = this.value.toLowerCase();
        const selectedDrama = data.find(d => d.title.toLowerCase() === input);

        if (selectedDrama) {
            localStorage.setItem('selectedDrama', JSON.stringify(selectedDrama));
            window.location.href = 'deskripsi.html';
        }
    }
});


document.querySelector('.keyword').addEventListener('input', (e) => {
   const search = e.target.value.toLowerCase();
   const filterDrama = data.filter((d) => d.title.toLowerCase().includes(search));

   displayDrama(filterDrama);
});

document.querySelector('.search-container').addEventListener('click', (e) => {
   if (e.target.classList.contains('suggestion-item')) {
     const dramaId = e.target.dataset.id;
     window.location.href = `description.html?id=${dramaId}`;
   }
 });