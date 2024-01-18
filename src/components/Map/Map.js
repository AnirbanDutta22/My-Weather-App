import moment from "moment";
import { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { iconForWeather } from "../../services/weatherServices";
import SearchBar from "../SearchBar";
import Template from "../Template";
import { ContextCity3, ContextCityList } from "../WeatherPage";
import WeatherDisplay from "../WeatherSection/WeatherDisplay";
import MapContainer from "./MapContainer";
export default function Map() {
  const [setCity1, setCity2, setCity3] = useOutletContext();
  const city3Weather = useContext(ContextCity3);
  const { city3List } = useContext(ContextCityList);

  const cood = {
    lat: city3Weather.lat,
    lng: city3Weather.lon,
  };
  return (
    <Template
      left={
        <>
          <SearchBar setCity={setCity3} />
          <MapContainer cood={cood} />
        </>
      }
      right={
        <>
          {city3List.slice(0, 5).map((items) => (
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
            />
          ))}
        </>
      }
    />
  );
}
