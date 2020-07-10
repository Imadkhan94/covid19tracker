import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Total_cases',
		'Total_Recovered',
    'Total Death',
    'Total serious cases',
    'Total unresolved (0)',
    'Total new cases today (0)',
    'Total new death today (0)',
    'Total active cases (0)',
	],
	datasets: [{
		data: [33908,20847,957,12104,0,0,0,0],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
    '#FFCE56',
     'red',
     'black',
     'blue',
     'gray',
     'orange',
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
    '#FFCE56',
		]
  }]
};
function PIEchart(){
    return (
      <div>
        <h2>Afghanistan Piechart</h2>
        <Pie data={data} height={100}/>
      </div>
    );
}
export default PIEchart;