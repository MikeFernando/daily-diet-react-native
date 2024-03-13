import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  title: string;
};

export function Button({ title, icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} />
      <Title>{title}</Title>
    </Container>
  );
}
