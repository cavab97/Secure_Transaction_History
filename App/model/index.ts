import { ImageSourcePropType } from "react-native";

export interface LoginButtonProps {
  Title: string;
  borderBottomRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderRightColor?: string;
  borderRightWidth?: number;
  marginLeft?: number;
  position?: "relative" | "absolute" | "fixed" | "sticky" | "static";
  borderWidth?: number;
  onPress?: () => void;
  width?: number;
  padding?: number;
  marginTop?: number;
}

export interface ImageViewProps {
  Title: string; // Title as a string
  borderBottomRightRadius?: number; // Optional, number for border radius
  borderBottomLeftRadius?: number; // Optional, number for border radius
  borderTopLeftRadius?: number; // Optional, number for border radius
  borderTopRightRadius?: number; // Optional, number for border radius
  borderRightColor?: string; // Optional, string for border color
  borderRightWidth?: number; // Optional, number for border width
  marginLeft?: number; // Optional, number for margin left
  position?: "relative" | "absolute" | "fixed" | "sticky"; // Optional, a limited set of string values for position
  borderWidth?: number; // Optional, number for border width
  borderBottomWidth?: number; // Optional, number for bottom border width
  source?: ImageSourcePropType; // Optional, image source (use ImageSourcePropType for safe image handling in React Native)
}
