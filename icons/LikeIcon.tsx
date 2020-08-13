import * as React from "react"
import Svg, { Circle, G, Path, Rect } from "react-native-svg"
import { theme } from "../constants"

export default function LikeIcon(props) {
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
        >
            <Path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />

        </Svg>
    )
}

