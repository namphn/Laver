import React, { useEffect } from "react"
import { Block, Text } from "../components"
import {
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    FlatList
} from "react-native"
import { theme, mocks } from "../constants"

const { width, height } = Dimensions.get("window");

export default function InComment(props) {

    const {
        name,
        avatar,
        content,
        image,
        childComment
    } = props;

    const renderChildComment = ({ item }) => {
        return (
            <Block flex={false} style={{ paddingLeft: 40 }}>
                <Block flex={false} row center space="between">
                    <TouchableOpacity style={styles.postHeader}>
                        <Image source={item.avatar} style={styles.avatar} />
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
        <Block flex={false} >
            <Block flex={false}>
                <Block flex={false} row center space="between">
                    <TouchableOpacity style={styles.postHeader}>
                        <Image source={avatar} style={styles.avatar} />
                        <Text style={styles.name}>{name}</Text>
                    </TouchableOpacity>
                    <Text style={{
                        paddingRight: 10,
                        fontSize: 11
                    }}>12 min</Text>
                </Block>
                <Block flex={false} style={styles.content}>
                    <Text>{content}</Text>
                </Block>
                <TouchableOpacity style={{ ...styles.content, paddingTop: 5 }}>
                    <Text bold color={theme.colors.blue}>Reply</Text>
                </TouchableOpacity>
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
            </Block>
        </Block>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: theme.colors.white
    },
    avatar: {
        height: width / 10,
        width: width / 10,
        borderRadius: width / 2
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
    content: {
        paddingLeft: width / 10 + 20,
        paddingRight: 10
    }
})
