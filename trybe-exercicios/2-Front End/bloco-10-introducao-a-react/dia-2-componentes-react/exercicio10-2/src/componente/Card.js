import React from 'react';

class Card extends React.Component {
    render() {
        const {id, name, type, averageWeight: {value, measurementUnit}, image} = this.props.pokemon;
  return (
      <div className="card">
           <div>
                <h1>{name}</h1>
                <h2>{type}</h2>
                <h3>{value}{measurementUnit}</h3>
            </div>
            <img src={image} alt={id}></img>
        </div>
     
  )
    }
}

export default Card;