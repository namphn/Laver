import React from 'react'
import Svg, { Circle, G, Path } from 'react-native-svg'
import { theme } from '../constants'

function SearchIcon(props) {
    return (
        <Svg
            width={theme.sizes.ICON_SIZE}
            height={theme.sizes.ICON_SIZE}
            viewBox="0 0 24 24"
            fill={props.active ? theme.colors.primary : 'none'}
            stroke={props.active ? theme.colors.primary : theme.colors.border}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Circle cx={11} cy={11} r={8} />
            <Path d="M21 21l-4.35-4.35" />
        </Svg>
    )
}

export default SearchIcon