import axios from 'axios';

const searchImages = async(searchTerm)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID L6Yp7BFxHzcaCyU6u82efQTBfeit6xej9rn9C59YAN4'
        },
        params:{
            query: searchTerm
        }
    });
    return response.data.results;
}
export default searchImages;