import Button from '../../../theme/Buttons/Button/Button'
import style from './contact.module.scss'

export default function Contact () {

    const Form = () => {

        return (
            <form>
                <input type="text" placeholder="Nom et Prénom"/>
                <input type="mail" placeholder="Adresse e-mail"/>
                <input type="tel" placeholder="Téléphone"/>
                <textarea placeholder="Votre message"/>
                <Button text="Envoyer"/>
            </form>
        )
    }

    const ShopInfos = () => {

        return (
<article>
<h1>Nous Contacter</h1>
<div className={style.split}>
    <h3>Par Téléphone : </h3>
    <p>+33 06 06 06 06 06</p>
</div>
<div className={style.split}>
    <h3>Par mail : </h3>
    <a href="#">contact@myfood.fr</a>
</div>
<Button text="Notre équipe"/>
</article>
        )
    }

    return (
        <section className={style.wrapper}>
            <div className={style.container}>
                <Form/>
                <ShopInfos/>
            </div>

        </section>
    )
}