import styled from "styled-components";

export const TimeLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

export const SectionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 38.625rem;
  padding: 1.5rem;
  gap: 1.875rem;
  background-color: white;
  border-radius: 0.5rem;

  > h2 {
    color: #333333;
    font-size: 1.125rem;
    font-weight: 400;
  }
`;

export const HeadText = styled.h1`
  font-size: 1.75rem;
  font-weight: 400;
`;

export const DailyLuck = styled.h3`
  font-size: 0.75rem;
  font-weight: 400;
  color: #999999;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 1.875rem;
`;

export const ActionCardContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

export const ActionCard = styled.div`
  border-radius: 0.5rem;
  text-align: center;
  background-color: #d9e6f6;
  line-height: 0.875rem;
  font-size: 0.75rem;
  color: #2e7bb4;
  padding: 0.5625rem 0.75rem;
  cursor: pointer;
  :hover {
    background-color: #2e7bb4;
    color: white;
  }
`;
