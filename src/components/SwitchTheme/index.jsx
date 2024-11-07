/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { ThemeContext } from "../../App";

const SwitchTheme = () => {
  const currentTheme = useContext(ThemeContext);
  console.log("currentTheme", currentTheme);
  const handleClick = () => {
    if (currentTheme?.theme === "Dark") {
      currentTheme.setTheme("Light");
    } else {
      currentTheme.setTheme("Dark");
    }
  };
  return <button className="button_theme" onClick={handleClick}>{currentTheme?.theme}</button>;
};

export default SwitchTheme;
