import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import theme from "@theme/index";

import { Loading } from "@components/Loading";

import { Statistics } from "@screens/Statistics";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Statistics /> : <Loading />}
    </ThemeProvider>
  );
}
