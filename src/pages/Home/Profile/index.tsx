import { Data } from "../../../@types/apiResponse";
import { ProfileSection } from "./components/Section";
import Title from "./components/Title";
import TwitterIcon from "../../../assets/twitter.svg";
import LinkIcon from "../../../assets/link.svg";
import EmailIcon from "../../../assets/mail.svg";
import LocationIcon from "../../../assets/location.svg";
import CompanyIcon from "../../../assets/building.svg";
import CommpanyLogoIcon from "../../../assets/companyLogo.svg";
import { ProfileContainer, ProfilePicture } from "./styles";

type Props = {
  data: Data;
};

function Profile({ data }: Props) {
  return (
    <ProfileContainer>
      <ProfilePicture src={data.avatar_url}></ProfilePicture>
      <Title data={data} />
      <ProfileSection.Root>
        {data.company && (
          <ProfileSection.Item itemText={data.company} itemIcon={CompanyIcon} />
        )}
        {data.location && (
          <ProfileSection.Item
            itemText={data.location}
            itemIcon={LocationIcon}
          />
        )}
        {data.email && (
          <ProfileSection.Item itemText={data.email} itemIcon={EmailIcon} />
        )}
        {data.blog && (
          <ProfileSection.Item itemIcon={LinkIcon} itemText={data.blog} />
        )}
        {data.twitter_username && (
          <ProfileSection.Item
            itemIcon={TwitterIcon}
            itemText={data.twitter_username}
          />
        )}
      </ProfileSection.Root>
      <ProfileSection.Root>
        <ProfileSection.Title headerText="Organizações" />
        <ProfileSection.Item
          itemIcon={CommpanyLogoIcon}
          itemText="Placeholder Org"
        />
        <ProfileSection.Item
          itemIcon={CommpanyLogoIcon}
          itemText="Placeholder Org"
        />
      </ProfileSection.Root>
    </ProfileContainer>
  );
}

export default Profile;
