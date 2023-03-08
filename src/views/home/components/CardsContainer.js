import Card from "./Card"

const CardsContainer = ({ cards }) => {
    return (
        <div className="card-group">
            {cards.map((card, i) => <Card key={i} card={card} />)}
        </div>
    )
}
export default CardsContainer;