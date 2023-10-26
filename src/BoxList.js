import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

const BoxList = () => {
  const initialState = [
    {
      height: "",
      width: "",
      color: "",
    },
  ];
  const [boxes, setBoxes] = useState(initialState);
  return (
    <div>
      <NewBoxForm />
      <div>
        {boxes.map((box) => (
          <Box height={height} width={width} color={color} />
        ))}
      </div>
    </div>
  );
};
