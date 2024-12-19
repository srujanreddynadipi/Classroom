// var typed = new typed(".text" , {
//     Strings:["Frontend Developer" , "Web Developer" ],
//     typeSpeed:100,
//     backspeed:100,
//     backDelay:1000,
//     loop:true
// });

 const downloadButton = document.getElementById('download-resume')
 downloadButton.addEventListener('click', function() {
   const resumeLink = "resume.pdf"; // Replace with your resume link
   const downloadLink = document.createElement('a');
   downloadLink.href = resumeLink;
   downloadLink.download = "resume.pdf"; // Set downloaded file name
   downloadLink.click();
 });


// const form = document.getElementById('contact-form');

// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent default form submission

//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const subject = document.getElementById('subject').value;
//   const message = document.getElementById('message').value;

//   // Send data to server-side script using AJAX (code not shown here)
//   sendData(name, email, subject, message);
// });



var sheetName = 'Sheet1'
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    var newRow = headers.map(function(header) {
      return header === 'timestamp' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}