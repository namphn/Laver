import React from 'react'
import Svg, { Circle, G, Path, Rect } from 'react-native-svg'
import { theme } from '../constants'


export default function HomeIcon(props) {
    return (
        <Svg
            width={theme.sizes.ICON_SIZE}
            height={theme.sizes.ICON_SIZE}
            viewBox="0 0 24 24">
            <G
                fill={props.active ? theme.colors.primary : 'none'}
                stroke={props.active ? theme.colors.primary : theme.colors.border}
                strokeWidth={2}
                strokeLinecap="round"
                fillRule="evenodd"
                strokeLinejoin="round"
                className="prefix__feather prefix__feather-home">
                <Path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <Path d="M9 22V12h6v10" />
            </G>
            <Rect
                x="10"
                y="14"
                width="4"
                height="9"
                fill="white"
                strokeWidth="1"
                
            />
        </Svg >
    )
}
