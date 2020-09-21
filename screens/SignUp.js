import React, { useState } from "react"
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
    Keyboard,
} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { theme, mocks } from "../constants"
import GlobalStyles from "../GlobalStyles"
import { API } from "../constants"
import api from "../constants/api"
const { width, height } = Dimensions.get("window");

export default function SignUp({ navigation }) {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [invalidConfirm, setInvalidConfirm] = useState(false)

    const goBack = () => {
        navigation.goBack();
    }

    const sigupSubmit = () => {
        Keyboard.dismiss();

        if (password != ConfirmPassword) {
            setInvalidConfirm(true);
        }
        else {
            setInvalidConfirm(false);

            const apiUrl = API.root + API.user.sigup;
            console.log(apiUrl)

            axios.post(apiUrl, {
                email: email,
                password: password,
                name: name
            })
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <Block flex={false} row style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <Icon name="arrow-back" size={24} style={styles.backButton} />
                </TouchableOpacity>
            </Block>

            <Block flex={1} center>
                <Image source={require("../assets/icon.png")} style={styles.headerImage} />
                <Text paddingLeft h1 bold>Let's Get Started</Text>

            </Block>

            <Block flex={3} center style={{
                paddingTop: 50
            }}>
                <Input
                    placeholder="Email"
                    placeholderTextColor={theme.colors.gray2}
                    style={styles.textInput}
                    email
                    onChangeText={text => setEmail(text)}
                />
                <Input
                    placeholder="Name"
                    placeholderTextColor={theme.colors.gray2}
                    style={styles.textInput}
                    onChangeText={text => setName(text)}
                />
                <Input
                    placeholder="Password"
                    placeholderTextColor={theme.colors.gray2}
                    style={styles.textInput}
                    secure
                    onChangeText={text => setPassword(text)}
                />
                <Input
                    placeholder="Confirm Password"
                    placeholderTextColor={theme.colors.gray2}
                    style={styles.textInput}
                    secure
                    onChangeText={text => setConfirmPassword(text)}
                />
                {
                    invalidConfirm ? (
                        <Block flex={false} left>
                            <Text h4 color="red">Invalid confirm Password</Text>
                        </Block>
                    ) : null
                }

                <Block flex={false} left>
                    <Button style={{ marginTop: 10 }}>
                        <Text h4 color={theme.colors.green}>Forgot Password</Text>
                    </Button>
                </Block>
                <Button style={styles.singUpButton} onPress={sigupSubmit}>
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
        fontSize: 18,
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
    text: {
        fontSize: 18
    },
})
