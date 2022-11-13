           // CARREGAR VIEWS DINAMICAMENTE
           function carregarViewDinamica(attr,callback){

              console.log("Carregando conteúdo");
              // attr pode ter por exemplo data-conteudo="DIR/file"

                var dataConteudos = document.querySelectorAll(`[${attr}]`)
                dataConteudos.forEach(function(e){
                    var conteudosLoad = e.getAttribute(`${attr}`)
                    fetch(conteudosLoad)
                    .then(data => data.text())
                    .then(html => e.innerHTML = html)
                    .then(data => {
                        setTimeout(function(){
                            callback();
                        },4000);
                    })
                });

          }


                var game = document.querySelector('.game');
                var arrFactory = [];
                var arrTree = [];
                var newFactory;
                var interval = 800;
                var yol = document.querySelector('.yolo');
                var box = document.querySelectorAll('.box');
                var start = document.querySelector('.floating');
                //var counter = 1;

                function createGame() {
                    for (let i = 0; i < 16; i++) {
                        let a = document.querySelector('.game');
                        let b = document.createElement('div');
                        b.classList.add('box');
                        b.setAttribute('data-value', i);
                        a.appendChild(b);   
                    }
                    
                }

                function replay() {
                    var replay = document.querySelector('.replay');
                    replay.addEventListener('click', function() {
                        box.forEach(function(box) {
                            box.classList.remove('green');
                            box.classList.remove('tree');

                        });
                        //counter += 1;
                        //document.querySelector('.counter').innerHTML = 'Level: ' + counter;
                        document.querySelector('.hidden').classList.add('levelUp')
                        let bang = document.querySelector('.won');
                        newFactory = setInterval(randomFactory, 600);
                        bang.style.animation = 'start .6s ease-in-out';
                        bang.style.top = '100%';
                    });
                }

                function addTree(e) {
                    let c = e.target;
                    
                    if(arrTree.indexOf(c.dataset.value) == -1) {
                        arrTree.push(c.dataset.value);
                        if(arrTree.length == 16) {
                            clearInterval(newFactory);
                            
                            document.querySelector('.hidden').classList.remove('levelUp');
                            let bang = document.querySelector('.won');
                            bang.style.animation = 'won .6s ease-in-out';
                            bang.style.top = '30%';
                            replay();
                        }
                    } 
                    

                    if(arrFactory.indexOf(c.dataset.value) != -1) {
                        arrFactory.splice(arrFactory.indexOf(c.dataset.value) ,1);
                    }
                    c.classList.remove('red');
                    c.classList.remove('factory');
                    c.classList.add('green');
                    c.classList.add('tree');
                    console.log(arrTree);
                }

                function randomFactory() {
                    let e = Math.random() * 16;
                    let g = Math.floor(e);
                    
                    if(arrFactory.indexOf(box[g].dataset.value) == -1) {
                        arrFactory.push(box[g].dataset.value);
                        box[g].classList.add('red');
                        box[g].classList.remove('green');
                        box[g].classList.add('factory');
                        if(arrFactory.length == 16) {
                            clearInterval(newFactory);
                        }
                    } 
                    
                    if(arrTree.indexOf(box[g].dataset.value) != -1) {
                        arrTree.splice(arrTree.indexOf(box[g].dataset.value), 1);
                    }
                    console.log(arrFactory);
                }


                 function fire(e) {
                    console.log(e.target);
                    let trg = e.target;
                    
                    const itemDim = this.getBoundingClientRect(),
                    itemSize = {
                    x: itemDim.right - itemDim.left,
                    y: itemDim.bottom - itemDim.top,
                    };
                    
                    let burst = new mojs.Burst({
                        left: itemDim.left + (itemSize.x/2),
                        top: itemDim.top + (itemSize.y/1.7),
                        count: 9,
                        radius: {50 : 90},
                    });
                    burst.play();
                };




            // COMO FAZER A CHAMADA NO FORMULÁRIO onSubmit="return ajaxSubmit(this);"
            var ajaxSubmit = function(form) {
                // fetch where we want to submit the form to
                var url = $(form).attr('action');
                var flag = 9;

                var data = $(form).serializeArray();

                // setup the ajax request
                $.ajax({
                    url: url,
                    data: data,
                    dataType: 'json',
                    type:'POST'
                });

                swal("Obrigado!", 'Sua mensagem foi enviada com sucesso', "success");

                return false;
            }


            // FOR"CAR VOLTAR AO TOPO
            function voltarAoTopo(){
              
              var objDiv = document.getElementById("content");
              objDiv.scrollTop = 0;

            }


            // AUMENTAR FONTE DA TABELA DE PRODUTOS
            var controleTabela = 12;
            function aumentarFonteTable(){

                 console.log("TESTE");

                 controleTabela++;
                
                $(".table-scroll .preco").css("font-size",`${controleTabela}px !important`);

                if(controleTabela==24){
                  controleTabela=0;
                }

            }


            

          // SE O USUÁRIO FIZER UM GESTURE PARA A PARTE INFERIOR DA PÁGINA
          // VAMOS FECHAR A LAYER DO CARRO, CASO ELA ESTEJA ABERTA

          $("#swipeAviso").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {

              if(direction=="down"){

                $(".modal-avisos .aviso").css("bottom","-300%");
                $(".modal-avisos").fadeOut(500);

              }

            }
          });
          
          $("#swipemeConfirmacao").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {

              if(direction=="down"){

                $(".modal-confirmacao .confirmacao").css("bottom","-300%");
                $(".modal-confirmacao").fadeOut(500);

              }

            }
          });


          $("#modalProduto").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {

              if(direction=="down"){

                fecharModalProduto();

              }

            },
            excludedElements: "label, button, input, select, textarea"
          });



            /* FUNÇÃO GERAL PARA EXIBIR OS AVISOS DO PÁGINA */
            function aviso(html){

              console.log("%c COMEÇANDO FUNÇÃO PARA EXIBIR AVISO","background:#ff0000;color:#fff;");

              $(".nova-janela-teste").fadeIn(500);

              $(".nova-janela-teste").html(html);

            }
            function fecharAviso(){

              // SOM SIMPLES AO CLICAR NO BOTÃO
              $('#bgm').attr("src","bgm/botao-simples.mp3?v=2");
              $('#bgm').get(0).play();
              
              $(".nova-janela-teste").hide(1);
              $(".nova-janela-teste").html("");

            }

            /* FUNÇÃO GERAL PARA EXIBIR CONFIRMAÇÕES DE AÇÕES */
            function confirmacao(titulo,mensagem,funcaoConfirmacao,textoConfirmacao){

              console.log("%c COMEÇANDO FUNÇÃO PARA EXIBIR AVISO","background:#ff0000;color:#fff;");
              $(".modal-confirmacao").fadeIn(100);

              $(".modal-confirmacao .confirmacao").css("bottom","0");

              // ALIMENTAR O HTML
              $(".confirmacao h3").html(titulo);
              $(".confirmacao p").html(mensagem);

              $(".confirmacao #acaoConfirmacao").attr("onclick",funcaoConfirmacao+"; fecharConfirmacao();");
              if(textoConfirmacao!=""){
                $(".confirmacao #acaoConfirmacao").html(textoConfirmacao);
              }
              

            }
            function fecharConfirmacao(){

                 $(".modal-confirmacao .confirmacao").css("bottom","-300%");
                 $(".modal-confirmacao").fadeOut(500);

            }



