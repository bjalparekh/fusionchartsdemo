import React, {Component} from 'react';
const Highcharts = require('highcharts');

// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);

export default class ReactHighComp extends Component {
    constructor(props) {
        super(props);
       
        
    }

    componentDidMount() {
        Highcharts.chart('hc', {
            chart: {
                renderTo: 'container',
                type: 'pie',
                width: 600,
                height:400
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, {
                name: 'John',
                data: [5, 7, 3]
            }]
        });
    }

    render() {
        return (
            <div id="rhc">
            </div>
        )
    }
}