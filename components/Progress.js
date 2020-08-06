import React from "react"
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Block from "./Block"

export default function Progress(props) {

    const {
        startColor,
        endColor,
        value,
        opacity,
        style
    } = props

    return (
        <Block
            row
            center
            color="gray3"
            style={[styles.background, styles]}
        >
            <LinearGradient
                end={{ x: 1, y: 0 }}
                style={[styles.overlay, { flex: value }]}
                colors={[startColor, endColor]}
            >
                <LinearGradient
                    end={{ x: 1, y: 0 }}
                    colors={[startColor, endColor]}
                    style={[styles.active, { flex: value }]}
                />
            </LinearGradient>
        </Block>
    )
}

Progress.defaultProps = {
    startColor: "#4F8DFD",
    endColor: "#3FE4D4",
    value: 0.75,
    opacity: 0.2
};

const styles = StyleSheet.create({
    background: {
        height: 6,
        marginVertical: 8,
        borderRadius: 8
    },
    overlay: {
        height: 14,
        maxHeight: 14,
        borderRadius: 7,
        paddingHorizontal: 4
    },
    active: {
        marginTop: 4,
        height: 6,
        maxHeight: 6,
        borderRadius: 7
    }
});
