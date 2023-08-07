import React from "react";
import { Data } from "../../../../../@types/apiResponse";
import { Name, Role, TitleContainer } from "./styles";

type Props = {
  data: Data;
};

function Title({ data }: Props) {
  return (
    <TitleContainer>
      <Name>{data.name}</Name>
      <Role>{data.bio}</Role>
    </TitleContainer>
  );
}

export default Title;
