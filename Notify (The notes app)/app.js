var textarea = document.getElementById("note");
var btn = document.querySelector(".btn");
var display = document.querySelector(".it");

btn.addEventListener('click',addnote);

var notes=[];
var id = 0;

function addnote(){
    var text = textarea.value;
    textarea.value = "";
    var dateinit = new Date();
    var day = dateinit.getDate();
    var month;
    switch(dateinit.getUTCMonth()){
        case 0:
            month = "January";
            break;
        case 1:
            month = "Febuary";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "Octuber";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
          break;      
    }
    // console.log(day,month,text);
    var temp = `<div class="item">
    <div class="date">${day}, ${month}</div>
    <pre><div class="note-text">
        ${text}
    </div></pre>
    <hr>
    </div>`

    
    display.insertAdjacentHTML("afterend",temp);

    notes.push(temp);

    id+=1;
    // will use when we also add a feature of deleting
    // updateUI();
}


// function updateUI(){
    
//     notes.forEach(i => {
//          display.insertAdjacentHTML("afterend",i);
//     });
// }