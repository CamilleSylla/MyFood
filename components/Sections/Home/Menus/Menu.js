import BuyBtn from "../../../../theme/Buttons/Buy/BuyBtn";
import style from "./menu.module.scss";

export default function Menu() {
  const categories = ["Pates", "Salades", "Grill", "Desserts"];
  const items = [
      {
          img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=710&q=80',
          name: "Mr Croc",
          price: "13,50€",
          para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"

      },
      {
          img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=710&q=80',
          name: "Mr Croc",
          price: "13,50€",
          para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"

      },
      {
          img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=710&q=80',
          name: "Mr Croc",
          price: "13,50€",
          para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"

      },
      {
          img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=710&q=80',
          name: "Mr Croc",
          price: "13,50€",
          para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"

      },
      {
          img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=710&q=80',
          name: "Mr Croc",
          price: "13,50€",
          para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"

      },
      {
          img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=710&q=80',
          name: "Mr Croc",
          price: "13,50€",
          para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"

      },
  ]


  const Card = ({data, key}) => {

    return (
        <article key={key} className={style.card}>
            <img src={data.img}/>
            <h1>{data.name}</h1>
            <h2> {data.price} </h2>
            <p> {data.para} </p>
            {/* <BuyBtn/> */}
        </article>
    )
  } 
  return (
    <section className={style.wrapper}>
      <div className={style.white_filter} />
      <div className={style.grey_filter} />
      <div className={style.content}>
        <div className={style.menu}>
          <h1>Menu</h1>
          <ul>
            {categories.map((el, i) => {
              return <li key={i}>{el}</li>;
            })}
          </ul>
        </div>
        <div className={style.items}>
            {items.map((el, i) => {
                return <Card data={el} key={i}/>
            })}
        </div>
      </div>
    </section>
  );
}
