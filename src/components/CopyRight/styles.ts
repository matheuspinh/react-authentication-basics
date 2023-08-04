import styled from "styled-components";
import { device } from "../../styles/breakpoints/breakpoints";

export const CopyRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.5rem;
  background-color: #bbcde8;
  max-width: 70rem;
  width: 100%;
  padding: 0.37rem 0;
  > p {
    color: black;
    font: Rubik;
    font-size: 0.75rem;
    line-height: 0.85rem;

    > a {
      text-decoration: underline;
      color: #2e7bb4;
      :hover {
        cursor: pointer;
      }
    }
  }

  @media ${device.sm} {
    padding: 0.875rem 1.125rem;
  }
`;
