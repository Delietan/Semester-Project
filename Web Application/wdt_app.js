

/*--------------DIGITAL WATCH-----------------*/

function digitalWatch() {
    let rawTime = new Date();
    let rawTimeString = rawTime.toString();


    let tid = rawTimeString.slice(8, 11) + rawTimeString.slice(3, 8) + rawTimeString.slice(11, 24);  

    $("#digital-watch").html(tid);
}

//Initial load of clock webpage
$(document).ready(digitalWatch);

//Updates clock every 1000ms
setInterval(digitalWatch, 1000);


/*----------------------------------------------*/
// let personsFromApi = []

// function staffUserGet(numberOfPeople){
//     for (let i = 0; i < numberOfPeople; i++){
//         $.ajax({
//             url: 'https://randomuser.me/api/',
//             dataType: 'json',
//             success: function(data) {
//                 let personJSON = JSON.stringify(data)
//                 person_JS_object = JSON.parse(personJSON)
//                 personsFromApi.push(person_JS_object)
//             }
//         })
//     }
// };

// staffUserGet(5)

// console.log(person_JS_object.results[0].gender)
// console.log(person_JS_object.results[0].picture.thumbnail)
// console.log(person_JS_object.results[0].name.first)
// console.log(person_JS_object.results[0].name.last)
// console.log(person_JS_object.results[0].email)


// let human;

// for (let i = 0; i < 1; i = i + 1){

//     $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//         human = data;

//         const picture = human.results[0].picture.thumbnail;
//         const firstName = human.results[0].name.first;
//         const lastName = human.results[0].name.last;
//         const email = human.results[0].email;


//         const newRow = `
//         <tr>
//             <td><img src="${picture}" alt="Profile Picture"></td>
//             <td>${firstName}</td>
//             <td>${lastName}</td>
//             <td>${email}</td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//         </tr>
//         `;

//         $('#personTable').append(newRow);
//         }
//     });
// }

// class Employee {
//     constructor(person){
//         this.name = person.results[0].name.first
//         this.surname = person.results[0].name.last
//     }
// }

// class Staff_Member extends Employee {
//     constructor(person){
//         super(person)
//         this.picture = person.results[0].picture.thumbnail
//         this.email = person.results[0].email
//         this.status = "test"
//         this.out_time = "test"
//         this.duration = "test"
//         this.expected_return_time = "test"
//     }
//         staffMemberIsLate(){
//             return `TRIGGER TOAST`
//     }
// }

// class Delivery_Driver extends Employee {
//     constructor(person){
//         super(person)
//         this.name = "test"
//         this.surname = "test"
//     }
//         deliveryDriverIsLate(){
//             return `The top speed of the car is`
//     }
// }

// let ANON = new Staff_Member(human)

// emptyArray = []
// emptyArray.push(new Staff_Member(human))

emptyArray = []

class Employee {
    constructor(argument){
        this.name = argument.results[0].name.first
        this.surname = argument.results[0].name.last
    }
}

class Staff_Member extends Employee {
    constructor(argument) {
        super(argument);
        this.picture = argument.results[0].picture.thumbnail;
        this.email = argument.results[0].email;
        this.status = "In";
        this.out_time = "";
        this.duration = "";
        this.expected_return_time = "";
    }

    staffMemberIsLate() {
        let currentTime = giveCurrentTime();
        if (this.expected_return_time && currentTime >= this.expected_return_time) {
            if (!warningGiven.includes(this.email)) {
                warningGiven.push(this.email);

                const toastRow = `
                    <div class="toast" id="${this.name}${this.surname}" role="alert" data-bs-autohide="false">
                        <div class="toast-header" style="background-color: #0E8EA8">
                            <strong class="me-auto">Staff delay alert!</strong>
                            <small class="text-body-secondary">just now</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" onclick="deleteToast(this)"></button>
                        </div>
                        <div class="toast-body" style="background-color: rgba(255, 255, 255, 0.8);">
                            <img src="${this.picture}" alt="${this.name} ${this.surname}" style="max-width: 100%; height: auto;"> ${this.name} ${this.surname} is delayed!
                            <div class="d-flex justify-content-between">
                                <div class="text-muted fw-bold" style="margin-top: 10px;">Time out-of-office: ${this.duration}</div>
                                <button type="button" class="btn btn-sm" data-bs-dismiss="toast" style="background-color: #83D1E1" onclick="notifyManager(this)">Notify manager</button>
                            </div>
                        </div>
                    </div>`;
        
            $('.toast-container').append(toastRow);
            $(`#${this.name}${this.surname}`).toast("show");




                // // Find the index of this staff member in the array
                // let index = emptyArray.indexOf(this);

                // // Trigger the toast using the index
                // if (index !== -1) {
                //     $("#infoRowE" + index).html(
                //         `<img src="${this.picture}"> ${this.name} ${this.surname} is late!`
                //     );
                //     $("#E" + index).toast("show");
                //     console.log("Toast fired for staff member at index: " + index);
                // }
            }
        }
    }
}

