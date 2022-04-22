import React, { useRef, useState } from 'react'
import './App.css'
import ReactSimpleVerify from '../src/components/ReactSimpleVerify'

// import ReactSimpleVerify from 'react-simple-verify'
// import 'react-simple-verify/dist/react-simple-verify.css'

interface AppProps {}

interface AppState {
  isPass: boolean;
}

export default function App() {
  const [isPass, setIsPass] = useState(true)

  const verifyRef: React.MutableRefObject<any> = useRef(null)

  const success = () => {
    setIsPass(true)
  }

  const reset = () => {
    console.log(verifyRef.current)
    verifyRef.current.reset()
    setIsPass(false)
  }

  return (
    <div className="box">
      <ReactSimpleVerify ref={ verifyRef } success={ success }/>
      <p>验证状态：{ isPass.toString() }</p>
      <button className="button" onClick={ reset }>重置状态</button>
    </div>
  )

}

// export default class App extends React.Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props)
//     this.state = {
//       isPass: false
//     }
//   }

//   /**
//    * 验证成功
//    */
//   private success() {
//     this.setState({
//       isPass: true
//     })
//   }

//   /**
//    * 重置
//    */
//   private reset() {
//     const $verify = this.refs.verify as ReactSimpleVerify
//     $verify.reset()
//     this.setState({
//       isPass: false
//     })
//   }


//   render() {
//     return (
//       <div className="box">
//         <ReactSimpleVerify ref='verify' success={ this.success.bind(this) }/>
//         <p>验证状态：{ this.state.isPass.toString() }</p>
//         <button className="button" onClick={ this.reset.bind(this) }>重置状态</button>
//       </div>
//     )
//   }
// }
