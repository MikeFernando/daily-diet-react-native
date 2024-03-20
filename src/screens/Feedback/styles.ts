import styled, { css } from "styled-components/native";

type Props = {
  variant: "PRIMARY" | "SECONDARY";
};

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Title = styled.Text<Props>`
  ${({ theme, variant }) => css`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${() =>
      variant === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const TextBold = styled.Text`
  ${({ theme }) => css`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const FeedbackImage = styled.Image`
  margin-top: 43px;
`;

export const GoToHome = styled.View`
  justify-content: center;
  align-items: center;
  width: 220px;
  margin-top: 30px;
`;
