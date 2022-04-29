 function dashboard(){
    const div=document.getElementById('app');
    div.style.width='1000px'
    const loading=`<h1 style="margin-top: '50%'">Loading...</h1>`
    div.innerHTML=loading

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
      alert("Successfully Login!")

      async function loginFetch(){
          const response=await fetch('https://infinityuat.cbe.com.et:443/services/data/v1/RBObjects/operations/Accounts/getAccountsPostLogin',profileRequest);
          if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            alert(message);
          }
          const data = await response.json();
        //           alert(JSON.stringify(data))
     
    return (
        div.innerHTML=(` <h1 id='h1'>Accounts Dashboard</h1>
        <div><table><tr>
            <th>Account ID</th>
            <th>Account Name</th>
            <th>Account Type</th>
            <th>Bank Name</th>
            <th>Opening Date</th>
            <th>Available Balance</th>
        </tr>
    ${data.Accounts.map(function(value){
        return `
            <tr>
            <th>${value.accountID}</th>
            <th>${value.accountName}</th>
            <th>${value.accountType}</th>
            <th>${value.bankName}</th>
            <th>${value.openingDate}</th>
            <th>${value.availableBalance}</th>
        </tr>`
        
    }).join('')
}
       </table></div>`));
    
      }
      loginFetch().catch(error => {
        alert(error.message); // 'An error has occurred: 404'
    });
    };
    export default dashboard;