class Delivery_Driver extends Employee {
    constructor(argument){
        super(argument)
        this.vehicle = argument.results[0].vehicle;
        this.telephone = argument.results[0].telephone;
        this.delivery_address = argument.results[0].deliveryAddress;
        this.return_time = argument.results[0].returnTime;
    }
        deliveryDriverIsLate(){
            let currentTime = giveCurrentTime();
        if (this.return_time && currentTime >= this.return_time) {
            if (!warningDeliveryGiven.includes(this.telephone + this.name + this.surname)) {
                warningDeliveryGiven.push(this.telephone + this.name + this.surname);

                console.log("Toast fired for delivery driver");

                const toastRow = `
                    <div class="toast" id="${this.telephone}" role="alert" data-bs-autohide="false">
                        <div class="toast-header" style="background-color: #0E8EA8">
                            <strong class="me-auto">Delivery Driver Delay Alert!</strong>
                            <small class="text-body-secondary">just now</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" onclick="deleteToast(this)"></button>
                        </div>
                        <div class="toast-body" style="background-color: rgba(255, 255, 255, 0.8);">
                            <div>Name: ${this.name} ${this.surname} is delayed!</div>
                            <div>Address: ${this.delivery_address}</div>
                            <div>Telephone: ${this.telephone}</div>
                            <div class="d-flex justify-content-between">
                                <div class="fw-bold text-muted" style="margin-top: 10px;">Estimated return time: ${this.return_time}</div>
                                <button type="button" class="btn btn-sm" data-bs-dismiss="toast" style="background-color: #83D1E1" onclick="notifyManager(this)">Notify manager</button>
                            </div>
                        </div>
                    </div>`;
            
                $('.toast-container').append(toastRow);
                $(`#${this.telephone}`).toast("show");
            } else {
                //console.log("warning as already been given")
            }
        }
    }
}

function staffUserGet(numberOfPeople){

    let timerStart = Date.now()
    

    for (let i = 0; i < numberOfPeople; i++){
        console.log("API call sent")
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {
                // jQuery automatically parses my API response,
                // but I would prase it like below, if needed
                // let parsedData = JSON.parse(data)


                let timerEnd = Date.now()
                let totalTime = timerEnd - timerStart
                
                console.log(`API response time was ${totalTime / 1000} second(s)`)
                console.log(data)
                let character = new Staff_Member(data);
                emptyArray.push(character);

                const newRow = `
                <tr class="clickableRow" indexOfObject="${emptyArray.length - 1}">
                    <td><img src="${character.picture}" alt="Profile Picture"></td>
                    <td>${character.name}</td>
                    <td>${character.surname}</td>
                    <td>${character.email}</td>
                    <td id="status${emptyArray.length - 1}">${character.status}</td>
                    <td id="outTime${emptyArray.length - 1}">${character.out_time}</td>
                    <td id="duration${emptyArray.length - 1}">${character.duration}</td>
                    <td id="ERT${emptyArray.length - 1}">${character.expected_return_time}</td>
                </tr>`;
        
                $('#personTable').append(newRow);

            },
            error: function(){
                console.log("Ajax error")
            }
        })
    }
};

staffUserGet(5)

// OBSOLETE AFTER MAKING ITERATIVE "FOR LOOP"
//updates table. Can use for loop here
// function refreshTableContent(){
//     $("#status0").text(emptyArray[0].status)
//     $("#outTime0").text(emptyArray[0].out_time)
//     $("#duration0").text(emptyArray[0].duration)
//     $("#ERT0").text(emptyArray[0].expected_return_time)    
    
//     $("#status1").text(emptyArray[1].status)
//     $("#outTime1").text(emptyArray[1].out_time)
//     $("#duration1").text(emptyArray[1].duration)
//     $("#ERT1").text(emptyArray[1].expected_return_time)    

