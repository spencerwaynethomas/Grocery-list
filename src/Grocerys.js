import React from "react"


const Grocerys = ({id, name, complete}) => (
  <li style={ complete ? {...styles.grocery, ...styles.complete} :styles.grocery}
  >
    {name}
  </li>
);

const styles = {
  grocery: { cursor: "pointer" },
  complete: {color: "grey", textDecoration: "line-through" },
}

export default Grocerys