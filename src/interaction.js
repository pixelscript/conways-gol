var Interaction = function () {
	this.mouse = {'x':0,'y':0,'toggle':false};
	this.mouse.lastPoint = new Point(0,0,0);
	$(window).on('mousemove',$.proxy(this.setMouse,this));
	$(window).on('click',$.proxy(this.clickMouse,this));
}
Interaction.prototype.setMouse = function(e){
	this.mouse.x = e.clientX;
	this.mouse.y = e.clientY;
	this.mouse.newPoint = new Point(this.mouse.x,this.mouse.y,0);
	this.mouse.vector = new Vector(this.mouse.lastPoint,this.mouse.newPoint);
	this.mouse.lastPoint = this.mouse.newPoint;
}

Interaction.prototype.clickMouse = function(e){
	this.mouse.toggle = !this.mouse.toggle;
	if(this.mouse.toggle) {
		$('body').addClass('black');
	} else {
		$('body').removeClass('black');
	}
}