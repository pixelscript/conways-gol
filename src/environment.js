var Environment = function (interaction,renderer) {
	var pxSize = this.pxSize = 6;
	var w = this.w = Math.floor(renderer.width/pxSize);
	var h = this.h = Math.floor(renderer.height/pxSize);
	function calcIndex(x,y){
		return (y*w)+x;
	}
	var cells = this.cells = [];
	for (var y=0; y<h; y++) {
		for (var x=0; x<w; x++) {
			cells.push(new Cell(x,y,Math.random()>0.95,pxSize,interaction));
		}
	}
	for (var y=0; y<h; y++) {
		for (var x=0; x<w; x++) {
			var neighbours = [];
			var chosen = [];
			var index = calcIndex(x,y);
			neighbours.push(cells[calcIndex(x-1,y-1)]);
			neighbours.push(cells[calcIndex(x-1,y)]);
			neighbours.push(cells[calcIndex(x-1,y+1)]);
			neighbours.push(cells[calcIndex(x,y-1)]);
			neighbours.push(cells[calcIndex(x,y+1)]);
			neighbours.push(cells[calcIndex(x+1,y-1)]);
			neighbours.push(cells[calcIndex(x+1,y)]);
			neighbours.push(cells[calcIndex(x+1,y+1)]);
			for(var i=0;i<neighbours.length;i++){
				if(neighbours[i]){
					chosen.push(neighbours[i]);
				}
			}
			cells[index].neighbours = chosen;
		}
	}
}

Environment.prototype.reSeed = function(t) {
	var cells = this.cells;
	for (var i=0; i<cells.length; i++) {
		cells[i].alive = Math.random()>0.95
	}
}

Environment.prototype.genocide = function(t) {
	var cells = this.cells;
	for (var i=0; i<cells.length; i++) {
		cells[i].alive = false;
	}
}

Environment.prototype.tick = function(t) {
	var cells = this.cells;
	for (var i=0;i<cells.length;i++) {
		cells[i].tick(t);
	}
}

Environment.prototype.render = function(renderer) {
	var cells = this.cells;
	for (var i=0;i<cells.length;i++) {
		cells[i].render(renderer);
	}
}