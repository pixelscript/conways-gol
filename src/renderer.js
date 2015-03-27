var Renderer = function () {
	this.width = $('body').width();
	this.height = $('body').height();
	this.$canvas = $('<canvas></canvas>');
	this.canvas = this.$canvas[0];
	this.canvas.width = this.width;
	this.canvas.height = this.height;
	this.context = this.canvas.getContext("2d");
	$('body').append(this.$canvas);
	this.clearEvery = true;

}

Renderer.prototype.render = function(){
	if(this.clearEvery){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height );
	}
	
	if(this.env) {
		this.env.render(this);
	}
}

Renderer.prototype.setEnvironment = function(e){
	this.env = e;
}
