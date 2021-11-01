import style from './button.module.scss'

export default function Button ({text}) {

    return <button className={style.wrapper}>{text}</button>
}