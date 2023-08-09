import { FollowsContainer, FollowsSection } from "./styles";
import FollowSummary from "./FollowSummary";

type Props = {};

function Follows({}: Props) {
  return (
    <FollowsContainer>
      <FollowsSection>
        <h2>
          Seguindo <span>(216)</span>
        </h2>
        <FollowSummary />
        <h3>Ver todos</h3>
      </FollowsSection>
      <FollowsSection>
        <h2>
          Seguidores <span>(216)</span>
        </h2>
        <FollowSummary />
        <h3>Ver todos</h3>
      </FollowsSection>
    </FollowsContainer>
  );
}

export default Follows;
