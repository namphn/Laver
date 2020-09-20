import React, { useState, useEffect } from "react"
import {
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput
} from "react-native"
import {
    Text,
    Block,
    InComment,
    Input
} from "../components"
import { theme, mocks } from "../constants"
import Icon from "react-native-vector-icons/MaterialIcons"
import FeatherIcon from "react-native-vector-icons/Feather"
import { FlatList } from "react-native-gesture-handler"

const { width, height } = Dimensions.get("window");

export default function ReplyComment(props) {
    const {
        navigation,
        route
    } = props

    const {
        avatar,
        name,
        content,
        image,
        childComment
    } = route.params;

    const goBack = () => {
        navigation.goBack();
    }

    const renderChildComment = ({ item }) => {
        return (
            <Block flex={false} style={{ paddingLeft: 40 }}>
                <Block flex={false} row center space="between">
                    <TouchableOpacity style={styles.postHeader}>
                        <Image source={{uri: item.avatar}} style={styles.avatar} />
                        <Text style={styles.name}>{item.name}</Text>
                    </TouchableOpacity>
                    <Text style={{
                        paddingRight: 10,
                        fontSize: 11
                    }}>12 min</Text>
                </Block>
                <Block flex={false} style={styles.content}>
                    <Text>{item.content}</Text>
                </Block>
            </Block>
        )
    }

    return (
        <Block flex={1} color="white" style={{ paddingBottom: 105 }}>
            <Block flex={false}>
                <Block flex={false} style={styles.header}>
                    <TouchableOpacity onPress={goBack}>
                        <Icon name="arrow-back" size={24} style={styles.backButton} />
                    </TouchableOpacity>
                </Block>
                <ScrollView>
                    <InComment
                        name={name}
                        avatar={avatar}
                        content={content}
                        image={image}
                        replyComment={true}
                    />
                    {
                        childComment ? (
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={childComment}
                                renderItem={renderChildComment}
                                style={{ marginTop: 5 }}
                            ></FlatList>
                        ) : null

                    }
                </ScrollView>
            </Block>
            <Block color="white" style={styles.commentInput} row space="between" center>
                <TouchableOpacity>
                    <Block flex={false} row center style={{ paddingLeft: 10 }}>
                        <Image style={{ height: 35, width: 35 }} source={mocks.icons.camera} />
                    </Block>
                </TouchableOpacity>
                <Input
                    placeholder="Comment"
                    style={styles.textInput}
                    rightLabel={
                        <TouchableOpacity>
                            <FeatherIcon
                                name="send"
                                size={23}
                                color={theme.colors.gray2}
                            />
                        </TouchableOpacity>

                    }
                    rightStyle={{
                        alignItems: "center",
                        marginRight: 15,
                        backgroundColor: "transparent",
                    }}
                />
            </Block>
        </Block>
    )
}


const styles = StyleSheet.create({
    postHeader: {
        flexDirection: "row",
        alignItems: 'center',
        paddingLeft: 20,
        paddingTop: 10
    },
    name: {
        fontWeight: "bold",
        paddingLeft: 10,
        alignContent: "center"
    },
    header: {
        paddingTop: theme.sizes.base,
        paddingLeft: theme.sizes.base,
        paddingBottom: 30,
        height: height / 16
    },
    commentInput: {
        height: 50,
        width: width,
        position: "absolute",
        bottom: 0,
    },
    textInput: {
        height: 45,
        backgroundColor: theme.colors.white,
        fontSize: 15,
        borderRadius: 25,
        borderWidth: 0.5,
        width: width - 70,
        marginRight: 10,
        alignItems: "center",
        paddingHorizontal: 20,
    },
    avatar: {
        height: width / 10,
        width: width / 10,
        borderRadius: width / 2
    },
    content: {
        paddingLeft: width / 10 + 20,
        paddingRight: 10
    }
})





