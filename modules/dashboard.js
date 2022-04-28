 function dashboard(){
    const div=document.getElementById('app');
    const token=localStorage.getItem('token');
    var accountHolderr;
    // var data;
    const header=new Headers({
        "X-Kony-Authorization": token,
        "Content-Type": "application/json"
      });
      const profileRequest={
          method:'POST',
          headers:header,
          redirect:"follow"
      }
      alert(token)
    //   loginFetch();

      async function loginFetch(){
          const response=fetch('https://infinityuat.cbe.com.et:443/services/data/v1/RBObjects/operations/Accounts/getAccountsPostLogin',profileRequest);
          if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
          }
          const data = await response.json();
          alert(data)
        //   return movies;     
        //   then(response=>response.json())
        //         .then(data=>{
        //             data=data
        //           accountHolderr=data.Accounts[0].accountHolder
        //           // alert(accountHolderr.username + ""+ accountHolderr.username +''+data.Accounts[0].accountID )
        //           alert(JSON.stringify(data))
        //       })
        //           .catch(error=>alert(error))
        //       }
        //   );

    return (
        div.innerHTML=(` <h1 id='h1'>Accounts Dashboard</h1>
        <div><table><tr>
        <th>accountID</th>
        <th>accountName</th>
        <th>accountType</th>
        <th>availableBalance</th>
        <th>bankName</th>
        <th>openingDate</th></tr>
        <tr>
        <th>${data.Accounts[0].openingDate}</th>
        <th>natnaeltilahun97@gmail.com</th>
        <th>${accountHolderr}</th></tr>
        </table></div>`));
    
      }
      loginFetch().catch(error => {
        error.message; // 'An error has occurred: 404'
    });
    };
    export default dashboard;