import axios  from "axios";

const options = {
    headers: {
      'X-RapidAPI-Key': 'a356d9b808msh1ff60915a9d1704p17119ajsn08a193267d38',
      'X-RapidAPI-Host': 'yt-api.p.rapidapi.com',
    },
    params: {
      lang:'tr',
      geo:'TR',
    },
  };

  axios.defaults.baseURL ='https://yt-api.p.rapidapi.com';




export const getData = async (endpoint) => {
    try{ 
    const res = await axios.get(endpoint, options);
    return res.data;
} catch (err) { 
    console.log('verileri çekerken bir sorun oluştu', err);
}
};