//     $("#status2").text(emptyArray[2].status)
//     $("#outTime2").text(emptyArray[2].out_time)
//     $("#duration2").text(emptyArray[2].duration)
//     $("#ERT2").text(emptyArray[2].expected_return_time)    

//     $("#status3").text(emptyArray[3].status)
//     $("#outTime3").text(emptyArray[3].out_time)
//     $("#duration3").text(emptyArray[3].duration)
//     $("#ERT3").text(emptyArray[3].expected_return_time)    

//     $("#status4").text(emptyArray[4].status)
//     $("#outTime4").text(emptyArray[4].out_time)
//     $("#duration4").text(emptyArray[4].duration)
//     $("#ERT4").text(emptyArray[4].expected_return_time)    
// }

// ITERATIVE "FOR LOOP" OBSOLETE AFTER MAKING FUNCTION INDEX NUMBER AS PARAMETER
// function refreshTableContent(){
//     for (let i = 0; i < emptyArray.length; i++) {
//         $("#status" + i).text(emptyArray[i].status);
//         $("#outTime" + i).text(emptyArray[i].out_time);
//         $("#duration" + i).text(emptyArray[i].duration);
//         $("#ERT" + i).text(emptyArray[i].expected_return_time);
//     }
// }

function refreshTableContent(i){
        $("#status" + i).text(emptyArray[i].status);
        $("#outTime" + i).text(emptyArray[i].out_time);
        $("#duration" + i).text(emptyArray[i].duration);
        $("#ERT" + i).text(emptyArray[i].expected_return_time);
}



//OBSOLETE AFTER MERGING THE TWO FUNCTIONALITIES BELOW
/*Change color of clickable row when clicked*/
// $(document).ready(function() {
//     $("#personTable").on("click", "tr", function() {
//         $(this).toggleClass("clickableRow");
//         $(this).toggleClass("clickedRow");
//     });
// });

// $(document).ready(function() {
    //     $("#personTable").on("click", "tr", function() {
        //         $("#personTable tr").removeClass("clickedRow").addClass("clickableRow");
        //         $(this).removeClass("clickableRow").addClass("clickedRow");
        //         return selectedRowIndex = parseInt($('tr.clickedRow').attr('indexOfObject'));
        //     });
        // });


let selectedRowIndex = null
        
$(document).ready(function() {
    $("#personTable").on("click", "tr", function() {
        if ($(this).hasClass("clickedRow")) {
            $(this).removeClass("clickedRow").addClass("clickableRow");
            return selectedRowIndex = null;
        } else {
            $("#personTable tr").removeClass("clickedRow").addClass("clickableRow");
            $(this).removeClass("clickableRow").addClass("clickedRow");
            return selectedRowIndex = parseInt($(this).attr('indexOfObject'));
        }
    });
});

let selectedDeliveryRowIndex = null
        
$(document).ready(function() {
    $("#deliveryTable").on("click", "tr", function() {
        if ($(this).hasClass("clickedRow")) {
            $(this).removeClass("clickedRow").addClass("clickableRow");
            return selectedDeliveryRowIndex = null;
        } else {
            $("#deliveryTable tr").removeClass("clickedRow").addClass("clickableRow");
            $(this).removeClass("clickableRow").addClass("clickedRow");
            return selectedDeliveryRowIndex = parseInt($(this).attr('indexofobject'));
        }
    });
});

$(document).ready(function() {
    $(".outButton").click(staffOut);
});

