/**
 * Created by xiii on 2017/4/29.
 */
import React, {Component} from 'react'
import {Layout } from 'antd'
import SideBar from '../components/sideBar'
import {Router, Route, Redirect} from 'react-router'
import createHashHistory from 'history/createHashHistory'

import CustomTable from 'bundle-loader?lazy&name=customTable!../components/table'
import CustomChart from 'bundle-loader?lazy&name=customChart!../components/chart'
import Bundle from '../components/lazyload'
const Loading = function () {
    return <div>Loading...</div>
}
const createComponent = (component) =>() => (
    <Bundle load={component}>
        {
            (Component) => Component?<Component />:<Loading/>
        }
    </Bundle>
)


export default class WholePage extends Component {

    constructor(args) {
        super(args)
        this.history = createHashHistory()
    }
    render() {
        const { Header, Footer, Sider, Content } = Layout
        return (
            <Layout style={{height:'100%'}}>
                <Header style={{background:'#7dbcea'}}>Header</Header>
                <Layout>
                    <Sider style={{background:'#3ba0e9'}} >
                        <SideBar history={this.history}/>
                    </Sider>
                    <Layout>
                        <Content style={{background:'white'}} >
                            <Router history={this.history}>
                                <div>
                                    <Redirect from="/" to="/personalInfo" />
                                    <Route path="/personalInfo" component={createComponent(CustomTable)}/>
                                    <Route path="/chart" component={createComponent(CustomChart)}/>
                                </div>
                            </Router>
                        </Content>
                        <Footer style={{background:'#7dbcea'}}>Footer</Footer>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}