import Error404 from "../pages/Error404";

const apiKey = '7cf93c0a0a4d84e7d2afaecbc6329b97';
const apiMovie = 'https://api.themoviedb.org/3/movie/';

const getMovie = async (id) => {
    const apiURL = id ? `${apiMovie}${id}?api_key=${apiKey}&language=es` : Error404;

    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error: ', error);
        
    };
};

export default getMovie;