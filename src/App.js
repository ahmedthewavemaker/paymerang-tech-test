import React from 'react';
import records from './sample.json';
import './App.css';
import Payment from './components/Payment'



class App extends React.Component {


  //data from sample.json will be represented by "records", remittance advice/reciept will be represented by "remAdvice" and
  //is the current selected customer, and "find" is the input used to locate the customer's records.
  state = {
    records: [],
    remAdvice: '',
    // receipt: []

  }


  //sets the state to the correct invoice when Paymerang employees click on a customer
  handleCustomerClick = (advice, e) => {
    e.preventDefault();
    this.setState({
      remAdvice: advice,

    })
    console.log(advice)
    console.log('Paymerang is awesome!')
  }

  componentDidMount() {
    console.log(records)
    this.setState({ records })
  }

  // handleStateChange(advice, e){
  //   if(e.event.target === {client}){
  //     this.setState({
  //       remAdvice: advice[client]
  //     })
  //   }
  // }
 


  render() {

    const { records } = this.state
    const advice = records.map(recordsIn => {
      return (
        <div key={recordsIn.Payee.Name}>
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
          <ul>
            {recordsIn.Remittance.map(remit => {
              return (
                <ul>
                  <li key={remit.PayorId}>Payor Name: {remit.PayorName}</li>
                  <li>Payor Id: {remit.PayorId}</li>
                  <li>Invoice No: {remit.InvoiceNo}</li>
                  <li>Descriptiom: {remit.Description}</li>
                  <li>Amount: {remit.Amount}</li>
                  <br/>
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
    // console.log(this.state.remAdvice)
    console.log(advice)


    const filterClients = advice.filter(fc => {
      console.log(advice)
      return advice.client
    })

    


    return (


      <div >

        <header> <h1> Paymerang </h1> </header>


        <div >{clients.map(client => <li key={client.toString()}><button onClick={(e) => this.handleCustomerClick(advice, e)} >
          {client}
        </button></li>)}</div><br />
        {/* <div>{<React.Fragment>{advice}</React.Fragment>}</div> */}
        <div>{this.state.remAdvice}</div>



        <div>
          {/* <Payment
            lion={this.state.remAdvice}
          tiger = {invoice}
          bear={this.state.remAdvice}
                   
      
          /> */}
        </div>

      </div>


    )
  }
}

export default App;