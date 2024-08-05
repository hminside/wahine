
function login() {
    if (!document.login_form.userID.value)
    // login_form 이름을 가진 form 안의 id_val 의 value가 없으면
    {
        alert("아이디를 입력하세요!");
        document.login_form.userID.focus();
        // 화면 커서 이동
        return;
    }
    if (!document.login_form.userPassword.value)
    {
        alert("비밀번호를 입력하세요!");
        // 화면 커서 이동
        return;
    }
    document.login_form.submit();
    // 모두 확인 후 submit()
 };

 
function sign() {
        
    if (!document.sign_up.userName.value)
        {
            alert("이름을 입력하세요!");
            document.sign_up.userName.focus();

            // 화면 커서 이동
            return;
        }

        if (!document.sign_up.userID.value)
            // login_form 이름을 가진 form 안의 id_val 의 value가 없으면
            {
                alert("아이디를 입력하세요!");
                document.sign_up.userID.focus();
                // 화면 커서 이동
                return;
            }
        
            
    if (!document.sign_up.userEmail.value)
        {
            alert("이메일를 입력하세요!");
            document.sign_up.userEmail.focus();

            // 화면 커서 이동
            return;
        }

        
    if (!document.sign_up.userPassword.value)
        {
            alert("비밀번호를 입력하세요!");
            // 화면 커서 이동
            return;
        }

     else {

        alert("회원가입이 완료되었습니다.");
       document.sign_up.submit();

     }

 };

