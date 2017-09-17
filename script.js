
function calculateTip() {



	var bill = document.getElementById("bill").value;
    var service = document.getElementById("service").value;
    var persons = document.getElementById("persons").value;
    
    // Quick validation
    if(bill === "" || service == 0) {
        window.alert("Please enter a number so we can calculate your tip amount");
        return; // this will prevent the function from continuing
    }
    

	if(persons === "" || persons <= 1) {
        persons = 1;
        document.getElementById("each").style.display = "none"; }
    else {    
        document.getElementById("each").style.display = "block"; }

	
	//calculations
	var total = (bill * service) / persons;
	total = Math.round(total * 100) / 100;
	total = total.toFixed(2);

    // Display the tip!
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total; }

    //Hides the tip amount when loading
	document.getElementById("totalTip").style.display = "none";
	document.getElementById("each").style.display = "none";

	document.getElementById("calculate").onclick = function() { calculateTip(); };

