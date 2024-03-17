import React from "react";

import { BackButton } from "@components/BackButton";

import { Container, HeaderTitle, View } from "./styles";

type Props = {};

export function HeaderMeal(props: Props) {
  return (
    <Container>
      <BackButton icon="arrowleft" variant="TERTIARY" />

      <HeaderTitle>Nova refeição</HeaderTitle>
      <View />
    </Container>
  );
}
