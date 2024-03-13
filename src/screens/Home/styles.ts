import styled, { css } from "styled-components/native";

type StatusProps = {
  status: Omit<object, "failure" | "success">;
};

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-top: 44px;
  margin-bottom: 12px;
`;

export const SectionContainer = styled.View`
  flex: 1;
  padding-top: 18px;
`;

export const SectionTitle = styled.Text`
  margin-bottom: 10px;
  margin-top: 24px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const SectionItem = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemHour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Separator = styled.View`
  width: 1.5px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const ItemText = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const ItemStatus = styled.View<StatusProps>`
  height: 16px;
  width: 16px;
  border-radius: 999px;

  ${({ theme, status }) =>
    status === "success"
      ? css`
          background-color: ${theme.COLORS.GREEN_MID};
        `
      : css`
          background-color: ${theme.COLORS.RED_MID};
        `}
`;
