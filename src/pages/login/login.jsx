// Login组件
import React, { Component } from 'react'
import './login.less'
import logo from './images/logo.png'
import {
    Form,
    Icon,
    Input,
    Button
} from 'antd'

class Login extends Component {
    validatorPWD = (rule, value, callback) => {
        if (!value) {
            callback('请输入密码！')
        } else if (value.length < 4) {
            callback('密码不小于4位！')
        } else if (value.length > 12) {
            callback('密码不能超过12位！')
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback('密码只能是字母、数字和下划线!')
        } else {
            callback()
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('验证成功，发送ajax请求', values);
            } else {
                console.log('验证失败！')
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>React 项目: 后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <div>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {
                                    getFieldDecorator('username', {
                                        rules: [
                                            { required: true, message: '请输入用户名!' },
                                            { min: 4, message: '用户名最小4位!' },
                                            { max: 12, message: '用户名最大12位!' },
                                            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名由字母、数字和下划线组成!' },
                                        ],
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="用户名"
                                        />
                                    )
                                }
                            </Form.Item>
                            <Form.Item>
                                {
                                    getFieldDecorator('password', {
                                        rules: [
                                            { validator: this.validatorPWD }
                                        ]
                                    })(
                                        <Input
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="密码"
                                        />
                                    )
                                }
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </section>
            </div>
        )
    }
}

export default Form.create()(Login)