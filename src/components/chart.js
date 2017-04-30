/**
 * Created by xiii on 2017/4/29.
 */
import React, {Component} from 'react'
import createG2 from 'g2-react'
import {Frame} from 'g2'

export default class CustomChart extends Component {

    constructor(args) {
        super(args)
        this.Chart = createG2((chart) => {
            this.chart = chart
            this.renderChart(args, chart)
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.props.data) {
            this.chart.clear()
            this.renderChart(nextProps, this.chart)
        }
    }

    renderChart = (props, chart) => {
        let data = [
            {name: 'Tokyo',data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]},
            {name: 'New York',data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]},
            {name: 'London',data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]},
            {name: 'Berlin',data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]}
        ];
        for(let i=0; i < data.length; i++) {
            let item = data[i];
            let datas = item.data;
            let months = ['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.'];
            for(let j=0; j < datas.length; j++) {
                item[months[j]] = datas[j];
            }
            data[i] = item;
        }
        let frame = new Frame(data);
        frame = Frame.combinColumns(frame, ['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.'],'月均降雨量','月份','name');
        chart.source(frame);
        chart.col('name',{alias: '城市'});
        chart.intervalDodge().position('月份*月均降雨量').color('name');
        chart.render();
    }

    render() {
        return <this.Chart width={600} height={500} forceFit={true} data={[]}/>
    }
}