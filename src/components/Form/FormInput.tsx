import React from "react";
import { FieldValues, UseFormRegister, Path } from "react-hook-form";
import { Input } from "./styles";

type Props = {
  placeholder: string;
  type: string;
  register: FieldValues;
};

function FormInput({ placeholder, type, register }: Props) {
  return (
    <>
      <Input placeholder={placeholder} {...register} type={type} />
    </>
  );
}

export default FormInput;
