import GoogleMapReact from 'google-map-react'
import Layout from '../components/Layout'
import Feedback from '../components/Feedback'
import classes from '../src/scss/contacts.module.scss'


const Contacts = () => {
    const distanceToMouse = (pt, mp) => {
        if (pt && mp) {
            return Math.sqrt(
                (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
            );
        }
    };

    return (
        <Layout>
            <Feedback />

            <section className={classes.mapSection}>
                <div className={classes.map}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            // remove the key if you want to fork
                            key: "AIzaSyB8iWGYGkCjyPSfcVD0NLupaHDX8lXqXUw",
                            language: "en",
                            region: "US"
                        }}
                        defaultCenter={{ lat: 51.506, lng: -0.169 }}
                        defaultZoom={15}
                        distanceToMouse={distanceToMouse}
                    >
                    </GoogleMapReact>
                </div>
            </section>
        </Layout>
    )
}

export default Contacts