//storing variables
let text = document.getElementById('additem');
let ul = document.getElementById('ul');
let button = document.getElementsByClassName('button');

// adding items
button.onclick = addElement; //eventhandler to call addElement
function addElement() {
    let ul = document.getElementById('ul'); //storing unordered list
    let newLi = document.createElement('li'); // adding ordered list
    let label = document.createElement('label'); // adding label
    label.innerText = text.value;

    let deleteButton = document.createElement('button'); //adding delete button
    deleteButton.innerText = 'delete'; // text of delete button
    deleteButton.setAttribute('class', 'deleteButton'); //setting attribute
    function deletebutton() { //creating delete function
        let removeitem = this.parentElement;
        ul.removeChild(removeitem)
    }

    let checkbox = document.createElement('input'); //adding checkbox
    checkbox.type = 'checkbox';
    checkbox.name = 'box';

    let check = function(e) { //adding a check function and creating an if else condition
        checkbox = document.querySelector("input[name = box]");
        if (checkbox.checked) {
            let Text = this.parentElement;
            Text.style.textDecoration = 'line-through'; //decoring the values
            ul.appendChild(Text);
            let removeitem = function() { //creating remove function
                let removeitem = this.parentElement;
                ul.removeChild(removeitem);


            }
            deleteButton.addEventListener('click', deletebutton); //creating an event listener


        } else {
            let Text = this.parentElement;
            Text.style.textDecoration = 'none'; //decore in else condition
            ul.removeChild(Text);
            ul.appendChild(newLi);

        }
    }
    checkbox.addEventListener('change', check); //creating event listener for checkbox

    deleteButton.addEventListener('click', deletebutton); //creating event listener deletebutton
    ul.appendChild(newLi);
    text.value = "";

    newLi.appendChild(checkbox);
    newLi.appendChild(label);
    newLi.appendChild(deleteButton);
}

let checked = document.getElementsByTagName('li');
var map;
// google maps api used to show location of store
function initMap() {
	// 
	var mapdiv = document.getElementById('storeLocation');
	// created new map
	  map = new google.maps.Map(mapdiv, {
		zoom: 6,
		center: new google.maps.LatLng(44.336070, -79.681904)
		});
		
		// created store marker
	   var storeMarker = new google.maps.Marker({
		   title: "Online Store",
		   map,
		   position:  new google.maps.LatLng(44.336070, -79.681904)
	   }); 
	     var infowindow = new google.maps.InfoWindow({
			content: "Online Store : @1073 Client Side Javascript : Developed By = Manpreet Singh 200426031"
		});
		// added info to store marker
	storeMarker.addListener('click', function() {
		infowindow.open(map, storeMarker);
	});
}

// geolocation to add yourlocation to map as marker
navigator.geolocation.getCurrentPosition(addMarker);

function addMarker(position)
{
	// adding marker using location coordinates
	var userposition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		   var your = new google.maps.Marker({
		   title: "You Are Here",
		   map,
		   position: userposition
	   }); 
}