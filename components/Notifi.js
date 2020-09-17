import React from "react"
import { View, Image, StyleSheet, Dimensions } from "react-native"
import Text from "./Text"
import { ThemeColors } from "react-navigation"
import { theme } from "../constants"

const { width, height } = Dimensions.get("window");

export default function Notifi(props) {
    const {
        visiable,
        avatar
    } = props

    const notifiStyle = [
        {
            backgroundColor: visiable ? "white" : theme.colors.gray3
        }
    ]

    return (
        <View style={[styles.container, notifiStyle]}>
            <Image source={require("../assets/images/explore_3.png")}
                style={styles.avatar}
            />
            <View style={styles.content}>
                <Text>
                    <Text>{props.name + " "}</Text>
                    <Text>đã bình luận hình ảnh của bạn</Text>
                    <Text>Hãy xem Nam nói gì về bạn nào!!</Text>
                </Text>
            </View>

        </View>
    )


}

const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        marginLeft: 9,
        borderRadius: 60 / 2
    },
    container: {
        height: 70,
        paddingTop: 2,
        paddingBottom: 2,
        flexDirection: "row"
    },
    content: {
        flex: 1,
        padding: theme.sizes.base,
        flexWrap: "wrap",
        width: width,
        alignItems: "flex-start"
    }
})





