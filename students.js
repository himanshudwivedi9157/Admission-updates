

var stu_data = localStorage.getItem("admission");
var stu_details = JSON.parse(stu_data);

const tbody = document.querySelector("tbody");

stu_details.forEach(function (student) {
  var newtr = document.createElement("tr");
  tbody.appendChild(newtr);

  // Define a function to create and append a table cell
  function addCell(value) {
    var cell = document.createElement("td");
    cell.innerText = value;
    newtr.appendChild(cell);
    return cell;
  }

  // Create and append cells for student details
  var stu_name = addCell(student.stu_name);
  var stu_email = addCell(student.stu_email);
  var stu_course = addCell(student.stu_course);
  var stu_gender = addCell(student.stu_gender);
  var stu_phone = addCell(student.stu_phone);

  // Create and append "Add" and "Delete" buttons
  var admitted = addCell("Add");
  var rejected = addCell("Delete");

  // Attach event listeners using the defined functions
  admitted.addEventListener("click", function () {
    adddata(student);
    tbody.removeChild(newtr); // Remove the row from the DOM
  });

  rejected.addEventListener("click", function () {
    deletedata(student);
    tbody.removeChild(newtr); // Remove the row from the DOM
  });
});



var addarr = JSON.parse(localStorage.getItem("admission-accepted")) || [];
var deletearr = JSON.parse(localStorage.getItem("admission-rejected")) || [];

function adddata(student) {
  addarr.push(student);
  localStorage.setItem("admission-accepted", JSON.stringify(addarr));
  // alert("Data stored successfully in local storage");
}

function deletedata(student) {
  deletearr.push(student);
  localStorage.setItem("admission-rejected", JSON.stringify(deletearr));
  // alert("Data stored successfully in local storage");
}
