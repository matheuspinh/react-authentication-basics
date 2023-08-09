import React from "react";
import { FollowCardContainer, FollowerPicture, FollowerName } from "./styles";

type Props = {
  name: string;
  image: string;
};

function FollowsCard({ name, image }: Props) {
  return (
    <FollowCardContainer>
      <FollowerPicture src={image}></FollowerPicture>
      <FollowerName>{name}</FollowerName>
    </FollowCardContainer>
  );
}

export default FollowsCard;
