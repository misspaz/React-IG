import "./GamesCard.css"

export default function GamesCard({title, image}){
    return (
    <>
    <div className="game-div">
        <h2 className="game-title">{title}</h2>
        <img width="300"  src={image} alt={title} />
       
        
    </div>
    </>
    );
}

