function userForm(e) {
    e.preventDefault();
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const province = document.getElementById("province");
    const membership = document.getElementsByName("membership");
    let whichMembership = " ";
    for (let i = 0; i < membership.length; i++) {
      if (membership[i].checked) {
        whichMembership = membership[i].value;
      }
    }
    const output = document.getElementById("output");
  
    const result = `
      <span class='bolded'> Full Name: </span> ${firstName.value} ${lastName.value}<br/>
      <span class='bolded'> Email: </span> ${email.value}<br/>
      <span class='bolded'> Address: </span> ${address.value} ${city.value}, ${province.value}<br/>
      <span class='bolded'> Membership: </span> ${whichMembership}<br/>
      `;
  
    output.innerHTML = result;
  
    return false;
  }
  
  const userSubmit = document.getElementById("user-submit");
  if (userSubmit) {
    userSubmit.addEventListener("click", userForm);
  }
  
  function myExcelFuns(e) {
    e.preventDefault();
    var numbers = document.getElementById("numbers");
    if (numbers.value === "") {
      alert("Please enter some numbers");
    } else {
      var numberArr = numbers.value
        .split(" ")
        .map(function (num) {
          return parseInt(num);
        })
        .filter(function (e) {
          return !isNaN(e);
        });
      var action = document.getElementsByName("operation");
      var checkedAction = "";
      for (var i = 0; i < action.length; i++) {
        if (action[i].checked) {
          checkedAction = action[i].value;
        }
      }
      var result = 0;
      switch (checkedAction) {
        case "sum":
          result = numberArr.reduce(function (a, b) {
            return a + b;
          }, 0);
          break;
        case "average":
          result =
            numberArr.reduce(function (a, b) {
              return a + b;
            }, 0) / numberArr.length;
          break;
        case "max":
          result = Math.max.apply(Math, numberArr);
          break;
        case "min":
          result = Math.min.apply(Math, numberArr);
          break;
        default:
          break;
      }
      var resultElement = document.getElementById("result");
      resultElement.innerText = result.toString();
    }
  }
  
  const calculate = document.getElementById("submit-calculation");
  if (calculate) {
    calculate.addEventListener("click", myExcelFuns);
  }