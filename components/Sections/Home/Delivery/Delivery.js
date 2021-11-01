import style from './delivery.module.scss'

export default function Delivery () {
    
    const data = [
        {
            icon: "/assets/img/bag.svg",
            label: "Commander",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis mattis tellus, nec tempor nisi varius sed. "
        },
        {
            icon: "/assets/img/bag.svg",
            label: "Payer",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis mattis tellus, nec tempor nisi varius sed. "
        },
        {
            icon: "/assets/img/bag.svg",
            label: "Livraison",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis mattis tellus, nec tempor nisi varius sed. "
        },
        {
            icon: "/assets/img/bag.svg",
            label: "Dégustation",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis mattis tellus, nec tempor nisi varius sed. "
        },
    ]
    
    const  Card = ({data, key}) => {
        return (
            <article key={key}>
                <div className={style.icon_circle}>
                    <img src={data.icon}/>
                    </div>
                <h1>{data.label}</h1>
                <p>{data.para}</p>
            </article>
        )
    }

    return (
        <section className={style.wrapper} >
            <div className={style.container}>
            <h1>Vous souhaitez être livré ?</h1>
            <div className={style.cards}>
                {data.map((el, i) => {
                    return <Card data={el} key={i}/>
                })}
            </div>
            </div>
            

        </section>
    )
}