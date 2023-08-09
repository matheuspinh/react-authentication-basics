import styled from "styled-components";

export const FollowCardContainer = styled.div`
  display: flex;
  position: relative;
`;

export const FollowerPicture = styled.img`
  border-radius: 0.5rem;
  object-fit: cover;
  width: 4.7rem;
  height: 6.375rem;
`;

export const FollowerName = styled.p`
  position: absolute;
  bottom: 0.625rem;
  left: 0.4375rem;
  font-size: 0.625rem;
  width: 4rem;
  font-weight: 500;
  color: white;
  text-shadow: -1px -1px 0 #00000033, 1px -1px 0 #00000033, -1px 1px 0 #00000033,
    1px 1px 0 #00000033;
`;
