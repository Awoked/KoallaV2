import Button from '@/components/Buttons/Button';
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

import styles from "./index.module.css";
import Image from 'next/image';

const LoggedUser = () => {
    const { data, status } = useSession();
    return (
        <>
            <div className={`${styles.logged_item_wrapper}`}>
                <span>Kullanıcı</span>
                <div className={` ${styles.logged_user_information_wrapper}`}>
                    {
                        data?.user?.image &&
                        <Image
                            src={data?.user?.image}
                            width={32}
                            height={32}
                            alt={data?.user?.name}
                            className='w-full rounded-full'
                        />
                    }
                    <h6>{data?.user?.name}</h6>
                </div>
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
