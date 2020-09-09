module.exports.getDate= getDate;

function getDate(){
var today = new Date();
var option = { weekday: 'long',
year: 'numeric',
month:'long',
day:'numeric'};


var day = today.toLocaleDateString("en-US", option);

return day;
}

module.exports.getDay =getDay;
function getDay(){
var today = new Date();
var option = { weekday: 'long'
};
var day = today.toLocaleDateString("en-US", option);

return day;
}
