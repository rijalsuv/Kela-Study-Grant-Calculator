function showStudyGrant() {
var result= document.getElementById("txtWithParents").value;
var Year= Number(document.getElementById("txtAge").value);
var outputText= 'test'; //just for test
    

    if (Year>= 20 && result === 'y'){
        outputText="The study grant is 136.70 Euros";
    } else if (Year >= 20 && result === 'n'){
        outputText= "The study grant is 335.20 Euros";        
    } else {
        outputText= "Ask Kela";
}
document.getElementById("divAnswer").innerHTML= outputText;
    console.log("outputText");
}
