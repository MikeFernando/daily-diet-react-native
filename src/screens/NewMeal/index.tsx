import React from "react";
import { ScrollView } from "react-native";

import { HeaderMeal } from "@components/HeaderMeal";
import { Button } from "@components/Button";

import {
  Container,
  Content,
  DateTime,
  Form,
  Input,
  Label,
  TextArea,
  Field,
  InputDate,
  SelectionButton,
  ButtonOption,
  TextButton,
  DotYes,
  DotNo,
  StateButtons,
} from "./styles";

type Props = {};

export function NewMeal(props: Props) {
  const [buttonYes, setButtonYes] = React.useState<StateButtons>("default");
  const [buttonNot, setButtonNot] = React.useState<StateButtons>("default");

  function handleButtonYes() {
    setButtonYes("yes");
    setButtonNot("default");
  }

  function handleButtonNot() {
    setButtonNot("not");
    setButtonYes("default");
  }

  return (
    <Container>
      <HeaderMeal />
      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Form>
            <Label>Nome</Label>
            <Input />

            <Label>Descrição</Label>
            <TextArea />

            <DateTime>
              <Field>
                <Label>Data</Label>
                <InputDate />
              </Field>
              <Field>
                <Label>Hora</Label>
                <InputDate />
              </Field>
            </DateTime>

            <Label>Está dentro da dieta?</Label>
            <SelectionButton>
              <ButtonOption isSelected={buttonYes} onPress={handleButtonYes}>
                <DotYes />
                <TextButton>Sim</TextButton>
              </ButtonOption>
              <ButtonOption isSelected={buttonNot} onPress={handleButtonNot}>
                <DotNo />
                <TextButton>Não</TextButton>
              </ButtonOption>
            </SelectionButton>

            <Button title="Cadastrar refeição" />
          </Form>
        </ScrollView>
      </Content>
    </Container>
  );
}
