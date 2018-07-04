$(document).ready(function() {
    $("input[name='adresse identique']").change(function(){
        $( "#radio_non" ).toggle();
    })
    $("input[name='diagnostique amiante']").change(function(){
        $( "#radio_noon" ).toggle();
    })
    $("input[name='diagnostique amiante']").change(function(){
        $( "#radio_ouui" ).toggle();
    })
    $("input[name='local commercial']").change(function(){
    	$( "#radio_local" ).toggle();
    })  
    $("input[name='Sinistre sur 36 mois']").change(function(){
    	$( "#radio_sinistre" ).toggle();
    })  
    $("input[name='ass_actu']").change(function(){
        $( "#radio_ass_actu" ).toggle();
    }) 
    $("input[id='devisperso']").click(function(){
        $( "#devisperso1" ).show();
    }) 
    $("input[id='calesti']").click(function(){
        $( "#caltaux1" ).show();
        $( "#estimation4").show();
    }) 
    $("input[id='devisperso']").click(function(){
        $( "#estimation2" ).show();
    })
    $("input[id='calesti']").click(function(){
        $( "#estimation2" ).hide();
    })
    $("input[id='radio_pis1']").click(function(){
        $( "#erreur3" ).show();
    })
    $("input[name='parking_sous_terrain']").change(function(){
        $( "#radio_oui" ).toggle();
    })
    $("input[id='contact1']").click(function(){
        $( "#erreur4" ).show();
    })
    $("input[id='contactinfo']").click(function(){
        $( "#div_info" ).show();
    })

    $("input[id='r_accueil0']").click(function(){
        $( "#erreur4" ).toggle();
    })
    $("input[id='r_accueil5']").click(function(){
        $( "#div_info" ).hide();
    })

    $("input[id='r_accueil3']").click(function(){
        $( "#Nombress4" ).toggle();
    })

    $("input[id='r_devis']").click(function(){
        $( "#erreur3" ).toggle();
    })

    $("input[id='r_accueil2']").click(function(){
        $( "#erreur" ).toggle();
        $( "#caltaux1").hide();
        $( "#devisperso1").hide();
        $( "#estimation2").hide();

    })


    
    $('.js-scrollTo').on('click', function() {
        var page = $(this).attr('href');
        var speed = 500;
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
        return false;
        });


    $("input[id='calesti']").click(function(){
    document.getElementById('Surface_totale').value = document.getElementById('surface').value + " m²"
     });


    $('#salle_de_sport').click(function(){
    if($('#salle_de_sport').is(":checked")){
    $('#divsalledesport').css("display","block");
    }
    else{
    $('#divsalledesport').css("display","none");
    }
    });


    $('#piscine').click(function(){
    if($('#piscine').is(":checked")){
    $('#divpiscine').css("display","block");
    }
    else{
    $('#divpiscine').css("display","none");
    }
    });  

    $('#air_de_jeu').click(function(){
    if($('#air_de_jeu').is(":checked")){
    $('#divairdejeu').css("display","block");
    }
    else{
    $('#divairdejeu').css("display","none");
    }
    });  

    $('#ascenseur').click(function(){
    if($('#ascenseur').is(":checked")){
    $('#divascenseur').css("display","block");
    }
    else{
    $('#divascenseur').css("display","none");
    }
    });  

    $('#panneaux_solaire').click(function(){
    if($('#panneaux_solaire').is(":checked")){
    $('#divpanneaux').css("display","block");
    }
    else{
    $('#divpanneaux').css("display","none");
    }
    }); 

    $('#panphoto').click(function(){
    if($('#panphoto').is(":checked")){
    $('#divphoto').css("display","block");
    }
    else{
    $('#divphoto').css("display","none");
    }
    });


    $('#autrerisque').click(function(){
    if($('#autrerisque').is(":checked")){
    $('#divautre').css("display","block");
    }
    else{
    $('#divautre').css("display","none");
    }
    });

    $('#block').on('click', function(){
    $('.menu').toggleClass('active');
    });


    // ajout de la classe JS à HTML
document.querySelector("html").classList.add('js');
 
// initialisation des variables
var fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");
 
// action lorsque la "barre d'espace" ou "Entrée" est pressée
button.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput.focus();
    }
});
 
