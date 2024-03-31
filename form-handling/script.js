let nameInput = document.getElementById("name");
console.log(nameInput.value); // Output: ''

// nameInput.addEventListener("input", function() {
// console.log(nameInput.value); // Output: 'It will log every input value'
// });

// nameInput.addEventListener("change", function() {
// console.log(nameInput.value); // Output: 'John Doe'
// });

let userObj = {
  name: "",
  email: "",
  password: "",
};
//Prevent Default => form submission

let submitBtn = document.getElementById("submitBtn");

let validateForm = (userObj) => {
  let { name, email, password } = userObj;

  let flag = true;
  if (name.length <= 0 && email.length <= 0 && password.length <= 0) {
    flag = false;
    return alert("All fields are required");
  }

  if (name.length <= 0) {
    document.getElementById("nameErrMessage").style.display = "block";
    flag = false;
  }

  if (email.length <= 0) {
    document.getElementById("emailErrMessage").style.display = "block";
    flag = false;
  }
  if (password.length <= 0) {
    document.getElementById("passwordErrMessage").style.display = "block";
    document.querySelector("#passwordErrMessage").innerText = "Password should not be empty"
    flag = false;
  }

  else if(password.length<=8){
    document.querySelector("#passwordErrMessage").innerText = "The password's length is not sufficient and please create a stronger password"
    document.querySelector("#passwordErrMessage").style.display= "block";
    flag= false
  }


  return flag;
};

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  userObj.name = nameInput.value;
  userObj.email = document.getElementById("email").value;
  userObj.password = document.getElementById("password").value;

  if (validateForm(userObj)) {
    console.log(userObj, "This is the user details");
    window.location.href = `/form-handling/form.html?name=${userObj.name}&email=${userObj.email}&password=${userObj.password}`
  } else {
    console.log("Please fill all the fields");
  }

});