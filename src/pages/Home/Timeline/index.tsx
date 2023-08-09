import React from "react";
import { Data } from "../../../@types/apiResponse";
import {
  ActionCard,
  ActionCardContainer,
  CardContainer,
  DailyLuck,
  HeadText,
  SectionContainer,
  TimeLineContainer,
} from "./styles";
import RepoIcon from "../../../assets/repoIcon.svg";
import Binoculars from "../../../assets/binoculars.svg";
import Star from "../../../assets/star.svg";
import FollowerIcon from "../../../assets/followers.svg";
import HeadingCard from "./HeadingCard";
import LastRepos from "./LastRepos";

type Props = { data: Data };

function TimeLine({ data }: Props) {
  return (
    <TimeLineContainer>
      <SectionContainer>
        <HeadText>Bem Vindo(a), {data.name}</HeadText>
        <DailyLuck>
          <strong>Sorte de hoje: </strong>Sabe viver quem dedica um dia ao sonho
          e outro à realidade.
        </DailyLuck>
        <CardContainer style={{ display: "flex" }}>
          <HeadingCard text="Repositórios" icon={RepoIcon} quantity="64" />
          <HeadingCard text="Favoritos" icon={Star} quantity="1.4k" />
          <HeadingCard text="Seguidores" icon={FollowerIcon} quantity="1.1k" />
          <HeadingCard text="Seguindo" icon={Binoculars} quantity="216" />
        </CardContainer>
      </SectionContainer>
      <SectionContainer>
        <h2>O que você deseja fazer?</h2>
        <ActionCardContainer>
          <ActionCard>Criar repositório</ActionCard>
          <ActionCard>Importar repositório</ActionCard>
          <ActionCard>Novo Gist</ActionCard>
          <ActionCard>Nova Organização</ActionCard>
          <ActionCard>Novo Projeto</ActionCard>
        </ActionCardContainer>
      </SectionContainer>
      <SectionContainer>
        <h2>Meus últimos repositórios: </h2>
        <LastRepos />
      </SectionContainer>
    </TimeLineContainer>
  );
}

export default TimeLine;
