import { CardBox, CardLine, CardTitle } from "./styles";

type Props = {
  text: string;
  icon: string;
  quantity: string;
};

function HeadingCard({ text, icon, quantity }: Props) {
  return (
    <CardBox>
      <CardTitle>{text}</CardTitle>
      <CardLine>
        <img src={icon}></img>
        <p>{quantity}</p>
      </CardLine>
    </CardBox>
  );
}

export default HeadingCard;
