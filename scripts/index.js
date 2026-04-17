const API_URL = 'https://lanciweb.github.io/demo/api/pictures/'

const gallery = document.querySelector('.gallery');


fetch(API_URL)
    .then(response => {
        return response.json();
    })
    .then(pictures=>{
        for(const pic of pictures){
            const card = document.createElement('div');
            card.innerHTML = `
            `
        }

        console.log(pictures);

    })
    .catch(error=>{
        console.error(error);
    })
    .finally(()=>{

    });
