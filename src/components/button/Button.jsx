import "./button.css"

const Buttton = (props) => {
  const {
    handleClick,
    title,
    background,
    color,
    padding = "18px 2px",
    width = "100px",
    height = "30px",
  } = props;
  return (
    <>
      <button
      className="buttonContainer"
        style={{
          background: background,
          color: color,
          padding: padding,
          width: width,
          height: height,
        }}
        onClick={handleClick}
      >
        {title}
      </button>
    </>
  );
};
export default Buttton;
