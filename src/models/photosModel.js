import axios from 'axios';


async function fetchPhotos (query){
    const BASE_URL = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&`
    try {
        const response = await axios.get(
            `${BASE_URL}${query}`
        );
        return response
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
}

export default fetchPhotos;