import React from "react";

const ProgressBar = (props) => {
  const { progress } = props;

  const style = {
    width: `${progress}%`,
  };

  return (
    <div>
      <div class="w-20 bg-gray-200 rounded-full h-2.5">
        <div class="bg-blue-600 h-2.5 rounded-full" style={style}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
