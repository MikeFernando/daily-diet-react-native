import React from "react";

import { PercentageHeader } from "@components/PercentageHeader";

import {
  Card,
  Container,
  Content,
  Description,
  TextBody,
  Text,
  GridCard,
  CardItem,
} from "./styles";

type Props = {};

export function Statistics(props: Props) {
  return (
    <Container>
      <PercentageHeader percentage="90,86%" color="PRIMARY" />
      <Content>
        <TextBody>Estatísticas gerais</TextBody>

        <Card>
          <Text>22</Text>
          <Description>melhor sequência de pratos dentro da dieta</Description>
        </Card>

        <Card>
          <Text>109</Text>
          <Description>refeições registradas</Description>
        </Card>

        <GridCard>
          <CardItem variant="PRIMARY">
            <Text>99</Text>
            <Description>refeições dentro da dieta</Description>
          </CardItem>

          <CardItem variant="SECONDARY">
            <Text>10</Text>
            <Description>refeições fora da dieta</Description>
          </CardItem>
        </GridCard>
      </Content>
    </Container>
  );
}
