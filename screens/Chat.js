import React from "react"
import {
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    FlatList
} from "react-native"
import {
    Text,
    Block,
    Button,
    Input
} from "../components"
import GlobalStyles from "../GlobalStyles"
import { theme, mocks } from "../constants"
import IonIcon from "react-native-vector-icons/FontAwesome"
import {
    FriendStatus,
    FriendMessage
} from "../components"

const { width, height } = Dimensions.get("window");

export default function Chat(props) {

    const { navigation } = props;

    const friendStatus = [
        {
            avatar: mocks.profile.avatar,
            online: false
        },
        {
            avatar: mocks.profile.avatar,
            online: true
        },
        {
            avatar: mocks.profile.avatar,
            online: false
        },
        {
            avatar: mocks.profile.avatar,
            online: true
        },
        {
            avatar: mocks.profile.avatar,
            online: false
        },
        {
            avatar: mocks.profile.avatar,
            online: false
        },
        {
            avatar: mocks.profile.avatar,
            online: true
        },
    ]

    const listMessage = [
        {
            avatar: mocks.profile.avatar,
            name: "Phạm Hoàng Nam",
            message: "Hi Nam",
            online: true
        },
        {
            avatar: mocks.profile.avatar,
            name: "Nguyễn Hữu Thanh",
            message: "Lên công ty chưa",
            online: true
        },
        {
            avatar: mocks.profile.avatar,
            name: "Vũ Ngọc Sáng",
            message: "Game đi bạn ơi",
            online: false
        },
        {
            avatar: mocks.profile.avatar,
            name: "Phạm Hoàng Nam",
            message: "Hey Bro! What's up??",
            online: true
        },
        {
            avatar: mocks.profile.avatar,
            name: "Phạm Hoàng Nam",
            message: "Hey Bro! What's up??",
            online: true
        },
        {
            avatar: mocks.profile.avatar,
            name: "Phạm Hoàng Nam",
            message: "Hey Bro! What's up??",
            online: false
        },
        {
            avatar: mocks.profile.avatar,
            name: "Phạm Hoàng Nam",
            message: "Hey Bro! What's up??",
            online: true
        },
    ]

    const renderFriendStatus = ({ item }) => {
        return (
            <FriendStatus avatar={item.avatar} online={item.online} />
        )
    }

    const renderMessage = ({ item }) => {
        return (
            <FriendMessage avatar={item.avatar} online={item.online} name={item.name} message={item.message} />
        )
    }

    return (
        <SafeAreaView style={[GlobalStyles.droidSafeArea,]}>
            <Block flex={false} row center space="between" style={[styles.header, styles.mainContainer]}>
                <Text h2 bold>Messages</Text>
                <Button onPress={() => navigation.navigate("Profile")}>
                    <Image source={mocks.profile.avatar} style={styles.avatar} />
                </Button>
            </Block>
            <Block flex={false}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Block middle style={[styles.search, styles.mainContainer]} flex={false}>
                        <Input
                            placeholder="Search"
                            placeholderTextColor={theme.colors.gray2}
                            style={styles.searchInput}
                            rightStyle={styles.searchRight}
                            rightLabel={
                                <IonIcon
                                    name="search"
                                    size={theme.sizes.base}
                                    color={theme.colors.gray2}
                                    style={styles.searchIcon}
                                />
                            }

                        />
                    </Block>
                    <Block
                        flex={false}
                        style={{
                            paddingLeft: 20,
                            paddingTop: 20
                        }}
                    >
                        <Text bold>
                            <Text>20 </Text>
                            <Text>
                                Friends Online
                            </Text>
                        </Text>
                    </Block>
                    <Block row flex={false} style={styles.messageList}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={friendStatus}
                            renderItem={renderFriendStatus}
                        />
                    </Block>
                    <Block
                        flex={false}
                        style={{
                            paddingLeft: 20,
                            paddingTop: 20
                        }}
                    >
                        <Text bold>
                            Recent Conversations
                        </Text>
                    </Block>
                    <Block flex={false} style={styles.mainContainer}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={listMessage}
                            renderItem={renderMessage}
                        />
                    </Block>
                </ScrollView>
            </Block>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base
    },
    avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2
    },
    searchInput: {
        fontSize: theme.sizes.caption,
        height: theme.sizes.base * 2.8,
        borderRadius: 25,
        backgroundColor: "rgba(142, 142, 147, 0.06)",
        borderColor: "rgba(142, 142, 147, 0.06)",
        paddingLeft: theme.sizes.base / 1.333,
        paddingRight: theme.sizes.base * 1.5
    },
    searchRight: {
        top: 0,
        marginVertical: 0,
        backgroundColor: "transparent"
    },
    searchIcon: {
        position: "absolute",
        right: theme.sizes.base / 0.6,
        top: theme.sizes.base / 1.2
    },
    mainContainer: {
        paddingLeft: width / 20,
        paddingRight: width / 20
    },
    friendAvatar: {

    },
    messageList: {
    },
    stories: {
        paddingLeft: width / 20
    }
})
