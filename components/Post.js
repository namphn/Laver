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
import LikeIcon from "../icons/LikeIcon"
import CommentIcon from "../icons/CommentIcon"
import ShareIcon from "../icons/ShareIcon"

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
        <Block flex={false} color="white" style={styles.container} >
            <Block>
                <TouchableOpacity style={styles.postHeader}>
                    <Image source={props.avatar} style={styles.avatar} />
                    <Text style={styles.name}>{props.name}</Text>
                </TouchableOpacity>
            </Block>
            <Block style={styles.status}>
                <Text>{props.status}</Text>
            </Block>
            <Block flex={false} style={styles.imageContainer} >
                <Image source={props.image} />
            </Block>
            <TouchableOpacity style={styles.postReactCount}>
                <Text>
                    <Text>10 </Text>
                    <Text>Likes</Text>
                </Text>
                <Text>
                    <Text>10 </Text>
                    <Text>Comment</Text>
                    <Text>. 10 </Text>
                    <Text>Share</Text>
                </Text>
            </TouchableOpacity>
            <Block flex={false} style={styles.reactContainer}>
                <TouchableOpacity style={styles.button}>
                    <LikeIcon active />
                    <Text style={{ paddingLeft: 5 }}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <CommentIcon />
                    <Text style={{ paddingLeft: 5 }}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <ShareIcon />
                    <Text style={{ paddingLeft: 5 }}>Share</Text>
                </TouchableOpacity>
            </Block>
        </Block>
    )
}


const styles = StyleSheet.create({
    container: {

        marginBottom: 10
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
        alignItems: "center"
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
    reactContainer: {
        paddingLeft: 10,
        paddingTop: 6,
        borderTopColor: "gray",
        borderTopWidth: 0.5,
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
        paddingBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 30,
        paddingRight: 30
    },
    button: {
        flexDirection: "row"
    },
    postReactCount: {
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})





