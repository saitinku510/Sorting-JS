
let myForm = document.querySelector("#my-form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let msg = document.querySelector(".msg");
let age = document.querySelector("#age");
dataArray = [];

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    if(name.value === '' || email.value === '' || age.value === ''){
        alert('please enter all values')
    } else {
        var nameData = name.value;
        var emailData = email.value;
        var ageData = age.value;

        let dataObj = {
            nameData : nameData,
            emailData : emailData,
            ageData : ageData,
        }
        dataArray.push(dataObj);
        storeData();
        
        name.value = '';
        email.value = '';
        age.value = '';
    }
}

function storeData() {
    document.getElementById("users").innerHTML = "";
    dataArray.forEach(function(s, i){
    var tableTr= document.createElement('tr');

        for(var key in s){
            var tableTd = document.createElement("td");
            tableTd.innerHTML = s[key];
            tableTr.appendChild(tableTd);
        }
        document.getElementById("users").appendChild(tableTr);
    });
}

function filterName(){
    dataArray.sort(function(a, b){
        if(a.nameData.toLowerCase() < b.nameData.toLowerCase()){
            return -1;
        }
        if(a.nameData.toLowerCase() > b.nameData.toLowerCase()){
            return 1;
        }
        return 0;
    })
    console.log(dataArray);
    storeData();
}

function filterMail(){
    dataArray.sort(function(a, b){
        if(a.emailData.toLowerCase() < b.emailData.toLowerCase()){
            return -1;
        }
        if(a.emailData.toLowerCase() > b.emailData.toLowerCase()){
            return 1;
        }
        return 0;
    })
    console.log(dataArray);
    storeData();
}

function filterAge(){
   dataArray.sort(function(a, b){
       return a.ageData - b.ageData;
   })
    storeData();
}