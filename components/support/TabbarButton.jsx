import { View, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import React, { useEffect } from 'react'
import { AntDesign, FontAwesome, FontAwesome5, FontAwesome6, Ionicons } from "@expo/vector-icons";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const TabbarButton = ({ ...props }) => {
    const { onLongPress, onPress, isFocused, label, routename } = props;
    const scale = useSharedValue(0);
    const icons = {
        index: (props) => (
            <AntDesign name="home" size={24} color="black" {...props} />
        ),
        map: (props) => (
            <FontAwesome5 name="map"  size={24} color="black" {...props} />
        ),
        profile: (props) => (
            <FontAwesome5 name="user" size={24} color="black" {...props} />
        ),
        settings: (props) => (
            <FontAwesome6 name="cog" size={24} color="black" {...props} />
        ),
        workers: (props) => (
            <Ionicons name="briefcase-outline" size={24} color="black" {...props} />
        ),
    };
    useEffect(() => {
        scale.value = withSpring(typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : 0, { duration: 500 });
    }, [scale, isFocused]);
    const animatedStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [0.9, 1.4]);
        const top = interpolate(scale.value, [0, 1], [0, 10]);
        const padding = interpolate(scale.value, [0, 1], [0, 2]);
        const width = interpolate(scale.value, [0, 1], [30, 50]);
        return {
            transform: [{ scale: scaleValue }],
            top,
            width,
            backgroundColor: isFocused ? "#EFEFEF" : "white",
            borderRadius: 16,
            padding,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            


        };
    });
    const animatedStyle2 = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0]);
        return {
            opacity,
        };
    });
    return (
        <Pressable
            key={routename}

            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
        >
            <Animated.View style={animatedStyle}>
                {icons[routename]({
                    color: isFocused ? "#069E2D" : "black",
                })
                }
                </Animated.View>
            <Animated.Text
                style={[{
                    color: isFocused ? "#069E2D" : "black",
                    flexDirection: "column",
                },animatedStyle2]}
            >
                {" "}
                {label}
            </Animated.Text>
        </Pressable>
    )
}

export default TabbarButton

const styles = StyleSheet.create({
    tab: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: 26,
        textAlign: "center",
        gap: 2,
        fontSize: 16,
    },
})