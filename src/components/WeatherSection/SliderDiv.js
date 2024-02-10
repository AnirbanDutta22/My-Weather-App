// import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import utils from "../../styles/utilities.module.css";
import classes from "../../styles/weather/weather.module.css";
import { ContextCity1 } from "../WeatherPage";

export default function SliderDiv() {
  const city1Weather = useContext(ContextCity1);
  const reports = [
    {
      title: city1Weather.lat,
    },
    {
      title: city1Weather.lon,
    },
    {
      title: city1Weather.name,
    },
    {
      title: city1Weather.dt,
    },
  ];
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {reports.map((items) => (
          <Carousel.Item>
            <div className={`${utils.flexbox} ${classes.smallBox}`}>
              <Carousel.Caption>
                <span>{items.title}</span>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
