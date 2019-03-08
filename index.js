function produceDrivingRange(blockRange){
	return function(a, b){
		let firstNum = a.match(/\d+/)[0]
		let secondNum = b.match(/\d+/)[0]
		let difference = Math.abs(firstNum - secondNum)
		
		if (difference <= blockRange){
			return `within range by ${blockRange - difference}`
		}

		else {
			return `${difference - blockRange} blocks out of range`
		}
	}
}

function produceTipCalculator(rate) {
	return function(fare) {
		return fare * rate
	}
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.id = ++driverId
	  this.name = name 
	}
  }	
}