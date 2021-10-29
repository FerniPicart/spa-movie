const apiKey = '7cf93c0a0a4d84e7d2afaecbc6329b97';
const apiTendencias = 'https://api.themoviedb.org/3/trending/movie/week';

const getTendencias = async () => {
    const apiURL = `${apiTendencias}?api_key=${apiKey}`;

    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error: ', error);
        
    };
};

export default getTendencias;