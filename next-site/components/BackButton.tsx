import React from 'react'
import Router from 'next/router'
import { MdKeyboardBackspace } from 'react-icons/md'


const BackButton = () => {

    return (
        <button
            style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '1rem',
                color: 'rgba(21, 24, 27, 1)'
            }}
            onClick={() => Router.back()}>
            <MdKeyboardBackspace style={{ marginRight: '0.5rem' }} />
            Go Back
        </button>
    )
}


export default BackButton