const apiKey = '7cf93c0a0a4d84e7d2afaecbc6329b97';
const apiPersonajes = 'https://api.themoviedb.org/3/movie/';

const getPersonajes = async (id) => {
    const apiURL = `${apiPersonajes}${id}/credits?api_key=${apiKey}`;

    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error: ', error);
        
    };
};

export default getPersonajes;