const API_URL = 'https://lanciweb.github.io/demo/api/pictures/'

const gallery = document.querySelector('.gallery');
const cardFullView = document.querySelector('#card-full-view');
const cardFullViewImage = document.querySelector('#card-full-view-img');
const cardFullViewCaption = document.querySelector('#card-full-view-caption');
const cardFullViewDate = document.querySelector('#card-full-view-date');
const closBtn = document.querySelector('#close-btn');



fetch(API_URL)
    .then(response => {
        return response.json();
    })
    .then(pictures => {
        for (const pic of pictures) {
            const card = document.createElement('div');
            card.className='card';
            card.innerHTML = `
                <img class="pin" src="styles/img/pin.svg" alt="pin">
                <div class="photo">
                    <img src= "${pic.url}" alt ="${pic.title}">
                </div>
                <p class="caption"> ${pic.title} </p>
                <p class="date"> ${pic.date}  </p>
                `;
            card.addEventListener('click' ,()=>{

                cardFullViewImage.src = pic.url;
                cardFullViewCaption.textContent = pic.title;
                cardFullViewDate.textContent = pic.date;
                cardFullView.classList.remove("hidden");
            })    
            gallery.appendChild(card);
        }

        console.log(pictures);

    })
    .catch(error => {
        console.error(error);
    })
    

closBtn.addEventListener('click', () => {
    cardFullView.classList.add('hidden');
});