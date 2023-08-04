import React from "react";
import { ReactNode } from "react";
import { FormContainer } from "./styles";

interface FormRootProps {
  children: ReactNode;
}

function FormRoot({ children }: FormRootProps) {
  return <FormContainer>{children}</FormContainer>;
}

export default FormRoot;
