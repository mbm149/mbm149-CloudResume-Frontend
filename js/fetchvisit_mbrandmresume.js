visitCounter();

function visitCounter(){
	fetch('https://gw-dkcty19e.uc.gateway.dev/')
	 .then(data => data.json())
	 .then(post => {  console.log(post);
	document.getElementById('counters').innerHTML = post });
     } 
