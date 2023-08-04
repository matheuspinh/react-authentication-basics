import React from "react";
import { ErrorSpan } from "./styles";
import { FieldError } from "react-hook-form";

type Props = {
  errorMessage: string;
};

function FormErrorMessage({ errorMessage }: Props) {
  return (
    <>
      <ErrorSpan>{errorMessage}</ErrorSpan>
    </>
  );
}

export default FormErrorMessage;
