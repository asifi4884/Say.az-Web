import React from "react";
import { Button } from "./LoadingButtonStyles";

const LoadingButton = React.memo(({ text, click }) => {
  return (
    <Button onClick={click}>
      <span>{text}</span>
    </Button>
  );
});

export default LoadingButton;
