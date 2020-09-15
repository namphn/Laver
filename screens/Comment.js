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
        image
    } = route.params;

    const [active, setActive] = useState(liked)
    const [likeCountState, setLikeCountState] = useState(likeCount)

    useEffect(() => {
        console.log(likeCount)
    }, [])


    useEffect(() => {
        console.log(likeCountState)
    }, [likeCountState])

    const onChangeLike = () => {
        if (active) {
            setLikeCountState(likeCountState - 1)
        } else {
            setLikeCountState(likeCountState + 1)
        }
        setActive(!active);
        console.log('like')
    }

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <Block flex={false} color="white" style={styles.container} >
            <Block flex={false} row style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <Icon name="arrow-back" size={24} style={styles.backButton} />
                </TouchableOpacity>
            </Block>
            <Block flex={false} style={styles.imageContainer} >
                <Image source={image} />
            </Block>
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
                    <Text>{likeCountState} </Text>
                    <Text>Likes</Text>
                </Text>
                <Text>
                    <Text>10 </Text>
                    <Text>Comment</Text>
                    <Text>. 10 </Text>
                    <Text>Share</Text>
                </Text>
            </TouchableOpacity>
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
    },
    header: {
        paddingTop: theme.sizes.base,
        paddingLeft: theme.sizes.base,
        height: height / 16
    },
    imageContainer: {
        width: width,
        alignItems: "center"
    },
})





