(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = global || self, factory(global.ReactSimpleVerify = {}, global.React));
}(this, (function (exports, React) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var barImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAdCAYAAADRoo4JAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU4NTc5MkIzMjc3RjExRUE5RkNEQUIyQzREODU1NUVFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU4NTc5MkI0Mjc3RjExRUE5RkNEQUIyQzREODU1NUVFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTg1NzkyQjEyNzdGMTFFQTlGQ0RBQjJDNEQ4NTU1RUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTg1NzkyQjIyNzdGMTFFQTlGQ0RBQjJDNEQ4NTU1RUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5zUj/hAAAE2klEQVR42sSYTWgbRxTHd7eqIIH00iTuIYTEaqLYhxba4oJdig8toadSqGt6KQQSu1AMCchUB5HGdWM3IWrkQ8ghh1BKPkjjtA4hbQWqaQimHykkjh1kW4mRiypbVrTSaqXV12r7njSrrNb7obUEXfgjSzs785u3/3nzxlRf3wl7oVAYlCRpWdK/ykQiUUmhIlGBKE+UU0ggyhJliHiF0kQcUYooCZorlUpHBgYGnqc5LvvBtm1bblD6l6T61PqtkXtNtxUEYZAul8shmqYdFoCl/2siEOnHNL7vJmCbglQNrdsWAlr722bRCnptrEwWQWkLAanrz2YBZDOvED9oC/1ojin3A1fZKMKWZt6qCJq9GaZJK2xoo/Cl1Ixt9NoyDVohazLzyuzxE7JOpJEIYj7ejP0Ys5nj5jA+7u26c2fmIMAkjCIKyT3odp94h+P47+B7WW/g+fmFT3y+82/BhvWn1qQ1MkitGWM2KzC6bWjoU8+tWz+GL1/+/j2AeqSTliibzXagv//9jpGRsa8jkejnuDtqRdDpdHyxc+f2LR7PV4dhclfI5JTRp3W5VFuv1vZb2Xrz+fzMqVNnO8bGzhxIp9NXcPuFiMvKEQmolZWVz44dc7fPzPxxUBTFGPyWAfFEaRRMPHz37u/vYrtoNOqCdglQiihJxOJbBT2VRZnUCnV1AgwSmpq63TM87HHE4/GTKtgaMCibTCbPY7vr16fegFc/p4Ql4gAoHgotDyJ0MBjsg/7/FcVysioELrMEWgaOU1YLG3gotbj4+NDQ0LBjaenJYS1Yogzs/T+Njp7e53J59mYy2UklbBW4qkQicdrtdrf7/f6efL5wH4HhPkuA5QjHlcCiWXQVVRhKWFtbH8HIBAK/va0BmyU2yBSLxflr1354HaFzudwvMiyJsKwUz/OXvF7v/vHxb14uFsUgwqId1MCM1bxIUhf49J+/8bvD0f6KUZbJ5fJzs7NzyR07ttsZhmnTy9c8n30YjbLF7u43dzMMtVWXy0qNi56FiC2gL9GfLJua0LKCLPD5KEZ2cvLma/DcolZkQevB4NJHR4+694TD4SPwPYJ2IIsNIyxHdx1FNWoFhOX5zE20gcczuk8Qcj8bWQEGH0SIhYVQPxlcDcsVCsVHfv+vPdguFoufJHA1WCNgPVgZWGBZ1oew6EdY9bN6sDBAOBAIdMMi2rO6GnPjIq1faFVY8PPtc+cudCBsOs1fIqCsCvgpAmM2IcAxSgNWHV0B8uQwXI4HD+Y/xMH0sgLcW/X5fE6Xy7WX47iLG7NCFTaV4r6FHbH96tUbr8Lk/5KzghpWXmxKYNwKSyYLTrx37/7Hu3a95Gxra/vSqMRE/01PTx/q7e2dgF3PqVesJxLJM9Ho2mxn534vTTMv0rRx6YrPYmlZ2XkJsGFh04Ljj0Y/NNn6G6qr5VNHpZbQLekaLBVNS0M92E0cxyjGoPyjNlMPW+nHxAqG9XBTJwFrJ4oNVpCMy9v6N8K06iTQhBVMxqx/hIFOn7Tg3KVpBXmh1DeRGrYCzhf7kNtDWltmWJbztODcteGe/L+E6oBK8GeHCjMrIKhyCUBun3gO+op0dXWt2u32Tuj4BcU/LyiLJ2qqgWgrl1xt4clw9U6SKm3wd4jsChwazh4/PnHxPwEGAEcKqqR0b1NgAAAAAElFTkSuQmCC';

    var successImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAB1UlEQVQ4T62UMaiPURjGf08ZDHegKMOVlIFiuHGLMlBuUgaDkuEW03UHpQxXmcSNQRkNBooyIpkoREkM1yDEQBluXXUNBoN69Oj8b+f/3e/7X8P/1Dd855x+7/M+7/seMeSlIfMYCLS9CtgJbAB+AV8kfRskohVoew1wHjgBrAN+ANlLgLfAJUkP2sDLgLa3Aw+BP8AF4L6kqMP2VmAKOAXcAaYl5d7S6gPaHgXeAC+BSUm/21TY3lWCJtj0IOC9ktpEM3ITbHs38AI4IOl573xJoe0twGdgTNJcl/GlUAclPbJ9ExiVNNEGPJsiSNqxAuwusBfYDETlY2Btz+da4XVgRNJkKUDMn5P0uvynwj3YfkkfbacDFoBt+c+9GngjbSHpZAFcBM4A+4B3TVi5k1ZarG2qgTPAUUnjvZRtJ8jh0nup7D9l1Xn20hXrJaVX+xTGj1fARknfu9Ks/bV9ORlI2rOsKAUQ4FdJxysV8S7e/mzA0rMfgNOSbnUBk8JT4Iqk2QHVzmynuvN1y/SlXCk6AtwGngHnJL2vzlYDxzLLQGw51FTe9Thknq9lCmJB+QLLftZVYLZtmlZ6vjI9aeJN5fn6BDzpmvHWlLt8+9/9ob/YfwHfuLkV7uJ9fwAAAABJRU5ErkJggg==';

    var ReactSimpleVerify = (function (_super) {
        __extends(ReactSimpleVerify, _super);
        function ReactSimpleVerify(props) {
            var _this = _super.call(this, props) || this;
            _this.x1 = 0;
            _this.x2 = 0;
            _this.isMousedown = false;
            _this.isSuccess = false;
            _this.max = _this.props.width - 50;
            _this.style = {
                width: _this.props.width,
                height: _this.props.height,
                border: _this.props.borderColor + " 1px solid",
                backgroundColor: _this.props.bgColor,
                borderRadius: _this.props.borderRadius
            };
            _this.slideBoxStyle = {
                borderRadius: _this.props.borderRadius
            };
            _this.iconStyle = {
                background: "url(" + _this.props.successIcon + ") no-repeat"
            };
            _this.reset = function () {
                _this.isSuccess = false;
                _this.setState({
                    diff: 0
                });
                setTimeout(function () {
                    _this.isMousedown = false;
                    _this.setState({
                        isMouseEnter: false
                    });
                }, 0);
            };
            _this.state = {
                isMouseEnter: false,
                diff: 0
            };
            return _this;
        }
        ReactSimpleVerify.prototype.componentDidMount = function () {
            document.body.addEventListener('mousemove', this.mousemove.bind(this));
            document.body.addEventListener('touchmove', this.mousemove.bind(this));
            document.body.addEventListener('mouseup', this.mouseup.bind(this));
            document.body.addEventListener('touchend', this.mouseup.bind(this));
        };
        ReactSimpleVerify.prototype.componentWillUnmount = function () {
            document.body.removeEventListener('mousemove', this.mousemove.bind(this));
            document.body.removeEventListener('touchmove', this.mousemove.bind(this));
            document.body.removeEventListener('mouseup', this.mouseup.bind(this));
            document.body.removeEventListener('touchend', this.mouseup.bind(this));
        };
        ReactSimpleVerify.prototype.mouseenter = function () {
            if (this.isSuccess) {
                return;
            }
            this.setState({
                isMouseEnter: true
            });
        };
        ReactSimpleVerify.prototype.mouseleave = function () {
            if (this.isSuccess || this.isMousedown) {
                return;
            }
            this.setState({
                isMouseEnter: false
            });
        };
        ReactSimpleVerify.prototype.mousedown = function (e) {
            if (this.isSuccess) {
                return;
            }
            this.x1 = e.nativeEvent.x || e.touches[0].clientX;
            this.isMousedown = true;
        };
        ReactSimpleVerify.prototype.mousemove = function (e) {
            if (!this.isMousedown || this.isSuccess) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            this.x2 = e.x || e.touches[0].clientX;
            var diff = this.x2 - this.x1;
            if (diff < 0) {
                diff = 0;
            }
            if (diff >= this.max) {
                diff = this.max;
                this.isSuccess = true;
                this.props.success && this.props.success();
            }
            this.setState({
                diff: diff
            });
        };
        ReactSimpleVerify.prototype.mouseup = function () {
            if (this.isSuccess) {
                return;
            }
            this.isMousedown = false;
            this.setState({
                isMouseEnter: false,
                diff: 0
            });
        };
        ReactSimpleVerify.prototype.render = function () {
            var slideStyle = {
                borderRadius: this.props.borderRadius,
                background: this.props.movedColor,
                left: 50 - this.props.width,
                opacity: this.state.isMouseEnter ? 1 : 0,
                transitionDuration: !this.state.isMouseEnter || !this.isMousedown ? '.3s' : '0s',
                transform: "translateX(" + this.state.diff + "px)"
            };
            var barStyle = {
                background: this.props.barBackground,
                transitionDuration: !this.state.isMouseEnter || !this.isMousedown ? '.3s' : '0s',
                transform: "translateX(" + this.state.diff + "px)"
            };
            var textStyle = {
                opacity: this.isSuccess ? 1 : 0,
                transitionDuration: !this.state.isMouseEnter || !this.isMousedown ? '.3s' : '0s'
            };
            return (React.createElement("div", { style: this.style, className: "simple-verify" },
                React.createElement("div", { className: "verify-tips" }, this.props.tips),
                React.createElement("div", { style: this.slideBoxStyle, className: "verify-box" },
                    React.createElement("div", { style: slideStyle, className: "veriry-slide" })),
                React.createElement("div", { className: "verify-bar", onMouseEnter: this.mouseenter.bind(this), onTouchStart: this.mouseenter.bind(this), onMouseLeave: this.mouseleave.bind(this), onTouchEnd: this.mouseleave.bind(this), onMouseDown: this.mousedown.bind(this), onTouchMove: this.mousedown.bind(this) },
                    React.createElement("div", { style: barStyle, className: "icon" })),
                React.createElement("div", { style: textStyle, className: "verify-success-tips" },
                    React.createElement("span", { style: this.iconStyle }),
                    this.props.successTips)));
        };
        ReactSimpleVerify.defaultProps = {
            width: 340,
            height: 36,
            borderColor: '#E4E4E4',
            bgColor: '#F2F3F5',
            borderRadius: 4,
            tips: '请按住滑块，拖动到最右边',
            barBackground: "url(" + barImage + ")",
            movedColor: 'linear-gradient(313deg, rgba(65, 209, 102, 1) 0%, rgba(90, 232, 118, 1) 100%)',
            successTips: '完成验证',
            successIcon: successImage
        };
        return ReactSimpleVerify;
    }(React.Component));

    exports.ReactSimpleVerify = ReactSimpleVerify;
    exports.default = ReactSimpleVerify;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
