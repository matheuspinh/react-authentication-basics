import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  padding: 0.56rem 1rem;
  font-size: 0.75rem;
  outline: none;
  border-radius: 0.5rem;
  color: black;
  border: 1px solid #c5c6ca;
  margin-top: 0.6875rem;
  max-width: 13.0625rem;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #2e7bb4;
  border: none;
  margin-top: 1.3125rem;
  font-weight: 700;
  border-radius: 0.5rem;
  padding: 0.59375rem;
  max-width: 13.0625rem;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  margin-top: 0.625rem;
  font-size: 0.5625rem;
  align-self: self-start;
  text-decoration: none;
  color: #2e7bb4;
`;

export const ErrorSpan = styled.span`
  align-self: start;
  padding-top: 0.3rem;
  color: red;
  font-size: 0.6rem;
  line-height: 0rem;
`;
