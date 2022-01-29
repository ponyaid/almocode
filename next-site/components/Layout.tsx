import React, { useContext } from 'react'
import Head from 'next/head'
import Menu from './Menu'
import Navbar from './Navbar'
import Footer from './Footer'
import { MenuContext } from '../context/MenuContext'


const Layout = ({ children }) => {
    const { isMenu } = useContext(MenuContext)

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Web Application Development</title>
                <meta name="keywords" content="next,javascript,react" />
                <meta name="description" content="This is description" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Roboto:ital,wght@0,400;0,500;0,900;1,500;1,900&display=swap" rel="stylesheet" />
            </Head>
            <div className="main" style={!isMenu ? {} : {
                maxHeight: '100vh',
                overflow: 'hidden'
            }} >
                <Menu />
                <Navbar />
                <main className="main__content">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout