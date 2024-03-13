import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GREEN_LIGHT};
    font-size: ${theme.COLORS.GRAY_700};
  `}
  width: 100%;
  padding: 24px 0;
  flex-direction: row;
  border-radius: 8px;
  margin-top: 44px;
`;

export const Content = styled.View`
  align-items: center;
  margin: 0 auto;
`;

export const Percentage = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  margin-left: 20px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
    margin-left: 20px;
  `}
`;

export const ButtonOpen = styled.TouchableOpacity`
  margin-top: -15px;
  margin-right: 10px;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24,
}))``;
