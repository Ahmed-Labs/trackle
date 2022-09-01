import React from "react";

const ProgressBar = (props) => {
  const { status } = props;
  const progress = status.toLowerCase() === 'delivered' ? 100 : 50;
  console.log(status);

  const style = {
    width: `${progress}%`,
  };

  return (
    <div>
      <div className="w-20 bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${
            status.toLowerCase() === "delivered" ? "bg-green-500" : "bg-blue-500"
          }`}
          style={style}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
