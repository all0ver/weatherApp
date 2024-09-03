export const getDataC = async (place) => {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=metric&key=QVBFF9FL5NCAYA4B5AZND94Q3&contentType=json`);
    const data = await response.json();
    return data;
  } catch(error) {
    console.error('There was a problem: ', error);
  }
}

export const getDataF = async (place) => {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=us&key=QVBFF9FL5NCAYA4B5AZND94Q3&contentType=json`);
    const data = await response.json();
    return data;
  } catch(error) {
    console.error('There was a problem: ', error);
  }
}