function staffOut(){
    if (selectedRowIndex != null) {
        Swal.fire({
            title: "How long will the employee be out?",
            icon: "question",
            input: "range",
            inputLabel: "Minutes",
            inputAttributes: {
            min: "0",
            max: "180",
            step: "1",
            },
            inputValue: 30
        }).then ((result) => {
            if (result.isConfirmed){
                timeRightNow = giveCurrentTime()
                emptyArray[selectedRowIndex].status = "Out";
                if (result.value >= 60) {

                    //hours
                     hours = (parseInt(result.value / 60))

                    //minutes
                    minutes = parseInt(result.value) % 60
                    emptyArray[selectedRowIndex].duration = hours + " hr " + minutes + " min"
                } else {
                emptyArray[selectedRowIndex].duration = result.value + " min"};
                emptyArray[selectedRowIndex].out_time = timeRightNow;

                minuteRightNow = parseInt(timeRightNow.slice(3,5))
                hoursRightNow = parseInt(timeRightNow.slice(0,2))
                hoursRightNowInMinutes = hoursRightNow * 60
                timeWhenLeaveInMinutes = parseInt(hoursRightNowInMinutes) + parseInt(minuteRightNow)
                durationOfLeave = parseInt(result.value)
                returnTimeInMinutes = timeWhenLeaveInMinutes + durationOfLeave

                hourReturn = parseInt(returnTimeInMinutes / 60 )
                minuteReturn = returnTimeInMinutes % 60
                if (hourReturn > 23) {
                    hourReturn -= 24
                }
                if (10 > hourReturn){
                    hourReturn = "0" + hourReturn
                }
                if (10 > minuteReturn){
                    minuteReturn = "0" + minuteReturn
                }

                returnTIME = hourReturn + ":" + minuteReturn
                emptyArray[selectedRowIndex].expected_return_time = returnTIME;
                

                // emptyArray[selectedRowIndex].expected_return_time = "Klokkeslett for retur";
                refreshTableContent(selectedRowIndex);
                removeFromWarningGivenArray(selectedRowIndex);
                removeColorFromSelectedItem();
                return selectedRowIndex = null; 
            }
        });
    } else {Swal.fire("Please select employee")}
} 

function removeColorFromSelectedItem(){
    $("#personTable tr").removeClass("clickedRow").addClass("clickableRow");
}

function giveCurrentTime(){
    let rawTime = new Date();
    return rawTimeString = rawTime.toString().slice(16,21);
}

$(document).ready(function() {
    $(".inButton").click(staffIn);
});

function staffIn(){
    if (selectedRowIndex == null){
        {Swal.fire("Please select employee")}
    } else {
        emptyArray[selectedRowIndex].status = "In";
        emptyArray[selectedRowIndex].out_time = ""
        emptyArray[selectedRowIndex].duration = "";
        emptyArray[selectedRowIndex].expected_return_time = "";

        refreshTableContent(selectedRowIndex)

        removeFromWarningGivenArray(selectedRowIndex)

        removeColorFromSelectedItem();
        return selectedRowIndex = null; 
    }
}

function removeFromWarningGivenArray(i){
    if (i == null || i < 0 || i >= emptyArray.length){
        return}

    let position = warningGiven.indexOf(emptyArray[i].email)
    if (position == -1){
        // console.log("can be warned")
    } else {
        warningGiven.splice(position, 1)
        console.log("email removed from warningGiven array")
    }
}

setInterval(checkIfStaffIsLate, 5000)

let warningGiven = []

function checkIfStaffIsLate() {
    emptyArray.forEach(staffMember => {
        staffMember.staffMemberIsLate();
    });
}

setInterval(checkIfDriverIsLate, 5000)

let warningDeliveryGiven = []

function checkIfDriverIsLate() {
    createdDeliveryArray.forEach(driver => {
        driver.deliveryDriverIsLate();
    });
}

// MADE A BUTTON FOR TESTING TOAST FUNCTIONALITY
// $(document).ready(function() {
//     $(".clearButton").click(fireToast());
// });

// TESTING FIRE TOAST FUNCTION
// function fireToast(){
//     $("#infoRowE0").html(`<img src="${emptyArray[0].picture}">` + " " + emptyArray[0].name + " " + emptyArray[0].surname + " is late!");
//     $("#infoRowE1").html(`<img src="${emptyArray[1].picture}">` + " " + emptyArray[1].name + " " + emptyArray[1].surname + " is late!");
//     $("#infoRowE2").html(`<img src="${emptyArray[2].picture}">` + " " + emptyArray[2].name + " " + emptyArray[2].surname + " is late!");
//     $("#infoRowE3").html(`<img src="${emptyArray[3].picture}">` + " " + emptyArray[3].name + " " + emptyArray[3].surname + " is late!");
//     $("#infoRowE4").html(`<img src="${emptyArray[4].picture}">` + " " + emptyArray[4].name + " " + emptyArray[4].surname + " is late!");
//     $("#E0").toast("show");
//     $("#E1").toast("show");
//     $("#E2").toast("show");
//     $("#E3").toast("show");
//     $("#E4").toast("show");
//     console.log("cake")
// }

