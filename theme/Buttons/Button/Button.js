import style from './button.module.scss'

export default function Button ({text, margin}) {

    return <button style={{marginTop: `${margin ? margin : "none"}`}}className={style.wrapper}>{text}</button>
}