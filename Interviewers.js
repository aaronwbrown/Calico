// object array containing trained interviewers by each group



function Interviewers(name, title, group, availability, numberOfInterviewsThisWeek) {
	this.name = name;
	this.group = group;
	this.availability = function() {
		// getAvailability helper function goes here
	};
	this.numberOfInterviewsThisWeek = function() {
		// getInterviewAmount helper function goes here
	};
}

function javaInterviewers(name, title, group, availability, numberOfInterviewsThisWeek) {
	Interviewers.call(this, name, title, group, availability, numberOfInterviewsThisWeek)
	var _baseAvailability = this.availability;
	var _baseNumberOfInterviewsThisWeek = this.numberOfInterviewsThisWeek;
}

function qaInterviewers(name, title, group, availability, numberOfInterviewsThisWeek) {
	Interviewers.call(this, name, title, group, availability, numberOfInterviewsThisWeek)
	var _baseAvailability = this.availability;
	var _baseNumberOfInterviewsThisWeek = this.numberOfInterviewsThisWeek;
}


