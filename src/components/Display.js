import { useState } from 'react'
function Display(props){

  const [paid, setUnPaid ] = useState(props.receipt.paid)
  console.log(paid)
//  const changeValue = (() => {





    if(props.receipt.paid === false){
      return null
    }else{}
  

  

    return(
        <div className="display-flex">
          {/* <button onClick={changeToPaid}>Paid</button> */}
          <h2>{props.receipt.person}</h2>
          <p>Main:{props.receipt.order.main}</p>
          <p>Protein:{props.receipt.order.protein}</p>
         <p>Rice:{props.receipt.order.rice}</p>
         <p>Sauce:{props.receipt.order.sauce}</p>
         <p>Drink:{props.receipt.order.drink}</p>
         <p>Cost:{props.receipt.order.cost}</p>
         <p>Paid:{paid}</p>
         
        </div>
    )
}

export default Display