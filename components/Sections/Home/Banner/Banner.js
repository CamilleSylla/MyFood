import BuyBtn from '../../../../theme/Buttons/Buy/BuyBtn'
import Infos from '../../../Items/BannerInfos/Infos'
import style from './banner.module.scss'

export default function Banner () {

    const Content = () => {

        return(
            <div className={style.content}>
                <h1><span>Salade,</span><br/>aux saveurs du printemps</h1>
                <p>Votre nouvelle salade est disponible pour regaler vos papilles !</p>
                <div className={style.price}>
                <p style={{fontSize: "2rem"}}>12,90€</p>
                <BuyBtn/>
                </div>
            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            <Content/>
            <Infos/>
        </section>
    )
}