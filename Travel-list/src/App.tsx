import { useState } from "react"
import Form from "./components/Form"
import Logo from "./components/Logo"
import Packing from "./components/Packing"
import Stats from "./components/Stats"
import { InitalItemsType } from "./types/InitialItems"



function App() {

  // Made the state global as it is used by two sibling components as props

  const [items, setItems] = useState<InitalItemsType[]>([]);


  // Function to add a new item to the list of items
 // It updates the state with the new item while preserving the existing items from Form component

  const handleAddItems = (item:InitalItemsType)=>{
    setItems((prevItems)=>[...prevItems,item])
    console.log(items)
  }


  // This is the function responsible for deleting the items it is global and passed down to item component through packing component

  const handleDeleteItem = (id:string)=>{
    console.log(id)
    setItems((items)=>items.filter((item)=>item.id !== id))
  }
  

  return (
   <div className="app">

    <Logo />
    <Form onAddItems={handleAddItems}/>
    <Packing items = {items} onDelete={handleDeleteItem}/>
    <Stats items ={items}/>
   </div>
  )
}

export default App
