import Button from '@/components/Buttons/Button';
import Input from '@/components/Form/Input';
import Textarea from '@/components/Form/Textarea';
import MovieCard from '@/components/MovieCardSection/MovieCard';
import SectionTitle from '@/components/SectionTitle';
import { Formik } from 'formik';

import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import React, { useState, useEffect } from 'react'
import { Tooltip } from 'react-tippy'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session || session.user?.role !== "admin") {
        // Kullanıcı oturumu yoksa istenen sayfaya yönlendirme yapabilirsiniz
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    // Kullanıcı oturumu varsa istenen sayfayı sunucu tarafında işlemlemek için gerekli verileri hazırlayabilirsiniz
    return {
        props: {
            // İşlenecek sayfa için gereken veriler
        },
    };
}


const AdminPage = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [inputValues, setInputValues] = useState({});

    const router = useRouter();

    const validateAddForm = (values) => {
        const errors = {};
        const requiredMessage = "Zorunlu alan";
        if (!values.title) {
            errors.title = requiredMessage
        }
        if (!values.description) {
            errors.description = requiredMessage;
        }
        if (!values.imageCover) {
            errors.imageCover = requiredMessage;
        }
        if (!values.movieURL) {
            errors.movieURL = requiredMessage;
        }
        if (!values.imdb) {
            errors.imdb = requiredMessage;
        }


        return errors;
    }

    const addFormSubmitHandler = (values, actions) => {

        fetch("/api/movies", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        }).then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                toast.error("Film eklenirken bir hata oluştu.", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
        }).then(data => {
            toast.success("Film başarıyla eklendi.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            setTimeout(() => {
                router.reload();
            }, 800);
        })
    }

    useEffect(() => {
        fetch(`/api/movies`)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
            }).then(data => {
                setMoviesData(data);
            }).catch(err => {

            })
    }, [])


    const deleteMovie = (id) => {
        fetch(`/api/movies?id=${id}`, {
            method: "DELETE"
        }).then(res => {
            if (res.status === 200) {
                toast.success("Film başarıyla silindi.", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            } else {
                toast.error("Film silinirken bir hata oluştu.", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
        })
    }

    return (
        <>
        <Head>
            <title>Koalla - Admin Paneli</title>
        </Head>
            <ToastContainer />

            <section className="py-4">
                <div className="container">
                    <div className="mb-8 w-max px-4 py-2 bg-themeOrange rounded-lg">
                        <SectionTitle
                            title={"Admin Paneli"}
                            className="!text-3xl !p-0"
                        />
                    </div>
                </div>
            </section>


            <section className="py-2">
                <div className="container">



                    <SectionTitle
                        title={"Film Ekle"}
                        className={"text-green-500"}
                    />


                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="md:w-1/2">
                            <Formik
                                initialValues={{
                                    title: '',
                                    description: '',
                                    imageCover: '',
                                    movieURL: '',
                                    imdb: ''
                                }}
                                validate={validateAddForm}
                                onSubmit={addFormSubmitHandler}
                            >
                                {
                                    ({ handleSubmit, errors, values, handleChange, isSubmitting }) => (
                                        <>
                                            {setInputValues(values)}
                                            <form onSubmit={handleSubmit} className="w-full">


                                                <div className="mb-4">
                                                    <Input
                                                        inputLabel={"Filmin adı"}
                                                        placeholder="Örn: Ready Player One"
                                                        name="title"
                                                        onChange={handleChange}
                                                        value={values.title}
                                                        error={errors.title}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <Textarea
                                                        inputLabel={"Filmin Açıklaması"}
                                                        placeholder="Açıklama"
                                                        name="description"
                                                        onChange={handleChange}
                                                        value={values.description}
                                                        error={errors.description}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <Input
                                                        inputLabel={"Filmin resmi"}
                                                        placeholder="Resim url'si"
                                                        name="imageCover"
                                                        onChange={handleChange}
                                                        value={values.imageCover}
                                                        error={errors.imageCover}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <Input
                                                        inputLabel={"Filmin linki"}
                                                        placeholder="Oynatma linki"
                                                        name="movieURL"
                                                        onChange={handleChange}
                                                        value={values.movieURL}
                                                        error={errors.movieURL}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <Input
                                                        inputLabel={"Filmin IMDB puanı"}
                                                        placeholder="IMDB Puanı"
                                                        type="number"
                                                        maxLength="2"
                                                        min="0"
                                                        max="10"
                                                        name="imdb"
                                                        onChange={handleChange}
                                                        value={values.imdb}
                                                        error={errors.imdb}
                                                        required
                                                    />
                                                </div>

                                                <div className="flex">
                                                    <Button className="w-full">
                                                        <Tooltip
                                                            title="Filmi ekle"
                                                            position="bottom"
                                                        >
                                                            Ekle
                                                        </Tooltip>
                                                    </Button>
                                                </div>
                                            </form>
                                        </>
                                    )
                                }
                            </Formik>
                        </div>


                        <div className="md:w-1/2">
                            <p className="text-lg mb-4">
                                <strong>Önizle</strong>
                            </p>


                            <div className="max-w-xs">
                                <MovieCard
                                    movieName={inputValues.title}
                                    movieDetails={inputValues.description}
                                    movieImage={inputValues.imageCover}
                                    imdb={inputValues.imdb}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-14">
                <div className="container">
                    <div className="mb-4">
                        <SectionTitle
                            title={"Filmler"}
                            className="text-red-500"
                        />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            moviesData.map((data, index) => (
                                <div
                                    key={index}
                                >
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <Button
                                            onClick={() => deleteMovie(data.id)}
                                            variant="outline"
                                        >
                                            Sil
                                        </Button>
                                        <Button
                                            className="text-yellow-400 border-yellow-400 hover:bg-yellow-400"
                                            variant="outline"
                                        >
                                            Düzenle
                                        </Button>
                                    </div>
                                    <MovieCard
                                        movieName={data.title}
                                        movieDetails={data.description}
                                        movieId={data.id}
                                        movieImage={data.imageCover}
                                        imdb={data.imdb}
                                        slug={data.slug}
                                        movieData={data}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminPage