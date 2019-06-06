// App组件
import React, { Component } from 'react'
import { Button, message } from 'antd'

export default class App extends Component {
    handleClick = () => {
        message.info('普通消息')
    }
    render() {
        return (
            <div>App<Button type="primary" onClick={this.handleClick}>按钮</Button></div>
        )
    }
}