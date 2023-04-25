import React from 'react'

import Form from '@/components/Form'
import Input from '@/components/Form/Input'
import Button from '@/components/Buttons/Button'

import { Formik } from "formik"
import { AiOutlineLoading } from 'react-icons/ai'
import Head from 'next/head'

const RegisterPage = () => {

    const handleRegister = (values, actions) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
        }, 1000);
    }

    const validateForm = values => {
        const errors = {}
        if (!values.username) {
            errors.username = "Kullanıcı adı boş bırakılamaz."
        }
        if (!values.password) {
            errors.password = "Şifre boş bırakılamaz."
        }
        if (!values.passwordRepeat) {

            errors.passwordRepeat = "Şifre Tekrarı boş bırakılamaz."
        }

        if (values.password !== values.passwordRepeat) {
            errors.passwordRepeat = "Şifreler Uyuşmuyor."
        }

        return errors;
    }

    return (
        <>
            <Head>
                <title>Kayıt Ol</title>
            </Head>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    passwordRepeat: ''
                }}

                validate={validateForm}
                onSubmit={handleRegister}
            >
                {
                    ({ handleSubmit, errors, values, handleChange, isSubmitting }) => (

                        <form onSubmit={handleSubmit} className='w-full h-full'>
                            <Form>

                                <Input
                                    inputLabel={"Kullanıcı Adı"}
                                    placeholder="Kullanıcı Adı"
                                    name="username"
                                    onChange={handleChange}
                                    value={values.username}
                                    error={errors.username}
                                    required
                                />
                                <Input
                                    inputLabel={"Şifre"}
                                    placeholder="Şifre"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    error={errors.password}
                                    required
                                />
                                <Input
                                    inputLabel={"Şifre Tekrar"}
                                    placeholder="Şifre Tekrar"
                                    type="password"
                                    name="passwordRepeat"
                                    onChange={handleChange}
                                    error={errors.passwordRepeat}
                                    required
                                />
                                <Button
                                    variant={"outline"}
                                    onClick={() => console.log("test")}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`${isSubmitting && "cursor-not-allowed"}`}
                                >
                                    {
                                        isSubmitting ?
                                            <AiOutlineLoading className='animate-spin' size={24} />
                                            :
                                            "Kayıt Ol"
                                    }
                                </Button>
                            </Form>
                        </form>
                    )
                }
            </Formik>
        </>

    )
}

export default RegisterPage