import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  variant: "PRIMARY" | "SECONDARY" | "TERTIARY";
};

export const Container = styled.TouchableOpacity``;

export const BackIcon = styled(AntDesign).attrs<Props>(
  ({ theme, variant }) => ({
    size: 24,
    color:
      variant === "PRIMARY"
        ? theme.COLORS.GREEN_DARK
        : variant === "SECONDARY"
        ? theme.COLORS.RED_DARK
        : theme.COLORS.GRAY_600,
  })
)``;
