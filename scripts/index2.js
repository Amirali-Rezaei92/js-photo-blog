const API_URL = 'https://lanciweb.github.io/demo/api/pictures/';

// Riferimenti alla galleria e al template per generare le card
const gallery = document.querySelector('.gallery');
const template = document.querySelector('#card-template');

// Elementi della modal per la visualizzazione a schermo intero
const cardFullView = document.querySelector('#card-full-view');
const cardFullViewImage = document.querySelector('#card-full-view-img');
const cardFullViewCaption = document.querySelector('#card-full-view-caption');
const cardFullViewDate = document.querySelector('#card-full-view-date');
const closBtn = document.querySelector('#close-btn');

// Fetch dei dati e creazione dinamica delle card tramite template
fetch(API_URL)
    .then(response => response.json())
    .then(pictures => {
        for (const pic of pictures) {

            // Cloniamo il contenuto del template (deep clone)
            const clone = template.content.cloneNode(true);

            // Selezioniamo gli elementi interni della card clonata
            const img = clone.querySelector('.photo img');
            const caption = clone.querySelector('.caption');
            const date = clone.querySelector('.date');

            // Inseriamo i dati nella card
            img.src = pic.url;
            img.alt = pic.title;
            caption.textContent = pic.title;
            date.textContent = pic.date;

            // Aggiungiamo la card alla galleria
            gallery.appendChild(clone);
        }
    })
    .catch(error => console.error(error));


// Event delegation: un solo listener per tutte le card
gallery.addEventListener('click', (event) => {

    // Troviamo la card cliccata (anche se si clicca su elementi interni)
    const card = event.target.closest('.card');
    if (!card) return;

    // Recuperiamo i dati dalla card
    const img = card.querySelector('.photo img');
    const caption = card.querySelector('.caption');
    const date = card.querySelector('.date');

    // Inseriamo i dati nella modal
    cardFullViewImage.src = img.src;
    cardFullViewCaption.textContent = caption.textContent;
    cardFullViewDate.textContent = date.textContent;

    // Mostriamo la modal
    cardFullView.classList.remove("hidden");
});

// Chiusura della modal
closBtn.addEventListener('click', () => {
    cardFullView.classList.add('hidden');
});
