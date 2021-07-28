import React, { Component } from 'react'


class Pay extends React.Component {
    static defaultProps = {
        pay: [],
    };
    state = {
        currentClientIndex: 0
    };

    handleButtonClick(index) {
        console.log('button clicked!', { index })
        this.setState({ currentClientIndex: index })
    }

    renderButtons() {
        return this.props.pay.map((p, index) => (
            <button key={index} onClick={() => this.handleButtonClick(index)}>
                {p.Payee.Name}
            </button>
        ))
    }

    renderContent() {
        const currentPay = this.props.pay[this.state.currentClientIndex]
        return (
            <div className='content'>
                <h2>Payee</h2>
                <p>Name: {currentPay.Payee.Name}</p><br />
                <p>Fax: {currentPay.Payee.Fax}</p><br />
                <p>Phone: {currentPay.Payee.Phone}</p><br />
                <p>Address: {currentPay.Payee.Address.Address1}</p><br />
                <p>City: {currentPay.Payee.Address.City}</p><br />
                <p> State or Province: {currentPay.Payee.Address.StateOrProvince}</p><br />
                <p> Country: {currentPay.Payee.Address.Country}</p><br />
                <p>PostalCode: {currentPay.Payee.Address.PostalCode}</p><br />
                <br />
                <p>Attention: {currentPay.Payee.Attention}</p><br />
                <p>Submission Date: {currentPay.Payee.SubmissionDate}</p><br />
                <br />

                <h2>Payment</h2>
                <p>PAN: {currentPay.Payment.PAN}</p><br />
                <p>CVV: {currentPay.Payment.CVV}</p><br />
                <p> Exp: {currentPay.Payment.Exp}</p><br />

                <h2>Remittance</h2>
                <ul key={currentPay.Payee.Name}>
                    {currentPay.Remittance.map(remit => {
                        return (
                            <ul key={remit.PayorName}>
                                <li key={remit.PayorId}>Payor Name: {remit.PayorName}</li>
                                <li>Payor Id: {remit.PayorId}</li>
                                <li>Invoice No: {remit.InvoiceNo}</li>
                                <li>Descriptiom: {remit.Description}</li>
                                <li>Amount: {remit.Amount}</li>
                                <br />
                            </ul>
                        )
                    })}
                </ul>

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