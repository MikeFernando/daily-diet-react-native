import styled from "styled-components/native";

export const Container = styled.View`
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 132px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const HeaderTitle = styled.Text`
  text-align: center;
  margin-left: -20px;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const View = styled.View``;
