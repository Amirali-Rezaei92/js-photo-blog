const API_URL = 'https://lanciweb.github.io/demo/api/pictures/';

const gallery = document.querySelector('.gallery');
const template = document.querySelector('#card-template');

const cardFullView = document.querySelector('#card-full-view');
const cardFullViewImage = document.querySelector('#card-full-view-img');
const cardFullViewCaption = document.querySelector('#card-full-view-caption');
const cardFullViewDate = document.querySelector('#card-full-view-date');
const closBtn = document.querySelector('#close-btn');

fetch(API_URL)
    .then(response => response.json())
    .then(pictures => {
        for (const pic of pictures) {
            const clone = template.content.cloneNode(true);
            const img = clone.querySelector('.photo img');
            const caption = clone.querySelector('.caption');
            const date = clone.querySelector('.date');
            img.src = pic.url;
            img.alt = pic.title;
            caption.textContent = pic.title;
            date.textContent = pic.date;
            gallery.appendChild(clone);
        }
    })
    .catch(error => console.error(error));



gallery.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    if (!card) return;

    const img = card.querySelector('.photo img');
    const caption = card.querySelector('.caption');
    const date = card.querySelector('.date');

    cardFullViewImage.src = img.src;
    cardFullViewCaption.textContent = caption.textContent;
    cardFullViewDate.textContent = date.textContent;

    cardFullView.classList.remove("hidden");
});

closBtn.addEventListener('click', () => {
    cardFullView.classList.add('hidden');
});
