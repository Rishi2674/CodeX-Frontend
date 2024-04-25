const Progress_Bar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: 10,
    width: "100%",
    backgroundColor: "#A2A2A2",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#F59837",
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const labelStyles = {
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{` `}</span>
      </div>
    </div>
  );
};

export default Progress_Bar;
