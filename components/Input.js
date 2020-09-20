import React, { useState } from "react"
import { StyleSheet, TextInput} from "react-native";

import Text from "./Text";
import Block from "./Block";
import Button from "./Button";
import { theme } from "../constants";
import Icon from "react-native-vector-icons/Ionicons"

export default function Input(props) {
    
    const [state, setState] = useState({
        toggleSecure: false
    });

    const { email, phone, number, secure, error, style } = props;

    const { toggleSecure } = state;
    const isSecure = toggleSecure ? false : secure;

    const inputStyles = [
        styles.input,
        error && { borderColor: theme.colors.accent },
        style
    ];

    const inputType = email
        ? "email-address"
        : number
            ? "numeric"
            : phone
                ? "phone-pad"
                : "default";

    return (
        <Block flex={false} margin={[theme.sizes.base, 0]}>
            {renderLabel(props)}
            <TextInput
                style={inputStyles}
                secureTextEntry={isSecure}
                autoComplete="off"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={inputType}
                {...props}
            />
            {renderToggle(props, state)}
            {renderRight(props)}
        </Block>
    )
}

const renderLabel = (props) => {
    const { label, error } = props;

    return (
        <Block flex={false}>
            {label ? (
                <Text gray2={!error} accent={error}>
                    {label}
                </Text>
            ) : null}
        </Block>
    );
}

const renderToggle = (props, state) => {
    const { secure, rightLabel } = props;
    const { toggleSecure } = state;
    const [toggleSecureState, setToggleSecure] = useState(toggleSecure)

    if (!secure) return null;

    return (
        <Button
            style={styles.toggle}
            onPress={() => setToggleSecure({ toggleSecureState: !toggleSecureState })}
        >
  
        </Button>
    );
}

const renderRight = (props) => {
    const { rightLabel, rightStyle, onRightPress } = props;

    if (!rightLabel) return null;

    return (
        <Button
            style={[styles.toggle, rightStyle]}
            onPress={() => onRightPress && onRightPress()}
        >
            {rightLabel}
        </Button>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.black,
        borderRadius: theme.sizes.radius,
        fontSize: theme.sizes.font,
        fontWeight: "500",
        color: theme.colors.black,
        height: theme.sizes.base * 3
    },
    toggle: {
        position: "absolute",
        alignItems: "flex-end",
        width: theme.sizes.base * 2,
        height: theme.sizes.base * 2,
        top: theme.sizes.base,
        right: 0
    }
});

