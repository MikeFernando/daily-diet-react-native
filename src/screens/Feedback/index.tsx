import React from "react";

import { Button } from "@components/Button";

// import photoFailure from '@assets/photo-failure.png'
import photoSuccess from "@assets/photo-success.png";

import {
  Container,
  FeedbackImage,
  GoToHome,
  Subtitle,
  TextBold,
  Title,
} from "./styles";

type Props = {};

export function Feedback(props: Props) {
  return (
    <Container>
      <Title variant="PRIMARY">Continue assim!</Title>
      <Subtitle>
        Você continua <TextBold>dentro da dieta</TextBold>. Muito bem!
      </Subtitle>

      <FeedbackImage source={photoSuccess} />

      <GoToHome>
        <Button title="Ir para a página inicial" />
      </GoToHome>
    </Container>
  );
}
