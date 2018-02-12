
var numbers = 4;
var random_num = '';
var getValue = '';
var helper = [];

var help_count = 0;

var digits_random = '';

var counter = 1;

var output = '';

var interval = setInterval(checkiffinished, 1000); 

function newgame() {
	
	counter = 1;
	output = '';
	document.getElementById("result").value = output;
	
	var arr = [];
	helper = [];
	random_num = '';
	help_count = 0;
	
	for (var count = 0; count < numbers; count += 1) {
		
		helper.push('*');
	}
	
	while(arr.length < numbers) {
		
		var randomnumber = Math.ceil(Math.random() * 9);
		if (arr.length == 0 && randomnumber == 0) continue;
		if(arr.indexOf(randomnumber) > -1) continue;
		arr[arr.length] = randomnumber;
		
		random_num = "" + random_num + arr[arr.length - 1];
	}
}

function stop() {
	
	output = '' + output + 'Числото е : ' + random_num + '\n';
	document.getElementById("result").value = output;
}

function restart() {
	
	counter = 1;
	output = '';
	help_count = 0;
	document.getElementById("result").value = output;
}

function ok() {
	
	var check = getValue = document.getElementById("input").value;
	
	if(check.toString().length == numbers) {
		getValue = check;
		
		if (getValue == random_num) {
			output = '' + output + 'Позна числото!!!\n';
			document.getElementById("result").value = output;
		}
		
		check_values();	
	}
	else {
		output = '' + output + 'Въведи правилен брой цифри!!!\n';
		document.getElementById("result").value = output;
	}
}


function check_values() {
	
	var digits_your = ("" + getValue).split("");
	digits_random = ("" + random_num).split("");
	
	var bulls = 0, cows = 0;
	var count = 0;
	
	var stop_function = false;
	
	for (var count = 0; count < numbers; count += 1) {

		for (var count_2 = 0; count_2 < numbers; count_2 += 1) {
			
			if (count == count_2) 
				continue;
			
			else if (digits_your[count] == digits_your[count_2] && stop_function == false) {
				
				output = '' + output + 'Числото не може да съдържа еднакви цифри\n' ;
				document.getElementById("result").value = output;
				stop_function = true;
			}
				
		}
	}
	
		
	for (var count = 0; count < numbers; count += 1) {

		for (var count_2 = 0; count_2 < numbers; count_2 += 1) {
			
			if (digits_your[count] == digits_random[count_2]) {
				if (count == count_2)
					bulls += 1 ;
				else 
					cows += 1;
			}
		}
	}
	
	if (stop_function == false) {
		if (digits_your[0] != 0) {
			output = '' + output + 'Ход ' + counter + ': ' + getValue + ' : ' + bulls + ' б. ' + cows + ' к.\n' ;
			counter++;
			document.getElementById("result").value = output;
		}
		else 
			output = '' + output + '0 не може да стои в началото на числото\n' ;
			document.getElementById("result").value = output;
	}
}

function help_me() {
	
	var random_num;
	
	help_count += 1;
	
	for(var count = 1; count > 0; count += 1) {
		
		random_num = Math.ceil(Math.random() * numbers - 1);
		
		if (helper[random_num] == '*') {
			helper[random_num] = digits_random[random_num];
			break;
		}
	}
	
	if (help_count < numbers) {
	
		for (var count = 0; count < numbers; count += 1) {
			
			output = '' + output +  helper[count];
		}

			output = '' + output + '\n' ;
			document.getElementById("result").value = output;
	}
}


/*

*/