const form = document.querySelector('.form');
const input1 = form.querySelector('.input1');
const input2 = form.querySelector('.input2');
const input3 = form.querySelector('.input3');
const input4 = form.querySelector('.input4')
const submitButton = form.querySelector('.submitButton')
const outputWindow = document.querySelector('.outputWindow');
const inputName = outputWindow.querySelector('.inputName');
const inputSurname = outputWindow.querySelector('.inputSurname');
const inputAge = outputWindow.querySelector('.inputAge');
const inputPassword = outputWindow.querySelector('.inputPassword');
const closeButton = form.querySelector('.closeButton');
const inputWindow = document.querySelector('.inputWindow');
const searchInput = document.querySelector('.searchInput');
const searchName = document.querySelector('.searchName');
const searchButton = document.querySelector('.searchButton');

let data = [];


submitButton.addEventListener('click', function (event) {
    event.preventDefault()
    inputName.textContent = `Name: ${input1.value}`;
    inputSurname.textContent = `Surname: ${input2.value}`;
    inputAge.textContent = `Age: ${input3.value}`;
    inputPassword.textContent = `Password: ${input4.value}`;

    let usersData = {
        userName: `${input1.value}`,
        surname: `${input2.value}`,
        age: `${input3.value}`,
        password: `${input4.value}`
    }

    data.push(usersData);

    localStorage.setItem('data', JSON.stringify(data));
    data = JSON.parse(localStorage.getItem('data'));
    console.log(data);

    console.log(data);

    console.log(usersData);

    if (input1.value == "" || input2.value == "" || input3.value == "" || input4.value == "") {
        alert("Fill in all the fields!");
    } else if (input1.value != "" || input2.value != "" || input3.value != "" || input4.value != "") {
        alert("All fields have been successfully completed!");
    }
})
closeButton.addEventListener('click', function (event) {
    event.preventDefault();
    let ally = confirm("Are you sure you want to close these windows?")
    if (ally === true) {
        outputWindow.style.display = "none";
        inputWindow.style.display = "none";
    }
})

