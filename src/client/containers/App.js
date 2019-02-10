import React, { Component } from 'react'

import AlertMessage from './../components/AlertMessage'
import ContentTable from './../components/ContentTable'
import HeaderTable from './../components/HeaderTable'
import Modal from './../components/Modal'
import Spinner from './../components/Spinner'
import { MyEditor } from './../components/MyEditor'

import { getCustomers, getCustomer, updateCustomer } from './../services/customers'

import { validateEmail } from '../../shared/utils/validateEmail'

class App extends Component {

  state = {
    customers: [],
    customer: {},
    updateCustomer: {},
    spinner: true,
    open: false,
    modalSpinner: false,
    alert: {
      show: false,
      message: '',
      color: ''
    },
    params: {
      id: '',
      field: '',
      value: ''
    }
  }

  componentWillMount() {
    this.customersList()
  }

  openModal = (id, event) => {
    event.preventDefault()
    if(event.target.parentElement === event.currentTarget) {
      this.setState({open: true, modalSpinner: true})
      this.infoCustomer(id)
    }  
  }

  closeModal = () => {
    this.setState({open: false})
  }

  closeAlert = () => {
    let alert = {show: false}
    this.setState({alert})
  }

  onBlur = () => {
    if(this.state.params && this.state.params.value !== '') {
      const { id, field, value } = this.state.params
      this.valideteEmail(id, field, value)
    }
  }
  
  onHandleChange = (id, field, value) => {
    let params = {id, field, value}
    this.setState({params})
  }

  onKeyPress = (e) => {
    if(e.key === 'Enter' && this.state.params.value !== '') {
      const { id, field, value } = this.state.params
      this.valideteEmail(id, field, value)
    }
  }

  valideteEmail(id, field, value) {
    if(field === 'email' && !validateEmail(value)) {
      let alert = {message: 'Invalid Email', color: '#ff0000', show: true}
      return this.setState({alert})
    }
    this.updateCustomer(id, field, value)
  }

  customersList() {
    getCustomers().then(customers => {
      Array.isArray(customers.data)  ?
        this.setState({customers: customers.data, spinner: false})
        : this.setState({customers: customers.data, spinner: false})
    })
  }

  infoCustomer(id) {
    getCustomer(id).then(customer => {
      this.setState({customer: customer.data, modalSpinner: !this.state.modalSpinner})
    })
  }

  updateCustomer(id, field, value) {
    updateCustomer(id, field, value).then(response => {
      let params = { id: '', field: '', value: ''}
      if (response.data.field) {
        let alert = {message: `Success save ${response.data.field.value}`, color: '#34e37e', show: true}
        this.setState({updateCustomer: response.data.field, alert, params})
      } else {
        let alert = {message:`Success save ${response.data.field.value}`, color: '#ff0000', show: true}
        this.setState({alert, params})
      }
    })
  }

  render() {
    const { name, email, country, avatar } = this.state.customer
    return (
      <div>
        <MyEditor />
        {/* {this.state.spinner ?
          <Spinner visible /> :
          [<HeaderTable customers={this.state.customers} key={1}>
            {this.state.customers.map(customer => {
              return <ContentTable 
                email={customer.email}
                id={customer.id}
                key={customer.id}  
                name={customer.name}
                onBlur={this.onBlur}
                onHandleChange={this.onHandleChange}
                onKeyPress={this.onKeyPress}
                openModal={this.openModal}
              />
            })} 
          </HeaderTable>,
          <MyEditor key={12}/>,
          <Modal closeModal={this.closeModal} key={2} open={this.state.open} title={`Customer ${name}`}>
            {this.state.modalSpinner ?
              <Spinner visible /> :
              [<img key={1} src={avatar} />,
                <div key={2} >
                  <span>Country:</span>
                  {country}
                </div>,
                <div key={3} >
                  <span>Email:</span>
                  {email}
                </div>]
            }
          </Modal>,
          <AlertMessage 
            key={3}
            message={this.state.alert.message} 
            messageColor={this.state.alert.color} 
            visible={this.state.alert.show}
            closeAlert={this.closeAlert}
          />] */}
         
      </div>
    )
  }
}

export default App