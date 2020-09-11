var yourName 
var partnerName  
var clear = ""



function cal(){
    yourName = document.getElementById("yname").value;
    partnerName = document.getElementById("pname").value;
    var random = Math.floor(Math.random()*100)+1;

    if(yourName !== "" && partnerName !== ""){
        if(random > 80 ){
            document.getElementById("msg").innerHTML = "Together you act as one. Together you smile. Together you cry. You are not alone anymore. Love is about two people who are destined to be one ♡"
            document.getElementById("per").innerHTML = random+"%";
        }else if(random > 60){
            document.getElementById("msg").innerHTML = "The ideal couple is the one who keeps everything simple yet very beautiful. They keep the love stronger each time. Love is what matters to them. For them, it is the most important thing ♡"
            document.getElementById("per").innerHTML = random+"%";
        }else if(random  > 40){
            document.getElementById("msg").innerHTML = "Behind every wonderful couple are two wonderful people who fought hard to win every battle that comes their way ♡ "
            document.getElementById("per").innerHTML = random+"%";
        }else{
            document.getElementById("msg").innerHTML = "For a couple to stay forever they must consistently communicate to each other. They must know how to keep the fire burning. Never get afraid of being hurt. Love is a game. Play it better ♡"
            document.getElementById("per").innerHTML = random+"%";
        }

    }else{
        document.getElementById("msg").innerHTML = "Please fill all the details..."
    }
  



    

    // if(yourName[0]==="C" && partnerName[0] === "A"){
    //     document.getElementById("msg").innerHTML = "Wohooo wataaaa match !!! Zakassss ♡"
    //     document.getElementById("per").innerHTML = random+"%";
    // }else{
    //     document.getElementById("per").innerHTML = random+"%";
    //     document.getElementById("msg").innerHTML = "Great!"
    // }

}

var calBtn = document.getElementById('btn');
calBtn.addEventListener('click', cal);

function reset(){
    document.getElementById("yname").value = ""
    document.getElementById("pname").value = ""
    document.getElementById("msg").innerHTML = clear
    document.getElementById("per").innerHTML = clear
}











