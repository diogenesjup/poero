class Views{
    
	constructor(){
	      
	     this._content = $("section#content"); 

	     this._allMenus = $("footer * a");
	     this._menu1 = $("footer .menu-1 a");
	     this._menu2 = $("footer .menu-2 a");
	     this._menu3 = $("footer .menu-3 a");

       this.header = $("header");
       this.footer = $("footer");

	}

	animarTransicao(classe=null){
		
        if(classe==null){

             new WOW().init();
        
        }else{
            /*
            var wow = new WOW(
                          {
                            boxClass: classe     // reset animation on end (default is true)
                          }
                        );
                        wow.init();
            */

                        new WOW().init();

        }

	}
  

/**
*  ------------------------------------------------------------------------------------------------
*
*
*   VIEW PRINCIPAL
*
*
*  ------------------------------------------------------------------------------------------------
*/
    viewPrincipal(){

           voltarAoTopo();

           this.header.html(`

              <div class="container">
                  <div class="row">
                    <div class="col-3 no-paddings coluna-um">
                        
                    </div>
                    <div class="col-6 text-center no-paddings" id="tituloHeader">
                        Início
                    </div>
                    <div class="col-3 no-paddings coluna-tres">
                         <a href="javascript:void(0)" title="Menu" onclick="app.fabrirFecharMenuLoja();">
                            <img src="assets/images/profile.svg" alt="Seu perfil" />
                         </a>
                    </div>
                  </div>
              </div>

           `);

            this._content.html(`
            
               <div class="row view-principal" view-name="view-principal">
                  <div class="col-12 wow fadeInUp">
                     
                      <div class="logo-intro">
                        <img src="assets/images/poero.png" alt="Poero Logo" />
                      </div>

                  </div>
               </div>

               <p>&nbsp;</p>
               <p>&nbsp;</p>
               <p>&nbsp;</p>
               <p>&nbsp;</p>
            
            `);

            this.animarTransicao();

            //$("footer").fadeIn();
        
    }

/**
*  ------------------------------------------------------------------------------------------------
*
*
*   BRAND
*
*
*  ------------------------------------------------------------------------------------------------
*/
    brand(){

        voltarAoTopo();

           this.header.html(`

              <div class="container">
                  <div class="row">
                    <div class="col-3 no-paddings coluna-um">
                        
                    </div>
                    <div class="col-6 text-center no-paddings" id="tituloHeader">
                        Brand
                    </div>
                    <div class="col-3 no-paddings coluna-tres">
                         <a href="javascript:void(0)" title="Menu" onclick="app.fabrirFecharMenuLoja();">
                            <img src="assets/images/profile.svg" alt="Seu perfil" />
                         </a>
                    </div>
                  </div>
              </div>

           `);

            this._content.html(`
            
               <div class="row view-brand" view-name="view-brand">
                  <div class="col-12 wow fadeInUp">
                     
                      <div class="logo-brand">
                        <img src="assets/images/poero.png" alt="Poero Logo" class="" />
                      </div>

                      <p>
                        <a href="javascript:void(0)" class="btn btn-primary" title="Play" onclick="app.timeline();">
                          Play
                        </a>
                      </p>

                      <p class="versao-app">
                         versão 1.0 - 13 de Novembro 2022
                      </p>

                      <img id="ilustra" src="assets/images/raposa.png" />

                  </div>
               </div>

               <p>&nbsp;</p>
               <p>&nbsp;</p>
               <p>&nbsp;</p>
               <p>&nbsp;</p>
            
            `);

            this.animarTransicao();

    }




/**
*  ------------------------------------------------------------------------------------------------
*
*
*   HEADER LOGADO wow fadeInUp
*
*
*  ------------------------------------------------------------------------------------------------
*/
headerLogado(){
   
   this.header.html(`

              <div class="container ">
                  <div class="row">
                    <div class="col-4 no-paddings coluna-um">
                        <img src="assets/images/poero.png" alt="Poero Logo" class="" />
                    </div>
                    <div class="col-8 text-right no-paddings">
                        
                        <span id="headerNivel" onclick="app.views.infoHeader(1)"><d>Nível</d> 01</span>
                        <span id="headerConfiguracoes" onclick="app.views.infoHeader(3)">
                            <d>Config</d> <i class="fa fa-cog"></i>
                         </span>

                    </div>
                    
                  </div>
              </div>

    `);

}

infoHeader(local){

    if(local==1){
        aviso(`
            <h2>O que significa esse ícone?</h2>
            <p>Aqui é o indicativo do seu nível atual dentro do jogo.</p>
            <a href="javascript:void(0)" class="btn btn-primary" title="Ok" onclick="fecharAviso();">
                Ok
            </a>
        `);
    }

    if(local==2){
        aviso(`
            <h2>O que significa esse ícone?</h2>
            <p>Aqui é o indicativo de quantos gnomos diferentes você já encontrou dentro do jogo.</p>
            <a href="javascript:void(0)" class="btn btn-primary" title="Ok" onclick="fecharAviso();">
                Ok
            </a>
        `);
    }

    if(local==3){
        aviso(`
            <h2>O que significa esse ícone?</h2>
            <p>Aqui é o ícone para abrir/alterar as configurações do jogo.</p>
            <a href="javascript:void(0)" class="btn btn-primary" title="Ok" onclick="fecharAviso();">
                Ok
            </a>
        `);
    }

}


/**
*  ------------------------------------------------------------------------------------------------
*
*
*   TIMELINE PRINCIPAL
*
*
*  ------------------------------------------------------------------------------------------------
*/
timeline(){

            $('#bgm').attr("src","bgm/botao-aceite.wav");
            $('#bgm').get(0).play();
            startAnimacaoClouds();

            // MUDAR A MÚSICA PARA A INTRO
            setTimeout(function(){ 

                $('#ost').get(0).pause();
                $('#ost').attr("src","ost/jornada-caps.mp3");
                $('#ost').get(0).play();
                            
            }, 750);

           voltarAoTopo();

           app.views.headerLogado();

            this._content.html(`
            
               <div class="row view-timeline view-timeline-1" view-name="view-timeline">
                  <div class="col-12 wow fadeInUp" data-conteudo="views/capitulos/indice.html?v=3">
                     

                  </div>
               </div>

               <div class="box-capitulo-historia wow bounce" data-wow-iteration="2">
                    carregando...
               </div>

               <p>&nbsp;</p>
               <p>&nbsp;</p>
               <p>&nbsp;</p>
               <p>&nbsp;</p>
            
            `);

            

            // EXIBIR O CABEÇALHO NOVAMENTE DEPOIS DE ALGUNS SEGUNDOS
            setTimeout(function(){
                $("header").css("opacity","1");
            },4200);

            carregarViewDinamica("data-conteudo",app.views.animarTransicao);

            var texts = new Array(["Bem vinda! (clique para continuar)"],
                                  ["Escolha um capítulo para iniciar:"]);
                                  /*var texts = new Array(["Use the A button or click\nthe box to continue."],
                                  ["Hello there! Welcome to\nthe world of Pokémon!"],
                                  ["My name is Oak! People call\nme the Pokémon Prof!"],
                                  ["This world is inhabited by\ncreatures called Pokémon!"],
                                  ["For some people, Pokémon are\npets. Other use them for"],
                                  ["fights."],
                                  ["Myself... I study Pokémon as a profession."],
                                  ["Your own very Pokémon legend\n is about to unfold!"],
                                  ["A world of dreams and\nadventures with Pokémon"],
                                  ["awaits!\nLet's go!"]);*/

                    var i = 0, speed = 60, pressed = false, keydowned = false, running = false;
                   

                    
                    // ESPERAR 3 SEGUNDOS ANTES DE COMEÇAR A CONTAR A HISTÓRIA
                    setTimeout(function(){

                        type(texts[i]+"");


                    }, 3.0*1000);


                    $("#restart").click(function(){
                      i = 0, speed = 60, pressed = false, keydowned = false;
                      type(texts[i]+"");
                      $(".box-capitulo-historia").removeClass("hide");
                    });


                    $(document).keydown(function(e) {
                      if (e.which==65) {
                        speed = 20;
                        if (pressed) {
                          pressed = false;
                          keydowned = false;
                          if (i<texts.length) {
                            type(texts[i]+"");
                          } else {
                            $(".box-capitulo-historia").addClass("hide");
                                
                          }
                        } else {
                          keydowned = true;
                        }
                      }
                    }).keyup(function(e) {
                      if (e.which==65) {
                        speed = 60;
                        if (keydowned) {
                          pressed = true;
                        }
                      }
                    });

                    $(".box-capitulo-historia").click(function(e) {
                      if (i<texts.length) {
                        type(texts[i]+"");
                      } else {
                        $(".box-capitulo-historia").addClass("hide");
                            
                      }
                    });

                    function type(txt) { if (!running) {
                      running = true;
                      i++;
                      
                      var timeOut,
                          txtLen = txt.length,
                          char = 0;
                      $(".box-capitulo-historia").text("");
                      (function typeIt() {   
                        timeOut = setTimeout(function() {
                          char++;
                          var type = txt.substring(0, char);
                          $(".box-capitulo-historia").html(type.replace("\n","<br />"));
                          typeIt();
                          if (char == txtLen) {
                            clearTimeout(timeOut);
                            running = false;
                            if (i<texts.length) {
                              $(".box-capitulo-historia").prepend("<i></i>");
                            }
                          }
                        }, speed);
                      }());
                    }}
            

}


historiaCapitulo(capitulo){

            $('#bgm').attr("src","bgm/botao-aceite.wav");
            $('#bgm').get(0).play();
            startAnimacaoClouds();

            // MUDAR A MÚSICA PARA A INTRO
            setTimeout(function(){ 

                $('#ost').get(0).pause();
                $('#ost').attr("src","ost/capitulo-1.mp3");
                $('#ost').get(0).play();
                            
            }, 750);


           voltarAoTopo();
           
           
           app.views.headerLogado();
           
           if(capitulo==1){
                app.views.capitulo1();
            }
            if(capitulo==2){
                app.views.capitulo2();
            }
            if(capitulo==3){
                app.views.capitulo3();
            }

}


capitulo1(){
            setTimeout(function(){ 
                $('#ost').attr("src","ost/trilha-principal.mp3");
                $('#ost').get(0).play();
            }, 1200);

            this._content.html(`
            
               <div class="row view-capitulo-historia view-capitulo-historia-1" view-name="view-capitulo-historia">
                  <div class="col-12">
                     
                      <h1 class="titulo-sessoes">Capítulo 1: O início</h1>
                      <div id="mioloAtivo"></div>

                  </div>
               </div>

               <p>&nbsp;</p>
               <p>&nbsp;</p>
               <p>&nbsp;</p>
               <p>&nbsp;</p>

               <div class="box-capitulo-historia wow bounce">
                    carregando...
               </div>
            
            `);
            setTimeout(function(){ 
                app.views.animarTransicao();
            }, 1750);

            var texts = new Array(["São tempos malucos..."],
                                  ["Eu não acredito mais no Amor. Será que ele existe?"],
                                  ["Huuum...\nMas antes vou me apresentar:"],
                                  ["..."],
                                  ["Muito prazer, eu sou o Leão :)\nE eu não acredito no amor."],
                                  ["Porque? Você já viu o tamanho que o mundo tem?"],
                                  ["É impossível encontrar alguém que possamos amar....."]);
                                  /*var texts = new Array(["Use the A button or click\nthe box to continue."],
                                  ["Hello there! Welcome to\nthe world of Pokémon!"],
                                  ["My name is Oak! People call\nme the Pokémon Prof!"],
                                  ["This world is inhabited by\ncreatures called Pokémon!"],
                                  ["For some people, Pokémon are\npets. Other use them for"],
                                  ["fights."],
                                  ["Myself... I study Pokémon as a profession."],
                                  ["Your own very Pokémon legend\n is about to unfold!"],
                                  ["A world of dreams and\nadventures with Pokémon"],
                                  ["awaits!\nLet's go!"]);*/

                    var i = 0, speed = 60, pressed = false, keydowned = false, running = false;
                   

                    
                    // ESPERAR 3 SEGUNDOS ANTES DE COMEÇAR A CONTAR A HISTÓRIA
                    setTimeout(function(){

                        type(texts[i]+"");


                    }, 3.0*1000);


                    $("#restart").click(function(){
                      i = 0, speed = 60, pressed = false, keydowned = false;
                      type(texts[i]+"");
                      $(".box-capitulo-historia").removeClass("hide");
                    });


                    $(document).keydown(function(e) {
                      if (e.which==65) {
                        speed = 20;
                        if (pressed) {
                          pressed = false;
                          keydowned = false;
                          if (i<texts.length) {
                            type(texts[i]+"");
                          } else {
                            $(".box-capitulo-historia").addClass("hide");
                                //console.log("Aqui é o final da coisa toda 1");
                          }
                        } else {
                          keydowned = true;
                        }
                      }
                    }).keyup(function(e) {
                      if (e.which==65) {
                        speed = 60;
                        if (keydowned) {
                          pressed = true;
                        }
                      }
                    });

                    $(".box-capitulo-historia").click(function(e) {
                      if (i<texts.length) {
                        type(texts[i]+"");
                      } else {
                        $(".box-capitulo-historia").addClass("hide");
                            console.log("Final do capitulo 1");
                            app.arrastarSoltar();
                      }
                    });

                    function type(txt) { if (!running) {
                      running = true;
                      i++;
                      
                      console.log("Executando item timeline: "+i);

                      if(i==4){

                        $("#mioloAtivo").html(`
                            <img src="assets/images/leao.png" class="assets3 wow fadeInUp" data-wow-delay="0.0s">
                        `);
                        
                        app.views.animarTransicao("assets3");


                        //$('#bgm').attr("src","bgm/lucia-saudacao.mp3");
                        //$('#bgm').get(0).play();
                        

                      }

                      if(i==5){


                        $("#mioloAtivo").html(`
                            <img src="assets/images/leao.png" class="assets4 wow bounce" data-wow-delay="0.0s">
                        `);
                        app.views.animarTransicao("assets4");

                      }

                      if(i==6){

                       
                        $("#mioloAtivo").html(`
                            <img src="assets/images/leao.png" class="assets4 wow bounce" data-wow-delay="0.0s">
                        `);
                        app.views.animarTransicao("assets4");
                        

                      }

                      if(i==7){

                       
                        $("#mioloAtivo").html(`
                            <img src="assets/images/leao.png" class="assets4 wow bounce" data-wow-delay="0.0s">
                        `);
                        app.views.animarTransicao("assets4");
                        

                      }


                      var timeOut,
                          txtLen = txt.length,
                          char = 0;
                      $(".box-capitulo-historia").text("");
                      (function typeIt() {   
                        timeOut = setTimeout(function() {
                          char++;
                          var type = txt.substring(0, char);
                          $(".box-capitulo-historia").html(type.replace("\n","<br />"));
                          typeIt();
                          if (char == txtLen) {
                            clearTimeout(timeOut);
                            running = false;
                            if (i<texts.length) {
                              $(".box-capitulo-historia").prepend("<i></i>");
                            }
                          }
                        }, speed);
                      }());
                    }}

}





capitulo2(){

            this._content.removeClass("ingame");
            this._content.addClass("nao-logado");

            setTimeout(function(){ 
                $('#ost').attr("src","ost/capitulo-2.mp3");
                $('#ost').get(0).play();
            }, 1200);

            this._content.html(`
            
               <div class="row view-capitulo-historia view-capitulo-historia-1" view-name="view-capitulo-historia">
                  <div class="col-12">
                     
                      <h1 class="titulo-sessoes">Capítulo 2:<br> Um presente</h1>
                      <div id="mioloAtivo"></div>

                  </div>
               </div>

               <p>&nbsp;</p>
               <p>&nbsp;</p>
               <p>&nbsp;</p>
               <p>&nbsp;</p>

               <div class="box-capitulo-historia">
                    carregando...
               </div>
            
            `);
            setTimeout(function(){ 
                app.views.animarTransicao();
            }, 1750);

            var texts = new Array(["..."],
                                  ["WooooW!\n O que é isso que você encontrou?"],
                                  ["É um preente?...\nIsso é tão raro de encontrar"],
                                  ["As pessoas mal se notam ou percebem o que estão ao redor delas"],
                                  ["Algo especial assim não acontece todo dia..."],
                                  ["Mas... Estou tão fechado para isso,"],
                                  ["Será que consegue me ajudar a me abrir?"],
                                  ["Já adianto que não será fácil!"]);
                                  /*var texts = new Array(["Use the A button or click\nthe box to continue."],
                                  ["Hello there! Welcome to\nthe world of Pokémon!"],
                                  ["My name is Oak! People call\nme the Pokémon Prof!"],
                                  ["This world is inhabited by\ncreatures called Pokémon!"],
                                  ["For some people, Pokémon are\npets. Other use them for"],
                                  ["fights."],
                                  ["Myself... I study Pokémon as a profession."],
                                  ["Your own very Pokémon legend\n is about to unfold!"],
                                  ["A world of dreams and\nadventures with Pokémon"],
                                  ["awaits!\nLet's go!"]);*/

                    var i = 0, speed = 60, pressed = false, keydowned = false, running = false;
                   

                    
                    // ESPERAR 3 SEGUNDOS ANTES DE COMEÇAR A CONTAR A HISTÓRIA
                    setTimeout(function(){

                        type(texts[i]+"");


                    }, 3.0*1000);


                    $("#restart").click(function(){
                      i = 0, speed = 60, pressed = false, keydowned = false;
                      type(texts[i]+"");
                      $(".box-capitulo-historia").removeClass("hide");
                    });


                    $(document).keydown(function(e) {
                      if (e.which==65) {
                        speed = 20;
                        if (pressed) {
                          pressed = false;
                          keydowned = false;
                          if (i<texts.length) {
                            type(texts[i]+"");
                          } else {
                            $(".box-capitulo-historia").addClass("hide");
                                //console.log("Aqui é o final da coisa toda 1");
                          }
                        } else {
                          keydowned = true;
                        }
                      }
                    }).keyup(function(e) {
                      if (e.which==65) {
                        speed = 60;
                        if (keydowned) {
                          pressed = true;
                        }
                      }
                    });

                    $(".box-capitulo-historia").click(function(e) {
                      if (i<texts.length) {
                        type(texts[i]+"");
                      } else {
                        $(".box-capitulo-historia").addClass("hide");
                            console.log("Final do capitulo 1");
                            app.liberdade();
                      }
                    });

                    function type(txt) { if (!running) {
                      running = true;
                      i++;
                      
                      console.log("Executando item timeline: "+i);

                      if(i==0){

                        $("#mioloAtivo").html(`
                            <img src="assets/images/leao.png" class="assets3 wow fadeInUp" data-wow-delay="0.0s">
                        `);
                        
                        app.views.animarTransicao("assets3");


                        //$('#bgm').attr("src","bgm/lucia-saudacao.mp3");
                        //$('#bgm').get(0).play();
                        

                      }else{
                         $("#mioloAtivo").html(`
                            <img src="assets/images/leao.png" class="assets4 wow bounce" data-wow-delay="0.0s">
                        `);
                        app.views.animarTransicao("assets4");
                      }

                     


                      var timeOut,
                          txtLen = txt.length,
                          char = 0;
                      $(".box-capitulo-historia").text("");
                      (function typeIt() {   
                        timeOut = setTimeout(function() {
                          char++;
                          var type = txt.substring(0, char);
                          $(".box-capitulo-historia").html(type.replace("\n","<br />"));
                          typeIt();
                          if (char == txtLen) {
                            clearTimeout(timeOut);
                            running = false;
                            if (i<texts.length) {
                              $(".box-capitulo-historia").prepend("<i></i>");
                            }
                          }
                        }, speed);
                      }());
                    }}

}







capitulo3(){

            this._content.removeClass("ingame");
            this._content.addClass("nao-logado");

            setTimeout(function(){ 
                $('#ost').attr("src","ost/capitulo-3.mp3");
                $('#ost').get(0).play();
                $('#ost').attr("loop",true);
            }, 1200);

            this._content.html(`
            
               <div class="row view-capitulo-historia view-capitulo-historia-1" view-name="view-capitulo-historia">
                  <div class="col-12">
                     
                      <h1 class="titulo-sessoes">Capítulo 3:<br> O que você está pensando agora?</h1>
                      <div id="mioloAtivo"></div>

                  </div>
               </div>

               <p>&nbsp;</p>
               <p>&nbsp;</p>
               <p>&nbsp;</p>
               <p>&nbsp;</p>

               <div class="box-capitulo-historia">
                    carregando...
               </div>
            
            `);
            setTimeout(function(){ 
                app.views.animarTransicao();
            }, 1750);

            var texts = new Array(["..."],
                                  ["Vou confiar em você, vou me dedicar e cuidar desse presente..."],
                                  ["..."],
                                  ["Oi gatinho!"],
                                  ["O que você está pensando agora?"],
                                  ["..."],
                                  ["Estou pensando em quanto eu amo estar vivendo e aprendendo o que é o amor..."],
                                  ["Com você..... Poêro."],
                                  ["[FIM]"]);
                                  /*var texts = new Array(["Use the A button or click\nthe box to continue."],
                                  ["Hello there! Welcome to\nthe world of Pokémon!"],
                                  ["My name is Oak! People call\nme the Pokémon Prof!"],
                                  ["This world is inhabited by\ncreatures called Pokémon!"],
                                  ["For some people, Pokémon are\npets. Other use them for"],
                                  ["fights."],
                                  ["Myself... I study Pokémon as a profession."],
                                  ["Your own very Pokémon legend\n is about to unfold!"],
                                  ["A world of dreams and\nadventures with Pokémon"],
                                  ["awaits!\nLet's go!"]);*/

                    var i = 0, speed = 60, pressed = false, keydowned = false, running = false;
                   

                    
                    // ESPERAR 3 SEGUNDOS ANTES DE COMEÇAR A CONTAR A HISTÓRIA
                    setTimeout(function(){

                        type(texts[i]+"");


                    }, 3.0*1000);


                    $("#restart").click(function(){
                      i = 0, speed = 60, pressed = false, keydowned = false;
                      type(texts[i]+"");
                      $(".box-capitulo-historia").removeClass("hide");
                    });


                    $(document).keydown(function(e) {
                      if (e.which==65) {
                        speed = 20;
                        if (pressed) {
                          pressed = false;
                          keydowned = false;
                          if (i<texts.length) {
                            type(texts[i]+"");
                          } else {
                            $(".box-capitulo-historia").addClass("hide");
                                //console.log("Aqui é o final da coisa toda 1");
                          }
                        } else {
                          keydowned = true;
                        }
                      }
                    }).keyup(function(e) {
                      if (e.which==65) {
                        speed = 60;
                        if (keydowned) {
                          pressed = true;
                        }
                      }
                    });

                    $(".box-capitulo-historia").click(function(e) {
                      if (i<texts.length) {
                        type(texts[i]+"");
                      } else {
                        $(".box-capitulo-historia").addClass("hide");
                            console.log("Final do capitulo 3");
                            location.reload();
                      }
                    });

                    function type(txt) { if (!running) {
                      running = true;
                      i++;
                      
                      console.log("Executando item timeline: "+i);

                      if(i==1){

                        $("#mioloAtivo").html(`
                            <img src="assets/images/leao.png" class="assets3 wow fadeInUp" data-wow-delay="0.0s">
                        `);
                        
                        app.views.animarTransicao("assets3");


                        //$('#bgm').attr("src","bgm/lucia-saudacao.mp3");
                        //$('#bgm').get(0).play();
                        

                      }

                      if(i==2){
                         $("#mioloAtivo").html(`
                            <img src="assets/images/leao.png" class="assets4 wow bounce" data-wow-delay="0.0s">
                        `);
                        app.views.animarTransicao("assets4");
                      }

                       if(i==3){
                         $("#mioloAtivo").html(`
                            
                        `);
                       
                      }

                      if(i==4){
                         $("#mioloAtivo").html(`
                            <img src="assets/images/raposa.png" class="assets5 wow bounce" data-wow-delay="0.0s">
                        `);
                        app.views.animarTransicao("assets5");
                      }

                      if(i==5){
                         $("#mioloAtivo").html(`
                            <img src="assets/images/raposa.png" class="assets5 wow bounce" data-wow-delay="0.0s">
                        `);
                        app.views.animarTransicao("assets5");
                      }


                      if(i==6){
                         $("#mioloAtivo").html(`
                            <img src="assets/images/leao.png" class="assets4 wow bounce" data-wow-delay="0.0s">
                        `);
                        app.views.animarTransicao("assets4");
                      }
                      if(i==7){
                         $("#mioloAtivo").html(`
                            <img src="assets/images/leao.png" class="assets4 wow bounce" data-wow-delay="0.0s">
                        `);
                        app.views.animarTransicao("assets4");
                      }
                      if(i==8){
                         $("#mioloAtivo").html(`
                            <img src="assets/images/leao.png" class="assets4 wow bounce" data-wow-delay="0.0s">
                        `);
                        app.views.animarTransicao("assets4");
                      }
                     


                      var timeOut,
                          txtLen = txt.length,
                          char = 0;
                      $(".box-capitulo-historia").text("");
                      (function typeIt() {   
                        timeOut = setTimeout(function() {
                          char++;
                          var type = txt.substring(0, char);
                          $(".box-capitulo-historia").html(type.replace("\n","<br />"));
                          typeIt();
                          if (char == txtLen) {
                            clearTimeout(timeOut);
                            running = false;
                            if (i<texts.length) {
                              $(".box-capitulo-historia").prepend("<i></i>");
                            }
                          }
                        }, speed);
                      }());
                    }}

}




/**
*  ------------------------------------------------------------------------------------------------
*
*
*   ARRASTAR E SOLTAR
*
*
*  ------------------------------------------------------------------------------------------------
*/
arrastarSoltar(){

            startAnimacaoClouds();

            //$('#ost').attr("src","ost/capitulo-1.mp3");
            //$('#ost').get(0).play();

            setTimeout(function(){ 
                $('#ost').attr("src","ost/arrastar-e-soltar-1.mp3");
                $('#ost').get(0).play();
                $('#ost').attr("loop",true);
            }, 1200);

            
            this._content.addClass("ingame");
            this._content.removeClass("nao-logado");

            this._content.html(`
                          
                    <div class="dragscroll arrastarSoltar">
                        <div class="plano3d" style="background: url('assets/images/cenarios/83e67977357303.5c8651641be86.jpg') #212121 no-repeat;background-position: center center;background-size: 100% 100%;">
                            <div id="centro"></div>
                            <button class="gnomos gnomo1" onclick="app.capitulo(2)"><img class="imagem-bounce gelatine" src="assets/images/gift.png"></button>
                        </div>
                        <section class="plano" id="positionscroll">
                        </section>
                    </div>

                    <div class="box-capitulo-historia">
                        carregando...
                    </div>
            
            `);

            setTimeout(function(){ 

                app.views.animarTransicao("box-capitulo-historia");
                app.views.animarTransicao("dragscroll");
                window.location.href='#centro';
                dragscroll.reset();

                //jQuery(".plano3d").draggable({containment: "parent"}); 

            }, 1750);

            var texts = new Array(["Viu só? Olha a confusão desse mundo!"],
                                  ["Você consegue localizar algo diferente nele?"],
                                  ["Se encontrar, você é uma pessoa de sorte:"]);
                                  /*var texts = new Array(["Use the A button or click\nthe box to continue."],
                                  ["Hello there! Welcome to\nthe world of Pokémon!"]);
                                  ["My name is Oak! People call\nme the Pokémon Prof!"],
                                  ["This world is inhabited by\ncreatures called Pokémon!"],
                                  ["For some people, Pokémon are\npets. Other use them for"],
                                  ["fights."],
                                  ["Myself... I study Pokémon as a profession."],
                                  ["Your own very Pokémon legend\n is about to unfold!"],
                                  ["A world of dreams and\nadventures with Pokémon"],
                                  ["awaits!\nLet's go!"]);*/

                    var i = 0, speed = 60, pressed = false, keydowned = false, running = false;
                   
                    // ESPERAR 3 SEGUNDOS ANTES DE COMEÇAR A CONTAR A HISTÓRIA
                    setTimeout(function(){

                        type(texts[i]+"");

                    }, 3.0*1000);

                    $("#restart").click(function(){
                      i = 0, speed = 60, pressed = false, keydowned = false;
                      type(texts[i]+"");
                      $(".box-capitulo-historia").removeClass("hide");
                    });

                    $(document).keydown(function(e) {
                      if (e.which==65) {
                        speed = 20;
                        if (pressed) {
                          pressed = false;
                          keydowned = false;
                          if (i<texts.length) {
                            type(texts[i]+"");
                          } else {
                            $(".box-capitulo-historia").addClass("hide");
                                //console.log("Aqui é o final da coisa toda 1");
                          }
                        } else {
                          keydowned = true;
                        }
                      }
                    }).keyup(function(e) {
                      if (e.which==65) {
                        speed = 60;
                        if (keydowned) {
                          pressed = true;
                        }
                      }
                    });

                    $(".box-capitulo-historia").click(function(e) {
                      if (i<texts.length) {
                        type(texts[i]+"");
                      } else {
                        $(".box-capitulo-historia").addClass("hide");
                            console.log("Final das instruções game arrastarSoltar");
                            //app.arrastarSoltar();
                      }
                    });

                    function type(txt) { if (!running) {
                      running = true;
                      i++;
                      
                      console.log("Executando item timeline: "+i);

                      /*
                      if(i==4){

                            $("#mioloAtivo").html(`
                                <img src="assets/images/lucia-01.png" class="assets3 wow fadeInUp" data-wow-delay="0.0s">
                            `);
                            
                            app.views.animarTransicao("assets3");


                            $('#bgm').attr("src","bgm/lucia-saudacao.mp3");
                            $('#bgm').get(0).play();
                        
                      }
                      */

                      var timeOut,
                          txtLen = txt.length,
                          char = 0;
                      $(".box-capitulo-historia").text("");
                      (function typeIt() {   
                        timeOut = setTimeout(function() {
                          char++;
                          var type = txt.substring(0, char);
                          $(".box-capitulo-historia").html(type.replace("\n","<br />"));
                          typeIt();
                          if (char == txtLen) {
                            clearTimeout(timeOut);
                            running = false;
                            if (i<texts.length) {
                              $(".box-capitulo-historia").prepend("<i></i>");
                            }
                          }
                        }, speed);
                      }());
                    }}

}





/**
*  ------------------------------------------------------------------------------------------------
*
*
*   LIBERDADE
*
*
*  ------------------------------------------------------------------------------------------------
*/
liberdade(){

            //$('#ost').attr("src","ost/capitulo-1.mp3");
            //$('#ost').get(0).play();

            startAnimacaoClouds();

            setTimeout(function(){ 
                $('#ost').attr("src","ost/liberdade.mp3");
                $('#ost').get(0).play();
                $('#ost').attr("loop",true);
            }, 1200);

            
            this._content.removeClass("ingame");
            this._content.addClass("nao-logado");

            this._content.html(`
                          
                    <div id="liberdade">

                            <div class="init">
                                <div class="center1">
                                    <h1>Será que vou me abrir?</h1>
                                    <p></p>
                                    <p class="floating ">COMEÇAR</p>
                                </div>
                            </div>
                            <div class="won">
                                <div class="center">
                                    <h1 style="color:#fff !important;">VOCÊ VENCEU!</h1>
                                    <p class="floating" onclick="app.capitulo(3)" style="color:#fff !important;text-decoration-color:#fff !important;">continuar</p>
                                </div>
                            </div>
                            <div class="init hidden"><h1 class="center">SEJA MAIS RÁPIDA</h1></div>
                           <!-- <h2 class="counter">Level: 1</h2> -->
                            <div class="container-r" style="position:relative;">
                                <div class="game"></div>
                            </div>  

                    </div>

                    <div class="box-capitulo-historia">
                        carregando...
                    </div>
            
            `);

            game = document.querySelector('.game');
            arrFactory = [];
            arrTree = [];
            newFactory;
            interval = 800;
            yol = document.querySelector('.yolo');

             createGame();

                box = document.querySelectorAll('.box');
                // console.log(box);
                start = document.querySelector('.floating');
                start.addEventListener('click', function() {
                    let init = document.querySelector('.init');
                    init.style.animation = 'start .5s ease-in';
                    init.style.top = '100%';
                    newFactory = setInterval(randomFactory, interval);
                });

                box.forEach(function(box) {
                    box.addEventListener('click', addTree, false);
                }, false);

               


                box.forEach(function(box) {
                    box.addEventListener('click', fire);
                });

            setTimeout(function(){ 

               

            }, 1750);

            var texts = new Array(["Transforme os cadiados em coração a tempo..."],
                                  ["Será que você consegue?"]);
                                  /*var texts = new Array(["Use the A button or click\nthe box to continue."],
                                  ["Hello there! Welcome to\nthe world of Pokémon!"]);
                                  ["My name is Oak! People call\nme the Pokémon Prof!"],
                                  ["This world is inhabited by\ncreatures called Pokémon!"],
                                  ["For some people, Pokémon are\npets. Other use them for"],
                                  ["fights."],
                                  ["Myself... I study Pokémon as a profession."],
                                  ["Your own very Pokémon legend\n is about to unfold!"],
                                  ["A world of dreams and\nadventures with Pokémon"],
                                  ["awaits!\nLet's go!"]);*/

                    var i = 0, speed = 60, pressed = false, keydowned = false, running = false;
                   
                    // ESPERAR 3 SEGUNDOS ANTES DE COMEÇAR A CONTAR A HISTÓRIA
                    setTimeout(function(){

                        type(texts[i]+"");

                    }, 3.0*1000);

                    $("#restart").click(function(){
                      i = 0, speed = 60, pressed = false, keydowned = false;
                      type(texts[i]+"");
                      $(".box-capitulo-historia").removeClass("hide");
                    });

                    $(document).keydown(function(e) {
                      if (e.which==65) {
                        speed = 20;
                        if (pressed) {
                          pressed = false;
                          keydowned = false;
                          if (i<texts.length) {
                            type(texts[i]+"");
                          } else {
                            $(".box-capitulo-historia").addClass("hide");
                                //console.log("Aqui é o final da coisa toda 1");
                          }
                        } else {
                          keydowned = true;
                        }
                      }
                    }).keyup(function(e) {
                      if (e.which==65) {
                        speed = 60;
                        if (keydowned) {
                          pressed = true;
                        }
                      }
                    });

                    $(".box-capitulo-historia").click(function(e) {
                      if (i<texts.length) {
                        type(texts[i]+"");
                      } else {
                        $(".box-capitulo-historia").addClass("hide");
                            console.log("Final das instruções game liberdade");
                            //app.arrastarSoltar();
                      }
                    });

                    function type(txt) { if (!running) {
                      running = true;
                      i++;
                      
                      console.log("Executando item timeline: "+i);

                      /*
                      if(i==4){

                            $("#mioloAtivo").html(`
                                <img src="assets/images/lucia-01.png" class="assets3 wow fadeInUp" data-wow-delay="0.0s">
                            `);
                            
                            app.views.animarTransicao("assets3");


                            $('#bgm').attr("src","bgm/lucia-saudacao.mp3");
                            $('#bgm').get(0).play();
                        
                      }
                      */

                      var timeOut,
                          txtLen = txt.length,
                          char = 0;
                      $(".box-capitulo-historia").text("");
                      (function typeIt() {   
                        timeOut = setTimeout(function() {
                          char++;
                          var type = txt.substring(0, char);
                          $(".box-capitulo-historia").html(type.replace("\n","<br />"));
                          typeIt();
                          if (char == txtLen) {
                            clearTimeout(timeOut);
                            running = false;
                            if (i<texts.length) {
                              $(".box-capitulo-historia").prepend("<i></i>");
                            }
                          }
                        }, speed);
                      }());
                    }}

}







/**
*  ------------------------------------------------------------------------------------------------
*
*
*   LOGIN / CADASTRO
*
*
*  ------------------------------------------------------------------------------------------------
*/

    viewLogin(){

            this.header.html(`

                <div class="container">
                  <div class="row">
                    <div class="col-3 no-paddings coluna-um">
                        
                    </div>
                    <div class="col-6 text-center no-paddings" id="tituloHeader">
                        Bem vindo!
                    </div>
                    
                  </div>
              </div>

            `);

            this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <div class="caixa-branca caixa-branca-view-principal">
                        <p class="logo">
                            <img src="assets/images/logo-mercado-justo.png" alt="Mercado Justo" />
                        </p>
                     </div>
                     
                     <div class="caixa-branca caixa-branca-login">
                             
                             <h3>ACESSAR SUA CONTA</h3>
                             <form method="post" action="javascript:void(0)" onsubmit="app.procLogin(event)" style="margin-bottom:32px;">
                                
                                <div class="form-group has-feedback">
                                   <label>Usuário</label>
                                   <input type="text" class="form-control" id="usuario" placeholder="E-mail" required />
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </div>

                                <div class="form-group has-feedback">
                                   <label>Senha</label>
                                   <input type="password" class="form-control" id="senha" placeholder="Senha" required />
                                   <i class="fa fa-lock" aria-hidden="true"></i>
                               </div>
                                
                                <div class="form-group">
                                   <button class="btn btn-primary" id="btnViewLogin">
                                      Entrar
                                   </button>
                                </div>
                                
                             </form>
                             
                             
                               <div class="form-group link-apoio text-center">
                                    <a href="javascript:void(0)" onclick="app.esqueciMinhaSenha()" title="Esqueci minha senha">
                                        Esqueci minha senha
                                    </a>
                                  </div>

                               <div class="form-group link-apoio text-center">
                                    <a href="javascript:void(0)" onclick="app.cadastro()" title="Criar uma conta">
                                        Criar uma conta
                                    </a>
                               </div>


                     </div>

                    

                  </div>
               </div>
            
            `);

            $("footer").hide();

            this.animarTransicao();
            app.helpers.carregarMascaras();
        
    }


    viewCadastro(){

      this.header.html(`

                <div class="container">
                  <div class="row">
                      <div class="col-12 text-center">
                          Cadastro
                      </div>
                  </div>
                </div>

            `);

      this._content.html(`
         
            <div class="row view-login" view-name="view-login">
               <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                  
                  <div class="caixa-branca caixa-branca-view-principal">
                        <p class="logo">
                            <img src="assets/images/logo-mercado-justo.png" alt="Mercado Justo" />
                        </p>
                     </div>

                     <div class="caixa-branca caixa-branca-login">
                            
                            <h3>CADASTRO</h3>
                            <form method="post" action="javascript:void(0)" onsubmit="app.procCadastro(event)">
                          
                               <div class="form-group has-feedback">
                                  <label>Seu Nome</label>
                                  <input type="text" id="nome"  class="form-control" placeholder="Seu nome completo" required />
                                  <i class="fa fa-user" aria-hidden="true"></i>  
                               </div>

                               <div class="form-group has-feedback">
                                  <label>Celular</label>
                                  <input type="text" id="celular"  class="form-control" placeholder="DDD + número" required />
                                  <i class="fa fa-phone" aria-hidden="true"></i>
                               </div>

                               <!--
                               <div class="form-group has-feedback">
                                  <label>CPF</label>
                                  <input type="text" id="cpf"  class="form-control" placeholder="CPF" required />
                                  <i class="fa fa-user" aria-hidden="true"></i>  
                               </div>
                               -->


                               <div class="form-group has-feedback">
                                  <label>Seu E-mail</label>
                                  <input type="email" id="email"  class="form-control" placeholder="Seu e-mail" required />
                                  <i class="fa fa-envelope" aria-hidden="true"></i>  
                               </div>
                               
                               <div class="form-group has-feedback">
                                  <label>Sua Senha</label>
                                  <input type="password" id="senha" class="form-control" placeholder="Sua senha de acesso" required />
                                  <i class="fa fa-lock" aria-hidden="true"></i>
                              </div>
                               
                               <div class="form-group">
                                  <button class="btn btn-primary" id="btnViewCadastro">
                                     Cadastrar
                                  </button>
                               </div>

                            </form>

                            <div class="form-group link-apoio text-center">
                                 <a href="javascript:void(0)" onclick="app.viewLogin()" title="Já tenho uma conta">
                                     Já tenho uma conta
                                 </a>
                               </div>

                     </div>

               </div>
            </div>
         
         `);

         $("footer").hide();

         this.animarTransicao();

         app.helpers.carregarMascaras();

 }
    
    viewEsqueciMinhaSenha(){

      this.header.html(`

                <div class="container">
                  <div class="row">
                      <div class="col-12 text-center">
                          Esqueci minha senha
                      </div>
                  </div>
                </div>

            `); 

          this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <div class="caixa-branca caixa-branca-view-principal">
                        <p class="logo">
                            <img src="assets/images/logo-mercado-justo.png" alt="Mercado Justo" />
                        </p>
                     </div>

                     <div class="caixa-branca caixa-branca-login">
                         
                         <h3>ESQUECI MINHA SENHA</h3>
                         <form method="post" action="javascript:void(0)" onsubmit="app.procResetSenha(event)">
                            
                            <div class="form-group">
                               <label>Seu e-mail ou usuário cadastrado</label>
                               <input type="email" class="form-control" id="resetEmail" onclick="ativarFormularioFlutuante('#resetEmail','Seu e-mail cadastrado')" placeholder="Seu e-mail ou usuário" required />
                            </div>
                           
                            <div class="form-group">
                               <button class="btn btn-primary" id="btnViewResetarSenha">
                                  Resetar senha
                               </button>
                            </div>
                         </form>

                         <div class="form-group link-apoio text-center">
                              <a href="javascript:void(0)" onclick="app.viewLogin()" title="Cancelar reset de senha">
                                  Cancelar
                              </a>
                            </div>

                     </div>

                  </div>
               </div>
            
            `);

            $("footer").hide();

            this.animarTransicao();

    }
    



