import React from "react"
import Grocery from "./Grocerys"

const List = ({items, name}) => (
  <div>
    <h2>{name}</h2>
    <ul>
    { items.map( item => <Grocery key={item.id} {...item} /> )}
    </ul>
  </div>
);


export default List