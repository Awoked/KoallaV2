import { getSession } from 'next-auth/react';

import { useRouter } from 'next/router';
import React from 'react'

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
    // const {status, data} = useSession();
    // const router = useRouter();

    // if (status === "unauthenticated" ) {
    //     router.push("/")
    // }

    return (
        <div>AdminPage</div>
    )
}

export default AdminPage