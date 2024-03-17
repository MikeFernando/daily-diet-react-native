import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type StateButtons = "yes" | "not" | "default";

type Props = {
  isSelected?: StateButtons;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
export const Content = styled.View`
  flex: 1;
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -32px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
export const Form = styled.View``;

export const Label = styled.Text`
  margin-bottom: 4px;
  margin-top: 10px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_700};
  `};
`;

export const Input = styled.TextInput`
  padding: 10px 15px;
  min-height: 48px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const DateTime = styled.View`
  align-items: center;
  flex-direction: row;
  align-items: baseline;
  margin-top: 10px;
  gap: 24px;
  width: 100%;
  margin-bottom: 8px;
`;

export const Field = styled.View`
  width: 46%;
`;

export const SelectionButton = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  gap: 18px;
  margin-bottom: 140px;
`;

export const ButtonOption = styled.TouchableOpacity<Props>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  min-height: 48px;
  margin-top: -5px;

  ${({ theme, isSelected }) =>
    isSelected === "default"
      ? css`
          background-color: ${theme.COLORS.GRAY_200};
          border: 1px solid ${theme.COLORS.GRAY_200};
        `
      : isSelected === "yes"
      ? css`
          background-color: ${theme.COLORS.GREEN_LIGHT};
          border: 1px solid ${theme.COLORS.GREEN_DARK};
        `
      : isSelected === "not"
      ? css`
          background-color: ${theme.COLORS.RED_LIGHT};
          border: 1px solid ${theme.COLORS.RED_DARK};
        `
      : ""}
`;

export const DotYes = styled.View`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`;

export const DotNo = styled.View`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.COLORS.RED_DARK};
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_700};
  `};
`;

export const TextArea = styled(TextInput).attrs(() => ({
  multiline: true,
  numberOfLines: 6,
  textAlignVertical: "top",
}))`
  padding: 15px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const InputDate = styled(TextInput).attrs(() => ({
  keyboardType: "numeric",
}))`
  min-height: 48px;
  border-radius: 4px;
  padding: 0 15px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`;
