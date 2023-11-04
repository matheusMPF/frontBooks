import "./Cards.css"

const Cards = (props) => {
    return (

        <ul className="card-listing">

            <li className="card">
                <div className="card-info">
                    <span>{props.info}</span>
                </div>

                <img src={props.srcImg} alt={props.altImg} />

                <p className="description">{props.description}</p>
            </li>

        </ul>
    )

}

export default Cards;