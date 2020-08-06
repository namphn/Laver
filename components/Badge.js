import React from "react";
import { StyleSheet } from "react-native"

import Block from "./Block";
import { theme } from "../constants"

export default function Badge(props) {
    const {children, style, size, color } = props;

    const badgeStyle = StyleSheet.flatten([
        styles.badge,
        size && {
            height: size,
            width: size,
            borderRadius: size
        },
        style
    ])
    
    return (
        <Block
        flex={false}
        middle
        center
        color={color}
        style={badgeStyle}
        {...props}>
            {children}
        </Block>
    )
}



const styles = StyleSheet.create({
    badge: {
        height: theme.sizes.base,
        width: theme.sizes.base,
        borderRadius: theme.sizes.border
    }
});