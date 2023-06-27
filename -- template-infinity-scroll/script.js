//unsplash API
const count = 10;
const apiKey = 'OFGXw9zbpachzI9d4RLMgjFpMTpEtE6myB7EMiLW8wE';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//get photos from unsplash api


//probaj ovo sutra napravit s drugim nacinima fetch metode, imas onaj arrow koji ti vise lezi, i maknut ovaj try i catch, a koristit error

async function getPhotos() {
    try { 
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
    }
}

getPhotos();
