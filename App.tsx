import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import theme from "@theme/index";
import { StatusBar } from "expo-status-bar";
import { Routes } from "src/routes";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" translucent />
      {fontsLoaded ? <Routes /> : <></>}
    </ThemeProvider>
  );
}
