import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';
// import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
export default function OrderPreparing() {
    const navigation = useNavigation()
    const animation = useRef(null);
    useEffect(() => {
        if (animation.current) {
            animation.current.play();
        }
        setTimeout(() => {
            navigation.navigate("Home")
        }, 5000);
    }, []);
    return (
        <View style={styles.container}>
            <LottieView
                ref={animation}
                source={require('../assests/images/animation.json')}
                loop={true}
                speed={2}
                style={styles.lottie}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    lottie: {
        width: 400,
        height: 400,
    },
});
