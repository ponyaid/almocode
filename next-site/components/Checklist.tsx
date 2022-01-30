import { useState } from 'react'
import { MdClear } from 'react-icons/md'
import classes from '../src/scss/checklist.module.scss'


const CheckboxNav = ({ data, onChange }) => {
    const [selected, setSelected] = useState<number[]>([])

    const clickHandler = (value: number) => {
        const updated = [...selected]
        const index = updated.indexOf(value)
        if (index === -1) {
            setSelected([...updated, value])
        } else {
            updated.splice(index, 1)
            setSelected(updated)
        }

        onChange(value)
    }

    const clearHandler = () => {
        setSelected([])
        onChange()
    }

    return (
        <div className={classes.navWrap}>
            <div className={classes.nav}>
                {data.map((category: string, index: number) =>
                    <div
                        key={index}
                        onClick={() => clickHandler(index)}
                        className={`${classes.nav__item} ${selected.includes(index) ? classes.nav__item_active : ''}`}>
                        <span>{category}</span>
                    </div>
                )}
            </div>
            {!!selected.length && <button
                onClick={clearHandler}
                className={classes.clearBtn}>
                <MdClear />
            </button>}
        </div>
    )
}

export default CheckboxNav