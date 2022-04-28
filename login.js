import dashboard from "./modules/dashboard.js";
const app = (function (id) {
    'use strict';
    const div = document.getElementById(id);
    const data = { UserName: '', Password: '' }
    div.innerHTML = (` <h1 id='h1'>Login Page</h1>
    <div><input type="text" id="username" placeholder="Username"></div>
    <div><input type="password" id="password" placeholder="Password"></div>
    <div><p id="p">1004538676</p></div>
    <div><p id="p">Kony@12345</p></div>
    <div><button id='loginBtn'>Login</button></div>`);


    const loginBtn = document.getElementById('loginBtn');
    const uName = document.getElementById('username');
    const pWord = document.getElementById('password');
    const p = document.getElementById('p');


    Object.defineProperty(data, 'name', {
        get: function () { return this.UserName },
        set: function (value) {
            this.UserName = value;
        }
    })
    Object.defineProperty(data, 'pas', {
        get: function () { this.Password },
        set: function (value) {
            this.Password = value;
        }
    })

    uName.addEventListener('keyup', (event) => {
        data.UserName = event.target.value;
        p.innerText = event.target.value
    })
    pWord.addEventListener('keyup', (event) => { data.Password = event.target.value })

    loginBtn.addEventListener('click', function () {       
          alert(raw)
          fetchUsers();
        // fetchUsers().catch(error => {
        //     error.message; // 'An error has occurred: 404'
        //   });
        

    });
    async function fetchUsers(){
        const myHeaders = new Headers({
            "X-Kony-App-Key": "a5c29017554c2c39be93665f235fa86f",
            "X-Kony-App-Secret": "a5835744b2eb19a03e0aa11502e905c9",
            "X-Kony-ReportingParams": "{\"os\":\"98.0.4758.109}",
            "Content-Type": "application/json"
          });
          const raw=JSON.stringify(data)
          var myRequest = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
        const response=fetch("https://infinityuat.cbe.com.et:443/authService/100000002/login?provider=DbxUserLogin", myRequest);
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`
            throw new Error(message);
        }
        const data=await response.json()
        alert(data)
        localStorage.setItem('token',data.claims_token.value)
        return dashboard();
      }
})('app');