/**
*  ------------------------------------------------------------------------------------------------
*
*
*   APOIOS
*
*
*  ------------------------------------------------------------------------------------------------
*/
    // VIEW UPLOAD DE FOTO
    viewUploadFoto(){
        
        this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>Upload de foto</h2>
                     <p>Fazer upload de imagens via input ou camêra</p>
                     
                     <form class="fileForm" method="post" enctype="multipart/form-data" action="${app.urlApi}v1-imagens-upload.php">
                        
                        <input type="hidden" name="token" value="${app.token}" />
                        <input type="hidden" name="id_usuario" value="${localStorage.getItem("idUsuario")}" />

                         <div class="form-group">
                           <label for="fileArquivo" class="btn btn-default" style="width:100%;">Selecionar arquivo</label>
                           <input style="opacity:0;display:block;height:auto;width:100%;" type="file" id="fileArquivo" class="upload-imagem" name="arquivo" />
                         </div>



                     </form>

                     <div class="form-group">
                         <a href="javascript:void(0)" class="btn btn-primary" onclick="uploadLocal();">
                            Enviar o arquivo
                         </a>
                     </div>

                     <div class="retorno-upload"></div>

                     <div class="form-group link-apoio text-center">
                          <a href="javascript:void(0)" onclick="app.inicio()" title="Cancelar upload de imagens">
                              Cancelar
                          </a>
                     </div>

                  </div>
               </div>
            
            `);
        
        this.animarTransicao();

    }


    desativarTodosMenus(){
    	this._allMenus.css("font-weight","normal");
    }

    ativarMenuUm(){
    	this.desativarTodosMenus();
       	//this._menu1.css("font-weight","bold"); 
    }
    ativarMenuDois(){
    	this.desativarTodosMenus();
       	//this._menu2.css("font-weight","bold"); 
    }
    ativarMenuTres(){
    	this.desativarTodosMenus();
       	//this._menu3.css("font-weight","bold"); 
    }



}

