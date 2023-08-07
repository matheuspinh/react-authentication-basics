import styled from "styled-components";
import { device } from "../../styles/breakpoints/breakpoints";

export const AccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d9e6f6;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  padding: 0.5rem;
  gap: 1rem;

  @media ${device.sm} {
    flex-direction: column;
    overflow-x: hidden;
    gap: 2rem;
    margin-top: 2.375rem;
    padding: 1rem;
  }
`;

export const AccessForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f1f9fe;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 22.5rem;
  height: 23.6rem;
  > p {
    color: black;
    width: 10.875rem;
    text-align: center;
  }
  > form > input {
  }

  @media ${device.sm} {
    max-width: 100vw;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 70rem;
  gap: 0.75rem;

  @media ${device.sm} {
    flex-direction: column;
    gap: 2rem;
  }
`;
