//A function  to determine whether it is Christmas Day or not

const christmas = (date)=> {
	let month = date.getMonth();
	let datee = date.getDate();
	
	if(month === 11 && datee == 24){
		return true;
	}
	else{
		return false;
	}
}

console.log(christmas(new Date(2016, 11, 24)));



