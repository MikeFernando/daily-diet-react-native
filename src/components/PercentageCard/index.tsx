import React from "react";
import {
  ButtonOpen,
  Container,
  Content,
  Description,
  Icon,
  Percentage,
} from "./styles";

type Props = {};

export function PercentageCard(props: Props) {
  return (
    <Container>
      <Content>
        <Percentage>90,86%</Percentage>
        <Description>das refeições dentro da dieta</Description>
      </Content>

      <ButtonOpen>
        <Icon />
      </ButtonOpen>
    </Container>
  );
}
