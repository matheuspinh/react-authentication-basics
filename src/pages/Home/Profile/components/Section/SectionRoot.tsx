import React from "react";
import { ReactNode } from "react";
import { SectionContainer } from "./styles";

interface SectionProps {
  children: ReactNode;
}

function SectionRoot({ children }: SectionProps) {
  return <SectionContainer>{children}</SectionContainer>;
}

export default SectionRoot;
