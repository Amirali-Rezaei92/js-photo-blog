const API_URL = 'https://lanciweb.github.io/demo/api/pictures/'

const gallery = document.querySelector('.gallery');


fetch(API_URL)
    .then(response => {
        return response.json();
    })
    .then(pictures => {
        for (const pic of pictures) {
            const card = document.createElement('div');
            card.className='card';
            card.innerHTML = `
                <div class="photo">
                    <img src= "${pic.url}" alt ="${pic.title}">
                </div>
                <p class="caption"> ${pic.title} </p>
                <p class="date"> ${pic.date}  </p>
                `;
            gallery.appendChild(card);
        }

        console.log(pictures);

    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {

    });
