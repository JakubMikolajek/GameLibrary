import {StyleSheet, View, Text} from 'react-native'
import {Controller} from "react-hook-form";
import Input from "./Input";

const InputController = ({control, errors, placeholder, name, keyboardType, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <Input
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        secureTextEntry={secureTextEntry}
                        errors={errors}
                    />
                )}
                name={name}
            />
            <View style={styles.errorContainer}>
                {errors && <Text style={styles.errorMessage}>{errors?.message}</Text>}
            </View>
        </View>
    )
}

export default InputController

const styles = StyleSheet.create({
    container:{
        width: 250,
        height: 100,
        alignItems:"center"
    },
    errorMessage: {
        color: "red"
    },
    errorContainer:{
        padding:15
    },
})