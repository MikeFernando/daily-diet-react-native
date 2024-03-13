import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";

type Props = {
  name: any;
};

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
  width: 100%;
  height: 50px;
  min-height: 50px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
  text-align: center;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))`
  margin-right: 12px;
`;
