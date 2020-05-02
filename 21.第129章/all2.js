var xhr = new XMLHttpRequest();
            var registersSend = document.querySelector('.registersSend');
            var loginSend = document.querySelector('.loginSend');

            registersSend.addEventListener('click',register,false);
            loginSend.addEventListener('click',login,false);

            function register(){
                var emailStr = document.querySelector('.Email').value;
                var passwordStr = document.querySelector('.Password').value;
                var account = {};
                account.email = emailStr;
                account.password = passwordStr;
                console.log(account);
                xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
                xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
                var data = JSON.stringify(account);
                xhr.send(data);
                xhr.onload = function(){
                var registerResult = JSON.parse(xhr.responseText);
                console.log(registerResult);
                var veriStr = registerResult.message;
                var showMessage = document.querySelector('.Message');
                if(veriStr == '帳號註冊成功'){
                    showMessage.textContent = '註冊成功';
                }else{
                    showMessage.textContent = '註冊失敗';
                }
            }
            }
            function login(){
                var loginEmailStr = document.querySelector('.Email').value;
                var loginPasswordStr = document.querySelector('.Password').value;
                var loginAccount = {};
                loginAccount.email = loginEmailStr;
                loginAccount.password = loginPasswordStr;
                console.log(loginAccount);
                xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
                xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
                var data =JSON.stringify(loginAccount);
                xhr.send(data);
                xhr.onload = function(){
                var loginResult = JSON.parse(xhr.responseText);
                console.log(loginResult);
                var veriStr = loginResult.message;
                var showMessage = document.querySelector('.Message');
                if(veriStr == '登入成功'){
                    showMessage.textContent = '登入成功!!';
                }else{
                    showMessage.textContent = '此帳號不存在或帳號密碼錯誤!!';
                }
            }

            }