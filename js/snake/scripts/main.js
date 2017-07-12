$(document).ready(function(){
	var snake = [];
	
	var pos_x = 0;
	var pos_y = 0;
	r = false;
	
	var grid_x = 32;
	var grid_y = 16;
	
	var min_length = 3;

	var obj = $('#main');
	var fc = 0;
	
	// move direction
	var move = [0,0];
	

	function init(){
		var table = '<table>';

		for(i = 0; i < grid_y; i++){
			
			table += '<tr class="'+i+'">';
			for(j = 0 ; j < grid_x; j++){
				table += '<td class="'+j+'" style="background-color:#000"></td>';
			}
			table += '</tr>';
		}	
		table +='</table>';
		obj.html(table);

		setInterval(update,33);
	}

	function update(){
		fc ++;
		
	/*	if(!r){
			pos_x ++;
			if(pos_x >= grid_x){
				r = true;
				pos_y ++;
			}
		}else{
			pos_x --;
			if(pos_x <= 0){
				r =false;
			}
	}			*/
	//	console.log(move);
		if(pos_x >= grid_x-1){
			move[0] = 0;
		}else if(pos_x <= 1){
			move[0] = 0;
		}else if(pos_y >= grid_y-1){
			move[1] = 0;
		}else if(pos_y <= 1){
			move[1] = 0;
		}
		pos_x += move[0];
		pos_y += move[1];
		
		draw();	
		
	}
	
	function draw(){
		$('#main tr td').css('background-color','#000');
		$('#main tr.'+pos_y+' td.'+pos_x).css('background-color','#0f0');

		
	}
	
	$('body').on('keypress',function(e){
		console.log(e.keyCode);
		if(e.keyCode == 97){
			// left
			move = [-1,0];
		}else if(e.keyCode == 100){
			// right
			move = [1,0];
		}else if(e.keyCode == 119){
			// up
			move = [0,-1];
		}else if(e.keyCode == 115){
			// down
			move = [0,1];
		}
		console.log(move);
	});
	
	
	

	init();

});

