/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
// Your code here
function createEmployeeRecord(array){
    return{
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents : [],
        timeOutEvents: []
    }
}


function createEmployeeRecords(arrayRecords){
    return arrayRecords.map(records => createEmployeeRecord(records));
}

function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

function hoursWorkedOnDate(dateStamp){
    let hoursWorked
    let hourIn
    let hourOut
    this.timeInEvents.forEach((timeIn)=>{
        if (timeIn.date === dateStamp){
            hourIn = timeIn.hour/100
        }
    })
    this.timeOutEvents.forEach((timeOut)=>{
        if (timeOut.date === dateStamp){
            hourOut = timeOut.hour/100
        }
    })
    hoursWorked = hourOut - hourIn
    return hoursWorked
}
function wagesEarnedOnDate(dateStamp){
    return hoursWorkedOnDate(this,dateStamp)* this.payPerHour;
}


function calculatePayroll(employeeRecordArray){
    let totalPayOwed = 0
    employeeRecordArray.forEach(employeeRecord => {
       totalPayOwed += allWagesFor(employeeRecord)
    })
    return totalPayOwed
}


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

