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

  const todayDiv = `
          <div class="flex flex-col items-center gap-10">
            <img src="./img/${todayIcon}.svg" alt="weather icon" class="w-32">
            <p class="text-5xl font-bold">${todayTemp}<span class="metricTemp">°C</span></p>
          </div>
          <div class="flex flex-col gap-4">
            <p class="font-bold text-3xl">${todayDate}</p>
            <p>Feels like: <span class="font-bold text-xl">${todayFeelLike}<span class="metricTemp">°C</span></span></p>
            <p>Max temperature: <span class="font-bold text-xl">${todayMax}<span class="metricTemp">°C</span></span></p>
            <p>Min temperature: <span class="font-bold text-xl">${todayMin}<span class="metricTemp">°C</span></span></p>
            <p>Wind speed: <span class="font-bold text-xl">${todayWind}<span class="metricWind"> m/s</span></span></p>
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

  const todayDiv = `
          <div class="flex flex-col items-center gap-10">
            <img src="./img/${todayIcon}.svg" alt="weather icon" class="w-32">
            <p class="text-5xl font-bold">${todayTemp}<span class="metricTemp">°C</span></p>
          </div>
          <div class="flex flex-col gap-4">
            <p class="font-bold text-3xl">${todayDate}</p>
            <p>Feels like: <span class="font-bold text-xl">${todayFeelLike}<span class="metricTemp">°C</span></span></p>
            <p>Max temperature: <span class="font-bold text-xl">${todayMax}<span class="metricTemp">°C</span></span></p>
            <p>Min temperature: <span class="font-bold text-xl">${todayMin}<span class="metricTemp">°C</span></span></p>
            <p>Wind speed: <span class="font-bold text-xl">${todayWind}<span class="metricWind"> m/s</span></span></p>
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

    const newDay = `
        <div class="rounded-2xl p-10 bg-[#2a2a2a] flex flex-col gap-4 justify-center items-center flex-1">
          <img src="./img/${todayIcon}.svg" alt="weather image" class="w-24 h-24">
          <p class="text-3xl font-bold">${temp}<span class="metricTemp">°C</span></p>
          <p class="text-xl font-bold text-nowrap">${date}</p>
        </div>
    `
    parent.innerHTML += newDay;
  }
}
