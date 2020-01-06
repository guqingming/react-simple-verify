import React from 'react'
import './App.css'
import ReactSimpleVerify from '../../src/ReactSimpleVerify'

const App: React.FC = () => {
  return (
    <div className="box">
      <ReactSimpleVerify />
      <p>验证状态：</p>
      <button className="button">重置状态</button>
    </div>
  )
}

export default App
