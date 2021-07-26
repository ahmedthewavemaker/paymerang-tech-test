import React from 'react';
import records from '../sample.json'

class Payment extends React.Component {

    state = {
        file: ''
    }
    handleBlack = (displayR, e) => {
        e.preventDefault();
        this.setState({
            file: displayR
        })
        console.log(this.state.file)
    }


    render() {
        // const {customerName, customerFax, customerPhone, customerAddress, customerCity, customerState, customerPostal, customerAttention, customerDate, payCardPAN, payCardCVV, payCardExp, remittance} = this.props.lion

        const displayR = records.map((r) => {
            return r.Payment.PAN
        })
        

        const test = this.props.lion
        const testing = this.props.tiger
      
        

        console.log(test)
        console.log(testing)
        console.log(this.state.file)
        console.log(displayR)
     



            return (
            <div>
                <p>paymmmmeentss</p>
                <button onClick={(e) => this.handleBlack(displayR, e)}> Get Client File</button>
                <p>customer name: {test}</p>
                <p>Payment PAN: {displayR}</p>
              


            </div>
        )
    }
}


export default Payment