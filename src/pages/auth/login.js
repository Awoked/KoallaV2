import React from 'react'

import Form from '@/components/Form'
import Input from '@/components/Form/Input'
import Button from '@/components/Buttons/Button'

import { Formik } from "formik"
import { AiOutlineLoading } from 'react-icons/ai'

const login = () => {

    const handleLogin = (values, actions) => {
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

        return errors;
    }

    return (
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
                                onClick={() => console.log("test")}
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
                        </Form>
                    </form>
                )
            }
        </Formik>

    )
}

export default login