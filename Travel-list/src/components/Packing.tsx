
import { InitalItemsType } from "../types/InitialItems"
import Item from "./Item"


type PackingListProps = {
  items: InitalItemsType[];
  onDelete:(id:string)=>void
};





function Packing({items,onDelete}:PackingListProps) {
  return (
    <div className="list">
        <ul>
        {items.map((item)=>(
            <Item key={item.id} item={item} onDelete = {onDelete}/>
        ))}
        </ul>
        
    </div>
  )
}

export default Packing