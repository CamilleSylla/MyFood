import style from "./infos.module.scss"

export default function Infos () {

    const data = [
        {
        icon: "/assets/img/bag.svg",
        info: "Mar - Dim, 10h - 23h",
    },
        {
        icon: "/assets/img/bag.svg",
        info: "1 rue du Couvert, 02100 Saint-Quentin",
    },
        {
        icon: "/assets/img/bag.svg",
        info: "+336 06 06 06 06",
    },
]

const Cards = ({data, key}) => {

    return (
        <article key={key}>
            <div>
                <img src={data.icon}/>
            </div>
            <p style={{paddingTop: "2vh"}}>{data.info}</p>
        </article>
    )
}

    return(
        <div className={style.wrapper}>
            {data.map((el, i) => {
                return <Cards data={el} key={i}/>
            })}
        </div>
    )
}