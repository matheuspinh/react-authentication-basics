import React from "react";
import { Button } from "./styles";

type Props = {
  text: string;
};

function FormButton({ text }: Props) {
  return (
    <>
      <Button>{text}</Button>
    </>
  );
}

export default FormButton;
