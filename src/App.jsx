import "bootstrap/dist/css/bootstrap.min.css";
import Itemname from "./components/to_do_name";
import Iteminput from "./components/to_do_input";
// import Message from "./components/to_do_greeting";
import List from "./components/to_do_itemlist";
import React, { useState } from "react";
function App() {

    let [itemlist,setitemlist] = useState([]);

      const handleByAdd = (name,date)=>{
        if(name==""||date==""){
          alert("please enter To Do ");
        }else{
          let newitemlist = itemlist.concat({name:name,date:date});
          setitemlist(newitemlist);
        }
      
      }
      const handleByDelete = (todoitem)=>{
        let afterlist = itemlist.filter((item)=>item.name!==todoitem);
        setitemlist(afterlist);
      }
  return <>
 <Itemname></Itemname>
 <Iteminput handleByAdd={handleByAdd}></Iteminput>
 <List itemlist={itemlist} handleByDelete={handleByDelete}></List>
  </>

}

export default App;
