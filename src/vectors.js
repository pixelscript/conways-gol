var Vector = function(p1,p2){
	if(p2) {
		this.x = p2.x-p1.x;
		this.y = p2.y-p1.y;
		this.z = p2.z-p1.z;
	} else {
		this.x = p1.x;
		this.y = p1.y;
		this.z = p1.z;
	}
	return this;
}

Vector.prototype.length = function() {
	return Math.sqrt((this.x*this.x) + (this.y*this.y) + (this.z*this.z));
}

Vector.prototype.lengthSqr = function() {
	return (this.x*this.x) + (this.y*this.y) + (this.z*this.z);
}

Vector.prototype.scale = function(val) {
	this.x*=val;
	this.y*=val;
	this.z*=val;
	return this;
}

Vector.prototype.scaleX = function(scale) {
	this.x *= scale;
	return this;
}

Vector.prototype.scaleY = function(scale) {
	this.y *= scale;
	return this;
}

Vector.prototype.scaleZ = function(scale) {
	this.y *= scale;
	return this;
}

Vector.prototype.reverseX = function() {
	this.x = 0 - this.x;
	return this;
}

Vector.prototype.reverseY = function() {
	this.y = 0 - this.y;
	return this;
}

Vector.prototype.reverseZ = function() {
	this.z = 0 - this.z;
	return this;
}

Vector.prototype.add = function(vector) {
	this.x+=vector.x;
	this.y+=vector.y;
	this.z+=vector.z;
	return this;
}

Vector.prototype.sub = function(vector) {
	this.x-=vector.x;
	this.y-=vector.y;
	this.z-=vector.z;
	return this;
}

Vector.prototype.copy = function() {
	return new Vector(new Point(this.x,this.y,this.z));
}

Vector.prototype.getUnit = function(size) {
	var length = this.length();
	if(!size) {
		size = 1;
	}
	return new Vector(new Point((this.x/length)*size,(this.y/length)*size,(this.z/length)*size));
}