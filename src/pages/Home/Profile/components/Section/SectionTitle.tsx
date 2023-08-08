import React from "react";
import { SectionHeader } from "./styles";

type Props = {
  headerText: string;
};

function SectionTitle({ headerText }: Props) {
  return (
    <>
      <SectionHeader>{headerText}</SectionHeader>
    </>
  );
}

export default SectionTitle;
