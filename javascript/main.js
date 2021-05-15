// function loadjson(file,callback){
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState===4 && xhr.status===200){
// 			callback(xhr.responseText);
// 		}
// 	};
// xhr.send(null);
// }

// loadjson("data.json",function(text){
// 	let data = JSON.parse(text);
// 	console.log(data);
// 	displayData(data.details);

// })

function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
			})
		})
}
var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	displayData(data.details);
})







function displayData(info){
  var bodyElement = document.querySelector("body");

  var row = document.createElement("div");
  row.classList.add("row");
  bodyElement.appendChild(row);

  for(i=0;i<info.length;i++){
  	var column = document.createElement("div");
  	row.appendChild(column);

  	var card = document.createElement("div");
  	card.classList.add("cardbody1");
  	column.appendChild(card);

  	var img1 = document.createElement("img");
  	img1.src=info[i].image;
  	img1.alt="Picture";
  	card.appendChild(img1);

  	var br = document.createElement("br");
  	card.appendChild(br);

  	var producdesc = document.createElement("u");
  	producdesc.textContent="Product Description";
  	card.appendChild(producdesc);

  	var br = document.createElement("br");
  	card.appendChild(br);

  	var name = document.createElement("h3");
  	name.textContent=info[i].mobilename;
  	card.appendChild(name);


  	var oprice = document.createElement("s");
  	oprice.textContent=info[i].originalprice;
  	card.appendChild(oprice);

  	var offprice = document.createElement("p");
  	offprice.textContent=info[i].offerprice;
  	card.appendChild(offprice);

  	var btn1 = document.createElement("button");
  	btn1.textContent="BuyNow";
  	card.appendChild(btn1);

  	var br = card.appendChild(document.createElement("br"));

  	var btn2 = document.createElement("button");
  	btn2.textContent="AddToCart";
  	card.appendChild(btn2);
  }
}