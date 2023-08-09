import styled from "styled-components";

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.p`
  font-size: 0.75rem;
  font-style: italic;
  color: #5a5a5a;
`;

export const CardLine = styled.div`
  display: flex;
  gap: 0.25rem;

  > p {
    color: #2e7bb4;
    font-size: 0.875rem;
    font-style: italic;
  }
`;
