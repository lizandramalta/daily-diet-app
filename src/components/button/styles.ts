import { calculateSizeRelativeToFixedScreenHeight } from "@utils/dimensions";
import { Text, TouchableOpacity, View } from "react-native";
import styled, { css, DefaultTheme } from "styled-components/native";

export type ButtonTheme = "DARK" | "LIGHT";

type ButtonStyleProps = {
  active: boolean;
  buttonTheme: ButtonTheme;
};

function getColors(
  active: boolean,
  buttonTheme: ButtonTheme,
  theme: DefaultTheme
) {
  let backgroundColor;
  let textColor;

  switch (buttonTheme) {
    case "DARK":
      if (!active) backgroundColor = theme.COLORS.GRAY_200;
      else backgroundColor = theme.COLORS.GRAY_100;
      textColor = theme.COLORS.WHITE;
      break;
    default:
      if (!active) backgroundColor = theme.COLORS.WHITE;
      else backgroundColor = theme.COLORS.GRAY_500;
      textColor = theme.COLORS.GRAY_100;
      break;
  }

  return {
    backgroundColor,
    textColor,
  };
}

export const ButtonContainer = styled(TouchableOpacity)<ButtonStyleProps>`
  height: ${calculateSizeRelativeToFixedScreenHeight(50)}px;
  flex-direction: row;
  padding-top: 16px;
  padding-bottom: 16px;
  align-items: center;
  justify-content: center;

  ${({ active, buttonTheme, theme }) => css`
    background-color: ${getColors(active, buttonTheme, theme).backgroundColor};
    border-width: ${buttonTheme === "LIGHT" ? 1 : 0}px;
    border-color: ${theme.COLORS.GRAY_100};
    border-radius: 6px;
  `};
`;

export const ButtonLabel = styled(Text)<ButtonStyleProps>`
  ${({ active, buttonTheme, theme }) => css`
    color: ${getColors(active, buttonTheme, theme).textColor};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
  `};
`;

export const IconContainer = styled(View)`
  margin-right: 12px;
`;
