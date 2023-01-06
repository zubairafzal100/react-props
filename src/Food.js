import React from 'react'

function Food(props) {
  return (
    <div>
      <h1>Dish {props.dish}: {props.dishName} <br /> Sweet Dish {props.dish}: {props.sweetDish}</h1>
    </div>
  )
}

export default Food
