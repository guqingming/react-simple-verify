declare module 'react-simple-verify' {
  import * as React from "react";

  interface ReactSimpleVerifyProps {
    width ? : number;
    height ? : number;
    borderColor ? : string;
    bgColor ? : string;
    borderRadius ? : number;
    tips ? : string;
    barBackground ? : string;
    movedColor ? : string;
    successTips ? : string;
    successIcon ? : string;
    success ? : () => void;
  }
  export default class ReactSimpleVerify extends React.Component < ReactSimpleVerifyProps, any > {
    reset(): void;
  }
}