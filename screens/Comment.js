import React, { useState, useEffect } from "react"
import {
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from "react-native"
import { Text, Block } from "../components"
import { theme, mocks } from "../constants"
import Icon from "react-native-vector-icons/MaterialIcons"

const { width, height } = Dimensions.get("window");

export default function Comment(props) {
    const {
        navigation,
        route
    } = props

    const {
        likeCount,
        liked,
        commentCount,
        share,
        image,
        imageHeight,
        avatar,
        name,
        status
    } = route.params;

    const [active, setActive] = useState(liked)
    const [likeCountState, setLikeCountState] = useState(likeCount)

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <Block flex={false} color="white" style={styles.container} >
            <Block flex={false} style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <Icon name="arrow-back" size={24} style={styles.backButton} />
                </TouchableOpacity>
            </Block>
            <Block flex={false}>
                <TouchableOpacity style={styles.postHeader}>
                    <Image source={avatar} style={styles.avatar} />
                    <Text style={styles.name}>{name}</Text>
                </TouchableOpacity>
            </Block>
            <Block style={styles.status}>
                <Text>{status}</Text>
            </Block>
            <Block flex={false} style={{ ...styles.imageContainer }} >
                <Image resizeMode="contain" source={{ uri: image }}
                    style={{
                        ...styles.image,
                        height: imageHeight
                    }} />
            </Block>
        </Block>
    )
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    avatar: {
        height: width / 10,
        width: width / 10
    },
    postHeader: {
        flexDirection: "row",
        alignItems: 'center',
        paddingLeft: 10,
        paddingTop: 10
    },
    name: {
        fontWeight: "bold",
        paddingLeft: 10,
        alignContent: "center"
    },
    imageContainer: {
        width: width,
        alignItems: "center",
    },
    image: {
        width: width,
        resizeMode: "contain"
    },
    status: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    button: {
        flexDirection: "row"
    },
    postReactCount: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    header: {
        paddingTop: theme.sizes.base,
        paddingLeft: theme.sizes.base,
        paddingBottom: 30,
        height: height / 16
    },
    imageContainer: {
        width: width,
        alignItems: "center"
    },
})