// action lorsque le label est cliqué
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});
 
// affiche un retour visuel dès que input:file change
fileInput.addEventListener( "change", function( event ) {  
    //the_return.innerHTML = this.value;
    $('#labelFU').text("Choosen file : " + this.value);
});





  // ajout de la classe JS à HTML
document.querySelector("html").classList.add('js');
 
// initialisation des variables
var fileInput  = document.querySelector( ".input-file2" ),  
    button     = document.querySelector( ".input-file-trigger2" ),
    the_return = document.querySelector(".file-return");
 
// action lorsque la "barre d'espace" ou "Entrée" est pressée
button.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput.focus();
    }
});
 
// action lorsque le label est cliqué
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});
 
// affiche un retour visuel dès que input:file change
fileInput.addEventListener( "change", function( event ) {  
    //the_return.innerHTML = this.value;
    $('#labelFU2').text("Choosen file : " + this.value);
});


 // ajout de la classe JS à HTML
document.querySelector("html").classList.add('js');
 
// initialisation des variables
var fileInput  = document.querySelector( ".input-file3" ),  
    button     = document.querySelector( ".input-file-trigger3" ),
    the_return = document.querySelector(".file-return");
 
// action lorsque la "barre d'espace" ou "Entrée" est pressée
button.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput.focus();
    }
});
 
// action lorsque le label est cliqué
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});
 
// affiche un retour visuel dès que input:file change
fileInput.addEventListener( "change", function( event ) {  
    //the_return.innerHTML = this.value;
    $('#labelFU3').text("Choosen file : " + this.value);
});

 // ajout de la classe JS à HTML
document.querySelector("html").classList.add('js');
 
// initialisation des variables
var fileInput  = document.querySelector( ".input-file4" ),  
    button     = document.querySelector( ".input-file-trigger4" ),
    the_return = document.querySelector(".file-return");
 
// action lorsque la "barre d'espace" ou "Entrée" est pressée
button.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput.focus();
    }
});
 
// action lorsque le label est cliqué
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});
 
// affiche un retour visuel dès que input:file change
fileInput.addEventListener( "change", function( event ) {  
    //the_return.innerHTML = this.value;
    $('#labelFU4').text("Choosen file : " + this.value);
});

 // ajout de la classe JS à HTML
document.querySelector("html").classList.add('js');
 
// initialisation des variables
var fileInput  = document.querySelector( ".input-file5" ),  
    button     = document.querySelector( ".input-file-trigger5" ),
    the_return = document.querySelector(".file-return");
 
// action lorsque la "barre d'espace" ou "Entrée" est pressée
button.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput.focus();
    }
});
 
// action lorsque le label est cliqué
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});
 
// affiche un retour visuel dès que input:file change
fileInput.addEventListener( "change", function( event ) {  
    //the_return.innerHTML = this.value;
    $('#labelFU5').text("Choosen file : " + this.value);
});

 // ajout de la classe JS à HTML
document.querySelector("html").classList.add('js');
 
// initialisation des variables
var fileInput  = document.querySelector( ".input-file6" ),  
    button     = document.querySelector( ".input-file-trigger6" ),
    the_return = document.querySelector(".file-return");
 
// action lorsque la "barre d'espace" ou "Entrée" est pressée
button.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput.focus();
    }
});
 
// action lorsque le label est cliqué
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});
 
// affiche un retour visuel dès que input:file change
fileInput.addEventListener( "change", function( event ) {  
    //the_return.innerHTML = this.value;
    $('#labelFU6').text("Choosen file : " + this.value);
});


 // ajout de la classe JS à HTML
document.querySelector("html").classList.add('js');
 
