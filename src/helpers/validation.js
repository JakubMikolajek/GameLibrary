import * as yup from "yup"
export const loginValidation = yup.object().shape({
    email: yup.string().required("Email jest wymagany.").email("Email musi zawierać @."),
    password: yup.string().required("Hasło jest wymagane.").min(8, "Hasło musi się składać minimum z 8 znaków.")
})

export const registerValidation = yup.object().shape({
    email: yup.string().required("Email jest wymagany.").email("Email musi zawierać @."),
    password: yup.string().required("Hasło jest wymagane.").min(8, "Hasło musi się składać minimum z 8 znaków."),
    confirmPassword: yup.string().required("Wymagane jest potwierdzenie hasła.").oneOf([yup.ref("password")], "Hasła muszą się zgadzać")
})