import * as React from 'react'
import './scss/VueSimpleVerify.scss'
import barImage from './images/bar'
import successImage from './images/success'

interface ReactSimpleVerifyProps {
  width: number;
  height: number;
  borderColor?: string;
  bgColor: string;
  borderRadius: number;
  tips: string;
  barBackground: string;
  movedColor: string;
  successTips: string;
  successIcon: string;
  success?: () => void;
}

interface ReactSimpleVerifyState {
  isMouseEnter: boolean;
  diff: number;
}

export default class ReactSimpleVerify extends React.Component<ReactSimpleVerifyProps, ReactSimpleVerifyState> {
  /**
   * 默认参数
   */
  static defaultProps = {
    width: 340,
    height: 36,
    borderColor: '#E4E4E4',
    bgColor: '#F2F3F5',
    borderRadius: 4,
    tips: '请按住滑块，拖动到最右边',
    barBackground: `url(${ barImage })`,
    movedColor: 'linear-gradient(313deg, rgba(65, 209, 102, 1) 0%, rgba(90, 232, 118, 1) 100%)',
    successTips: '完成验证',
    successIcon: successImage
  }

  /**
   * 初始数据
   */
  /** x */
  private x1 = 0
  private x2 = 0
  /** 鼠标是否按下 */
  private isMousedown = false
  /** 是否已经成功 */
  private isSuccess = false
  /** 最大滑动距离 */
  private max = this.props.width - 50
  /** 盒子样式 */
  private style = {
    width: this.props.width,
    height: this.props.height,
    border: `${ this.props.borderColor } 1px solid`,
    backgroundColor: this.props.bgColor,
    borderRadius: this.props.borderRadius
  }
  /** 滑条盒子样式 */
  private slideBoxStyle = {
    borderRadius: this.props.borderRadius
  }
  /** 成功图标 */
  private iconStyle = {
    background: `url(${ this.props.successIcon }) no-repeat`
  }

  constructor(props: ReactSimpleVerifyProps) {
    super(props)
    this.state = {
      /** 是否滑入 */
      isMouseEnter: false,
      /** 滑动距离 */
      diff: 0
    }
  }

  /**
   * 绑定事件
   */
  public componentDidMount() {
    document.body.addEventListener('mousemove', this.mousemove.bind(this))
    document.body.addEventListener('touchmove', this.mousemove.bind(this))
    document.body.addEventListener('mouseup', this.mouseup.bind(this))
    document.body.addEventListener('touchend', this.mouseup.bind(this))
  }

  /**
   * 移除事件
   */
  public componentWillUnmount() {
    document.body.removeEventListener('mousemove', this.mousemove.bind(this))
    document.body.removeEventListener('touchmove', this.mousemove.bind(this))
    document.body.removeEventListener('mouseup', this.mouseup.bind(this))
    document.body.removeEventListener('touchend', this.mouseup.bind(this))
  }

  /**
   * 鼠标移入
   */
  private mouseenter() {
    if (this.isSuccess) {
      return
    }
    this.setState({
      isMouseEnter: true
    })
  }

  /**
   * 鼠标离开
   */
  private mouseleave() {
    if (this.isSuccess || this.isMousedown) {
      return
    }
    this.setState({
      isMouseEnter: false
    })
  }

  /**
   * 鼠标按下
   */
  private mousedown(e: any) {
    if (this.isSuccess) {
      return
    }
    this.x1 = e.nativeEvent.x || e.touches[0].clientX
    this.isMousedown = true
  }

  /**
   * 鼠标移动
   */
  private mousemove(e: any) {
    if (!this.isMousedown || this.isSuccess) {
      return
    }
    e.preventDefault()
    e.stopPropagation()
    this.x2 = e.x || e.touches[0].clientX
    let diff = this.x2 - this.x1
    if (diff < 0) {
      diff = 0
    }
    if (diff >= this.max) {
      diff = this.max
      this.isSuccess = true
      this.props.success && this.props.success()
    }
    this.setState({
      diff
    })
  }

  /**
   * 鼠标松开
   */
  private mouseup() {
    if (this.isSuccess) {
      return
    }
    this.isMousedown = false
    this.setState({
      isMouseEnter: false,
      diff: 0
    })
  }

  /**
   * 重置
   */
  public reset() {
    this.isSuccess = false
    this.setState({
      diff: 0
    })
    setTimeout(() => {
      this.isMousedown = false
      this.setState({
        isMouseEnter: false
      })
    }, 0)
  }

  public render() {
    /** 滑条样式 */
    const slideStyle = {
      borderRadius: this.props.borderRadius,
      background: this.props.movedColor,
      left: 50 - this.props.width,
      opacity: this.state.isMouseEnter ? 1 : 0,
      transitionDuration: !this.state.isMouseEnter || !this.isMousedown ? '.3s' : '0s',
      transform: `translateX(${ this.state.diff }px)`
    }
    /** 滑块样式 */
    const barStyle = {
      background: this.props.barBackground,
      transitionDuration: !this.state.isMouseEnter || !this.isMousedown ? '.3s' : '0s',
      transform: `translateX(${ this.state.diff }px)`
    }
    /** 成功文本样式 */
    const textStyle = {
      opacity: this.isSuccess ? 1: 0,
      transitionDuration: !this.state.isMouseEnter || !this.isMousedown ? '.3s' : '0s'
    }
    return (
      <div style={ this.style } className="simple-verify">
        <div className="verify-tips">{ this.props.tips }</div>
        <div style={ this.slideBoxStyle } className="verify-box">
          <div style={ slideStyle } className="veriry-slide" />
        </div>
        <div
          className="verify-bar"
          onMouseEnter={ this.mouseenter.bind(this) }
          onTouchStart={ this.mouseenter.bind(this) }
          onMouseLeave={ this.mouseleave.bind(this) }
          onTouchEnd={ this.mouseleave.bind(this) }
          onMouseDown={ this.mousedown.bind(this) }
          onTouchMove={ this.mousedown.bind(this) }
        >
          <div style={ barStyle } className="icon" />
        </div>
        <div style={ textStyle } className="verify-success-tips">
          <span style={ this.iconStyle } />{ this.props.successTips }
        </div>
      </div>
    )
  }
}
