import React from 'react'
import { useRouter } from 'next/router'


const LanguageToggle = ({ color, style }: { color?: string, style?: {} }) => {
    const router = useRouter()

    const changeHandler = (e: any) => {
        document.cookie = `NEXT_LOCALE=${e.target.value}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
        router.push(router.asPath, undefined, {
            locale: e.target.value,
            scroll: false,
        })
    }

    return (
        <>
            <select
                onChange={changeHandler}
                defaultValue={router.locale}
                style={{
                    cursor: 'pointer',
                    fontFamily: 'Roboto',
                    fontSize: '14px',
                    fontWeight: '500',
                    textAlign: 'left',
                    color: color || 'inherit',
                    textTransform: 'uppercase',
                    ...style
                }}>
                {router.locales.map(locale =>
                    <option
                        key={locale}
                        value={locale}>
                        {locale}
                    </option>
                )}
            </select>
        </>
    )
}

export default LanguageToggle