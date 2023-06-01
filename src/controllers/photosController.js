import fetchPhotos from '../models/photosModel.js'

//get photos with pagination and categpry
const getPhotos = async (req, res) => {
    const { category } = req.params;
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 9;
    let query = category ? `q=${category}` : ''

    if(page){
        query += `&page=${page}&per_page=${pageSize}`
    }

    try {
        const response = await fetchPhotos(query)

        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching photos:', error);
        res.status(500).json({ error: 'An error occurred while fetching photos.' });
    }
};

//get photos sorted by id
const getPhotosSorted = async (req, res) => {
  
    try {
        const response = await fetchPhotos('')
        const sorted = sort(response.data)
        
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.json(sorted);
    } catch (error) {
      console.error('Error fetching photos:', error);
      res.status(500).json({ error: 'An error occurred while fetching photos.' });
    }
  };

//sort photos by id
const sort = (response) => {
    const { total, totalHits, hits } = response;
    const sortedData = [...hits].sort((a, b) => a.id - b.id);
    
    return {
        total,
        totalHits,
        hits: sortedData,
    };
  }

export default { getPhotos, getPhotosSorted}
