// All the JS Code for the Add Students Page Goes Here


var details = [];

document.querySelector("form").addEventListener("submit", myfun);

function myfun(e) {
  e.preventDefault();
  var stu_name = document.querySelector("#name").value;
  var stu_email = document.querySelector("#email").value;
  var stu_phone = document.querySelector("#phone").value;
  var stu_gender = document.querySelector("#gender").value;
  var stu_course = document.querySelector("#course").value;

  // You can add input validation checks here if needed

  var stuObj = {
    stu_name,
    stu_email,
    stu_phone,
    stu_gender,
    stu_course,
  };

  details.push(stuObj);
  localStorage.setItem("admission", JSON.stringify(details));
  // alert("Data stored successfully in local storage");
}
