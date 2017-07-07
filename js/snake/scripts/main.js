$(document).ready(function(){
	var snake = [];

	var grid_x = 32;
	var grid_y = 16;

	var obj = $('#main');
	var fc = 0;

	function init(){
		var table = '<table>';

		for(i = 0; i < grid_x; i++){
			
			table += '<tr>';
			for(j = 0 ; j < grid_y; j++){
				table += '<td style="background-color:#000"></td>';
			}
			table += '</tr>';
		}	
		table +='</table>';
		obj.html(table);

		setTimeout(33,update);
		
		
	}
		
	function update(){
		
		fc ++;
		console.log(fc);
		
		
		}
		
	function draw(){
		
		
	}


	init();

});

