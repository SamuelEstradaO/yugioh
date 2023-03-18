import Card from "./Card"

const CardsContainer = ({ cards }) => {
    return (
        <div className="d-flex justify-content-evenly">
            {cards.map((card, i) => <Card key={i} card={card} carousel={false} />)}
        </div>
    )
}
export default CardsContainer;