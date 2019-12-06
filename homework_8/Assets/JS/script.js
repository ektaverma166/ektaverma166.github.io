function makeplot() {
	
	Plotly.d3.csv("https://raw.githubusercontent.com/ektaverma166/ektaverma166.github.io/master/homework_8/Assets/Data%20files/avocado_world_data.csv", function(data){
		processData(data) } );
};

function processData(allRows) {
  	
  	console.log(allRows); 

	var column_country = allRows.map(function(row) { return row["Country"]; })
	console.log(column_country);

	var column_harvest = allRows.map(function(row) { return row["Pounds/Hectare"]; })
	console.log(column_harvest);
	
	var data = [
 		{
  		x: column_country,
    	y: column_harvest,
    	type: 'bar',
    	marker: {color: 'rgb(237, 159, 189)', opacity: 0.5},
    	name: 'Harvest in Pound/Hectare'
  		}
	];
	
	var layout = {
  		showlegend: true,
  		xaxis: {
    	//tickangle: -45
  		},
  		yaxis: {
    	zeroline: false,
    	gridwidth: 2
  		},
  		bargap :0.1
	};

	
	Plotly.newPlot('myDiv', data, layout);
	
}

makeplot();




function makeplot2() {
	
	Plotly.d3.csv("https://raw.githubusercontent.com/ektaverma166/ektaverma166.github.io/master/homework_8/Assets/Data%20files/US_production.csv", function(data){
		processData2(data) } );
};

function processData2(allRows) {
  	
  	console.log(allRows); 

	var column_year = allRows.map(function(row) { return row["Year"]; })
	console.log(column_year);

	var column_quantity = allRows.map(function(row) { return row["Quantity"]; })
	console.log(column_quantity);
	
	var data = [
 		{
  		x: column_year,
    	y: column_quantity,
    	mode: 'lines+markers',
  		type: 'scatter',
    	marker: {color: 'rgb(143, 173, 2)'},
    	name: 'Quantity in Tonnes'
  		}
	];
	
	var layout = {
  		showlegend: true,
	};

	
	Plotly.newPlot('myDiv2', data, layout);
	
}

makeplot2();