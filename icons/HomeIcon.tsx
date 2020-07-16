import React from 'react'
import Svg, { Circle, G, Path } from 'react-native-svg'
import { theme } from '../constants'


export default function HomeIcon(props) {
    return (
        <Svg width={18} height={24} viewBox="0 0 18 20">
            <G
                transform="translate(1 1)"
                stroke={props.active ? theme.colors.primary : theme.colors.border}
                strokeWidth={2}
                fill={props.active ? theme.colors.primary : 'none'}
                fillRule="evenodd"
                strokeLinecap='round'
                strokeLinejoin='round'
            >
                <Path d='M16 18v-2a4 4 0 00-4-4H4a4 4 0 00-4 4v2' />
                <Circle cx={8} cy={4} r={4} />
            </G>
        </Svg>
    )
}
