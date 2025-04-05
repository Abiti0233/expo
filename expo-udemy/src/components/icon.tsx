import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import fontData from "../../assets/fonts/icomoon.ttf";
import fontSelection from "../../assets/fonts/selection.json";

const CustomIcon = createIconSetFromIcoMoon(
  fontSelection,
  "IcoMoon",
  "icomoon.ttf"
);

type IconProps = {
  name: string;
  size?: number;
  color?: string;
};

const Icon = ({name, size, color}: IconProps) => {
  const [fontsLoaded] = useFonts({
    IcoMoon: fontData,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <CustomIcon name={name} size={size} color={color} />;
};

export default Icon;
