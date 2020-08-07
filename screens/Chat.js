import React from "react"
import {
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity
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

    return (
        <SafeAreaView style={[GlobalStyles.droidSafeArea,]}>
            <Block flex={false} row center space="between" style={[styles.header, styles.mainContainer]}>
                <Text h2 bold>Tin nhắn</Text>
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
                            // onFocus={() => handleSearchFocus(true)}
                            // onBlur={() => handleSearchFocus(false)}
                            // onChangeText={text => setState({ searchString: text })}
                            // value={searchString}
                            // onRightPress={() =>
                            //     isEditing ? setState({ searchString: null }) : null
                            // }
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
                    <Block row flex={false} style={styles.messageList}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <FriendStatus />
                            <FriendStatus />
                            <FriendStatus />
                            <FriendStatus />
                            <FriendStatus />
                            <FriendStatus />
                        </ScrollView>
                    </Block>
                    <Block flex={false} style={styles.mainContainer}>
                        <FriendMessage />
                        <FriendMessage />
                        <FriendMessage />
                        <FriendMessage />
                        <FriendMessage />
                        <FriendMessage />
                        <FriendMessage />
                        <FriendMessage />
                        <FriendMessage />
                        <FriendMessage />
                        <FriendMessage />
                    </Block>
                </ScrollView>
            </Block>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base / 1.33,
        paddingTop: theme.sizes.base
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
        marginTop: 10
    },
    stories: {
        paddingLeft: width / 20
    }
})