//OBSOLETE AFTER MERGING FUNCTIONALITY IN TO OBJECT METHOD .staffMemberIsLate()
// function fireToast(i) {
//     $("#infoRowE" + i).html(`<img src="${emptyArray[i].picture}">` + " " + emptyArray[i].name + " " + emptyArray[i].surname + " is late!");
//     $("#E" + i).toast("show");
//     console.log("Toast fired for staff member at index: " + i);
// }


function notifyManager(element){
    Swal.fire({
        title: "Done!",
        text: `The manager has been notified at ${giveCurrentTime()}`,
        icon: "success"
      });
    $(element).closest('.toast').remove();
}

$(document).ready(function() {
    $(".addButton").click(validateDelivery);
})

//STORING OBJECT MADE WITH THE "deliveryObject" TEMPLATE BELOW
let inputDeliveryArray = []


//STORING OBJECT MADE WITH THE CLASS "Delivery_Driver"
let createdDeliveryArray = []

function addDelivery(){

    let vehicle = $("#vehicleInput").val()
    let name = $("#nameInput").val()
    let surname = $("#surnameInput").val()
    let telephone = $("#telephoneInput").val()
    let delivery_address = $("#addressInput").val()
    let return_time = $("#returnTimeInput").val()

    let deliveryObject = {
        results: [
            {
                name: {
                    first: name,
                    last: surname
                },
                vehicle: vehicle,
                telephone: telephone,
                deliveryAddress: delivery_address,
                returnTime: return_time
            }
        ]
    };
    inputDeliveryArray.push(deliveryObject)
    let driver = new Delivery_Driver(deliveryObject);
    createdDeliveryArray.push(driver);

    //RESETS THE INPUT FIELDS TO BLANK
    $("#vehicleInput").val("")
    $("#nameInput").val("")
    $("#surnameInput").val("")
    $("#telephoneInput").val("")
    $("#addressInput").val("")
    $("#returnTimeInput").val("00:00")


    
    const newCarRow = `
    <tr class="clickableRow" indexOfObject="${driver.telephone}">
        <td>
            <svg
                xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16">
                <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
            </svg>
            ${driver.vehicle}
        </td>
        <td>${driver.name}</td>
        <td>${driver.surname}</td>
        <td>${driver.telephone}</td>
        <td>${driver.delivery_address}</td>
        <td>${driver.return_time}</td>
    </tr>`;
    
    const newMcRow = `
    <tr class="clickableRow" indexofobject="${driver.telephone}">
        <td>
            <svg 
                xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bicycle" viewBox="0 0 16 16">
                <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5m1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139zM8 9.057 9.598 6.5H6.402zM4.937 9.5a2 2 0 0 0-.487-.877l-.548.877zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53z"/>
            </svg>
            ${driver.vehicle}
        </td>
        <td>${driver.name}</td>
        <td>${driver.surname}</td>
        <td>${driver.telephone}</td>
        <td>${driver.delivery_address}</td>
        <td>${driver.return_time}</td>
    </tr>`;

    if (driver.vehicle == "Car"){
        $('#deliveryTable').append(newCarRow);
    }
    else if (driver.vehicle == "MC"){
        $('#deliveryTable').append(newMcRow);
    } else {
        console.log("Input vehicle doesn't match")
    }

}

$(document).ready(function(){
    $(".clearButton").click(clearDelivery);
})

// function clearDelivery() {
//     if (selectedDeliveryRowIndex == null) {
//         Swal.fire("Please select a delivery");
//     } else {
//         // Get the selected row
//         let row = $("#deliveryTable .clickedRow");
        
//         // Get the telephone number from the selected row
//         let telephone = row.attr('indexofobject');

//         // Remove from the table
//         row.remove();

//         // Remove from delivery objects arrays
//         removeDeliveryDriverObjectFromArray(telephone);
        
//         // Reset selectedDeliveryRowIndex
//         selectedDeliveryRowIndex = null;
//     }
// }

function clearDelivery(){
    if (selectedDeliveryRowIndex != null) {
        Swal.fire({
            title: "Remove delivery?",
            icon: "question",
            showCancelButton: true,
        }).then ((result) => {
            if (result.isConfirmed){
                let row = $("#deliveryTable .clickedRow");
                let telephone = row.attr('indexofobject');
                
                row.remove();
                removeDeliveryDriverObjectFromArray(telephone);
                selectedDeliveryRowIndex = null;
            }
        });
    } else {Swal.fire("Please select employee")}
} 

