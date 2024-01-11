import classes from "../styles/midbox.module.css";
import SearchBar from "./SearchBar";

export default function MidBox({ setCity }) {
  // const [searchCity, setSerachCity] = useState("");

  // useEffect(() => {
  //   document.addEventListener(
  //     "keydown",
  //     (e) => {
  //       if (e.key === "Enter") {
  //         if (searchCity !== "") {
  //           setCity({ q: searchCity });
  //         }
  //       }
  //     },
  //     true
  //   );
  // }, []);

  // const handleSearchCity = (e) => {
  //   if (e.keyCode === 13) {
  //     setCity({ q: searchCity });
  //   }
  // };

  return (
    <div className={classes.midBox}>
      <SearchBar setCity={setCity} />
    </div>
  );
}
