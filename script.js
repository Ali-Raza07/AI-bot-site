let btn=document.querySelector('#btn');
let content=document.querySelector('#content');
let voice=document.querySelector('#voice');

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text);  
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="en-us";
    
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day=new Date();
    let hours=day.getHours();
    if(hours>0 && hours<12){
        speak("Good Morning Sir");
    }
   else if(hours>=12 && hours<19){
    speak("Good Afternoon Sir");
   }  
   else {
    speak("Good Evening Sir");
   }
}

window.addEventListener('load',()=>{
    wishMe()
});

let SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new SpeechRecognition()
recognition.onresult=(event)=>{
   let currentIndex=event.resultIndex
   let transcript=event.results[currentIndex][0].transcript
   content.innerText=transcript
   takeCommand(transcript.toLowerCase())
};

btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display="none";
    voice.style.display="block";

});

function takeCommand(message){
    btn.style.display="flex";
    voice.style.display="none";
    if(message.includes("hello")||message.includes("hi")){
        speak("hello sir, what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am a virtual assistant ,created by ALI RAZA Sir")
    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.co.uk/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com/profile.php?id=100095035520028","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://www.instagram.com","_blank")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp...")
        window.open("https://www.whatsapp.com","_blank")
    }
    else if(message.includes("open gmail")){
        speak("opening gmail...")
        window.open("https://www.gmail.com","_blank")
    }
    else if(message.includes("open ms word")){
        speak("opening ms word...")
        window.open("https://www.msword.com","_blank")
    }
    
    if(message.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }
    
    else if(message.includes("open ms word")){
        speak("opening ms word...")
        window.open("ms word://")
    }
    else if(message.includes("open excel")){
        speak("opening excel...")
        window.open("excel://")
    }
    
    else if(message.includes("open illustrator")){
        speak("opening illustrator...")
        window.open("illustrator://")
    }
    else if (message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"});
        speak(time)
    }
    else if (message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"});
        speak(date)
    }
    else{
        let okaysirAliRaza ="this is what i found on internet regarding" + message.replace("Ahmed","") || message.replace
        ("Ahmed","")
        speak(okaysirAliRaza)
        window.open(`https://www.google.com/search?q=${message.replace("Ahmed","")}`,"_blank")
    }
}


