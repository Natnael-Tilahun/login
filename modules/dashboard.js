 function dashboard(){
    const div=document.getElementById('app');
    const th=document.querySelectorAll('.th');
    div.style.width='1500px'
    div.style.height='750px'
    div.classList.remove('mt-40')
    div.classList.add('mt-8')
    // th.style.backgroundColor='gray'
    const loading=`<h1 class="align-middle pt-56 text-2xl font-bold">
    <span>
    <svg role="status" class="inline w-8 h-8 mr-2 text-gray-400 animate-spin dark:text-gray-600 fill-blue-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    </span>
    Loading<span class="animate-spin">...</span></h1>`
    div.innerHTML=loading

    const token=localStorage.getItem('token');

    th.forEach(el => el.backgroundColor='red');

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
        <div><table class="w-full bg-white round-md"><tr>
            <th class="bg-gray-300 text-left p-4">Account ID</th>
            <th class="bg-gray-300 text-left p-4">Account Name</th>
            <th class="bg-gray-300 text-left p-4">Account Type</th>
            <th class="bg-gray-300 text-left p-4">Bank Name</th>
            <th class="bg-gray-300 text-left p-4">Opening Date</th>
            <th class="bg-gray-300 text-left p-4">Available Balance</th>
        </tr>
    ${data.Accounts.map(function(value){
        return `
            <tr>
            <td>${value.accountID}</td>
            <td>${value.accountName}</td>
            <td>${value.accountType}</td>
            <td>${value.bankName}</td>
            <td>${value.openingDate}</td>
            <td>${value.availableBalance}</td>
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