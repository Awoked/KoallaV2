import React from 'react'

import Form from '@/components/Form'
import Input from '@/components/Form/Input'
import Button from '@/components/Buttons/Button'

import { Formik } from "formik"
import { AiOutlineLoading } from 'react-icons/ai'
import Head from 'next/head'


import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {

    const handleRegister = (values, actions) => {
        setTimeout(async () => {

            try {
                if (values.password !== values.passwordRepeat) {
                    const error = new Error('Hata');
                    error.name = "password"
                    throw error;
                }

                const response = await fetch(`/api/auth/users?process=register`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: values.username, password: values.password })
                })

                await actions.setSubmitting(false)

                if (response.status !== 200 && response.status !== 409) {
                    const error = new Error("Hata");
                    error.name = "server";
                    throw error;
                } else if (response.status === 409) {
                    const error = new Error("Kullanıcı zaten kayıtlı");
                    error.name = "conflict";
                    throw error;
                }
                toast.success("Kayıt başarılı!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })


            } catch (error) {

                switch (error.name) {
                    case "password":
                        toast.error("Şifreler uyuşmuyor.", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        })
                        break;
                    case "server":
                        toast.error("Sunucuda bir hata meydana geldi.", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        })
                        break;
                    case "conflict":
                        toast.error("Bu kullanıcı zaten kayıtlı.", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        })
                        break;
                    default:
                        toast.error("Bilinmeyen hata.", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        })
                        break;
                }

            }

        }, 1000);
    }

    const validateForm = values => {
        const errors = {}
        if (!values.username) {
            errors.username = "Kullanıcı adı boş bırakılamaz."
        }
        if (values.username.length > 8) {
            errors.username = "Kullanıcı adı çok uzun";
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
        if (values.passwordRepeat.length > 12 && values.password.length > 12) {
            errors.passwordRepeat = "Şifre çok uzun!";
        }

        return errors;
    }

    return (
        <>
            <Head>
                <title>Kayıt Ol</title>
            </Head>
            <ToastContainer />
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