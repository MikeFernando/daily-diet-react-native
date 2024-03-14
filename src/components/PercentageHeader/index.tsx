import React from "react";
import { View } from "react-native";

import { Back, Container, Description, HeaderInfo, Percentage } from "./styles";
import { BackButton } from "@components/BackButton";

type Props = {
  percentage: string;
  color: "PRIMARY" | "SECONDARY";
};

export function PercentageHeader({ percentage, color = "PRIMARY" }: Props) {
  return (
    <Container variant={color}>
      <Back>
        <BackButton icon="arrowleft" variant={color} />
      </Back>

      <HeaderInfo>
        <Percentage>{percentage}</Percentage>
        <Description>das refeições dentro da dieta</Description>
      </HeaderInfo>
      <View />
    </Container>
  );
}
