(function (window)  // Self executing anonymous function in JavaScript are treated as a class 
{

//	Public properties
//	create prototype instances which are public properties
	Bicycle.prototype.cadence; 
	Bicycle.prototype.gear;
	Bicycle.prototype.speed;
	
//	 the Bicycle class constructor
	function Bicycle(startCadence, startSpeed, startGear)
	{
		this.gear = startGear;
		this.speed = startSpeed;
		this.cadence = startCadence;
	}
	
//	public methods
//	creates prototype functions which are public functions/methods
	Bicycle.prototype.setCadence = function (newValue) 
	{
		cadence = newValue;
	};
	
	Bicycle.prototype.setGear = function (newValue) 
	{
		gear = newValue;
	};
	
	Bicycle.prototype.applyBrake = function (decrement) 
	{
		this.speed -= decrement;
	};
	
	Bicycle.prototype.speedUp = function (increment) 
	{
		this.speed += increment;
	};
	
	
	Bicycle.prototype.printStates = function ()
	{
		console.log("Java Script output --> cadence:" + cadence + " speed:" + this.speed + " gear:" + gear);
	};
	
	window.Bicycle = Bicycle; // making this class available to the DOM document level 
	
}(window)); // passing window parameter 

