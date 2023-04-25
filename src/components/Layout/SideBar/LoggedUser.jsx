import Button from '@/components/Buttons/Button';
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

import styles from "./index.module.css";

const LoggedUser = () => {
    const { data, status } = useSession();
    return (
        <>
            <div className={`${styles.logged_item_wrapper}`}>
                <span>Kullanıcı adı</span>
                <h6>{data?.user?.name}</h6>
            </div>
            <Button
                onClick={() => signOut()}
                className="w-full min-w-max px-2"
            >
                Çıkış yap
            </Button>
        </>
    )
}

export default LoggedUser
