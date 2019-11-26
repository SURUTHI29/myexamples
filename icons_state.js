import React from 'react'
import { getCookie, setCookie } from './utils'
import {FaHeart} from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import {MdSupervisorAccount} from 'react-icons/md'

class StorageExample extends React.Component {
  constructor(props) {
    super(props)
    const cookieValue = getCookie('incrementer')
    const localcount = localStorage.getItem('localcount1')
    const sessioncount = sessionStorage.getItem('sessioncount1')
    this.state = {
      cookieValue : cookieValue ? cookieValue : 0,
      localcount : localcount ? localcount :0,
      sessioncount : sessioncount ? sessioncount : 0,
      fillcolor : "#000",
      myAccountSelected : false,
    }
  }
  cookieHandler = () => {
    const currentCookieValue = parseInt(getCookie('incremente r'))
    const cookieValue =  (currentCookieValue ? currentCookieValue : 0) + 1
    setCookie('incrementer', cookieValue)
    this.setState({
      cookieValue
    })
  }
  
  localCounter = () => {
    try {
      const localcount2 = parseInt(localStorage.getItem('localcount1'))
      const localcount =  (localcount2 ? localcount2 : 0) + 1
      localStorage.setItem('localcount1', localcount)
      this.setState({
        localcount
      })
    }
    catch(e) {
      console.log('Fn localCounter ', e)
    }
  } 
  sessionCounter = () => {
    const sessioncount2 = parseInt(sessionStorage.getItem('sessioncount1'))
    const sessioncount =  (sessioncount2 ? sessioncount2 : 0) + 1
    sessionStorage.setItem('sessioncount1', sessioncount)
    this.setState({
      sessioncount
    })
  }  

  renderCookie = () => {
    return (
      <div> 
        <label> Cookie Storage example </label>
        <span> Number of times button pressed : {this.state.cookieValue} </span>
        <button onClick={this.cookieHandler}> cookie storage </button>
      </div>
    )
  }

  heartClicked = () => {
    if (this.state.fillcolor=="#000"){
    this.setState({fillcolor : "#ff0000"})
  
  }

    else{
      this.setState({fillcolor : "#000"})
    }
  }
  handleAccountIconChange = () => {
    const currentValue = this.state.myAccountSelected
    this.setState({myAccountSelected : !currentValue})
  }

  renderMyAccountIcon = () => {
    return this.state.myAccountSelected ? <MdAccountCircle onClick={this.handleAccountIconChange} /> : <MdSupervisorAccount onClick={this.handleAccountIconChange} />
  }

    render() {
      return ( 
        < div >
          <div><h2>Favorites</h2>
          <FaHeart fill={this.state.fillcolor} onClick={this.heartClicked}/>
        </div>
        <div>
          <h2>ACCOUNT</h2>
          {
            this.renderMyAccountIcon()
          }
          
        </div>

         
          <div>
          {this.renderCookie()}
            <label> Local Storage example </label>
            <span> Number of times button pressed : {this.state.localcount} </span>
            <button onClick={this.localCounter}> local Storage</button>
          </div>
          <div>
            <label> Session Storage example </label>
            <span> Number of times button pressed : {this.state.sessioncount} </span>
            <button onClick={this.sessionCounter}> Session Storage </button>
          </div>
        </div>
      )
      }
    }

export default StorageExample
export { StorageExample }




