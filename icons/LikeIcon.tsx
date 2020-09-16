import * as React from "react"
import Svg, { Circle, G, Path, Rect } from "react-native-svg"
import { theme } from "../constants"

export default function LikeIcon(props) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill={props.active ? theme.colors.blue : "none"}
            stroke={props.active ? theme.colors.white: theme.colors.border}
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
        </Svg>
    )
}

