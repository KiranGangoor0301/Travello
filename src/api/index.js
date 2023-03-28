import axios from "axios";

export const getPlaceData=async (type,sw,ne)=>
{
  try{
    const {data:{data}}=await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'X-RapidAPI-Key': '95a7696999mshb8d579df3f3263dp1cd30fjsn6ef5888b2673',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    });
    return data;
  }
  catch(error)
  {
    console.log(error)
  }

}

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://open-weather-map27.p.rapidapi.com/weather', {
        params: { lat, lon: lng },
        headers: {
          'x-rapidapi-key': '95a7696999mshb8d579df3f3263dp1cd30fjsn6ef5888b2673',
          'x-rapidapi-host': 'open-weather-map27.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
}


