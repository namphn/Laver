import React from "react"
import {
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from "react-native"
import Block from "./Block"
import Text from "./Text"
import { theme, mocks } from "../constants"

const { width, height } = Dimensions.get("window");

export default function Post(props) {
    const {
        visiable,
        avatar
    } = props

    const notifiStyle = [
        {
            backgroundColor: visiable ? "white" : "#ecfae8"
        }
    ]

    return (
        <Block flex={false} color="white" style={styles.container}>
            <TouchableOpacity style={styles.postHeader}>
                <Image source={props.avatar} style={styles.avatar} />
                <Text style={styles.name}>{props.name}</Text>
            </TouchableOpacity>
            <Block flex={false}>
                <Image source={props.image} resizeMode="cover"/>
            </Block>
        </Block>
    )


}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
    },
    avatar: {
        height: width / 10,
        width: width / 10
    },
    postHeader: {
        flexDirection: "row",
        alignItems: 'center', 
    },
    name: {
        fontWeight: "bold",
        paddingLeft: 10,
        alignContent: "center"
    },
    image: {
        maxWidth: width
    }
})





