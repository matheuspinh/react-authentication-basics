import styled from "styled-components";

export const FollowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

export const FollowsSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 19.5rem;
  padding: 1rem 1.25rem 1.75rem 1.25rem;
  background-color: white;
  border-radius: 0.5rem;

  > h2 {
    font-size: 1rem;
    font-weight: 700;
    color: #333333;
    margin-bottom: 1.25rem;
    > span {
      font-size: 0.875rem;
      font-weight: 700;
      color: #2e7bb4;
    }
  }

  > h3 {
    color: #2e7bb4;
    font-weight: 700;
    font-size: 0.875rem;
    cursor: pointer;
    margin-top: 2.0625rem;
    :hover {
      text-decoration: underline;
    }
  }
`;
