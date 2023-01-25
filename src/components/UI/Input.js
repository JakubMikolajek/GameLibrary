import {StyleSheet, Text, TextInput, View} from 'react-native'

const Input = ({onBlur, onChange, value, keyboardType, placeholder, secureTextEntry, errors}) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.text, errors && styles.textInvalid]}>{placeholder}</Text>
            <TextInput
                style={[styles.input, errors && styles.inputInvalid]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        width:220,
        height:50,
        margin: 8,
    },
    text: {
        color: "#000000",
        marginBottom: 4,
    },
    textInvalid: {
        color: "red",
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#000000" ,
        fontSize: 16,
    },
    inputInvalid: {
        borderColor: "red"
    },
})