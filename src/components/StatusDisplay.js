const StatusDisplay = ({status}) => {
  const getColor = (status) => {
    let color;
    switch (status) {
      case "done":
        color = "rgb(186, 255, 201)";
        break;
      case "in-progress":
        color = "rgb(255, 223, 186)";
        break;
      case "stuck":
        color = "rgb(255, 179, 186)";
        break;
      case "to-do":
        color = "rgb(186, 225, 255)";
        break;
      default:
        color = "rgb(225, 225, 255)";
        break;
    }

    return color;
  };

  return (
    <div className="status-display" style={{ backgroundColor: getColor(status) }}>
      {status}
    </div>
  );
};

export default StatusDisplay;
