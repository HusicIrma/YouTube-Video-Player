import axios from 'axios';

const KEY = 'AIzaSyD1dZL1nxb_HCOezuD1Wl2YPDmLTqYMW4o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        type : 'video',
        key: KEY
    }


})