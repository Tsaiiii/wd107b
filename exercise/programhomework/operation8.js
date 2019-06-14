function isPrime(a){
    var count=false;
    for(var i=a;i>1;i--){
        if(a%i===0){
            count=true;
            break;
        }
    }if(count) console.log("%d為質數",a);
    else console.log("不是質數");

} 
isPrime(17);