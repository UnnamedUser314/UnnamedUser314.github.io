let decimalIpValue = document.getElementById("decimal_ip_value"),
             binaryIpValue=document.getElementById("binary_ip_value"), marcsStringValue = document.getElementById("marcs_string_value"),
             ipOfRedValue=document.getElementById("ip_of_red_value");
let button1 = document.getElementById('butt1');
let firstInput = document.getElementById('inputik');

function generateIp() {
    let ipAddress='';
    for(let i = 0; i < 4; i++){
        ipAddress+=Math.floor(Math.random()*256);
        if(i!=3){
            ipAddress+='.';
        }
    }
    return ipAddress;
}
function convertIpToBinary(ip){
    let array = [];
    let strRes = '';
    array = ip.split('.');
    for(let i = 0; i < array.length; i++){
        array[i]=parseInt(array[i]).toString(2);
        array[i]=array[i].padStart(8, "0");
    }
    for(let i = 0; i < array.length; i++){
        strRes+=array[i];
        if(i!=3){
            strRes+='.';
        }
    }
    return strRes;
}
function generateMarcsLine() {
    var marcsNum = document.getElementById('inputik').value;    
    let res = '';
    let marcs=marcsNum;
    
    for(let i = 0; i < marcs; i++){
        res+='1';
        if(res.length==8||res.length==17||res.length==26){
            res+='.';
        }
    }
    for(let i = marcs; i < 32; i++){
        res+='0';
        if(res.length==8||res.length==17||res.length==26){
            res+='.';
        }
    }
    

    return res;
}
function generateIpAdressOfTheRed(ipBin, marcsStr) {
    let res = '';

    for (let i = 0; i < 35; i++){
        if(ipBin.charAt(i)=='1'&&marcsStr.charAt(i)=='1'){
            res+='1';
        } else if(ipBin.charAt(i)=='.'&&marcsStr.charAt(i)=='.'){
            res+='.';
        } else {
            res+='0';
        }
    }

    return res;
}



button1.addEventListener("click", function() {
    let ip = generateIp();
    let ipBin = convertIpToBinary(ip);
    let marcsStr = generateMarcsLine();
    let ipOfRed = generateIpAdressOfTheRed(ipBin, marcsStr);
    decimalIpValue.value = ip;
    binaryIpValue.textContent=ipBin;
    marcsStringValue.textContent=marcsStr;
    ipOfRedValue.textContent=ipOfRed;

    firstInput.addEventListener("input", function() {
        marcsStr=generateMarcsLine();
        marcsStringValue.textContent=marcsStr;
        ipOfRed = generateIpAdressOfTheRed(ipBin, marcsStr);
        ipOfRedValue.textContent=ipOfRed;
    });
    decimalIpValue.addEventListener("input", function(){
        ip=decimalIpValue.value;
        ipBin = convertIpToBinary(ip);
        marcsStr = generateMarcsLine();
        ipOfRed = generateIpAdressOfTheRed(ipBin, marcsStr);
        decimalIpValue.value = ip;
        binaryIpValue.textContent=ipBin;
        marcsStringValue.textContent=marcsStr;
        ipOfRedValue.textContent=ipOfRed;
    });
});



