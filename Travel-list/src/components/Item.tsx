import React from "react";
import { InitalItemsType } from "../types/InitialItems";

type ItemPropsType = {
  item: InitalItemsType;
  onDelete:(id:string)=>void
};

const Item:React.FC<ItemPropsType> = ({ item,onDelete }) => {

    

  return (
    <div>
      <li>
        <span style={item.packed ? {textDecoration:'line-through'}:{}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={()=>onDelete(item.id)}>❌</button>
      </li>
    </div>
  );
}

export default Item;
