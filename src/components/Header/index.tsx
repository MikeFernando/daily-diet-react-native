import React from "react";

import logoImage from "@assets/logo.png";

import { Avatar, BorderAvatar, Container, Logo } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo source={logoImage} />
      <BorderAvatar>
        <Avatar
          source={{ uri: "https://github.com/MikeFernando.png" }}
          alt="foto do perfil"
        />
      </BorderAvatar>
    </Container>
  );
}
