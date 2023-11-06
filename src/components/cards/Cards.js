import "./Cards.css"

const Cards = (props) => {
    return (

            <li className="card">
                <div className="card-info">
                    <span className="span-title-card">{props.info}</span>
                </div>

                <img className="img-card" src={props.srcImg} alt={props.altImg} />

                <p className="description">{props.description}</p>
            </li>
    )

}

export default Cards;