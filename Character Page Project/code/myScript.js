function Character(fullName, nickname, species, gender, age, bday, abilities, bio, extra){
			this.fullName = fullName;
			this.nickname = nickname;
			this.species = species,
			this.gender = gender;
			this.age = age;
			this.bday = bday;
			this.abilities= abilities;
			this.bio = bio;
			this.extra = extra;
		}

var questionList = [
	"Name",
	"Nickname",
	"Species",
	"Gender",
	"Age",
	"Date of Birth",
	"Abilities",
	"Bio",
	"Extra"
];

function openTab(evt, tabName){

	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("tabcontent");
	for(i=0; i<tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for(i=0; i<tablinks.length; i++){
		tablinks[i].className = tablinks[i].className.replace("active", "");
	}

	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}