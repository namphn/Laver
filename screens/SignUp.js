import React, { useState, useRef } from "react"
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
    ActivityIndicator,
    Animated
} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { theme, mocks } from "../constants"
import GlobalStyles from "../GlobalStyles"
import { API, status } from "../constants"
import api from "../constants/api"
const { width, height } = Dimensions.get("window");
import { sigupApi } from "../services/Auth"

export default function SignUp({ navigation }) {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [invalidConfirm, setInvalidConfirm] = useState(false)
    const [loading, setLoading] = useState(false);
    const [succes, setSucces] = useState(false);
    const [error, setError] = useState(false);
    const [errorContent, setErrorContent] = useState("")

    const goBack = () => {
        navigation.goBack();
    }

    const returnRegister = () => {
        setSucces(false);
        setError(false);
    }

    const sigupSubmit = async () => {
        Keyboard.dismiss();

        if (password != ConfirmPassword) {
            setInvalidConfirm(true);
        }
        else {
            setInvalidConfirm(false);
            setLoading(true);
            const response = await sigupApi(email, password, name);
            console.log(response)
            if (response == status.SENT_MAIL) {
                setError(false);
                setSucces(true);
                setLoading(false);
            }
            else if(response != null) {
                setSucces(true);
                setError(true);
                setLoading(false)
                if (response == status.EMAIL_ALREADY_EXISTS.header) setErrorContent(status.EMAIL_ALREADY_EXISTS.content);
                if (response == status.INVALID_EMAIL.header) setErrorContent(status.INVALID_EMAIL.content);
                if (response == status.ERROR.header) setErrorContent(status.ERROR.content);
            }
            else {
                setSucces(true);
                setError(true);
                setLoading(false)
                setErrorContent(status.ERROR.content);
            }
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
            {
                succes == false ? (
                    <Block flex={3} center style={{
                        paddingTop: 50,
                    }}>
                        <Input
                            placeholder="Email"
                            placeholderTextColor={theme.colors.gray2}
                            style={styles.textInput}
                            email
                            onChangeText={text => setEmail(text)}
                            editable={!loading}
                        />
                        <Input
                            placeholder="Name"
                            placeholderTextColor={theme.colors.gray2}
                            style={styles.textInput}
                            onChangeText={text => setName(text)}
                            editable={!loading}
                        />
                        <Input
                            placeholder="Password"
                            placeholderTextColor={theme.colors.gray2}
                            style={styles.textInput}
                            secure
                            onChangeText={text => setPassword(text)}
                            editable={!loading}
                        />
                        <Input
                            placeholder="Confirm Password"
                            placeholderTextColor={theme.colors.gray2}
                            style={styles.textInput}
                            secure
                            onChangeText={text => setConfirmPassword(text)}
                            editable={!loading}
                        />
                        {
                            invalidConfirm == true ? (
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
                            {
                                loading == true ? (
                                    <ActivityIndicator size="large" color={theme.colors.white} />
                                ) : (
                                        <Text h3 color="white" bold>
                                            Sign Up
                                        </Text>
                                    )
                            }
                        </Button>
                    </Block>
                ) : (
                        <Block flex={false} style={styles.succes} center>
                            {
                                error == true ? (
                                    <Block flex={false} center>
                                        <Block>
                                            <Text bold h2>
                                                Error
                                                </Text>
                                            <Text h3>{errorContent}</Text>
                                        </Block>
                                        <Block flex={2}>
                                            <Button style={styles.singUpButton} onPress={returnRegister}>
                                                <Text h3 color="white" bold>OK</Text>
                                            </Button>
                                        </Block>
                                    </Block>
                                ) : (
                                        <Block flex={false} center>
                                            <Block>
                                                <Text bold h2>
                                                    Registration Success.
                                                </Text>
                                                <Text h3>Please check your email to verify your email.</Text>
                                            </Block>
                                            <Block flex={2}>
                                                <Button style={styles.singUpButton} onPress={goBack}>
                                                    <Text h3 color="white" bold>OK</Text>
                                                </Button>
                                            </Block>
                                        </Block>
                                    )
                            }

                        </Block>
                    )
            }
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
    succes: {
        paddingTop: 20,
        position: "absolute",
        top: height / 2 - 100,
        height: 200,
        width: width - 10,
    }
})
