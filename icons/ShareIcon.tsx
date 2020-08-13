import * as React from "react"
import Svg, { Circle, G, Path, Rect } from "react-native-svg"
import { theme } from "../constants"

export default function ShareIcon(props) {
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
            <Circle cx={18} cy={5} r={3} />
            <Circle cx={6} cy={12} r={3} />
            <Circle cx={18} cy={19} r={3} />
            <Path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />

        </Svg>
    )
}

