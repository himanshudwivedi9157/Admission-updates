
// All the Code for the Admitted page goes here
var stu_data = localStorage.getItem("admission-rejected");
var stu_details = JSON.parse(stu_data);

for (var i = 0; i < stu_details.length; i++) {
    var newtr = document.createElement("tr");
    document.querySelector("tbody").append(newtr);

    
  var stu_name = document.createElement("td");
  stu_name.innerText = stu_details[i].stu_name;
  newtr.append(stu_name);

  var stu_email = document.createElement("td");
  stu_email.innerText = stu_details[i].stu_email;
  newtr.append(stu_email);

  var stu_course = document.createElement("td");
  stu_course.innerText = stu_details[i].stu_course;
  newtr.append(stu_course);

  var stu_gender = document.createElement("td");
  stu_gender.innerText = stu_details[i].stu_gender;
  newtr.append(stu_gender);

  var stu_phone = document.createElement("td");
  stu_phone.innerText = stu_details[i].stu_phone;
  newtr.append(stu_phone);

}