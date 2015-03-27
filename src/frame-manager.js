var FrameManager = function() {
	this.interaction = new Interaction();
	this.renderer = new Renderer();
	this.env = new Environment(this.interaction,this.renderer);
	this.renderer.setEnvironment(this.env);
	this.lastTime = Date.now();
	this.frameCall = this.frame.bind(this);
}

FrameManager.prototype.start = function(){
	this.lastTime = Date.now();
	this.anim = requestAnimationFrame(this.frameCall);	
}

FrameManager.prototype.stop = function(){
	cancelAnimationFrame(this.anim);	
}
FrameManager.prototype.genocide = function(){
	this.env.genocide();
}
FrameManager.prototype.reSeed = function(){
	this.env.reSeed();
}
	
FrameManager.prototype.frame = function(){
	var now = Date.now(),
		difference = (now - this.lastTime)/1000;
	this.lastTime = now;
	this.env.tick(difference);
	
	this.renderer.render();
	this.anim = requestAnimationFrame(this.frameCall);
}