function fecharModalProduto(){

  $(".modal-produto .caixa-modal-produto").css("bottom","-300%");

  setTimeout(function(){ 

     $(".modal-produto").fadeOut(500);

  }, 600);

}



// FORMULARIO FLUTUANTE onclick="ativarFormularioFlutuante('','')"
function ativarFormularioFlutuante(campoParaPreenchimento,labelPreenchimento){

   $(".input-flutuante-acessibilidade").fadeIn(500);
   //$(".barra-navegacao").hide(0);

   $("#fieldInputFlutuante").val($(campoParaPreenchimento).val());

   localStorage.setItem("campoParaPreenchimento",campoParaPreenchimento);

   $("#fieldInputFlutuante").focus();
   $('.input-flutuante-acessibilidade label').html(labelPreenchimento);

}

function validarFormularioFlutuante(event){

    event.preventDefault();

    var fieldInputFlutuante = $("#fieldInputFlutuante").val();
    
    $(".input-flutuante-acessibilidade").fadeOut(500);
    //$(".barra-navegacao").show(0);

    $(localStorage.getItem("campoParaPreenchimento")).val(fieldInputFlutuante);

}

// GARANTIR O FECHAMENTO DO CAMPO QUANDO A TELA VOLTAR AO NORMAL

$(document).ready(function() {
  var _originalSize = $(window).width() + $(window).height()
  $(window).resize(function() {
    if ($(window).width() + $(window).height() == _originalSize) {
      console.log("keyboard active "+_originalSize);
      $(".input-flutuante-acessibilidade").fadeOut(500);
      //$(".barra-navegacao").show(0);
    }
  });
});



     // CODIGOS PARA UPLOAD DE ARQUIVOS LOCAIS
     function uploadLocal(){

         console.log("ENTRAMOS!");
         //var files = $(this)[0].files;
         
         /* Efetua o Upload */
         $('.fileForm').ajaxForm({
          dataType:  'json',
          success:   processJson 
        
         }).submit();

     }
     function processJson(dados) { 
            // 'data' is the json object returned from the server 
            console.log("%c RETORNO SOBRE O ENVIO DAS IMAGENS (UPLOAD):","background:#ff0000;color:#fff;");
            console.log(dados); 
            
            if(dados.erros===null){
            
                console.log("NENHUM ERRO!");

            }else{
              
              $(".retorno-upload").html('<div class="alert alert-danger">'+dados.erros+'</div>');              

            }

            $('.fileForm').resetForm();

        }
      // CODIGOS PARA UPLOAD DE ARQUIVOS LOCAIS



      // UPLOAD DE IMAGENS USANDO CAMERA ANDROID
      /* ######### FUNÇÕES USO DE CAMERA SELFIE #########  */
      var minhaImagem;
      var controleFotoEnviada = 1;
      var tipoArquivo = "nenhum";

      function initCameraSelfie(){ // CHAMAR ESSA FUNCAO PARA INICIALIZAR A CAMERA

               minhaImagem;
               controleFotoEnviada = 1;
               
               tipoArquivo = "camera";

               console.log("INICIANDO FUNÇÃO PARA INICIALIZAR A CAMERA SELFE");

              // SCRIPTS DA CAMERA                                 

                              controleFotoEnviada = 2;
                              console.log("CONTROLE FOTO ENVIADA ATUALIZADA");
                              
                              console.log("INICIALIZANDO A CAMERA");
                              $("#retornoMsgSelfie").html("inicializando a câmera para a selfie");
                              navigator.camera.getPicture(onSuccess2, onFail2, {
                                  quality: 50,
                                  destinationType: Camera.DestinationType.DATA_URL
                              });

                              function onSuccess2(imageData) {
                                  console.log("CAMERA INICIALIZADA COM SUCESSO");
                                  $("#retornoMsgSelfie").html("Imagem capturada com sucesso!");
                                  var image = document.getElementById('fotoDestinoSelfie');
                                  image.style.display = 'block';
                                  image.src = "data:image/jpeg;base64," + imageData;

                                  minhaImagem = imageData;

                                  //$(".perfil-banner .foto-perfil").css("background","url('data:image/jpeg;base64,"+imageData+"')");
                                  //$(".perfil-banner .foto-perfil").css("background-size","cover");
                                  //$(".perfil-banner .foto-perfil").css("background-position","center center");
                                  //localStorage.setItem("parametroFoto",1);

                                  $('.btn-action-foto').attr('onclick',"uploadMyImageSelfie()");

                              }

                              function onFail2(message) {
                                  console.log("CAMERA NÃO FUNCIONOU");
                                  $("#retornoMsgSelfie").html("Não possível obter a imagem da sua câmera, tente novamente. "+message);
                                  console.log('### MOTIVO FALHA DE ACESSO A CÂMERA: ' + message);
                              }                           

              document.addEventListener("deviceready", function () {  
              //alert("Phonegap");                                                                                        
              }, false); 

      }

      function uploadMyImageSelfie(){

                    console.log("INICIANDO FUNÇÃO PARA FAZER UPLOAD DA IMAGEM");
         
                                          if(controleFotoEnviada == 2){

                                                  $('.btn-action-foto').html("processando...");

                                                  var cadastroEmail = localStorage.getItem("idUsuario");
                                                  
                                                  $.ajax({
                                                    type: "POST",
                                                    url: app.urlApi+'upload-selfie-camera.php?idUsuario='+idUsuario,
                                                    data: { img_data:minhaImagem},
                                                    cache: false,
                                                    contentType: "application/x-www-form-urlencoded",
                                                    success: function (result) {
                                                      
                                                      $('#sendFileSelfie').html("ATUALIZAR IMAGEM");      
                                                      aviso("Foto de perfil atualizada com sucesso","Obrigado por manter o seu perfil atualizado!");
                                                      editarPerfil(); 

                                                      minhaImagem = "";
                                                      controleFotoEnviada = 1;
                                                      tipoArquivo = "nenhum";                                        

                                                    },
                                                    fail: function(result){
                                                      aviso("Oops! Algo deu errado, tente novamente",result);
                                                    }
                                                  });   

                                              }else{

                                                  aviso('Oops! Você não selecionou nenhuma imagem','Você não selecionou ou tirou nenhuma foto.');
                                                  $('.btn-action-foto').html("ATUALIZAR IMAGEM");

                                              }

}





function startAnimacaoClouds(){

  var _trans=document.getElementById('transition');
  //var _modal=document.getElementById('modal');
  $(".cd-transition-layer.closing").fadeIn(500);
  _trans.className='cd-transition-layer visible opening';
  setTimeout(function(){
    //_modal.className='cd-modal visible';

    setTimeout(function(){
      _trans.className='cd-transition-layer visible opening closing';
      $(".cd-transition-layer.closing").fadeOut(750);
      //_modal.className='cd-modal';
      setTimeout(function(){
        //startAnimacaoClouds();
      },3000);
    }, 3000);
  }, 600);


}



