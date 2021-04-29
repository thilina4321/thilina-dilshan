import Image from 'next/image'
import classes from './place.module.css'

const Place = (props) => {
    const {name, time, context, image} = props.place
    return (
        <section className={classes.section}>
            <h1> {name} </h1>
            <Image src={image} width={500} height={200} />
            <h3> {time} </h3>
            <p> {context} </p>
        </section>
    )
}

export default Place
