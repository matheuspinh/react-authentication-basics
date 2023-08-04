import styled from "styled-components";

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  height: 23.6rem;
  background-color: white;
  max-width: 48rem;
  width: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.8rem;
  gap: 2.65rem;
  padding-bottom: 6rem;
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.31rem;
    text-align: center;
    > p {
      color: #333333;
      > span {
        font-weight: 700;
        color: #d81d99;
      }
    }
  }
`;
