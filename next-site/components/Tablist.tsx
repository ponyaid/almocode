import { useState } from 'react'
import classes from '../src/scss/tablist.module.scss'


const Tablist = ({ theme, data }: { theme?: string, data: string[] }) => {
    const [tab, setTab] = useState('0')

    const clickHandler = ((e: any) => {
        e.preventDefault()
        setTab(e.target.id)
    })

    return (
        <div className={`${classes.tablist}`}>
            {data.map((item, index) =>
                <button
                    key={index}
                    id={`${index}`}
                    onClick={clickHandler}
                    className={`${classes.tab} 
                    ${theme === 'dark' ? classes.tab_dark : ''}
                    ${tab === `${index}` ? classes.tab_active : ''}`}>
                    {item}
                </button>
            )}
        </div>
    )
}

export default Tablist