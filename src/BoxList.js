import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

const BoxList = () => {
  const initialState = [
    {
      width: "",
      heigth: "",
      color: "",
    },
  ];
  const [boxes, setBoxes] = useState(initialState);
  const addBox = (width, height, color) => {
    setBoxes(boxes => [...boxes, {width, height, color}])
  }
  return (
    <div>
      <NewBoxForm addBox = {addBox}/>
      <div>
        {boxes.map((box) => (
          <Box width={width} height={height} color={color} />
        ))}
      </div>
    </div>
  );
};
