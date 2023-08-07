import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  margin-left: 0.5rem;
`;

export const MenuItem = styled.p`
  display: flex;
  cursor: pointer;
  padding: 0 1rem;
  font-size: 0.75rem;
  height: 0.875rem;
  border-right: 1px solid #5292c1;

  :hover {
    font-weight: 600;
  }
`;

export const LastMenuItem = styled.p`
  display: flex;
  cursor: pointer;
  padding: 0 1rem;
  font-size: 0.75rem;
  height: 0.875rem;

  :hover {
    font-weight: 600;
  }
`;
