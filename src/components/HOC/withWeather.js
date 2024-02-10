import React from "react";
import getFormattedData from "../../services/weatherServices";

const withWeather = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        city1: { q: "london" },
        city1Weather: null,
        isLoading: true,
      };
    }

    componentDidMount() {
      const fetchWeather = async () => {
        try {
          await getFormattedData({ ...this.state.city1 }).then((data) => {
            this.setState({
              city1Weather: data,
              isLoading: false,
            });
          });
        } catch (error) {
          window.alert("City not found");
        }
      };
      fetchWeather();
    }

    setCity1 = (setCity) => {
      this.setState({
        city1: { q: setCity },
      });
    };

    render() {
      const { city1, city1Weather, isLoading } = this.state;
      return (
        <OriginalComponent
          city1Weather={city1Weather}
          isLoading={isLoading}
          setCity={this.setCity1}
        />
      );
    }
  }
  return NewComponent;
};

export default withWeather;
