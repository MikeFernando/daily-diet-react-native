import React from "react";
import { SectionList } from "react-native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { PercentageCard } from "@components/PercentageCard";

import {
  SectionContainer,
  SectionTitle,
  SectionItem,
  Container,
  Separator,
  ItemHour,
  ItemText,
  Text,
  Item,
  ItemStatus,
} from "./styles";

const DATA = [
  {
    title: "12.03.24",
    data: [
      { hour: "20:00", name: "X-tudo", status: "failure" },
      { hour: "16:00", name: "Whey protein com leite", status: "success" },
      { hour: "12:30", name: "Salada cesar", status: "success" },
      { hour: "09:30", name: "Vitamina de abacate", status: "success" },
    ],
  },
  {
    title: "11.03.24",
    data: [
      { hour: "16:00", name: "Strogonoff de frango", status: "failure" },
      { hour: "13:00", name: "Barra de sereal", status: "success" },
      { hour: "11:00", name: "Salada de tomada", status: "failure" },
      { hour: "08:00", name: "Sorvete de flocos", status: "failure" },
    ],
  },
];

export function Home() {
  return (
    <Container>
      <Header />
      <PercentageCard />
      <Text>Refeições</Text>
      <Button icon="add" title="Nova refeição" />

      <SectionContainer>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.name + index}
          renderSectionHeader={({ section: { title } }) => (
            <SectionTitle>{title}</SectionTitle>
          )}
          renderItem={({ item }) => (
            <SectionItem>
              <ItemHour>{item.hour}</ItemHour>
              <Separator />
              <ItemText numberOfLines={1} ellipsizeMode="tail">
                {item.name}
              </ItemText>
              <ItemStatus status={item.status} />
            </SectionItem>
          )}
          showsVerticalScrollIndicator={false}
        />
      </SectionContainer>
    </Container>
  );
}
