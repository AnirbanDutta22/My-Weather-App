import MainSettings from "../components/Settings Section/MainSettings";
import Template from "../components/Template";

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
