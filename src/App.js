import React from 'react';
import records from './sample.json';
import './App.css';




class App extends React.Component {


  //data from sample.json will be represented by "records", remittance advice/reciept will be represented by "remAdvice" and
  //is the current selected customer.
  state = {
    records: [],
    remAdvice: '',


  }


  //sets the state to the correct invoice when Paymerang employees click on a customer
  handleCustomerClick = (advice, e) => {
    let f = ''
    e.preventDefault();
    advice.filter(filtered => {

      f = filtered
      console.log(filtered)

      return f
    })
    this.setState({
      remAdvice: f
    })
    console.log(f)
    console.log('Paymerang is awesome!')
  }

  componentDidMount() {
    console.log(records)
    this.setState({ records })
  }


  render() {
    //maps through the records and creates the basic format display in which we will view our advice/receipts
    const { records } = this.state
    const advice = records.map(recordsIn => {
      console.log(recordsIn.Payee.Name)
      return (
        <div className='info' key={recordsIn.Payee.Name}>

          <h2>Payee</h2>
        Name: {recordsIn.Payee.Name}<br />
        Fax: {recordsIn.Payee.Fax}<br />
        Phone: {recordsIn.Payee.Phone}<br />
        Address: {recordsIn.Payee.Address.Address1}<br />
        City: {recordsIn.Payee.Address.City}<br />
        State or Province: {recordsIn.Payee.Address.StateOrProvince}<br />
        Country: {recordsIn.Payee.Address.Country}<br />
        PostalCode: {recordsIn.Payee.Address.PostalCode}<br />
          <br />
        Attention: {recordsIn.Payee.Attention}<br />
        Submission Date: {recordsIn.Payee.SubmissionDate}<br />
          <br />
          <h2>Payment</h2>
        PAN: {recordsIn.Payment.PAN}<br />
        CVV: {recordsIn.Payment.CVV}<br />
        Exp: {recordsIn.Payment.Exp}<br />

          <h2>Remittance</h2>
          <ul key={recordsIn.Payee.Name}>
            {recordsIn.Remittance.map(remit => {
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
    })


    //map through the records to single out the Payee Name
    const clients = records.map(client => client.Payee.Name)

    console.log(clients)
    
    return (

      
      <div className='body'>

        <div className='top'><header > <h1 className='title'> Paymerang </h1> </header></div>

        <h2>Select client for payment info</h2>
        <div className='buttonz'>{clients.map(client => <li className='buttonlist' key={client.toString()}><button className='button' onClick={(e) => this.handleCustomerClick(advice, e)} >
          {client}
        </button></li>)}</div><br />

        <div className='advice'>{this.state.remAdvice}</div>

      </div>


    )
  }
}

export default App;