import React, {Component} from 'react';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';

charts(FusionCharts);

export default class ReactFusionComp extends Component {
    constructor(props) {
        super(props);
        this.chart = new FusionCharts(props.config);
    }

    componentDidMount() {
        this.chart.render('rfc')
    }

    render() {
        return (
            <div id="rfc">
            </div>
        )
    }
}