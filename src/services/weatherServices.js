const API_KEY = "e8fb14e1e22c3d4d2186c7429a3bfafb"; //160c440c37e93ad356aaafce6b20daac
const BASE_URL = "https://api.openweathermap.org/data/2.5";

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=e8fb14e1e22c3d4d2186c7429a3bfafb

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    units: "metric",
    appid: API_KEY,
  });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    visibility,
    wind: { speed },
    sys: { country },
    clouds: { all: cloud },
    weather,
    name,
  } = data;

  const { description, icon } = weather[0];

  return {
    lon,
    lat,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    visibility,
    speed,
    country,
    cloud,
    name,
    description,
    icon,
  };
};

const formatForecastWeather = (data) => {
  let { list } = data;
  let listForWeek = [...list];
  list = list.slice(0, 6).map((h) => {
    return {
      temp: h.main.temp,
      time: h.dt_txt,
      icon: h.weather[0].icon,
    };
  });

  listForWeek = listForWeek.filter((d, index) => {
    return index % 8 === 0;
  });

  listForWeek = listForWeek.map((d) => {
    return {
      temp: d.main.temp,
      time: d.dt_txt,
      icon: d.weather[0].icon,
      des: d.weather[0].main,
    };
  });

  return { list, listForWeek };
};

const getFormattedData = async (searchParams) => {
  const getFormattedCurrentData = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const getFormattedForecastData = await getWeatherData(
    "forecast",
    searchParams
  ).then(formatForecastWeather);

  return { ...getFormattedCurrentData, ...getFormattedForecastData };
};

const iconForWeather = (code) =>
  `https://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedData;
export { iconForWeather };
