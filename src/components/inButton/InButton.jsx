import { Typography } from "@mui/material";
import "./button.css";

const InButtton = (props) => {
  const {
    inStyle,
    handleClick,
    title,
    titleStyle,
    background,
    color,
    padding = "18px 2px",
    width = "100px",
    height = "30px",
    borderRadius,
  } = props;

  const buttonStyle = {
    ...inStyle,
    backgroundColor: background,
    color: color,
    padding: padding,
    width: width,
    height: height,
    cursor: "pointer",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    borderRadius: borderRadius,
    border: "none",
  };
  return (
    <>
      <button
        className="buttonContainer"
        style={buttonStyle}
        onClick={handleClick}
      >
        <Typography variant={titleStyle}>{title}</Typography>
      </button>
    </>
  );
};
export default InButtton;
