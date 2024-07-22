// name
let fsname = document.getElementById('firstName');
let nmError = document.getElementById('nameError')

// email
let email = document.getElementById('email');
let emError = document.getElementById('emailError')

// password
let pasword = document.getElementById('password');
let pwError = document.getElementById('passwordError')

// address
let address = document.getElementById('address');
let addError = document.getElementById('addressError')

// sports
let sports = document.querySelectorAll(
    'input[name="sport"]:checked');
let spError = document.getElementById('sportError');

// gender
let gender = document.querySelector(
    'input[name="gender"]:checked'
);
let genError = document.getElementById('genderError')

// country
let country = document.getElementById('country');
let ctError = document.getElementById('countryError')

// nos user 
let nouser = document.getElementById('no_user');

// tblbody
let tblbody = document.getElementById('tblbody');

// save button
let savebtn = document.getElementById('mysavebtn')

// unique Id  ---
let uniqueId = 0;

// editMode Id
let editModeId = '';
// save btn
function savebtnclic() {
    var isfromvalid = validation();
    if(isfromvalid) getuserdata();
    console.log(isfromvalid)
}
// ----------- validation
function validation() {
    if (!fsname.value) {
        nmError.classList.remove('d_none');
        fsname.classList.add('border_error');
    }

    if (!email.value) {
        emError.classList.remove('d_none');
        email.classList.add('border_error');
    }

    if (!password.value) {
        pwError.classList.remove('d_none');
        password.classList.add('border_error');
    }


    if (!address.value) {
        addError.classList.remove('d_none');
        address.classList.add('border_error');
    }

    let sports = document.querySelectorAll(
        'input[name="sport"]:checked');
    if (sports.length == 0) {
        spError.classList.remove('d_none')
    }

    let gender = document.querySelector(
        'input[name="gender"]:checked');
    if (!gender) {
        genError.classList.remove('d_none')
    }

    if (!country.value) {
        ctError.classList.remove('d_none');
        country.classList.add('border_error');
    }

    if (fsname.value && email.value && password.value && address.value && sports.length > 0 && gender && country.value) {
        return true;
    }
    else {
        return false;
    }
}


//  --------------  ResetData

function resetdata() {
    fsname.value = "";
    email.value = "";
    password.value = "";
    address.value = "";

    let sports = document.querySelectorAll(
        'input[name="sport"]:checked');
    if (sports.length > 0) {
        for (let i = 0; i < sports.length; i++) {
            sports[i].checked = false;

        }
    }

    let gender = document.querySelector(
        'input[name="gender"]:checked');
    gender.checked = false;

    country.value = "";
}

// data get function

function getuserdata() {
    console.log(editModeId);

    if (editModeId) {
        let tr = document.getElementById(editModeId);
        tr.children[0].innerHTML = fsname.value;
        tr.children[1].innerHTML = email.value;
        tr.children[2].innerHTML = password.value;
        tr.children[3].innerHTML = address.value;

        let sports = document.querySelectorAll(
            'input[name="sport"]:checked');
        let allSport = [];
        for (let j = 0; j < sports.length; j++) {
            allSport.push(sports[j].value);
        }
        const sportseletc = allSport.join(",");
        tr.children[4].innerHTML = sportseletc;

        let gender = document.querySelector(
            'input[name="gender"]:checked');
        tr.children[5].innerHTML = gender.value;

        tr.children[6].innerHTML = country.value;

        savebtn.innerHTML = 'Save';

        editModeId = '';
    }
    else {
        // uniqueId
        uniqueId++;
        const trId = 'list_' + uniqueId;
        document.getElementById('noData').style.display = 'none';
        document.getElementById('creatTable').style.display = 'block';

        var tr = document.createElement('tr');
        tr.id = trId;
        tblbody.appendChild(tr);

        var td1 = document.createElement('td');
        td1.innerHTML = fsname.value;
        tr.appendChild(td1);

        var td2 = document.createElement('td');
        td2.innerHTML = email.value;
        tr.appendChild(td2);

        var td3 = document.createElement('td');
        td3.innerHTML = pasword.value;
        tr.appendChild(td3);

        var td4 = document.createElement('td');
        td4.innerHTML = address.value;
        tr.appendChild(td4);

        let sports = document.querySelectorAll(
            'input[name="sport"]:checked');
        let allSport = [];
        for (let j = 0; j < sports.length; j++) {
            allSport.push(sports[j].value);
        }
        const sportseletc = allSport.join(",");
        let td5 = document.createElement('td');
        td5.innerHTML = sportseletc;
        tr.appendChild(td5);

        let gender = document.querySelector(
            'input[name="gender"]:checked');
        let td6 = document.createElement('td');
        td6.innerHTML = gender.value;
        tr.appendChild(td6);

        let td7 = document.createElement('td');
        td7.innerHTML = country.value;
        tr.appendChild(td7);

        let td8 = document.createElement('td');
        let btnedit = document.createElement('button');
        btnedit.innerHTML = "Edit";
        btnedit.id = "edit";
        btnedit.classList.add('btn');
        td8.appendChild(btnedit);
        tr.appendChild(td8);
        //-------------- edit data-----------
        btnedit.onclick = function () {
            editModeId = trId;
            let rows = document.querySelectorAll("#tblbody>tr");
            fsname.value = td1.innerHTML;
            email.value = td2.innerHTML;
            pasword.value = td3.innerHTML;
            address.value = td4.innerHTML;

            let sportsplit = td5.innerHTML.split(',');
            if (sportsplit.length > 0) {
                for (let i = 0; i < sportsplit.length; i++) {
                    document.querySelector(`input[value = "${sportsplit[i]}"]`).checked = true;
                }

                let gendervalue = td6.innerHTML;
                let gender = document.querySelector(`input[value="${gendervalue}"]`);
                gender.checked = true;

                country.value = td7.innerHTML;

                // btn change
                savebtn.innerHTML = "Update"
                // editModeId = '';
            }
        }




        let td9 = document.createElement('td');
        let delet = document.createElement('button');
        delet.innerHTML = "Delete";
        delet.classList.add('btn');
        td9.appendChild(delet)
        tr.appendChild(td9);
        delet.onclick = function () {
            tblbody.removeChild(tr);
        }
    }
    resetdata();
}