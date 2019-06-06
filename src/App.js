// App组件
import React, { Component } from 'react'
import { Button, message } from 'antd'
import { BrowserRouter,Route,Switch } from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

export default class App extends Component {
    handleClick = () => {
        message.success('普通消息')
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/' component={Admin} />
                </Switch>
            </BrowserRouter>
        )
    }
}