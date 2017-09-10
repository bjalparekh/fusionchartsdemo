import React from 'react';
import ReactDOM from 'react-dom';

import ReactFusionComp from './ReactFusionComp';
import ReactHighComp from './ReactHighComp';

var myDataSource = {
		chart: {
		  	caption: "Harry's SuperMart",
		  	subCaption: "Top 5 stores in last month by revenue",
		  	numberPrefix: "$",
		},
		data:[
			{
			  	label: "Bakersfield Central",
			  	value: "880000"
			},
			{
			  	label: "Garden Groove harbour",
			  	value: "730000"
			},
			{
			  	label: "Los Angeles Topanga",
			  	value: "590000"
			},
			{
			  	label: "Compton-Rancho Dom",
			  	value: "520000"
			},
			{
			  	label: "Daly City Serramonte",
			  	value: "330000"
			}
		]
	},

	revenueChartConfigs = {
		type: "column2d",
		width:600,
	    height: 400,
	  	dataFormat: "json",
	  	dataSource: myDataSource
    };

// ReactDOM.render(
// 	<ReactFusionComp config={revenueChartConfigs} />,
// 	document.getElementById('chart-container')
// );

ReactDOM.render(
	<ReactHighComp config={revenueChartConfigs} />,
	document.getElementById('chart-container')
);

