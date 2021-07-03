import {useEffect} from 'react'
import {useRouter} from 'next/router'
import { Provider } from "react-redux";

import '../css/global.scss'

// import {focusHandling} from 'cruip-js-toolkit';

import AOS from 'aos'
import store from "../store";

const MyApp = ({Component, pageProps}) => {
    const router = useRouter()


    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 700,
            easing: 'ease-out-cubic',
        });
    })


    useEffect(() => {
        document.querySelector('html').style.scrollBehavior = 'auto'
        window.scroll({top: 0})
        document.querySelector('html').style.scrollBehavior = ''
        // focusHandling('outline');
    }, [router.pathname]);


    return <Provider store={store}><Component {...pageProps} /></Provider>


}

export default MyApp
