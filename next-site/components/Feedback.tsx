import axios from 'axios'
import { useState } from 'react'
import { BsPaperclip } from 'react-icons/bs'
import classes from '../src/scss/contacts.module.scss'


const initialState = {
    name: '',
    email: '',
    message: ''
}

const Feedback = () => {
    const [form, setForm] = useState(initialState)

    const changeHandler = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const submit = async (e: any) => {
        e.preventDefault()
        try {
            console.log(form)
            await axios.post('/leads', { data: form })
        } catch (error) {
            alert('Something was wrong. Please try again')
        }
    }

    return (
        <section className={classes.main}>
            <p className={classes.main__title}>
                Let us talk about your brand new idea
            </p>
            <div className={classes.main__contactsWrap}>
                <h4 className={classes.main__contactsTitle}>
                    Contacts
                </h4>
                <div className={classes.main__contacts}>
                    <div className={classes.contact}>
                        <p className={classes.contact__title}>
                            Lorem, ipsum
                        </p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsumt amet.</p>
                    </div>
                    <div className={classes.contact}>
                        <p className={classes.contact__title}>
                            Become a client
                        </p>
                        <p>hello@almocode.co</p>
                    </div>
                    <div className={classes.contact}>
                        <p className={classes.contact__title}>
                            Become a client
                        </p>
                        <p>hello@almocode.co</p>
                    </div>
                </div>
            </div>
            <div className={classes.main__formWrap}>
                <form className={classes.form}>
                    <fieldset>
                        <div>
                            <label htmlFor="">Name *</label>
                            <input
                                required
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={changeHandler}
                                placeholder='Enter your name'
                            />
                        </div>
                        <div>
                            <label htmlFor="">Email Address *</label>
                            <input
                                required
                                type="text"
                                placeholder='Enter your email'
                            />
                        </div>
                        <div>
                            <label htmlFor="">Your message</label>
                            <textarea
                                rows={1}
                                placeholder='Tell us how we can help'
                            />
                        </div>
                    </fieldset>
                    <footer className={classes.form__footer}>
                        <div className={classes.upload}>
                            <label htmlFor="upload" className={classes.upload__label}>
                                <BsPaperclip />&nbsp;Attach file
                            </label>
                            <input id="upload" type="file" className={classes.upload__input} />
                        </div>

                        <button
                            type="submit"
                            onClick={submit}
                            className='btn btn_primary'>
                            Send request
                        </button>
                    </footer>
                </form>
            </div>
        </section>
    )
}


export default Feedback