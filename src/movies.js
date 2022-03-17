import axios from "axios";
const movieApi = "https://api.buildable.dev/trigger/v2/test-0d6d4ffa-777e-44c9-bb69-b9b8dd5da59f";


export const getMovies = async (searchText) =>{
    const {data} = await axios.get(`${movieApi}?search=${searchText}`)
    
    return data;
}

//${searchValue.queryKey[0]}