import React, { useState, useEffect } from "react"
import {
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView
} from "react-native"
import {
    Text,
    Block,
    InComment
} from "../components"
import { theme, mocks } from "../constants"
import Icon from "react-native-vector-icons/MaterialIcons"
import { FlatList } from "react-native-gesture-handler"

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

    const data = [
        {
            name: "Phạm Hoàng Nam",
            avatar: mocks.profile.avatar,
            content: "Đây là lí do người ta gọi anh là Lươn, Cao Bằng thế này thì không lươn mới lạ",
            image: mocks.images.image1,
            childComment: [
                {
                    name: "Phạm Hoàng Nam",
                    avatar: mocks.profile.avatar,
                    content: "Vcl",
                    image: mocks.images.image1,
                }
            ],
        },
        {
            name: "Phạm Hoàng Nam",
            avatar: mocks.profile.avatar,
            content: "Đường tình anh thua, đường đua anh chấp!",
            image: mocks.images.image2,
            childCommnet: [],
        },
    ]

    const renderComment = ({ item }) => {
        return (
            <InComment
                name={item.name}
                avatar={item.avatar}
                content={item.content}
                image={item.image}
                childComment={item.childComment}
            />
        )
    }

    return (
        <Block flex={false} color="white">
            <Block flex={false} style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <Icon name="arrow-back" size={24} style={styles.backButton} />
                </TouchableOpacity>
            </Block>
            <ScrollView>
                <Block flex={false}>
                    <TouchableOpacity style={styles.postHeader}>
                        <Image source={avatar} style={styles.avatar} />
                        <Text style={styles.name}>{name}</Text>
                    </TouchableOpacity>
                </Block>
                <Block flex={false} style={styles.status}>
                    <Text>{status}</Text>
                </Block>
                <Block flex={false} style={{ ...styles.imageContainer }} >
                    {/* <Image resizeMode="contain" source={{ uri: image }} */}
                    <Image resizeMode="contain" source={image}
                        style={{
                            ...styles.image,
                            height: imageHeight
                        }} />
                </Block>

                <Block flex={false} >
                    <Text h4 style={{
                        paddingTop: 10,
                        paddingLeft: 10,
                        fontWeight: "bold",
                        fontSize: 15
                    }} bold>Comments</Text>
                </Block>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={renderComment}
                    style={{ marginTop: 10 }}
                ></FlatList>
            </ScrollView>
        </Block>
    )
}


const styles = StyleSheet.create({
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
        alignItems: "center",
    },
    image: {
        width: width,
        paddingTop: 10,
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
})





