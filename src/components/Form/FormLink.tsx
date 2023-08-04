import React from "react";
import { Link } from "react-router-dom";
import { StyledLink } from "./styles";

type Props = {
  text: string;
  link: string;
};

function FormLink({ text, link }: Props) {
  return (
    <>
      <StyledLink to={link}>{text}</StyledLink>
    </>
  );
}

export default FormLink;
