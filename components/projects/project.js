import Image from 'next/image'
import classes from './project.module.css'
import Button from '@material-ui/core/Button'

const Project = (props) => {
    const {name, proImage, description, link, gitLink, isHost} = props

    return (
        <section className={classes.section}>
            <h1> {name} </h1>
            <Image src={proImage} alt="project Image" width={500} height={300} />
            <p> {description} </p>
            <div>
                <Button> <a href={gitLink} target="_blank"> GIT HUB LINK </a>  </Button>
                { isHost && <Button>  <a href={link} target="_blank">  LINK </a> </Button>}
            </div>
        </section>
    )
}

export default Project
