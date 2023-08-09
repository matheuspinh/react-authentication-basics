import styled from "styled-components";

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #d9e6f6;
  padding: 0.875rem 1rem 0.875rem 0.75rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  > div {
    display: flex;
    > p {
      font-size: 0.75rem;
      color: #2e7bb4;
      font-weight: 700;
    }
  }
  > p {
    color: #999999;
    font-weight: 400;
    font-size: 0.625rem;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5625rem;
  padding: 0.1875rem 1rem 0.375rem 0.875rem;
  border-radius: 0.5rem;
  background-color: #6f92bb;
  > p {
    color: white;
    font-size: 0.75rem;
  }
`;
