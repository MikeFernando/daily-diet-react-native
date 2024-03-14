import styled, { css } from "styled-components/native";

type Props = {
  variant: "PRIMARY" | "SECONDARY";
};

export const Container = styled.View<Props>`
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme, variant }) =>
    variant === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Back = styled.TouchableOpacity`
  margin-top: 48px;
`;

export const HeaderInfo = styled.View`
  min-height: 200px;
  justify-content: center;
  align-items: center;
`;

export const Percentage = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`;