// function clearDelivery(){
//     if (selectedDeliveryRowIndex == null){
//         {Swal.fire("Please select a delivery")}
//     } else {
//         $("#deliveryTable .clickedRow").remove()
//         removeFromDeliveryWarningGivenArray(selectedDeliveryRowIndex)
//         removeDeliveryDriverObjectFromArray()
//         selectedDeliveryRowIndex = null
//     }
// }

function validateDelivery(){
    let vehicle = $("#vehicleInput").val()
    let name = $("#nameInput").val()
    let surname = $("#surnameInput").val()
    let telephone = $("#telephoneInput").val()
    let delivery_address = $("#addressInput").val()
    let return_time = $("#returnTimeInput").val()

    if (!vehicle || !name || !surname || !telephone || !delivery_address || !vehicle || !return_time){
        Swal.fire({
            title: "Missing input",
            text: "All fields require an input",
            icon: "error"
        })
    } else if (!isNaN(name)){
        Swal.fire({
            title: "Name",
            text: "Name can not be a number",
            icon: "error"
        })
    } else if (!isNaN(surname)){
        Swal.fire({
            title: "Surname",
            text: "Surname can not be a number",
            icon: "error"
        })
    } else if (telephone.length != 8){
        Swal.fire({
            title: "Telephone",
            text: "Phone number must be 8 digits",
            icon: "error"
        })
    } else if (isNaN(telephone)){
        Swal.fire({
            title: "Telephone",
            text: "Phone number can not contain letters",
            icon: "error"
        })
    } else if (!isNaN(delivery_address)){
        Swal.fire({
            title: "Delivery Address",
            text: "Delivery address can not be only numbers",
            icon: "error"
        })   
    } else {
        addDelivery()
        Swal.fire({
            text: `Delivery for ${return_time} added`,
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          });
    } 
}

function removeDeliveryDriverObjectFromArray(telephone) {
    // Find the index of the driver in the array
    let index = createdDeliveryArray.findIndex(driver => driver.telephone === telephone);
    
    // Ensure the index is valid
    if (index !== -1) {
        // Remove from both arrays
        createdDeliveryArray.splice(index, 1);
        inputDeliveryArray.splice(index, 1);
        console.log("Delivery driver object removed from createdDeliveryArray");
    } else {
        console.log("Delivery driver not found");
    }
}

// function removeDeliveryDriverObjectFromArray(selectedDeliveryRowIndex){
//     let position = createdDeliveryArray.findIndex(entry => entry.telephone === selectedDeliveryRowIndex);
//     // let position = $('#deliveryTable .clickedRow').attr('indexofobject');
//     // let position = input;
//     createdDeliveryArray.splice(position, 1);
//     inputDeliveryArray.splice(position, 1);
//     console.log("deliveryDriver object removed from createdDeliveryArray")

// }


function deleteToast(button) {
    $(button).closest('.toast').remove();
}

function removeFromDeliveryWarningGivenArray(i){
    if (i == null || i < 0 || i >= createdDeliveryArray.length){
        return}

    let position = warningDeliveryGiven.indexOf(createdDeliveryArray[i].telephone + createdDeliveryArray[i].name + createdDeliveryArray[i].surname)
    
    if (position == -1){
        console.log("array does not contain this driver")
    } else {
        warningDeliveryGiven.splice(position, 1)
        console.log("driver removed from warning given array")
    }
}

// $(document).ready(function() {
//     $(".testButton").click(testToast);
// })

// function testToast(){

//     console.log("Toast fired for delayed delivery driver");

//     const toastRow = `
//         <div class="toast" id="${createdDeliveryArray[0].telephone}" role="alert" data-bs-autohide="false">
//             <div class="toast-header" style="background-color: #0E8EA8">
//             <strong class="me-auto">Delayed delivery!</strong>
//             <small class="text-body-secondary">just now</small>
//             <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" onclick="deleteToast(this)"></button>
//             </div>
//             <div class="toast-body" id="infoRowD5">
//             ${createdDeliveryArray[0].name} ${createdDeliveryArray[0].surname} er forsinket!
//             </div>
//             <div class="toast-body d-flex justify-content-end ">
//             <button type="button" class="btn btn-sm" data-bs-dismiss="toast" style="background-color: #83D1E1" onclick="notifyManager(this)">Notify manager</button>
//             </div>
//         </div>`;

//     $('.toast-container').append(toastRow);
//     $(`#${createdDeliveryArray[0].telephone}`).toast("show");
// }