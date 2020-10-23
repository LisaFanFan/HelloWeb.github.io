window.onload = function(){
	setTimeout(function() {alert("Hello world");}, 2000)
	//window.location = "http://www.oreilly.com";
	var ts = document.getElementById("timestampId1");
	if(ts.firstChild == null)
	    ts.appendChild(document.createTextNode(new Date().toString()))

	ts.style.backgroundColor = "red";
	ts.className = "highlight";

	var ts2 = document.getElementById("timestampId2");
	ts2.onclick = function(){
		this.innerHTML = new Date().toString();
	}
};
