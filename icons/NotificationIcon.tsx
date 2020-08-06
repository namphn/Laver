import * as React from "react";
import Svg, {Circle, G, Path } from "react-native-svg";
import {theme } from "../constants";

export default function Notification(props)  {
  return (
    <Svg 
    width={theme.sizes.ICON_SIZE} height={theme.sizes.ICON_SIZE} viewBox="0 0 20 22">
      <G
        stroke={props.active ? theme.colors.primary : theme.colors.border}
        strokeWidth={2}
        fill={props.active ? theme.colors.primary : "none"}
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M16 7A6 6 0 104 7c0 7-3 9-3 9h18s-3-2-3-9M11.73 20a2 2 0 01-3.46 0" />
      </G>
    </Svg>
  );
};