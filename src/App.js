import React from 'react';
import records from './sample.json';
import './App.css';
import Payment from './components/Payment'



class App extends React.Component {
 

  //data from sample.json will be represented by "records", remittance advice/reciept will be represented by "remAdvice" and
  //is the current selected customer, and "find" is the input used to locate the customer's records.
  state = {
    records,
    remAdvice: '',
    receipt: []

  }


  //sets the state to the correct invoice when Paymerang employees click on a customer
  handleCustomerClick = (client, e) => {
    e.preventDefault();
    this.setState({
      remAdvice: client,
      
    })
    console.log(client)
    console.log('Paymerang is awesome!')
  }

  handleReceipt = (records, e) => {
    e.preventDefault();
    this.setState({
      receipt: records
    })
  }

  

  render() {

  

    //map through the records of json to return payment info
    const filterFind = this.state.records.map(
      (payee) => {
        console.log(payee.Payee.Name)

        return payee

      }

    )
    //map through the records to single out the Payee Name
    const clients = filterFind.map(client => client.Payee.Name)

    //sends the payment and customer data of the invoice if a customer is selected
    const invoice = this.state.records.map((cli) => {
      
      <Payment
        //customer information
        customerName={cli.Payee.Name}
        customerFax={cli.Payee.Fax}
        customerPhone={cli.Payee.Phone}
        customerAddress={cli.Payee.Address.Address1}
        customerCity={cli.Payee.Address.City}
        customerState={cli.Payee.Address.StateOrProvince}
        customerPostal={cli.Payee.Address.PostalCode}
        customerAttention={cli.Payee.Attention}
        customerDate={cli.Payee.SubmissionDate}

        //customer payments information
        paycardPAN={cli.Payment.PAN}
        paycardCVV={cli.Payment.CVV}
        paycardExp={cli.Payment.Exp}

        //customer remittance
        remittance={cli.Remittance}
      />
      console.log(cli)
      return cli
      
    })

    const infoyc = filterFind.map((info) => {
      return info.Payee
    })

    // let disp = ''
    // if (this.state.remAdvice) {
    //    disp = (
    //     <div
    //     //customer information
    //     customerName={this.state.remAdvice.Payee.Name}
    //     customerFax={this.state.remAdvice.Payee.Fax}
    //     customerPhone={this.state.remAdvice.Payee.Phone}
    //     customerAddress={this.state.remAdvice.Payee.Address.Address1}
    //     customerCity={this.state.remAdvice.Payee.Address.City}
    //     customerState={this.state.remAdvice.Payee.Address.StateOrProvince}
    //     customerPostal={this.state.remAdvice.Payee.Address.PostalCode}
    //     customerAttention={this.state.remAdvice.Payee.Attention}
    //     customerDate={this.state.remAdvice.Payee.SubmissionDate}

    //     //customer payments information
    //     paycardPAN={this.state.remAdvice.Payment.PAN}
    //     paycardCVV={this.state.remAdvice.Payment.CVV}
    //     paycardExp={this.state.remAdvice.Payment.Exp}

    //     //customer remittance
    //     remittance={this.state.remAdvice.Remittance}
       

    // />
    //    )
     
        
    // }

    console.log(filterFind)
    console.log(clients)
    console.log(this.state.remAdvice)
    console.log(infoyc)
    console.log(invoice)


   



    return (

      
      <div >
        
        <header> <h1> Paymerang </h1> </header>


        <div >{clients.map(client => <li key={client.toString()}><button onClick={(e) => this.handleCustomerClick(client, e)} >
          {client}
        </button></li>)}</div><br />

        <p>{this.state.remAdvice}</p>   

        <div>
          <Payment
            lion={this.state.remAdvice}
          tiger = {invoice}
                   
      
          />
        </div>

      </div>
     
     
    )
  }
}

export default App;