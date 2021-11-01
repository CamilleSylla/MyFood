import Button from '../../../../theme/Buttons/Button/Button'
import style from './about.module.scss'

export default function About () {

    const DrawImg = () => {
        return (
            <div className={style.draw}>
                {/* <img src='/assets/img/ill.jpg'/> */}
                <div className={style.filter}/>
                <div className={style.filter}/>
            </div>
        )
    }

    const Content = () => {

        return (
            <article>
                <h1>Qui sommes nous ?</h1>
                <h2>La famille MyFood a votre service</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a mattis sapien, in tincidunt diam. Nulla facilisi. Nullam vel egestas eros, id cursus justo. Vivamus interdum dapibus aliquam.</p>
                <Button text="En savoir plus"/>
            </article>
        )
    }

    const Plate = () => {
        return <img className={style.plate} src="/assets/img/plate.png"/>
    }

    const Poele = () => {
        return <img className={style.poele} src="/assets/img/Poele.png"/>
    }
    return (
        <section className={style.wrapper}>
            <DrawImg/>
            <Plate/>
            <Content/>
            <Poele/>
        </section>
    )
}