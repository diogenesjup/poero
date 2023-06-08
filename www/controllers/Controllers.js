class App {
//window.history.pushState(e, '"' + e+ '"', paginaSessao+'#' + e);
    constructor(appId, appName, appVersion, appOs, ambiente, token, tokenSms, apiLogin, apiSenha) {

        this.appId = appId;
        this.appName = appName;
        this.appVersion = appVersion;        
        this.appOs = appOs;

        this.views = new Views();
        this.sessao = new Sessao();
        this.models = new Models();
        this.helpers = new Helpers();

        if(ambiente=="HOMOLOGACAO"){
             
            this.urlDom = "http://127.0.0.1:8080/juliaacreditaemgnomos/poero/app/www/";
            this.urlApi = "http://127.0.0.1:8080/juliaacreditaemgnomos/poero/app/www/";
            this.urlCdn = "http://127.0.0.1:8080/juliaacreditaemgnomos/poero/app/www/";

        }
        if(ambiente=="PRODUCAO"){

            this.urlDom = "";
            this.urlApi = "";
            this.urlCdn = "";

        }

        this.token = token;
        this.tokenSms = tokenSms;

        this.apiLogin = apiLogin;
        this.apiSenha = apiSenha;
        
    }
    
    getVersion() {

        return this.appVersion;
    }

    getOs(){

        return this.appOs;
    }
    
    initApp(elemento){

        app.inicio();

        // VERIFICAR SE A API ESTÁ OK
        this.models.testeApi();

        // VERIFICAR SE O USUÁRIO ESTÄ LOGADO
        //this.sessao.verificarLogado();

    }

    inicio(){

        this.views.viewPrincipal();
        app.step1();

    }

    step1(){

            setTimeout(function(){ 

                /*
                var b = $.confirm({
                    title: 'Atenção',
                    content: 'Esse jogo é apenas um protótipo para demonstrar algumas funcionalidades de gameficação',
                    buttons: {
                        heyThere: {
                            text: 'Ok', // With spaces and symbols
                            action: function () {
                                b.close();
                                app.step2();
                            }
                        }
                    }
                });
                */

                aviso(`

                    <h2>Que dia é hoje?</h2>
                    <p>Hoje é dia 13 de Novembro de 2022...</p>
                    <a href="javascript:void(0)" title="Ok" class="btn btn-primary" onclick="fecharAviso(); app.step2();">Ok</a>

                `);

            }, 1000);

    }

    step2(){

            setTimeout(function(){ 

                /*
                var b = $.confirm({
                    title: 'Atenção',
                    content: `

                        Para uma melhor experiência recomendamos o uso de fones de ouvido.

                    `,
                    buttons: {
                        heyThere: {
                            text: 'Ok', // With spaces and symbols
                            action: function () {
                                b.close();
                                app.step3();
                            }
                        }
                    }
                });
                */

                aviso(`

                    <h2>Atenção:</h2>
                    <p>Para uma melhor experiência recomendamos o uso de fones de ouvido ou com os altos falantes ligados.</p>
                    <a href="javascript:void(0)" title="Ok" class="btn btn-primary" onclick="fecharAviso(); app.step3();">Ok</a>

                `);

            }, 1200);

    }


    step3(){

            $('#bgm').attr("src","bgm/botao-aceite.wav");
            $('#bgm').get(0).play();
            startAnimacaoClouds();

            
            setTimeout(function(){ 

                app.views.brand();

                    $('#ost').attr("src","ost/selecao-menu.wav");
                    $('#ost').get(0).play();

                    /*
                    setTimeout(function(){ 
                    $("#ilustra")
                        .fadeOut(400, function() {
                            $("#ilustra").attr('src',"assets/images/rei_gnomo.png");
                        })
                        .fadeIn(400);
                    }, 7200);
                    */
                
            }, 750);

    }


    capitulo(capitulo){

            // ANTES DE ABRIR O JOGO, TEMOS A HISTÓRIA DO CAPITULO
            this.views.historiaCapitulo(capitulo);

        

    }

    arrastarSoltar(){

            this.views.arrastarSoltar();

    }

    liberdade(){

            this.views.liberdade();

    }

    login(idUsuario,emailUusario,dadosUsuario){
   
            this.sessao.logarUsuario(idUsuario,emailUusario,dadosUsuario);
   
    }

    verificarCodigoSms(){

            this.views.viewCodigoSms();

    }

    procVerificarSms(){
        
            this.models.verificarCodigoSms(); 

    }
    
    procLoginSms(){

            this.models.procLoginSms();
   
    }

    procLogin(){

            this.models.procLogin();
   
    }
    
    procLogoff(){

        confirmacao("Tem certeza que deseja sair?","Você será desconectado...","app.logoff();","Sim, sair");
        
    }

    logoff(){
       
        localStorage.clear();
        app.viewLogin();

    }

    cadastro(){
        this.views.viewCadastro();
        this.views.desativarTodosMenus();
    }

    procCadastro(){
        this.models.procCadastro();
    }


    esqueciMinhaSenha(){
        this.views.viewEsqueciMinhaSenha();
        this.views.desativarTodosMenus();
    }

    procResetSenha(){
        this.models.procResetSenha();
    }

    viewLoginEmailSenha(){
        this.views.viewLoginEmailSenha();
    }





    resultadoDePesquisa(){
         
         var prePesquisa = $("#prePesquisa").val();

         this.views.resultadoDePesquisa(prePesquisa);



    }


    filtrotabela(){

                  var input, filter, ul, li, a, i;

                  var entrei = "nao";
                  var entreiCat = "nao";
                  
                  // PRODUTOS
                  input = document.getElementById('continuarPesquisa');
                  filter = input.value.toUpperCase();
                  ul = document.getElementById("conteudoTabelaMercado");

                  li = ul.getElementsByTagName('tr');

                   for (i = 0; i < li.length; i++) {
                      a = li[i];
                      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                          li[i].style.display = "";
                          entrei = "sim";
                      } else {
                          li[i].style.display = "none";
                      }
                  }

                  if(entrei == "nao"){
                     
                     $(".nao-vi-resultados-produtos").css("display","block");
                    
                  }else{

                    $(".nao-vi-resultados-produtos").css("display","none");
                    
                  }


                  // CATEGORIAS
                  input = document.getElementById('continuarPesquisa');
                  filter = input.value.toUpperCase();
                  ul = document.getElementById("conteudoTabelaMercadoCategorias");

                  li = ul.getElementsByTagName('li');

                   for (i = 0; i < li.length; i++) {
                      a = li[i];
                      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                          li[i].style.display = "";
                          entreiCat = "sim";
                      } else {
                          li[i].style.display = "none";
                      }
                  }

                  if(entreiCat == "nao"){
                     
                     $(".nao-vi-resultados-categorias").css("display","block");
                    
                  }else{

                    $(".nao-vi-resultados-categorias").css("display","none");
                    
                  }

     }


    subCategoria(){
       
       this.views.subCategoria();

    }


    produtosCategoria(){

        this.views.produtosCategoria();

    }


    addProdutoLista(){

        this.views.addProdutoLista();

    }

    confirmarInclusaoProduto(){
        
        fecharModalProduto();
        aviso("Deu certo!","O produto foi adicionado a sua lista com sucesso");

    }

    criarNovaLista(){

        this.views.criarNovaLista();

    }

    

    minhasListas(){

        this.views.minhasListas();

    }


   filtroMinhasListas(){

                  var input, filter, ul, li, a, i;

                  var entrei = "nao";
                  
                  // PRODUTOS
                  input = document.getElementById('filtroMinhasListas');
                  filter = input.value.toUpperCase();
                  ul = document.getElementById("conteudoMinhasListas");

                  li = ul.getElementsByTagName('li');

                   for (i = 0; i < li.length; i++) {
                      a = li[i];
                      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                          li[i].style.display = "";
                          entrei = "sim";
                      } else {
                          li[i].style.display = "none";
                      }
                  }

                  if(entrei == "nao"){
                     
                     if($("#conteudoMinhasListas").find('.sem-resultados').length == 0){
                         $("#conteudoMinhasListas").append(`

                             <p class="sem-resultados" style="padding-top:12px;text-align:center;">Nenhuma lista encontrada</p>

                         `);
                     }
                    
                  }else{

                    $(".sem-resultados").remove();
                    
                  }


     }



     lista(){
       
       app.views.lista();

     }


     timeline(){

        this.views.timeline();

     }

















    view2(){
        this.views.view2();
        this.views.ativarMenuDois();
    }

    view3(){
        this.views.view3();
        this.views.ativarMenuTres();
    }

    viewLogin(){
        this.views.viewLogin();
        this.views.desativarTodosMenus();

        $("section#content").addClass("nao-logado");
        
    }

    viewUploadFoto(){
        this.views.viewUploadFoto();
        this.views.desativarTodosMenus();
    }


    /* ABRIR OU FECHAR O MENU LOJA */
    fabrirFecharMenuLoja(){

      if(localStorage.getItem("bdLogado")=="logado"){

              if($(".menu-adicional-loja").hasClass("aberto")){
                 
                 $(".menu-adicional-loja").removeClass("aberto");
                
              }else{

                $(".menu-adicional-loja").addClass("aberto");
                
              }

      }else{
         
         this.sessao.verificarLogado();

      }

    }

}


