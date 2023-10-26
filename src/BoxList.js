import React, { useState } from "react";
import {v4 as uuid } from 'uuid'
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
  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, {...newBox, id: uuid() }]);
  };
  return (
    <div>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map((box) => (
          <Box
          //   width={width} height={height} color={color}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
