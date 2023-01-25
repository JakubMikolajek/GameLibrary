import {Pressable, StyleSheet} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";

const Icon = ({icon, color, onPress}) => {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <Ionicons name={icon} color={color} size={24}/>
        </Pressable>
    )
}

export default Icon

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75
    }
})