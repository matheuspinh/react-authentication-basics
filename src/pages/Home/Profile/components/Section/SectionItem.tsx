import React from "react";
import { ItemContainer, ItemIcon, ItemText } from "./styles";

type Props = {
  itemText: string;
  itemIcon: string;
};

function SectionItem({ itemText, itemIcon }: Props) {
  return (
    <ItemContainer>
      <ItemIcon src={itemIcon}></ItemIcon>
      <ItemText>{itemText}</ItemText>
    </ItemContainer>
  );
}

export default SectionItem;
