export function Card (props) {
  return (
    <div className="card-component">
       <div className="card-body" style={{backgroundColor:props.cardData.color}}>
          <h3>{props.cardData.name}</h3>
          <h3>{props.cardData.color}</h3>
        </div> 
    </div>
  )
}