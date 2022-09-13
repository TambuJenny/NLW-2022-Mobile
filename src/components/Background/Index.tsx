import { ImageBackground } from "react-native";

import backgroundImg from "../../assets/background-galaxy.png";

import { styles } from "./styles";

interface PropsBackground {
  children: React.ReactNode;
}

export function Background(props: PropsBackground) {
  return (
    <ImageBackground
      source={backgroundImg}
      style={styles.container}
      defaultSource={backgroundImg}
    >
      {props.children}
    </ImageBackground>
  );
}
