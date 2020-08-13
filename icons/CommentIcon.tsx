import * as React from "react"
import Svg, { Circle, G, Path, Rect } from "react-native-svg"
import { theme } from "../constants"

export default function CommentIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={props.active ? theme.colors.primary : "none"}
      stroke={props.active ? theme.colors.primary : theme.colors.border}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </Svg>
  )
}