class Sessao{
    
	constructor(){
	      
	     this.logado = "nao-logado";
	     this.bdLogado = localStorage.getItem("bdLogado");
	     this.idUsuario = localStorage.getItem("idUsuario");
	     this.emailUsuario = localStorage.getItem("emailUsuario");
	     this.dadosUsuario = localStorage.getItem("dadosUsuario");

	}
    
    logarUsuario(idUsuario,emailUusario,dadosUsuario){
    	this.logado = "logado";
    	this.idUsuario = idUsuario;
    	this.dadosUsuario = dadosUsuario;
    	localStorage.setItem("bdLogado","logado");
        localStorage.setItem("idUsuario",this.idUsuario);

        // REMOVER A CLASSE QUE IMPEDE QUE O RODAPÉ SEJA ADICIONADO AO CALCULO DA ALTURA
        $("section#content").removeClass("nao-logado");
        
        // DIRECIONAR O USUÁRIO PARA O INÍCIO
    	app.inicio();
    }

    verificarLogado(){
      
	      if(this.bdLogado!="logado"){
	      	app.viewLogin();
	      	
	      }

    }

    deslogarUusario(){
    	this.logado = "nao-logado";
    	localStorage.setItem("bdLogado","nao-logado");
    	localStorage.clear();
    }

}