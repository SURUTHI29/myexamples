import React from 'react'
import { getCookie, setCookie } from './utils'

class StorageExample extends React.Component {
  constructor(props) {
    super(props)
    const cookieValue = getCookie('incrementer')
    const localcount = localStorage.getItem('localcount1')
    const sessioncount = sessionStorage.getItem('sessioncount1')
    this.state = {
      cookieValue : cookieValue ? cookieValue : 0,
      localcount : localcount ? localcount :0,
      sessioncount : sessioncount ? sessioncount : 0
    }
  }
  cookieHandler = () => {
    const currentCookieValue = parseInt(getCookie('incrementer'))
    const cookieValue =  (currentCookieValue ? currentCookieValue : 0) + 1
    setCookie('incrementer', cookieValue)
    this.setState({
      cookieValue
    })
  }
  
  localCounter = () => {
    const localcount2 = parseInt(localStorage.getItem('localcount1'))
    const localcount =  (localcount2 ? localcount2 : 0) + 1
    localStorage.setItem('localcount1', localcount)
    this.setState({
      localcount
    })
  } 
  sessionCounter = () => {
    const sessioncount2 = parseInt(sessionStorage.getItem('sessioncount1'))
    const sessioncount =  (sessioncount2 ? sessioncount2 : 0) + 1
    sessionStorage.setItem('sessioncount1', sessioncount)
    this.setState({
      sessioncount
    })
  }  

    render() {
      return ( 
        < div >
          <div> 
            <label> Cookie Storage example </label>
            <span> Number of times button pressed : {this.state.cookieValue} </span>
            <button onClick={this.cookieHandler}> Click Me! </button>
          </div>
          <div>
            <label> Local Storage example </label>
            <span> Number of times button pressed : {this.state.localcount} </span>
            <button onClick={this.localCounter}> Click Me! </button>
          </div>
          <div>
            <label> Session Storage example </label>
            <span> Number of times button pressed : {this.state.sessioncount} </span>
            <button onClick={this.sessionCounter}> Click Me! </button>
          </div>
        </div>
      )
      }
    }

export default StorageExample
export { StorageExample }




// without get and set method
// localCounter = () => {
  //      if (localStorage.clickcount) {
  //       localStorage.clickcount = parseInt(localStorage.clickcount)+1;
  //     } else {
  //       localStorage.clickcount = 1;
  //     } 
  // }
  // sessionCounter = () => {
  //      if (sessionStorage.clickervalue) {
  //       sessionStorage.clickervalue = parseInt(sessionStorage.clickervalue)+1;
  //     } else {
  //       sessionStorage.clickervalue= 1;
  //     }
  // }