// initialisation des variables
var fileInput  = document.querySelector( ".input-file7" ),  
    button     = document.querySelector( ".input-file-trigger7" ),
    the_return = document.querySelector(".file-return");
 
// action lorsque la "barre d'espace" ou "Entrée" est pressée
button.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput.focus();
    }
});
 
// action lorsque le label est cliqué
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});
 
// affiche un retour visuel dès que input:file change
fileInput.addEventListener( "change", function( event ) {  
    //the_return.innerHTML = this.value;
    $('#labelFU7').text("Choosen file : " + this.value);
});


 // ajout de la classe JS à HTML
document.querySelector("html").classList.add('js');
 
// initialisation des variables
var fileInput  = document.querySelector( ".input-file8" ),  
    button     = document.querySelector( ".input-file-trigger8" ),
    the_return = document.querySelector(".file-return");
 
// action lorsque la "barre d'espace" ou "Entrée" est pressée
button.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput.focus();
    }
});
 
// action lorsque le label est cliqué
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});
 
// affiche un retour visuel dès que input:file change
fileInput.addEventListener( "change", function( event ) {  
    //the_return.innerHTML = this.value;
    $('#labelFU8').text("Choosen file : " + this.value);
});


 // ajout de la classe JS à HTML
document.querySelector("html").classList.add('js');
 
// initialisation des variables
var fileInput  = document.querySelector( ".input-file9" ),  
    button     = document.querySelector( ".input-file-trigger9" ),
    the_return = document.querySelector(".file-return");
 
// action lorsque la "barre d'espace" ou "Entrée" est pressée
button.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput.focus();
    }
});
 
// action lorsque le label est cliqué
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});
 
// affiche un retour visuel dès que input:file change
fileInput.addEventListener( "change", function( event ) {  
    //the_return.innerHTML = this.value;
    $('#labelFU9').text("Choosen file : " + this.value);
});


 // ajout de la classe JS à HTML
document.querySelector("html").classList.add('js');
 
// initialisation des variables
var fileInput  = document.querySelector( ".input-file10" ),  
    button     = document.querySelector( ".input-file-trigger10" ),
    the_return = document.querySelector(".file-return");
 
// action lorsque la "barre d'espace" ou "Entrée" est pressée
button.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput.focus();
    }
});
 
// action lorsque le label est cliqué
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});
 
// affiche un retour visuel dès que input:file change
fileInput.addEventListener( "change", function( event ) {  
    //the_return.innerHTML = this.value;
    $('#labelFU10').text("Choosen file : " + this.value);
});

 // ajout de la classe JS à HTML
document.querySelector("html").classList.add('js');
 
// initialisation des variables
var fileInput  = document.querySelector( ".input-file11" ),  
    button     = document.querySelector( ".input-file-trigger11" ),
    the_return = document.querySelector(".file-return");
 
// action lorsque la "barre d'espace" ou "Entrée" est pressée
button.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput.focus();
    }
});
 
// action lorsque le label est cliqué
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});
 
// affiche un retour visuel dès que input:file change
fileInput.addEventListener( "change", function( event ) {  
    //the_return.innerHTML = this.value;
    $('#labelFU11').text("Choosen file : " + this.value);
});
























/*   Chatbot Assistant Prototype
 */

var accessToken = '9194335ea73e462ea12c090a2c353dfa';
var baseUrl = 'https://api.api.ai/api/query?v=20150910';
var sessionId = '1234567890';
var loadingMarkups = '<span class=\'loader\'><span class=\'loader__dot\'></span><span class=\'loader__dot\'></span><span class=\'loader__dot\'></span></span>';
var errorMessage = 'Excusez-moi, les développeurs travaillent sur ma mise à jour, patience je reviens très vite =^^= !';
var urlPattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
var loadingDelay = 700;
var aiReplyDelay = 1800;

var $document = document;
var $chatbot = $document.querySelector('.chatbot');
var $chatbotMessageWindow = $document.querySelector('.chatbot__message-window');
var $chatbotHeader = $document.querySelector('.chatbot__header');
var $chatbotMessages = $document.querySelector('.chatbot__messages');
var $chatbotInput = $document.querySelector('.chatbot__input');
var $chatbotSubmit = $document.querySelector('.chatbot__submit');

