import { Icon } from "@components/icon";
import { useState } from "react";
import { useTheme } from "styled-components/native";
import {
  ButtonContainer,
  ButtonLabel,
  ButtonTheme,
  IconContainer,
} from "./styles";
import { TouchableOpacityProps } from "react-native";

type ButtonProps = {
  label: string;
  buttonTheme: ButtonTheme;
  icon?: {
    name: PhosphorIcon;
    size: number;
  };
} & TouchableOpacityProps;

export function Button({ label, buttonTheme, icon, ...rest }: ButtonProps) {
  const [isActive, setIsActive] = useState(false);
  const theme = useTheme();

  function handleActive() {
    setIsActive(!isActive);
  }

  return (
    <ButtonContainer
      active={isActive}
      buttonTheme={buttonTheme}
      {...rest}
      onPressIn={handleActive}
      onPressOut={handleActive}
      activeOpacity={1}
    >
      {icon && (
        <IconContainer>
          <Icon
            name={icon.name}
            color={
              buttonTheme === "DARK"
                ? theme.COLORS.WHITE
                : theme.COLORS.GRAY_100
            }
            size={icon.size}
          />
        </IconContainer>
      )}
      <ButtonLabel active={isActive} buttonTheme={buttonTheme}>
        {label}
      </ButtonLabel>
    </ButtonContainer>
  );
}
