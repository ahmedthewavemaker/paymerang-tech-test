import React from 'react'
import '../index.css'


class Pay extends React.Component {
    static defaultProps = {
        pay: [],
    };
    state = {
        currentClientIndex: 0
    };

    //function that changes the state to the current client based on index clicked
    handleButtonClick(index) {
        this.setState({ currentClientIndex: index })
    }

    //function that creates the buttons of clients to select from 
    renderButtons() {
        return this.props.pay.map((p, index) => (
            <button className="button" key={index} onClick={() => this.handleButtonClick(index)}>
                {p.Payee.Name}
            </button>
        ))
    }

    //function that renders the client, payment, and remittance information of the selected client
    renderContent() {
        const currentPay = this.props.pay[this.state.currentClientIndex]
        return (
            <div className="content">
                <div className='payee'>
                <h2>Payee</h2>
                <p><b>Name:</b> {currentPay.Payee.Name}</p>
                <p><b>Fax:</b> {currentPay.Payee.Fax}</p>
                <p><b>Phone:</b> {currentPay.Payee.Phone}</p>
                <p><b>Address:</b> {currentPay.Payee.Address.Address1}</p>
                <p><b>City:</b> {currentPay.Payee.Address.City}</p>
                <p> <b>State or Province:</b> {currentPay.Payee.Address.StateOrProvince}</p>
                <p> <b>Country:</b> {currentPay.Payee.Address.Country}</p>
                <p><b>PostalCode:</b> {currentPay.Payee.Address.PostalCode}</p>
                <br />
                <p><b>Attention:</b> {currentPay.Payee.Attention}</p>
                <p><b>Submission Date:</b>{currentPay.Payee.SubmissionDate}</p>
                
                </div>
                
                <div className='payment'>
                <h2><b>Payment</b></h2>
                <p><b>PAN:</b> {currentPay.Payment.PAN}</p>
                <p><b>CVV: </b>{currentPay.Payment.CVV}</p>
                <p><b> Exp: </b>{currentPay.Payment.Exp}</p>
                
                </div>

                <div className='remittance'>
                <h2>Remittance</h2>
                <ul key={currentPay.Payee.Name}>
                    {currentPay.Remittance.map(remit => {
                        return (
                            <ul key={remit.PayorName}>
                                <li key={remit.PayorId}><b>Payor Name: </b>{remit.PayorName}</li>
                                <li><b>Payor Id:</b> {remit.PayorId}</li>
                                <li><b>Invoice No:</b> {remit.InvoiceNo}</li>
                                <li><b>Description:</b> {remit.Description}</li>
                                <li><b>Amount: </b>{remit.Amount}</li>
                                <br/>
                            </ul>
                        )
                    })}
                </ul>
                </div>

            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderButtons()}
                {this.props.pay.length && this.renderContent()}
            </div>
        )
    }
}

export default Pay;