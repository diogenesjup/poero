class Models{
    
    // TESTAR A DISPONIBILIDADE DA API
    testeApi(){


    }
    
    // PROC LOGIN
    procLogin(){

       $("#btnLoginEmailSenha").html("Carregando...");
       
       event.preventDefault();
       /*
       var loginUsuario = $("#loginUsuario").val();
       var loginSenha = $("#loginSenha").val();

            // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"login.php",
                  data:{token:app.token,tokenSms:app.tokenSms,loginUsuario:loginUsuario,loginSenha:loginSenha}
              
              })
              request.done(function (dados) {    

                  $("#btnLoginEmailSenha").html("Login");        

                  console.log("%c RETORNO DO LOGIN","background:#ff0000;color:#fff;");
                  console.log(dados);

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                     
                     localStorage.setItem("dadosUsuario",dadosUsuario);
                     app.login(dados.id,dados.email,dadosUsuario);

                  
                  }else{
                     
                     $(".form-control").val("");
                     aviso("Oops! Login ou senha não encontrados","Verifique os dados inseridos e tente novamente!");
                     
                  }
                  
              });
              request.fail(function (dados) {

                   $("#btnLoginEmailSenha").html("Login");  
                     
                   console.log("API NÃO DISPONÍVEL (procLogin)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX
              */

              app.login();

    }

    // PROC LOGIN SMS
    procLoginSms(){

      $("#btnViewLogin").html("Carregando...");
       
       event.preventDefault();

       var loginUsuario = $("#loginUsuario").val();

	          // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"token-sms-login.php",
                  data:{token:app.token,tokenSms:app.tokenSms,loginUsuario:loginUsuario}
              
              })
              request.done(function (dados) {        

                  $("#btnViewLogin").html("Próximo");    

                  console.log("%c RETORNO DO LOGIN","background:#ff0000;color:#fff;");
                  console.log(dados);

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                  	 
                  	 localStorage.setItem("dadosUsuario",dadosUsuario);
                  	 //app.login(dados.id,dados.email,dadosUsuario);

                     app.verificarCodigoSms();
                  
                  }else{
                     
                     //$(".form-control").val("");
                     //aviso("Oops! Login ou senha não encontrados","Verifique os dados inseridos e tente novamente!");
                     
                     // SE O CELULAR NAO ESTIVER CADASTRADO
                     // VAMOS DIRECIONAR O USUÁRIO PARA CONCLUIR O CADASTRO
                    
                     // SALVAR O CELULAR PARA O CADASTRO
                     localStorage.setItem("celularCadastro",dados.celular);

                     app.cadastro();

                  }
                  
              });
              request.fail(function (dados) {

                   $("#btnViewLogin").html("Próximo"); 
                     
                   console.log("API NÃO DISPONÍVEL (procLogin)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }

    // VERIFICAR O CÓDIGO SMS ENVIADO PELO USUÁRIO
    verificarCodigoSms(){

      $("#btnConfirmarCodigo").html("Processando...");

      event.preventDefault();

       var codigoSms = $("#codigoSms").val();

              // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"verificar-sms.php",
                  data:{token:app.token,codigoSms:codigoSms}
              
              })
              request.done(function (dados) {         

                  $("#btnConfirmarCodigo").html("Confirmar código.");   

                  console.log("%c RETORNO DA VERIFICACAO DO CODIGO DE SMS","background:#ff0000;color:#fff;");
                  console.log(dados);

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                     
                     localStorage.setItem("dadosUsuario",dadosUsuario);
                     app.login(dados.id,dados.email,dadosUsuario);
                  
                  }else{
                     
                     $(".form-control").val("");
                     aviso("Oops! Código incorreto","Verifique o código recebido e tente novamente. Se ainda tiver dificuldades, tente entrar com o e-mail e senha.");
                     
                  }
                  
              });
              request.fail(function (dados) {

                   $("#btnConfirmarCodigo").html("Confirmar código."); 
                     
                   console.log("API NÃO DISPONÍVEL (verificarCodigoSms)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }


    // PROC CADASTRO
    procCadastro(){

        $("#btnViewCadastro").html("Processando...");

        event.preventDefault();

        /*
         
        var cadastroNome = $("#cadastroNome").val();
        var cadastroEmail = $("#cadastroEmail").val();
        var cadastroSenha = $("#cadastroSenha").val();
        var cadastroCelular = $("#cadastroCelular").val();
  
                // INICIO CHAMADA AJAX
                var request = $.ajax({
  
                    method: "POST",
                    url: app.urlApi+"cadastro.php",
                    data:{token:app.token,cadastroCelular:cadastroCelular,cadastroNome:cadastroNome,cadastroEmail:cadastroEmail,cadastroSenha:cadastroSenha}
                
                })
                request.done(function (dados) {         

                    $("#btnViewCadastro").html("Cadastrar");   
  
                    console.log("%c RETORNO DO CADASTRO","background:#ff0000;color:#fff;");
                    console.log(dados);
  
                    var dadosUsuario = JSON.stringify(dados);
                    
                    if(dados.sucesso=="200"){
                       
                       localStorage.setItem("dadosUsuario",dadosUsuario);
  
                       // SE DEU TUDO CERTO, VAMOS LOGAR O USUÁRIO
                       app.login(dados.id,dados.email,dadosUsuario);
                    
                    }else{
                       
                       aviso("Oops! Esse e-mail já está cadastrado na nossa plataforma","Verifique os dados inseridos e tente novamente! Caso tenha esquecido sua senha, clique no link \"Esqueci Senha\" na tela de login.");
                    
                    }
                    
                });
                request.fail(function (dados) {

                     $("#btnViewCadastro").html("Cadastrar"); 
                       
                     console.log("API NÃO DISPONÍVEL (procCadastro)");
                     console.log(dados);
                     aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");
  
                });
                // FINAL CHAMADA AJAX

                */

                app.login();
  
      }


    procResetSenha(){

              $("#btnViewResetarSenha").html("Processando...");

              event.preventDefault();
               
              var resetEmail = $("#resetEmail").val();
              
              /*
              // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"reset-senha.php",
                  data:{token:app.token,resetEmail:resetEmail}
              
              })
              request.done(function (dados) {     

                  $("#btnViewResetarSenha").html("Resetar senha");       

                  console.log("%c RETORNO DO RESET","background:#ff0000;color:#fff;");
                  console.log(dados);

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                     
                     app.viewLogin();
                     aviso("Deu certo! Senha resetada","Enviamos para o seu e-mails instruções sobre o reset de senha.");
                     
                  }else{
                     
                     aviso("Oops! E-mail não encontrado","Seu e-mail não foi localizado na plataforma. Verique as informações inseridas e tente novamente.");
                  
                  }
                  
              });
              request.fail(function (dados) {

                   $("#btnViewResetarSenha").html("Resetar senha");  
                     
                   console.log("API NÃO DISPONÍVEL (ResetDeSenha)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX
              */

              app.viewLogin();
              aviso("Deu certo! Senha resetada","Enviamos para o seu e-mails instruções sobre o reset de senha.");
                     

    }

}