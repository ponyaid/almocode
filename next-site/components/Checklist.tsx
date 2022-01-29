import classes from '../src/scss/checklist.module.scss'


const CheckboxNav = ({ data }) => {

    return (
        <div className={classes.nav}>
            {data.map(((category: any) =>
                <div key={category.id} className={classes.nav__item}>
                    <span>{category.attributes.name}</span>
                </div>
            ))}
        </div>
    )
}

export default CheckboxNav