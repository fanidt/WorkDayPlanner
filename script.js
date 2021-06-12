var startTime = 0
var endTime = 22
var button
var tasks = {};

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

    for (var i = startTime; i < endTime; i++) {

        var container = document.getElementById('container');
        var timeblock = document.createElement('div');
        var hour = document.createElement('div');
        var text = document.createElement('textarea')
        button = document.createElement('button')
        var HourSpan = document.createElement('span')
        var hourTime = moment().set('hour', i).format('h a')

        // add classes 
        timeblock.classList.add('timeblock');
        hour.classList.add('hour');
        text.classList.add('text')
        button.classList.add('saveBtn')


        container.appendChild(timeblock);
        timeblock.appendChild(hour);
        timeblock.appendChild(text);
        timeblock.appendChild(button);
        hour.appendChild(HourSpan);
        HourSpan.append(hourTime);
        button.textContent = 'Save';

        text.value = tasks[i];

     
        
    }


}
CreateTimeBlocks()



//function save to local storage 
//function clear local storage every 24H
//function color change past present future
// function retrieve from memory





//function save to local storage 
/*function Save() {

    var tasks = document.getElementsByClassName('text').value
    localStorage.setItem("tasks", JSON.stringify(tasks))

    console.log(tasks)
}

button.addEventListener("click", Save())

//function clear local storage every 24H



//function color change past present future



// function retrieve from memory

function Retrieve() {

    tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) {
        tasks = {};
        for (var i = startTime; i < endTime; i++) {
            tasks[i] = "";
        }
    }
}

Retrieve() */