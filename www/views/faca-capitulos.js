var texts = new Array(["Gnomos? Huuum... A maioria das pessoas não acredita, mas eu preciso te contar um segredo:"],
                                  ["ELES EXISTEM! Nessa jornada, vamos encontrar e descobrir os incríveis mistérios desses pequenos seres."],
                                  ["Huuum...\nMas antes vou me apresentar:"],
                                  ["Muito prazer, meu nome é Lúcia :)\nE eu serei a sua amiga durante esse caminho!"],
                                  ["Espero que você esteja bem animado(a) para todas as surpresas que vamos encontrar!"],
                                  ["Sem mais delongas! Vamos nessa!"]);
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
                                console.log("Aqui é o final da coisa toda 1");
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
                            console.log("Aqui é o final da coisa toda 2");
                      }
                    });

                    function type(txt) { if (!running) {
                      running = true;
                      i++;
                      
                      console.log("Executando item timeline: "+i);

                      if(i==4){

                        $("#mioloAtivo").html(`
                            <img src="assets/images/lucia-01.png" class="assets3 wow fadeInUp" data-wow-delay="0.3s">
                        `);
                        app.views.animarTransicao();

                        $('#bgm').attr("src","bgm/lucia-saudacao.mp3");
                        $('#bgm').get(0).play();
                        

                      }

                      if(i==5){

                        $("#mioloAtivo").html(``);

                        $("#mioloAtivo").html(`
                            <img src="assets/images/lucia-02.png" class="assets4 wow bounce" data-wow-delay="0.0s">
                        `);
                        app.views.animarTransicao();

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