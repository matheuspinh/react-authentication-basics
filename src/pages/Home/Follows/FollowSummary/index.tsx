import React from "react";
import FollowsCard from "./FollowsCard";
import Placeholder from "../../../../assets/followerplaceholder.svg";
import { FollowSummaryContainer } from "./styles";

type Props = {};

function FollowSummary({}: Props) {
  return (
    <FollowSummaryContainer>
      <FollowsCard image={Placeholder} name="Robyn Rihanna" />
      <FollowsCard image={Placeholder} name="Robyn Rihanna" />
      <FollowsCard image={Placeholder} name="Robyn Rihanna" />
      <FollowsCard image={Placeholder} name="Robyn Rihanna" />
      <FollowsCard image={Placeholder} name="Robyn Rihanna" />
      <FollowsCard image={Placeholder} name="Robyn Rihanna" />
    </FollowSummaryContainer>
  );
}

export default FollowSummary;
