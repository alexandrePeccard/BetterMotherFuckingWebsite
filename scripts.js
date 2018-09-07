var msgPopUp = "Bienvenue ! Le site xxxvidsxxx est génial. Rejoins-nous et profites de centaines de vidéos gratuites !";

function onConfirm() {
	window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
function showPopup() {
	window.alert(msgPopUp);
	if (confirm("Souhaitez-tu être redirigé vers le site xxxvidsxxx.com ?")) {
		onConfirm();
	}
}

function customizeParagraph(options) {
	var paragraphs = document.getElementsByTagName('p');
	for(var i=0; i < paragraphs.length; i++) {
		paragraphs[i].style.color = options['colorp'];
		paragraphs[i].style.fontFamily = options['fontp'];
		}
	}

function customizeHeading(options) {
	var heading = document.querySelectorAll("h1, h2, h3");
	for(var i=0; i < heading.length; i++) {
		heading[i].style.color = options['colorh'];
		heading[i].style.fontFamily = options['fonth'];
	}
}

function customizeAllElements(options) {
	document.body.style.backgroundColor = options['backgroundColor'];
	customizeParagraph(options);
	customizeHeading(options);
}

function activatePsycheMod() {
	var myElement = document.getElementById("psychemod");
	myElement.onclick = function(myElement) {
		
		var options = [];
		if(myElement.target.classList.contains("active") == false) {
			myElement.target.classList.add("active");
			options['isActive'] = true;
			options['backgroundColor'] = 'magenta';
			options['colorp'] = 'blue';
			options['colorh'] = 'green';
			options['fontp'] = 'papyrus';
			options['fonth'] = 'Comic Sans';
		} else if(myElement.target.classList.contains("active") == true) {
			myElement.target.classList.remove("active");
			options['isActive'] = false;
			options['backgroundColor'] = 'white';
			options['colorp'] = 'black';
			options['colorh'] = 'black';
			options['fontp'] = 'Times New Roman';
			options['fonth'] = 'Times New Roman';
		}

		customizeAllElements(options);
	}
}