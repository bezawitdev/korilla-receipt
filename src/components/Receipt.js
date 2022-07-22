import Display from "./Display";
function Receipt(props) {


    
  return(
    <div>
        {props.receipt.map((receipt, index) => {
            return (
                <Display receipt={receipt} key={index} />
            )
        })}
    </div>
)







    // return(
    //     <Display receipt = {props.receipt}/>       
     
    // )
  

}


export default Receipt;

