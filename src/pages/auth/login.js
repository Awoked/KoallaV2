import React from 'react'

import Form from '@/components/Form'
import Input from '@/components/Form/Input'
import Button from '@/components/Buttons/Button'

import { Formik } from "formik"

const login = () => {

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

            onSubmit={(values, actions) => {
                alert(JSON.stringify(values, null, 2))
                actions.setSubmitting(false)
            }}
        >
            {
                ({ handleSubmit, errors, values, handleChange }) => {

                    <form onSubmit={handleSubmit}>
                        asdasd
                        <Form>

                            <Input
                                inputLabel={"Kullanıcı Adı"}
                                placeholder="Kullanıcı Adı"
                                name="username"
                                onChange={handleChange}
                                value={values.username}
                            />
                            {errors.username && errors.username}
                            <Input
                                inputLabel={"Şifre"}
                                placeholder="Şifre"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={values.password}
                            />
                            {errors.password && errors.password}

                            <Button
                                variant={"outline"}
                                onClick={() => console.log("test")}
                                type="submit"
                            >
                                Giriş Yap
                            </Button>
                        </Form>
                    </form>
                }
            }
        </Formik>

    )
}

export default login