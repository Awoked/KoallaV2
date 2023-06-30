import React from 'react'

import Form from '@/components/Form'
import Input from '@/components/Form/Input'
import Button from '@/components/Buttons/Button'

import { Formik } from "formik"
import { AiOutlineLoading } from 'react-icons/ai'
import { FcGoogle } from "react-icons/fc"

import Head from 'next/head'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from 'react-tippy'

const LoginPage = () => {

    const { status } = useSession();
    const router = useRouter();

    if (status === "authenticated") {
        router.push("/")
    }


    const handleLogin = (values, actions) => {
        setTimeout(async () => {

            const res = await signIn('credentials', {
                username: values.username,
                password: values.password,
                redirect: false
            })

            if (res.ok) {
                toast.success("Giriş Başarılı.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                return;
            }

            toast.error("Kullanıcı adı veya şifre hatalı.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

            await actions.setSubmitting(false)
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

        return errors;
    }

    return (
        <>
            <Head>
                <title>Giriş Yap</title>
            </Head>
            <ToastContainer

            />
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}

                validate={validateForm}
                onSubmit={handleLogin}
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
                                <Button
                                    variant={"outline"}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`${isSubmitting && "cursor-not-allowed"}`}
                                >
                                    {
                                        isSubmitting ?
                                            <AiOutlineLoading className='animate-spin' size={24} />
                                            :
                                            "Giriş Yap"
                                    }
                                </Button>
                                <div className="other flex justify-center flex-wrap gap-3">

                                    <Tooltip
                                        title='Google ile giriş yap.'
                                        position='bottom'
                                    >
                                        <Button
                                            type="button"
                                            onClick={() => signIn('google')}
                                            className={`bg-white rounded-full p-1.5 border w-max`}
                                        >
                                            <FcGoogle size={38} />
                                        </Button>
                                    </Tooltip>
                                </div>
                            </Form>
                        </form>
                    )
                }

            </Formik>

        </>
    )
}

export default LoginPage