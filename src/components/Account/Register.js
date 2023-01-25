import {
    Button, Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registerValidation} from "../../helpers/validation";
import InputController from "../UI/InputController";

const Register = ({onSubmit}) => {
    const navigation = useNavigation()
    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(registerValidation),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <Text style={styles.formText}>Rejestracja</Text>
                        <InputController
                            control={control}
                            name="email"
                            keyboardType="email-address"
                            placeholder="Email"
                            errors={errors.email}
                        />
                        <InputController
                            control={control}
                            name="password"
                            placeholder="Hasło"
                            secureTextEntry={true}
                            errors={errors.password}
                        />
                        <InputController
                            control={control}
                            name="confirmPassword"
                            placeholder="Potwierdź hasło"
                            secureTextEntry={true}
                            errors={errors.confirmPassword}
                        />
                        <View style={styles.formBtnContainer}>
                            <Button title="Zarejestruj się" onPress={handleSubmit(onSubmit)}/>
                        </View>
                    </View>
                    <View style={styles.btnSwitchContainer}>
                        <Text style={styles.switchText}>Nie masz konta?</Text>
                        <Button title="Zaloguj się" onPress={() => navigation.navigate("Login")}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    formContainer: {
        flex: 3,
        margin: 10,
        alignItems: "center"
    },
    formBtnContainer: {
        marginTop: 12
    },
    formText: {
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 24,
        marginTop: 8
    },
    btnSwitchContainer: {
        flex: 1,
        width: 250,
        alignItems: "center",
        alignSelf: "center"
    },
    switchText: {
        fontSize: 16,
        marginBottom: 8
    }
})