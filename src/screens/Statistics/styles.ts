import styled from "styled-components/native";

type Props = {
  variant: "PRIMARY" | "SECONDARY";
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: -32px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TextBody = styled.Text`
  text-align: center;
  margin-top: 32px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const Card = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  text-align: center;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`;

export const Description = styled.Text`
  text-align: center;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const GridCard = styled.View`
  display: flex;
  flex-direction: row;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const CardItem = styled.View<Props>`
  padding: 15px 20px;
  width: 49%;
  border-radius: 8px;
  background-color: ${({ theme, variant }) =>
    variant === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;
