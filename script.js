var startTime = 9
var endTime = 17



// //function to display date and time on the top of the page
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








//function color change 
function colors() {

    let hournow =moment().format('H')
    console.log(hournow,  'hour now')

console.log("yes")

    // let timeclass = "";

    for (let i = startTime; i <= endTime; i++) {

        if (hournow > i ) {
            // timeclass = "past"
            console.log("yes")
            console.log(hournow,'', i)
            $(`#${i}`).addClass('past')
            console.log(`${i}, #${i} `)
        }

        else if (hournow==i) {
            timeclass = "present"
            console.log("now")
            $(`#${i}`).addClass('present')
            console.log(`${i}, #${i} `)
        }

        else {
            timeclass = "future"
            console.log("future")
            $(`#${i}`).addClass('future')
            console.log(`${i}, #${i} `)
        }



    }



}

 colors() 



$(".saveBtn").click(function () {
    var task = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")

    localStorage.setItem(time, task)
})

let hournow = moment().format('H')
console.log(hournow)

$('.time-block').each(function () {
    var time = $(this).attr("id")

    var content = localStorage.getItem(time)

    $(this).children(".description").val(content)


  
})