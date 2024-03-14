import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { BackIcon, Container } from "./styles";

type Props = {
  icon: keyof typeof AntDesign.glyphMap;
  variant: "PRIMARY" | "SECONDARY" | "TERTIARY";
};

export function BackButton({ icon, variant }: Props) {
  return (
    <Container>
      <BackIcon variant={variant} name={icon} />
    </Container>
  );
}
