import Button from '../../../theme/Buttons/Button/Button'
import style from './navbar.module.scss'

export default function NavBar () {

    const links = ["Accueil","Menu","A propos", "Contact"]


    const Logo = () => {
        // return <img className={style.logo} src="/assets/img/logo.svg"/>
        return <h1 className={style.logo}>MyFood</h1>
    }

    const Items = () => {
        return (
            <div className={style.container}>
                <ul>
                    {links.map((el, i) => {
                        return <li key={i}> {el} </li>
                    })}
                </ul>
                <Button margin="3vh" text="Connection"/>
                <div className={style.social}>
                    Réseaux Sociaux
                </div>
            </div>
        )
    }

    return (
        <nav className={style.wrapper}>
            <Logo/>
            <Items/>
        </nav>
    )
}