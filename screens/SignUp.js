import React from "react"
import {
    Text,
    Block,
    Input,
    Button
} from "../components"
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput
} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons"
import { theme, mocks } from "../constants"
import GlobalStyles from "../GlobalStyles"

const { width, height } = Dimensions.get("window");

export default function SignUp({ navigation }) {

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <Block flex={false} row style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <Icon name="arrow-back" size={24} style={styles.backButton} />
                </TouchableOpacity>
            </Block>
            <Block flex={1} center style={styles.headerText}>
                <Image source={require("../assets/icon.png")} style={styles.headerImage} />
                <Text paddingLeft h1 bold>Let's Get Started</Text>
                <Text paddingLeft h4 gray>Create an account to Laver to get All friends</Text>
            </Block>
            <Block flex={3} center style={{
                paddingTop: 50
            }}>
                <Input
                    placeholder="Email"
                    placeholderTextColor={theme.colors.gray2}
                    style={styles.textInput}
                    email
                />
                <Input
                    placeholder="Name"
                    placeholderTextColor={theme.colors.gray2}
                    style={styles.textInput}
                />
                <Input
                    placeholder="Password"
                    placeholderTextColor={theme.colors.gray2}
                    style={styles.textInput}
                />
                <Input
                    placeholder="Confirm Password"
                    placeholderTextColor={theme.colors.gray2}
                    style={styles.textInput}
                />
                <Block flex={false} left>
                    <Button style={{ marginTop: 10 }}>
                        <Text h4 color={theme.colors.green}>Forgot Password</Text>
                    </Button>
                </Block>
                <Button style={styles.singUpButton}>
                    <Text h3 color="white" bold>
                        Sign Up
                    </Text>
                </Button>
            </Block>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: theme.sizes.base,
        shadowOffset: { width: 4, height: 2 },
        shadowColor: "black",
        shadowOpacity: 0.2,
        borderBottomWidth: 0.5,
        height: height / 16
    },
    backButton: {
        paddingLeft: 20
    },
    avatar: {
        height: width / 8,
        width: width / 8,
    },
    headerText: {
        paddingLeft: 10,
        paddingTop: 20,
        height: height / 10
    },
    textInputContainer: {
        padding: 10
    },
    textInput: {
        height: height / 2,
        fontSize: 17
    },
    item: {
        borderTopColor: "gray",
        borderTopWidth: 0.5,
        height: (height - height / 10 - height / 16 - height / 2) / 5
    },
    textInput: {
        fontSize: theme.sizes.caption,
        borderWidth: 0.5,
        borderColor: "black",
        paddingLeft: theme.sizes.base / 1.333,
        paddingRight: theme.sizes.base * 1.5,
        borderRadius: 30,
        marginHorizontal: 20,
        marginVertical: 5,
        height: 60,
        width: width * 0.8,
        marginTop: 20
    },
    headerImage: {
        width: width / 3,
        height: width / 3
    },
    singUpButton: {
        backgroundColor: theme.colors.green,
        height: 70,
        borderRadius: 30,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
        marginBottom: 20,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "black",
        shadowOpacity: 0.2,
        elevation: 5,
        width: width / 2,
        marginTop: 20
    },
})
