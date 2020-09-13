import React from "react"
import {
    Image,
    Dimensions,
    StyleSheet,
    Easing 
} from "react-native"
import {
    Block,
    Button,
    Text
} from "../components"
import { theme } from "../constants"
import Animated from "react-native-reanimated"
import { TapGestureHandler, State } from "react-native-gesture-handler"

const { width, height } = Dimensions.get("window");

const {  Value,
    event,
    block,
    cond,
    eq,
    set,
    Clock,
    startClock,
    stopClock,
    debug,
    timing,
    clockRunning,
    interpolate,
    Extrapolate
 } = Animated;

function runTiming(clock, value, dest) {
    const state = {
      finished: new Value(0),
      position: new Value(0),
      time: new Value(0),
      frameTime: new Value(0)
    };
  
    const config = {
      duration: 1000,
      toValue: new Value(0),
      easing: Easing.inOut(Easing.ease)
    };
  
    return block([
      cond(clockRunning(clock), 0, [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock)
      ]),
      timing(clock, state, config),
      cond(state.finished, debug('stop clock', stopClock(clock))),
      state.position
    ]);
  }

export default function Login() {

    let buttonOpacity = new Value(1);

    const onStateChange = event([
        {
            nativeEvent: ({ state }) =>
                block([
                    cond(
                        eq(state, State.END),
                        buttonOpacity = runTiming(new Clock(), 1, 0)
                    )
                ])
        }
    ]);


    return (
        <Block flex={1} color="white" style={styles.mainContainer}>
            <Block style={{ ...StyleSheet.absoluteFill }}>
                <Image style={styles.background} source={require("../assets/images/login_background.jpg")} />
            </Block>
            <Block flex={false} style={styles.buttonContainer}>
                <TapGestureHandler onHandlerStateChange={onStateChange}>
                    <Animated.View>
                        <Button style={{...styles.button, opacity: buttonOpacity}}>
                            <Text style={styles.text}>SIGN IN</Text>
                        </Button>
                    </Animated.View>
                </TapGestureHandler>

                <Button style={{ ...styles.button, backgroundColor: theme.colors.green }}>
                    <Text style={{ ...styles.text, color: "white" }}>SIGN UP</Text>
                </Button>
            </Block>
        </Block>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "flex-end"
    },
    background: {
        height: height,
        width: width,
        flex: 1
    },
    buttonContainer: {
        height: height / 3,
    },
    button: {
        backgroundColor: "white",
        height: 70,
        borderRadius: 30,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    text: {
        fontSize: 18
    }
})
