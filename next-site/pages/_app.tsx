import React, { SyntheticEvent, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { MenuContext } from '../context/MenuContext'
import '../src/scss/global.scss'


axios.defaults.baseURL = process.env.NEXT_PUBLIC_STRAPI_HOST + '/api'


function MyApp({ Component, pageProps }: AppProps) {
    const [isMenu, setIsMenu] = useState(false)

    const menuToggle = (e: SyntheticEvent) => {
        e.preventDefault()
        setIsMenu(!isMenu)
    }

    return (
        <>
            <MenuContext.Provider value={{ isMenu, menuToggle }}>
                <ThemeProvider enableSystem={false}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </MenuContext.Provider>
        </>
    )
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
}

export default MyApp