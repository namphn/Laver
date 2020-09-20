import React, { useEffect } from "react"
import {
    Text,
    Block,
    Input
} from "../components"
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    FlatList,
} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import FeatherIcon from "react-native-vector-icons/Feather"
import { theme, mocks } from "../constants"
import GlobalStyles from "../GlobalStyles"

const { width, height } = Dimensions.get("window");

export default function Followers({ navigation, route }) {

    const {
        followers
    } = route.params;

    const goBack = () => {
        navigation.goBack();
    }

    const renderFollowers = ({ item }) => {
        return (
            <Block flex={false}
                center
                row
                style={{
                    paddingBottom: 20,
                }}>
                <Block flex={false}>
                    <Image source={{uri: item.avatar}} style={styles.avatar} />
                </Block>
                <Block style={{
                    paddingLeft: 20
                }}>
                    <Text bold h4>{item.name}</Text>
                </Block>
            </Block>
        )
    }

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <Block flex={false} row center style={styles.header} color={theme.colors.white}>
                <TouchableOpacity onPress={goBack}>
                    <Icon name="arrow-back" size={24} style={styles.backButton} />
                </TouchableOpacity>
            </Block>
            <Block flex={false} style={{
                paddingTop: height / 15,
            }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={followers}
                    renderItem={renderFollowers}
                    style={{ marginTop: 10, paddingLeft: 20 }}
                    removeClippedSubviews={true}
                ></FlatList>
            </Block>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        position: "absolute",
        paddingTop: theme.sizes.base,
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
        height: height / 15,
        zIndex: 1,
        width: width,
    },
    backButton: {
        paddingLeft: 20
    },
    avatar: {
        height: height / 15,
        width: height / 15,
        borderRadius: height / 30
    },
})
