import React from 'react'
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div id="app">
        <div className="box">
          <p>验证状态：</p>
          <button className="button">重置状态</button>
        </div>
      </div>
    )
  }
}
