function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToGrandma(string){
    //This was another option that didn't work, but helped in solving issues. 
    /*if (string.toLowerCase()===string) {
        return("I can\'t hear you!");
    } else if (string.toUpperCase() === string) {
        return ("YES INDEED!");
    } else if (string === "I love you, Grandma.") {
        return ("I love you, too.");
    } 
}*/ 

    const response1 = "I can\'t hear you!";
    const response2 = "YES INDEED!";
    const response3 = "I love you, too.";
    console.log(response1);
    console.log(response2);
    console.log(response3);

    console.log(string.toLowerCase());
    console.log(string.toUpperCase());

    if (string.toLowerCase()===string){
        return response1;
    }
    else if (string.toUpperCase()===string){
        return response2;
    }
    else if (string==="I love you, Grandma."){
        return response3;
    }
}
console.log`${response1}, ${response2}, ${response3}`;