//elements
var sendBtn= document.getElementById('sendBtn');
var textbox= document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');
var httpRequest = new XMLHttpRequest();


setTimeout(function(){
    chatbotSendMessage("how are u");
},1000);



function chatbotSendMessage(messageText){

    if(httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200){

            var result = JSON.parse[httpRequest.responseText];

            var messageElement = document.createElement('dev');
            messageElement.classList.add('w-50');
            messageElement.classList.add('float-left');
            messageElement.classList.add('shadow-sm');
            messageElement.style.margin="10px";
            messageElement.style.padding="5px";
    
    
            messageElement.innerHTML = "<span >chatbot:   </span>"+
            "<span style="+"margin-top: 10px; padding:10px"+">"+result.response_message +"</span>";
        
            messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});
    
            chatContainer.appendChild(messageElement);

    
    }else{
        //alert('error');

    }
}




function sendMessage(messageText){


    var messageElement = document.createElement('dev');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-right');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin="10px";
    messageElement.style.padding="5px";


    messageElement.innerHTML = "<span >me:   </span>"+
    "<span style="+"margin-top: 10px; padding:10px"+">"+messageText+"</span>";
    
    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});
    chatContainer.appendChild(messageElement);
    
    makeRequest(messageText);

}




function makeRequest(messageText){
        //ajax
        //we should make it  globel varible 
        httpRequest.open('GET','chatbot.php?message='+messageText,true);
        httpRequest.send();
        httpRequest.onreadystatechange = chatbotSendMessage;
 
    }





sendBtn.addEventListener('click',function(e){

    if(textbox.value==""){
        alert('Please type a message');
    }else{
        let messageText = textbox.value;
        sendMessage(messageText);
        textbox.value="";
    }

});