import { InitalItemsType } from "../types/InitialItems"

type  StatsPropsType = {
  items:InitalItemsType[]
}


function Stats({items}:StatsPropsType) {
  return (
    <footer className="stats">
       <em>
       💼 🚀 You have {items.length} items on your list ans you already packed X (x%)
        </em> 
    </footer>
  )
}

export default Stats