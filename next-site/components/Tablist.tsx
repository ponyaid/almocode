import { useEffect, useState } from 'react'
import classes from '../src/scss/tablist.module.scss'


const Tablist = ({ theme, data, onChange }: {
    theme?: string,
    data: string[],
    onChange: (index: number) => void
}) => {
    const [currentTab, setCurrentTab] = useState(0)

    const clickHandler = (index: number) => {
        setCurrentTab(index)
        onChange(index)
    }

    return (
        <div className={`${classes.tablist}`}>
            {data.map((item, index) =>
                <button
                    key={index}
                    id={`${index}`}
                    onClick={() => clickHandler(index)}
                    className={`${classes.tab} 
                    ${theme === 'dark' ? classes.tab_dark : ''}
                    ${currentTab === index ? classes.tab_active : ''}`}>
                    {item}
                </button>
            )}
        </div>
    )
}

export default Tablist