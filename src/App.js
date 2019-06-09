import React, { Component } from 'react';
import logo from './wallet.svg';
import './App.css';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import IconexConnect from './IconexConnect';
import {
  IconConverter
} from 'icon-sdk-js'
import SDK from './SDK';
import './App.css';

export default class App extends Component{
  state = {
    curAmount: 0,
    login: false,
    myAddress: ''
  }

  funcLogin = async (e) => {
    
    const myAddress = await IconexConnect.getAddress()
    console.log(myAddress)
    
    const curAmount = await SDK.iconService.call(
      SDK.callBuild({
        methodName: 'get_account',
        params: {
          address: myAddress
        },
        to: window.CONTRACT_ADDRESS,
      })
    ).execute()

    console.log("funcLogin curAmount", curAmount)
    this.setState({
      myAddress,
      login: true,
      curAmount: Number(curAmount) || 100000
    })
  }

  funcConfirm = async (e) => {
    const { sendTxBuild } = SDK
    const { curAmount, myAddress } = this.state
    console.log("funcConfirm", curAmount, myAddress)
    const txObj = sendTxBuild({
      from: myAddress,
      to: window.CONTRACT_ADDRESS,
      methodName: 'set_account',
      params: {
        balance: IconConverter.toHex(Number(curAmount)), 
      },
    })
    const tx = await IconexConnect.sendTransaction(txObj)
    console.log("tx", tx, typeof(tx))
    if(tx) {
      alert('잔고가 ' + Number(curAmount)+'으로 등록되었습니다.')
    }else{
      alert('잔고 등록에 실패했습니다. ㅠ.ㅠ')
    }
  }

  funcChange = (e) => {
    const { curAmount, myAddress } = this.state
    
    this.setState({
      curAmount: e.target.value
    })
    console.log("funcChange", "BB", e.target.value, curAmount, "AA", this.state.curAmount)
  }

render() {
  //const classes = useStyles();
  const { curAmount, login, myAddress } = this.state
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="P-logo">
        How much do I have in my wallet?
        </p>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
              login ? (
                <>
                  <Input
                    inputProps={{
                      'aria-label': 'Description',
                    }}
                    style={{margin: 20, color: '#BDBDBD'}}
                    name='curAmount'
                    value={this.state.curAmount}
                    onChange={this.funcChange}
                  /> 
                  <Button variant="contained" color="primary" onClick={this.funcConfirm}>
                    Confirm
                  </Button>
                </>
              ):(
                <Button variant="contained" color="primary" onClick={this.funcLogin}>
                  Connect to My Account
                </Button>
              )
            }
          </div>

      </header>
    </div>
  );
  }
}