document.addEventListener('keypress', function (event) {
  if (event.which == 13) {
    validateMessage();
  }
}, false);

$chatbotHeader.addEventListener('click', function () {
  toggle($chatbot, 'chatbot--closed');
  $chatbotInput.focus();
}, false);

$chatbotSubmit.addEventListener('click', function () {
  validateMessage();
}, false);

var toggle = function toggle(element, klass) {
  var classes = element.className.match(/\S+/g) || [],
      index = classes.indexOf(klass);
  index >= 0 ? classes.splice(index, 1) : classes.push(klass);
  element.className = classes.join(' ');
};

var userMessage = function userMessage(content) {
  $chatbotMessages.innerHTML += '<li class=\'is-user animation\'>\n      <p class=\'chatbot__message\'>\n        ' + content + '\n      </p>\n      <span class=\'chatbot__arrow chatbot__arrow--right\'></span>\n    </li>';
};

var aiMessage = function aiMessage(content) {
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  setTimeout(function () {
    removeLoader();
    $chatbotMessages.innerHTML += '<li \n      class=\'is-ai animation\' \n      id=\'' + (isLoading ? "is-loading" : "") + '\'>\n        <div class="is-ai__profile-picture">\n          <svg class="icon-avatar" viewBox="0 0 32 32">\n            <use xlink:href="#avatar" />\n          </svg>\n        </div>\n        <span class=\'chatbot__arrow chatbot__arrow--left\'></span>\n        <div class=\'chatbot__message\'>\n          ' + content + '\n        </div>\n      </li>';
    scrollDown();
  }, delay);
};

var removeLoader = function removeLoader() {
  var loadingElem = document.getElementById('is-loading');
  if (loadingElem) {
    $chatbotMessages.removeChild(loadingElem);
  }
};

