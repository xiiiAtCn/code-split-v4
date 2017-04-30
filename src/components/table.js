/**
 * Created by xiii on 2017/4/29.
 */
import React, {Component} from 'react'
import {Table, Card} from 'antd'
import Mock from 'mockjs'
export default class CustomTable extends Component {
    constructor(args) {
        super(args)
        this.state = {
            data:[],
            loading:true
        }
    }

    componentDidMount() {
        let personalInfo = []
        const { Random } = Mock
        setTimeout(() => {
            for (let i =0; i < 100; i++) {
                personalInfo.push({
                    name:Random.cname(),
                    post:'shop assistant',
                    contact:Random.integer(35550000, 68550000),
                    address:Random.county(true),
                    postcode:Random.zip(),
                    description:Random.ctitle(3,7)
                })
            }
            this.setState({
                data:personalInfo,
                loading:false
            })
        }, 2000)
    }

    render() {
        const columns = [
            {
                title:'姓名',
                dataIndex:'name',
                width:200,
            },
            {
                title:'职位',
                dataIndex:'post',
                width:200,
            },
            {
                title:'联系方式',
                dataIndex:'contact',
                width:240,
            },
            {
                title:'地址',
                dataIndex:'address',
                width:300
            },
            {
                title:'邮编',
                dataIndex:'postcode',
                width:200,
                render:(value) => <a >{value}</a>
            },
            {
                title:'简介',
                dataIndex:'description'
            }
        ]
        return (
        <div style={{margin:'20px 10px 10px'}}>
            <Table rowKey={'contact'} dataSource={this.state.data} columns={columns}
                   loading={this.state.loading}
            />
        </div>
        )
    }
}




