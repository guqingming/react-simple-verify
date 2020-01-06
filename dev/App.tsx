import React from 'react'
import './App.css'
// import ReactSimpleVerify, { ReactSimpleVerifyFun } from '../src/components/ReactSimpleVerify'

import ReactSimpleVerify from 'react-simple-verify'

interface AppProps {}

interface AppState {
  isPass: boolean;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      isPass: false
    }
  }

  /**
   * 验证成功
   */
  private success() {
    this.setState({
      isPass: true
    })
  }

  /**
   * 重置
   */
  private reset() {
    // const $verify = this.refs.verify as ReactSimpleVerifyFun
    const $verify = this.refs.verify as any
    $verify.reset()
    this.setState({
      isPass: false
    })
  }

  render() {
    return (
      <div className="box">
        <ReactSimpleVerify ref="verify" success={ this.success.bind(this) }/>
        <p>验证状态：{ this.state.isPass.toString() }</p>
        <button className="button" onClick={ this.reset.bind(this) }>重置状态</button>
      </div>
    )
  }
}
