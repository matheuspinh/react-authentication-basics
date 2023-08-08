import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #ecf2fa;
  padding: 0.875rem 0;
  gap: 0.875rem;
  margin-top: 0.5rem;
  width: 9.0625rem;
`;

export const SectionHeader = styled.h2`
  font-size: 0.8125rem;
  font-weight: 700;
  color: #999999;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
  max-width: 9.0625rem;
`;

export const ItemIcon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;

export const ItemText = styled.p`
  font-size: 0.5625rem;
  color: #2e7bb4;
  width: 7rem;
  overflow-wrap: break-word;
`;
