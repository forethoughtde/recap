const fetchPhotos = ()=>{
    return fetch('http://jsonplaceholder.typicode.com/photos?_limit=30')
        .then(response=>response.json())
};

const fetchPhoto = (id)=>{
    const url = `http://jsonplaceholder.typicode.com/photos/${id}`;
    return fetch(url)
        .then(response=>response.json())
        .catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
        });
}

export default {
    fetchPhotos: fetchPhotos,
    fetchPhoto: fetchPhoto };
