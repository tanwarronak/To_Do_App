const Itemlist = ({item,handleByDelete})=>{

  const handleByclicked = ()=>{
    let todoitem = item.name;
    handleByDelete(todoitem);

  }
    return <>
  <div className=" d-flex p-4 card-body justify-content-evenly  align-items-center">
    <p className="card-text border border-info rounded-4 text-bg-secondary p-3">{item.name}</p>
    <p className="card-text border border-info rounded-4 text-bg-secondary p-3">{item.date}</p>
    <button type="button" className="btn btn-danger rounded-4" onClick={handleByclicked}>Delete</button>
    </div> 
    </>
  
}

export default Itemlist;
