import moment from "moment";
import { useWeather3 } from "../../contexts/WeatherContext";
import { iconForWeather } from "../../services/weatherServices";
import SearchBar from "../SearchBar";
import Template from "../Template";
import WeatherDisplay from "../WeatherSection/WeatherDisplay";
import MapContainer from "./MapContainer";
export default function Map() {
  const { cityWeather, setCity, cityList } = useWeather3();

  const cood = {
    lat: cityWeather.lat,
    lng: cityWeather.lon,
  };
  return (
    <Template
      left={
        <>
          <SearchBar setCity={setCity} />
          <MapContainer cood={cood} />
        </>
      }
      right={
        <>
          {cityList.slice(0, 5).map((items, ind) => (
            <WeatherDisplay
              flexd="row"
              align="center"
              brad="10px"
              bg="var(--main_bg)"
              ml="0px"
              tempmargin="0px"
              padd="0.5vw"
              fsize="2vw"
              shadow="inset 5px 5px 5px rgba(0, 0, 0, 0.1)"
              name={`${items.name}`}
              description={`${moment(items.dt).format("HH:mm a")}`}
              img={`${iconForWeather(items.icon)}`}
              temp={`${items.temp.toFixed()}`}
              key={ind}
            />
          ))}
        </>
      }
    />
  );
}
