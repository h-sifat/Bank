const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
  let userName = document.getElementById('username');
  let passWord = document.getElementById('password');
  if(userName.value === 'pagolKoder' && passWord.value === 'login'){
    document.getElementById('first').style.display = 'none';
    document.getElementById('second').style.display = 'block';
  }
  else{
    alert('Warning: Wrong Input!');
    userName.style.color = 'red';
    passWord.style.color = 'red';
    userName.value = '';
    passWord.value = '';
  }
});  
{
  let result = 1500, depo = 0, withd = 0;
  const depoSub = document.getElementById("depoSub");
  depoSub.addEventListener('click', function(){
   let amount = document.getElementById('depoAmount');
   if(typeof (+amount.value) == 'number' && (+amount.value)>0){
     let add = +amount.value;
     depo += add;
     result += add;
    document.getElementById('depoResult').innerText = '$' + (depo);
    document.getElementById('result').innerText = '$' + (result);
    amount.value = "";
   }
   else{
     alert('Wrong Input!');
     amount.value = '';
   }
  });

  const withSub = document.getElementById("withSub");
  withSub.addEventListener('click', function(){
   let amount = document.getElementById('withAmount');
   if(typeof (+amount.value) == 'number' && (+amount.value)>0){
    let add = +amount.value;
    if(result>0 && (result-add)>0){
      withd += add;
      result -= add;
    document.getElementById('withResult').innerText = '$' + (withd);
    document.getElementById('result').innerText = '$' + (result);
    amount.value = "";
    }
    else{
      alert('Insufficient Balance!');
      amount.value = '';
    }
   }
   else{
     alert('Wrong Input!');
     amount.value = '';
   }
  });
}
