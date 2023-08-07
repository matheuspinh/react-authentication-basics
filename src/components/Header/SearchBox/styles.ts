import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
`;

export const Logout = styled.p`
  display: flex;
  cursor: pointer;
  padding: 0 1rem;
  font-size: 0.75rem;
  height: 0.875rem;
  border-left: 1px solid #5292c1;
  margin-right: -1rem;

  :hover {
    font-weight: 600;
  }
`;

export const SearchIcon = styled.img`
  position: relative;
  left: 2rem;
`;

export const SearchInput = styled.input`
  display: flex;
  border: none;
  border-radius: 2.125rem;
  background-color: #5579a1;
  font-size: 0.75rem;
  padding: 0.625rem 2.125rem 0.625rem 2.625rem;

  ::placeholder {
    color: white;
  }
`;
