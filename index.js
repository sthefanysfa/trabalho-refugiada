

/* <script language="javascript" type="text/javascript"> */
  function validarCampos() {
    var email = form1.email.value;
    var password = form1.password.value;

    if (email == "") {
      alert("Digite o email do usuario");
      form1.email.focus();
      return false;
    }

    if (password == "") {
      alert("Digite a senha do usuario");
      form1.password.focus();
      return false;
    }

    if(email=="Carmen@refugiada" && password == "123" ){
        window.location.href="inicio.html"
    }else{
        alert('Usuário ou senha inválidos!')
        return false
    }
  }
// </script>