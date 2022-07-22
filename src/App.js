import { useState } from 'react';
import Display from './components/Display';
import Receipt from './components/Receipt';
// import receipts from './components/Record';
// import {receipt1, receipt2, receipt3} from './components/Record';
import receiptss from './Data';

import './App.css';

function App() {
  // const [receipts, setReceipts] = useState([receipt1, receipt2, receipt3]);
  const [receipts, setReceipts] = useState([receiptss])
  return(
    <div>
      <Receipt receipt={receiptss} />
    </div>
  )

//   return(
//     <div>
//         {receipts.map((receipt, index) => {
//             return (
//                 <Receipt receipt={receipt} key={index} />
//             )
//         })}
//     </div>
// )
}

export default App;
