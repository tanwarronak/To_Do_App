import Itemlist from "./to_do_items";
import Message from "./to_do_greeting";
import React from "react";
const List = ({itemlist,handleByDelete})=>{
  
    return <>{itemlist.length===0?<Message></Message>:itemlist.map((item)=>
        <Itemlist item={item} key={item.name} handleByDelete={handleByDelete}></Itemlist>
        )
        };
    </>
}

export default List;