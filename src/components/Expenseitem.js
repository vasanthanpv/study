import React,{useState} from "react";
import '../components/Expenseitem.css';
const Expenseitem = (props) => {
    
    const [itemname,setitemname] = useState(props.items);
    const editHandler = (e) =>{
    const deleteid = e.target.value;
    const newdata = itemname.map((itemslist)=>{
if(deleteid == itemslist.id)
{
  
    return {...itemslist,name:'Vas'};
}

return itemslist;
    })
    setitemname(newdata);
}
const listData = itemname.map((itemlist)=>(
    
    <div className="row" key={itemlist.id}>
     <div className="column">{itemlist.name}</div>
     <div className="column">{itemlist.price}</div>
     <div className="column">{itemlist.date.getDay()}</div>
     <div className="column">{itemlist.date.getMonth()}</div>
     <div className="column">{itemlist.date.getFullYear()}</div>
     <div className="column"><button value={itemlist.id}onClick={editHandler}>Edit</button></div>
     <div className="column"><button >Edit</button></div>
    </div>
));

return(
<div className="wrapper">
<div className="row">
  <div className="column">name</div>
  <div className="column">price</div>
  <div className="column">day</div>
  <div className="column">month</div>
  <div className="column">year</div>
  <div className="column">Edit</div>
  <div className="column">Delete</div>
 </div>
{listData}

</div>
);

}
export default Expenseitem;