import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 40px;
`;

export const BorderAvatar = styled.View`
  width: 44px;
  height: 44px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 999px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  overflow: hidden;
`;
