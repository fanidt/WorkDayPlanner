
//function to display date and time on the top of the page
function DisplayTime() {

    setInterval(function () {
        var time = moment().format('MMMM Do YYYY, h:mm:ss a')

        $('#currentDay').html(time);
    }, 1000);

    var time = moment().format('MMMM Do YYYY, h:mm:ss a')

    $('#currentDay').html(time);
}

$(document).ready(function () {
    DisplayTime();
});

//function to create time blocks

function CreateTimeBlocks() {

var container = document.getElementById('container');
var timeblock = document.createElement('div');
var hour = document.createElement('div');
var text = document.createElement('textarea')
var button = document.createElement('button')

// add classes 
timeblock.classList.add('timeblock');
hour.classList.add('hour');
text.classList.add('text')
button.classList.add('saveBtn')

container.appendChild(timeblock);
timeblock.appendChild(hour);
timeblock.appendChild(text);
timeblock.appendChild(button);
button.textContent='Save'

}

CreateTimeBlocks()