var escapeScript = function escapeScript(unsafe) {
  var safeString = unsafe.replace(/</g, ' ').replace(/>/g, ' ').replace(/&/g, ' ').replace(/"/g, ' ').replace(/\\/, ' ').replace(/\s+/g, ' ');
  return safeString.trim();
};

var linkify = function linkify(inputText) {
  return inputText.replace(urlPattern, '<a href=\'$1\' target=\'_blank\'>$1</a>');
};

var validateMessage = function validateMessage() {
  var text = $chatbotInput.value;
  var safeText = text ? escapeScript(text) : '';
  if (safeText.length && safeText !== ' ') {
    resetInputField();
    userMessage(safeText);
    send(safeText);
  }
  scrollDown();
  return;
};

var multiChoiceAnswer = function multiChoiceAnswer(text) {
  var decodedText = text.replace(/zzz/g, "'");
  userMessage(decodedText);
  send(decodedText);
  scrollDown();
  return;
};

var processResponse = function processResponse(val) {

  removeLoader();

  if (val.fulfillment) {

    var output = '';
    var messagesLength = val.fulfillment.messages.length;

    for (var i = 0; i < messagesLength; i++) {

      var message = val.fulfillment.messages[i];
      var type = message.type;

      switch (type) {

        // 0 fulfillment is text
        case 0:
          var parsedText = linkify(message.speech);
          output += '<p>' + parsedText + '</p>';
          break;

        // 1 fulfillment is card
        case 1:
          // let imageUrl = message.imageUrl
          // let imageTitle = message.title
          // let imageSubtitle = message.subtitle
          // output += `<img src='${imageUrl}' alt='${imageTitle}${imageSubtitle}' />`
          break;

        // 2 fulfillment is button list
        case 2:
          var title = message.title;
          var replies = message.replies;
          var repliesLength = replies.length;
          output += '<p>' + title + '</p>';

          for (var _i = 0; _i < repliesLength; _i++) {
            var reply = replies[_i];
            var encodedText = reply.replace(/'/g, 'zzz');
            output += '<button onclick=\'multiChoiceAnswer("' + encodedText + '")\'>' + reply + '</button>';
          }

          break;

        // 3 fulfillment is image
        case 3:
          // console.log('Fulfillment is image - TODO')
          break;
      }
    }

    return output;
  } else {
    return val;
  }
};

var setResponse = function setResponse(val) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  setTimeout(function () {
    aiMessage(processResponse(val));
  }, delay);
};

var resetInputField = function resetInputField() {
  $chatbotInput.value = '';
};

var scrollDown = function scrollDown() {
  var distanceToScroll = $chatbotMessageWindow.scrollHeight - ($chatbotMessages.lastChild.offsetHeight + 60);
  $chatbotMessageWindow.scrollTop = distanceToScroll;
  return false;
};

var send = function send() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  fetch(baseUrl + '&query=' + text + '&lang=en&sessionId=' + sessionId, {
    method: 'GET',
    dataType: 'json',
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'Content-Type': 'application/json; charset=utf-8'
    }
  }).then(function (response) {
    return response.json();
  }).then(function (res) {
    if (res.status < 200 || res.status >= 300) {
      var error = new Error(res.statusText);
      throw error;
    }
    return res;
  }).then(function (res) {
    setResponse(res.result, loadingDelay + aiReplyDelay);
  }).catch(function (error) {
    setResponse(errorMessage, loadingDelay + aiReplyDelay);
    resetInputField();
    console.log(error);
  });

  aiMessage(loadingMarkups, true, loadingDelay);
};
























    $('#add_pj').click(calcul_3); 

    $('#add_al').click(calcul_3);

    $('#add_ame').click(calcul_3);

    $('#add_rc_bene').click(calcul_3);

    $('#add_piscine_val').click(calcul_3);

    $('#add_sport_val').click(calcul_3);

    $('#add_jeux_val').click(calcul_3);

    $('#add_panneaux_val').click(calcul_3);

    function calcul_3 (){

        var a = document.getElementById('surface').value;
        var b = document.getElementById('taux1').value ;
        var c = document.getElementById('taux2').value ;
        var d = document.getElementById('taux3').value ;
        var e = document.getElementById('taux4').value ;
        var f = document.getElementById('taux5').value ;
        var g = document.getElementById('add_piscine').value ;
        var h = document.getElementById('add_sport').value ;
        var i = document.getElementById('add_jeux').value ;
        var j = document.getElementById('add_panneaux').value ;
        
        var option1 = 0;
        var option2 = 0;
        var option3 = 0;
        var option4 = 0;
        var option5 = 0;
        var option6 = 0;

        if($('#add_pj').is(":checked")){
            option1 += 30
        }
        if($('#add_ame').is(":checked")){
            option1 += 45
        }
        if($('#add_al').is(":checked")){
            option1 += 29
        }
        if($('#add_rc_bene').is(":checked")){
            option2 += 10
        }
        if($('#add_piscine_val').is(":checked")){
            option3 += Math.round(parseFloat(document.getElementById('add_piscine').value) * 0.00317);
        }
        if($('#add_sport_val').is(":checked")){
            option4 += Math.round(parseFloat(document.getElementById('add_sport').value) * 0.00528);
        }
        if($('#add_jeux_val').is(":checked")){
            option5 += Math.round(parseFloat(document.getElementById('add_jeux').value) * 0.005);
        }
        if($('#add_panneaux_val').is(":checked")){
            option6 += Math.round(parseFloat(document.getElementById('add_panneaux').value) * 0.01267);
        }
        if (a <= 255) { 
            document.getElementById('estimation').value =  350 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation1').value = 350 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation2').value = 350 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation4').value = 350 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation5').value = 350 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation6').value = 350 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation7').value = 350 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation8').value = 350 + option1 + option2 + option3 + option4 + option5 + option6;
        }
        else if (a <= 300 && a > 255) { 
            document.getElementById('estimation').value =  Math.round(parseFloat(a) *  parseFloat(b)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation1').value = Math.round(parseFloat(a) *  parseFloat(b)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation2').value = Math.round(parseFloat(a) *  parseFloat(b)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation4').value = Math.round(parseFloat(a) *  parseFloat(b)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation5').value = Math.round(parseFloat(a) *  parseFloat(b)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation6').value = Math.round(parseFloat(a) *  parseFloat(b)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation7').value = Math.round(parseFloat(a) *  parseFloat(b)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation8').value = Math.round(parseFloat(a) *  parseFloat(b)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
        }
        else if (a <= 1000 && a > 300) {
            document.getElementById('estimation').value =  Math.round(parseFloat(a) *  parseFloat(c)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation1').value = Math.round(parseFloat(a) *  parseFloat(c)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation2').value = Math.round(parseFloat(a) *  parseFloat(c)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation4').value = Math.round(parseFloat(a) *  parseFloat(c)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation5').value = Math.round(parseFloat(a) *  parseFloat(c)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation6').value = Math.round(parseFloat(a) *  parseFloat(c)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation7').value = Math.round(parseFloat(a) *  parseFloat(c)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation8').value = Math.round(parseFloat(a) *  parseFloat(c)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
        }
        else if (a <= 2000 && a > 1000) {
            document.getElementById('estimation').value =  Math.round(parseFloat(a) *  parseFloat(d)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation1').value = Math.round(parseFloat(a) *  parseFloat(d)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation2').value = Math.round(parseFloat(a) *  parseFloat(d)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation4').value = Math.round(parseFloat(a) *  parseFloat(d)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation5').value = Math.round(parseFloat(a) *  parseFloat(d)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation6').value = Math.round(parseFloat(a) *  parseFloat(d)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation7').value = Math.round(parseFloat(a) *  parseFloat(d)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation8').value = Math.round(parseFloat(a) *  parseFloat(d)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
        }
        else if (a <= 3000 && a > 2000) {
            document.getElementById('estimation').value =  Math.round(parseFloat(a) *  parseFloat(e)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation1').value = Math.round(parseFloat(a) *  parseFloat(e)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation2').value = Math.round(parseFloat(a) *  parseFloat(e)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation4').value = Math.round(parseFloat(a) *  parseFloat(e)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation5').value = Math.round(parseFloat(a) *  parseFloat(e)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation6').value = Math.round(parseFloat(a) *  parseFloat(e)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation7').value = Math.round(parseFloat(a) *  parseFloat(e)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation8').value = Math.round(parseFloat(a) *  parseFloat(e)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
        }
        else if (a <= 4000 && a > 3000) {
            document.getElementById('estimation').value =  Math.round(parseFloat(a) *  parseFloat(f)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation1').value = Math.round(parseFloat(a) *  parseFloat(f)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation2').value = Math.round(parseFloat(a) *  parseFloat(f)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation4').value = Math.round(parseFloat(a) *  parseFloat(f)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation5').value = Math.round(parseFloat(a) *  parseFloat(f)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation6').value = Math.round(parseFloat(a) *  parseFloat(f)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation7').value = Math.round(parseFloat(a) *  parseFloat(f)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById('estimation8').value = Math.round(parseFloat(a) *  parseFloat(f)) + 106 + option1 + option2 + option3 + option4 + option5 + option6;
            document.getElementById("estimation2").style = "display: none";
        }

        document.getElementById('estimation').value += " € TTC / an";
        document.getElementById('estimation1').value += " € TTC / an";
        document.getElementById('estimation2').value += " € TTC / an";
        document.getElementById('estimation4').value += " € TTC / an";
        document.getElementById('estimation5').value += " € TTC / an";
        document.getElementById('estimation6').value += " € TTC / an";
        document.getElementById('estimation7').value += " € TTC / an";
        document.getElementById('estimation8').value += " € TTC / an";
    }
    });




    
 

