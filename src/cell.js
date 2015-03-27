var Cell = function (x,y,alive,pxSize,interaction) {
	this.pxSize = pxSize;
	this.interaction = interaction;
	this.neighbours = [];
	this.x = x;
	this.y = y;
	this.alive = alive;
}

Cell.prototype.tick = function(renderer){

	var prevState = this.alive;
	var aliveCount = 0;
	for(var i=0; i<this.neighbours.length; i++){
		if(this.neighbours[i].alive) {
			aliveCount ++;
		}
	}
	
	//under-population
	if(aliveCount<2 && this.alive){
		this.alive = false;
	}

	//happy
	if((aliveCount==2 || aliveCount==3) && this.alive){
		this.alive = true;
	}

	//over-population
	if(aliveCount>3 && this.alive){
		this.alive = false;
	}

	//reproduction
	if(aliveCount==3 && !this.alive){
		this.alive = true;
	}

	if((Math.abs(Math.floor(this.interaction.mouse.x/this.pxSize)-this.x)<5)&&(Math.abs(Math.floor(this.interaction.mouse.y/this.pxSize)-this.y)<5)){
		this.alive = this.interaction.mouse.toggle;
	}
	this.special = null;
	if(prevState!= this.alive){
		if(this.alive){
			this.special = 'birth';
		} else {
			this.special = 'death';
		}
		
	}
}

Cell.prototype.render = function(renderer){
	var context = renderer.context;
	var col = this.alive?'rgb(150,150,150)':'rgb(50,50,50)';
	if(this.special == 'birth'){
		col = 'rgb(255,255,255)';
	} else if (this.special == 'death') {
		col = 'rgb(0,0,0)';
	}
	context.fillStyle = col;
	context.fillRect(this.x*this.pxSize,this.y*this.pxSize,this.pxSize,this.pxSize);
}