const apiKey = '7cf93c0a0a4d84e7d2afaecbc6329b97';
const apiPopulares = 'https://api.themoviedb.org/3/discover/movie';

const getPopulares = async () => {
    const apiURL = `${apiPopulares}?api_key=${apiKey}&sort_by=vote_count.desc`;

    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data
    }catch(error){
        console.log('Fetch Error: ', error);
        
    };
};

export default getPopulares;