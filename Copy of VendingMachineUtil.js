function Looping(){
//포장마차리필
// for
// forEach
// Map
// find
// reduce
// filter
	this.tempList = function(){
			return [this.forTest(),this.forEachTest(),this.MapTest(),this.findTest(),this.reduceTest(),this.filterTest()]
	}

	this.forTest = function(arr){
		let returnVal = []
		for (let index = 0; index < arr.length; index++) {
			returnVal.push(arr[index])
		}
		return returnVal
	}

	this.forEachTest = function(arr){		
		let returnVal =[]
		arr.forEach(i => {if(i % 2 ==0) returnVal.push(i) });
		return returnVal
	}

	this.MapTest = function(arr){
		return arr.map(i => i*100)

	}
	
	this.findTest = function(arr){
		arr.find(function (i){
				return i > 5
		})
	}
	
	this.findTest2 = function(arr,searchId){
		let returnVal = arr.find(i => i.id == searchId)
		return (returnVal == undefined) ? '찾는 아이디가 무엇인가 ' : returnVal.value
	}

	this.reduceTest = function(arr){
	}

	this.filterTest = function(arr){
	}

}