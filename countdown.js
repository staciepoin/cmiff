var deadline = 'Feb 9 2017';
function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days};
}
function run_clock(id,endtime){
	var clock = document.getElementById(id);
	
	// get spans where our clock numbers are held
	var days_span = clock.querySelector('.days');

	function update_clock(){
		var t = time_remaining(endtime);
		
		// update the numbers in each part of the clock
		days_span.innerHTML = t.days;
		
		if(t.total<=0){ clearInterval(timeinterval); }
	}
	update_clock();
	var timeinterval = setInterval(update_clock,1000);
}
run_clock('clockdiv',deadline);
