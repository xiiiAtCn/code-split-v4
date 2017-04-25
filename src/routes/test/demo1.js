/**
 * Created by xiii_ on 2017/4/25.
 */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'antd'

class Demo1 extends Component {

    clickButton = () => {
        window.confirm('Are you sure?')
    }

    render () {

        return (
            <div>
                <Button>click me! </Button>
            </div>
        )
    }
}

ReactDOM.render(
    <Demo1/>,
    document.getElementById('container')
)