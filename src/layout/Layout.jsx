import SideBar from '@/components/Layout/SideBar'
import React, { useEffect, useState } from 'react'
import 'react-tippy/dist/tippy.css'


import { Comfortaa } from 'next/font/google'
import Search from '@/components/Layout/Search'
import { useSnapshot } from 'valtio'
import state from '@/store'
import useWindowSize from '@/components/hooks/useWindowSize'
import MoviePlayer from '@/components/MoviePlayer'
import { useRouter } from 'next/router'

import PageLoader from '@/components/PageLoader'
import useTextMixer from '@/components/hooks/useTextMixer'
import TextToSpan from '@/helpers/TextToSpan'
import { Power4, gsap } from 'gsap'
import useLoading from 'next-loader/useLoading'



const comfortaa = Comfortaa({ subsets: ['latin'] })

const Layout = ({ children }) => {

    const snap = useSnapshot(state);
    const { screenWidth } = useWindowSize();
    const router = useRouter();

    const mars = `Korkma, sönmez bu şafaklarda yüzen al sancak;
Sönmeden yurdumun üstünde tüten en son ocak.
O benim milletimin yıldızıdır, parlayacak;
O benimdir, o benim milletimindir ancak.
Çatma, kurban olayım çehreni ey nazlı hilâl!
Kahraman ırkıma bir gül… ne bu şiddet bu celâl?
Sana olmaz dökülen kanlarımız sonra helâl,
Hakkıdır, Hakk’a tapan, milletimin istiklâl.
Ben ezelden beridir hür yaşadım, hür yaşarım.
Hangi çılgın bana zincir vuracakmış? Şaşarım!
Kükremiş sel gibiyim; bendimi çiğner, aşarım;
Yırtarım dağları, enginlere sığmam, taşarım.
Garb’ın âfâkını sarmışsa çelik zırhlı duvar;
Benim iman dolu göğsüm gibi serhaddim var.
Ulusun, korkma! Nasıl böyle bir îmânı boğar,
"Medeniyet!" dediğin tek dişi kalmış canavar?
Arkadaş! Yurduma alçakları uğratma sakın;
Siper et gövdeni, dursun bu hayâsızca akın.
Doğacaktır sana va’dettiği günler Hakk’ın…
Kim bilir, belki yarın… belki yarından da yakın.
Bastığın yerleri "toprak!" diyerek geçme, tanı!
Düşün altındaki binlerce kefensiz yatanı.
Sen şehîd oğlusun, incitme, yazıktır atanı;
Verme, dünyâları alsan da, bu cennet vatanı.
Kim bu cennet vatanın uğruna olmaz ki fedâ?
Şühedâ fışkıracak, toprağı sıksan şühedâ!
Cânı, cânânı, bütün varımı alsın da Hudâ,
Etmesin tek vatanımdan beni dünyâda cüdâ.
Ruhumun senden, İlâhî, şudur ancak emeli:
Değmesin ma’bedimin göğsüne nâ-mahrem eli!
Bu ezanlar-ki şehâdetleri dînin temeliEbedî yurdumun üstünde benim inlemeli
O zaman vecd ile bin secde eder –varsa- taşım;
Her cerîhamdan, İlâhî, boşanıp kanlı yaşım,
Fışkırır rûh-i mücerred gibi yerden na’şım;
O zaman yükselerek Arş’a değer, belki başım.
Dalgalan sen de şafaklar gibi ey şanlı hilâl;
Olsun artık dökülen kanlarımın hepsi helâl.
Ebediyen sana yok, ırkıma yok izmihlâl:
Hakkıdır, hür yaşamış bayrağımın hürriyet;
Hakkıdır, Hakk’a tapan milletimin istiklâl!
`

    const { shuffledText } = useTextMixer(mars);
    const [matrixDone, setMatrixDone] = useState(false);
    const isLoading = useLoading();
    useEffect(() => {

        if (!isLoading) {
            const tl = gsap.timeline();
            tl.from(".mixed-text span", {
                opacity: 0,
                stagger: {
                    each: .002,
                    from: "random"
                },
                color: "green",
                duration: 0.3
            })

            tl.to(".mixed-text span", {
                opacity: 0,

                stagger: {
                    amount: 1,
                    from: "center"
                },
                duration: .3,
                delay: 0.3,
                display: "none"
            })
            tl.to(".mixed-text-wrapper", {
                display: "none",
                onComplete: () => {
                    setMatrixDone(true)
                }
            })
        }

    }, [isLoading])

    return (

        <>
            {
                !matrixDone &&
                <div className='mixed-text-wrapper absolute grid place-items-center w-full h-screen overflow-hidden z-50 top-0 left-0 bg-black bg-opacity-70'>
                    <p className='mixed-text flex flex-wrap gap-5 w-full p-2 text-3xl font-bold'>
                        {
                            TextToSpan(shuffledText)
                        }
                    </p>
                </div>
            }
            <div className={`flex flex-col-reverse md:flex-row ${comfortaa.className}`}>
                <SideBar />
                <main className='w-full min-h-screen relative' style={{ width: screenWidth >= snap.breakPoints.md ? `calc(100% - ${snap.asideWidth}px)` : "100%" }}>

                    <Search />

                    {children}
                </main>

            </div>
            {
                router.query?.id &&
                <MoviePlayer />
            }

            <PageLoader
                delay={150}
            />
        </>
    )
}

export default Layout