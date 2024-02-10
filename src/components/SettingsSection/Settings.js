import Template from "../Template";
import MainSettings from "./MainSettings";

export default function Settings() {
  return (
    <Template
      left={
        <>
          <MainSettings />
        </>
      }
      right=""
    />
  );
}
