import { Data } from "../../../@types/apiResponse";
import Title from "./components/Title";
import { ProfileContainer, ProfilePicture } from "./styles";

type Props = {
  data: Data;
};

function Profile({ data }: Props) {
  return (
    <ProfileContainer>
      <ProfilePicture src={data.avatar_url}></ProfilePicture>
      <Title data={data} />
    </ProfileContainer>
  );
}

export default Profile;
