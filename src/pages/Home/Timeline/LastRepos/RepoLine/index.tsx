import RepoIcon from "../../../../../assets/repoIcon.svg";
import { LeftContainer, LineContainer, RightContainer } from "./styles";
import Star from "../../../../../assets/star.svg";

type Props = {
  repoName: string;
  description: string;
};

function RepoLine({ repoName, description }: Props) {
  return (
    <LineContainer>
      <LeftContainer>
        <div>
          <img src={RepoIcon}></img>
          <p>{repoName}</p>
        </div>
        <p>{description}</p>
      </LeftContainer>
      <RightContainer>
        <img src={Star}></img>
        <p>Star</p>
      </RightContainer>
    </LineContainer>
  );
}

export default RepoLine;
