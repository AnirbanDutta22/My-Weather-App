import { Heading1, Heading2, SubBox2 } from "../styled/DisplayContainer.styled";

export default function WeatherDisplay(props) {
  return (
    <>
      <SubBox2 brad={props.brad} bg={props.bg} ml={props.ml} padd={props.padd}>
        <Heading1
          flexd={props.flexd}
          align={props.align}
          flexb={props.flexb}
          tempmargin={props.tempmargin}
          fsize={props.fsize}
          descr={props.descr}
        >
          <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
          </div>
          <div className="temp">{props.temp}&deg;</div>
        </Heading1>
        <Heading2>
          <img src={props.img} alt="" />
        </Heading2>
      </SubBox2>
    </>
  );
}
