// import React from 'react';
// import ReactDOM from 'react-dom'
// import records from '../sample.json'

// class Payment extends React.Component {

//     state = {
//         records: []

//     }

//     componentDidMount() {
//         console.log(records);
//         this.setState({ records });
//     }

//     // handleBlack = (displayR, e) => {
//     //     e.preventDefault();
//     //     this.setState({
//     //         file: displayR
//     //     })
//     //     console.log(this.state.file)
//     // }


//     render() {
//         const { records } = this.state;
//         const resume = records.map(recordsIn => {
//             return (
//                 <div key={recordsIn.Payee.Name}>
//                     {recordsIn.Payee}
//                     <ul>
//                         {recordsIn.Remittance.map(remit => (

//                             <li key={remit.PayorId}>{remit.PayorName}</li>
//                         ))}

//                     </ul>
//                 </div>

//             )
//         })


//         return <div>{<React.Fragment>{resume}</React.Fragment>}</div>

//         {/* // const {customerName, customerFax, customerPhone, customerAddress, customerCity, customerState, customerPostal, customerAttention, customerDate, payCardPAN, payCardCVV, payCardExp, remittance} = this.props.lion

//         // const displayR = records.map((r) => {
//             */}

//         {/* //     return (
//         //         <div>
//         //         <h2>Payee</h2>    
//         //         <p>Name: {r.Payee.Name}</p>
//         //         <p>Fax: {r.Payee.Fax}</p>  
//         //         <p>Phone: {r.Payee.Phone}</p>   
//         //         <p>Address: {r.Payee.Address.Address1}</p> 
//         //         <p>City: {r.Payee.Address.City}</p> 
//         //         <p>State or Province: {r.Payee.Address.StateOrProvince}</p> 
//         //         <p>Country: {r.Payee.Address.Country}</p> 
//         //         <p>Postal Code: {r.Payee.Address.PostalCode}</p> 
//         //         <p>Attention: {r.Payee.Attention}</p> 
//         //         <p>Submission Date: {r.Payee.SubmissionDate}</p> 
//         //         <br/> 
//         //         <h2> Payment</h2>
//         //         <p>PAN: {r.Payment.PAN}</p>
//         //         <p>CVV: {r.Payment.CVV}</p>
//         //         <p>Exp: {r.Payment.Exp}</p>
                
//         //         </div>
//         //     )
        
//         // })
        

//         // const test = this.props.lion
//         // const testing = this.props.tiger
//         // const ew3a = this.props.bear
      
        

//         // console.log(test)
//         // console.log(testing)
//         // console.log(this.state.file)
//         // console.log(displayR)   

      


//             // return (
//             // <div>
//             //     {/* <p>paymmmmeentss</p>
//             //     <button onClick={(e) => this.handleBlack(displayR, e)}> Get Client File</button>
//             //     <p>customer name: {test}</p>
//             //     <p>wow: {ew3a}</p>
//             //     <p>Test: {displayR}</p>
//             // */}






//         // </div>

//     }
// }


// export default Payment