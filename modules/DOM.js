export const todayFunc = (data) => {
  const today = document.querySelector("#today");

  //today
  const todayTemp = data[0].temp;
  const todayDate = data[0].datetime;
  const todayFeelLike = data[0].feelslike;
  const todayMax = data[0].tempmax;
  const todayMin = data[0].tempmin;
  const todayWind = data[0].windspeed;
  const todayHumidity = data[0].humidity;
  const todayIcon = data[0].icon;
  let todayIconImg;

  switch (todayIcon) {
    case 'rain':
      todayIconImg = './img/rain.png';
      break;
    case 'snow':
      todayIconImg = './img/snowfall.png';
      break;
    case 'fog':
      todayIconImg = './img/clouds.png';
      break;
    case 'wind':
      todayIconImg = './img/cloudy.png';
      break;
    case 'cloudy':
      todayIconImg = './img/cloudy.png';
      break;
    case 'partly-cloudy-day':
      todayIconImg = './img/cloudy.png';
      break;
    case 'partly-cloudy-night':
      todayIconImg = './img/cloudy.png';
      break;
    case 'clear-day':
      todayIconImg = './img/sunny.png';
      break;
    case 'clear-night':
      todayIconImg = './img/sunny.png';
      break;
    default:
      todayIconImg = '../img/cloudy.png'
      break;
  }

  const todayDiv = `
          <div class="flex flex-col items-center gap-10">
            <img src="${todayIconImg}" alt="weather icon" class="w-32">
            <p class="text-5xl font-bold">${todayTemp}°C</p>
          </div>
          <div class="flex flex-col gap-4">
            <p class="font-bold text-3xl">${todayDate}</p>
            <p>Feels like: <span class="font-bold text-xl">${todayFeelLike}°C</span></p>
            <p>Max temperature: <span class="font-bold text-xl">${todayMax}°C</span></p>
            <p>Min temperature: <span class="font-bold text-xl">${todayMin}°C</span></p>
            <p>Wind speed: <span class="font-bold text-xl">${todayWind} m/s</span></p>
            <p>Humidity: <span class="font-bold text-xl">${todayHumidity}%</span></p>
          </div>
  `;

  today.innerHTML = todayDiv;
}

export const tomorrowFunc = (data) => {
  const tomorrow = document.querySelector("#tomorrow");

  //today
  const todayTemp = data[1].temp;
  const todayDate = data[1].datetime;
  const todayFeelLike = data[1].feelslike;
  const todayMax = data[1].tempmax;
  const todayMin = data[1].tempmin;
  const todayWind = data[1].windspeed;
  const todayHumidity = data[1].humidity;
  const todayIcon = data[1].icon;
  let todayIconImg;

  switch (todayIcon) {
    case 'rain':
      todayIconImg = './img/rain.png';
      break;
    case 'snow':
      todayIconImg = './img/snowfall.png';
      break;
    case 'fog':
      todayIconImg = './img/clouds.png';
      break;
    case 'wind':
      todayIconImg = './img/cloudy.png';
      break;
    case 'cloudy':
      todayIconImg = './img/cloudy.png';
      break;
    case 'partly-cloudy-day':
      todayIconImg = './img/cloudy.png';
      break;
    case 'partly-cloudy-night':
      todayIconImg = './img/cloudy.png';
      break;
    case 'clear-day':
      todayIconImg = './img/sunny.png';
      break;
    case 'clear-night':
      todayIconImg = './img/sunny.png';
      break;
    default:
      todayIconImg = '../img/cloudy.png'
      break;
  }

  const todayDiv = `
          <div class="flex flex-col items-center gap-10">
            <img src="${todayIconImg}" alt="weather icon" class="w-32">
            <p class="text-5xl font-bold">${todayTemp}°C</p>
          </div>
          <div class="flex flex-col gap-4">
            <p class="font-bold text-3xl">${todayDate}</p>
            <p>Feels like: <span class="font-bold text-xl">${todayFeelLike}°C</span></p>
            <p>Max temperature: <span class="font-bold text-xl">${todayMax}°C</span></p>
            <p>Min temperature: <span class="font-bold text-xl">${todayMin}°C</span></p>
            <p>Wind speed: <span class="font-bold text-xl">${todayWind} m/s</span></p>
            <p>Humidity: <span class="font-bold text-xl">${todayHumidity}%</span></p>
          </div>
  `;

  tomorrow.innerHTML = todayDiv;

}

export const next5Days = (data) => {
  const parent = document.querySelector("#nextDays");
  parent.innerHTML = '';
  for (let i = 2; i <= 6; i++) {
    const temp = data[i].temp;
    const todayIcon = data[i].icon;
    const date = data[i].datetime;
    let todayIconImg;

    switch (todayIcon) {
      case 'rain':
        todayIconImg = './img/rain.png';
        break;
      case 'snow':
        todayIconImg = './img/snowfall.png';
        break;
      case 'fog':
        todayIconImg = './img/clouds.png';
        break;
      case 'wind':
        todayIconImg = './img/cloudy.png';
        break;
      case 'cloudy':
        todayIconImg = './img/cloudy.png';
        break;
      case 'partly-cloudy-day':
        todayIconImg = './img/cloudy.png';
        break;
      case 'partly-cloudy-night':
        todayIconImg = './img/cloudy.png';
        break;
      case 'clear-day':
        todayIconImg = './img/sunny.png';
        break;
      case 'clear-night':
        todayIconImg = './img/sunny.png';
        break;
      default:
        todayIconImg = '../img/cloudy.png'
        break;
    }

    const newDay = `
        <div class="rounded-2xl p-10 bg-[#2a2a2a] flex flex-col gap-4 justify-center items-center flex-1">
          <img src=${todayIconImg} alt="weather image" class="w-24">
          <p class="text-3xl">${temp}°C</p>
          <p class="text-xl font-bold text-nowrap">${date}</p>
        </div>
    `
    parent.innerHTML += newDay;
  }
}
