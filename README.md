# react-simple-verify

## 简易滑动验证之react组件

- **[作者邮箱：15524261@qq.com](mailto:15524261@qq.com)**
- **[github项目地址：https://github.com/guqingming/vue-simple-verify](https://github.com/guqingming/react-simple-verify)**
- **[码云项目地址：https://gitee.com/mycssweb/vue-simple-verify](https://gitee.com/mycssweb/react-simple-verify)**

## 截图

![1](https://gitee.com/mycssweb/vue-simple-verify/raw/master/docs/1.png)

![2](https://gitee.com/mycssweb/vue-simple-verify/raw/master/docs/2.png)

## 安装

```bash
$ npm install react-simple-verify
```

注册组件

```js
import React from 'react'
import ReactSimpleVerify from 'react-simple-verify'
import 'react-simple-verify/dist/react-simple-verify.css'
```

使用组件

```jsx
<ReactSimpleVerify ref="verify" success={ this.success.bind(this) }/>
```

重置状态方法
```js
/**
 * 重置
 */
private reset() {
  const $verify = this.refs.verify as ReactSimpleVerify
  $verify.reset()
  this.setState({
    isPass: false
  })
}
```

参数说明

| 字段名        | 字段类型 | 默认值                   | 说明                       |
| ------------- | -------- | ------------------------ | -------------------------- |
| width         | number   | 340                      | 长度                       |
| height        | number   | 36                       | 宽度                       |
| borderColor   | string   | #e4e4e4                  | 边框颜色                   |
| bgColor       | string   | #f2f3f5                  | 背景颜色                   |
| borderRadius  | number   | 4                        | 圆角大小                   |
| tips          | string   | 请按住滑块，拖动到最右边 | 提示文案                   |
| barBackground | string   | 默认图片                 | 滑块的背景颜色，可以是图片 |
| movedColor    | string   | 默认颜色                 | 滑过的颜色                 |
| successTips   | string   | 完成验证                 | 成功文案                   |
| successIcon   | string   | 默认图片                 | 成功后的图标               |


事件

| 事件名  | 说明                 | 回调参数 |
| ------- | -------------------- | -------- |
| success | 验证完成后的回调函数 | -        |

方法

| 事件名 | 说明                   | 参数 |
| ------ | ---------------------- | ---- |
| reset  | 使验证器重置为初始状态 | -    |
