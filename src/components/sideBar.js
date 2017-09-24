/**
 * Created by xiii on 2017/4/29.
 */
import React, {Component} from 'react'
import {Menu, Icon} from 'antd'

export  default class SideBar extends Component {

    constructor(args) {
        super(args)
        this.history = this.props.history
    }

    componentDidMount() {
    }

    linkTo = (item) => {
        this.history.push(item.key)
    }
    render() {
        const { ItemGroup, SubMenu } = Menu

        return (
            <Menu
                onClick={this.linkTo}
                defaultSelectedKeys={['/personalInfo']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>统计信息</span></span>}>
                    <ItemGroup key="g1" title="图表展示">
                        <Menu.Item key="/personalInfo">表格示例</Menu.Item>
                        <Menu.Item key="/chart">条形图示例</Menu.Item>
                    </ItemGroup>
                    <ItemGroup key="g2" title="Item 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </ItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
            </Menu>
        )
    }
}