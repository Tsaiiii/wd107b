function commonFactor(a,b){
    var num ,show=true;
    if(a>b){
        num=a;
    }else num=b;
    for(var i=num;i>1;i--){
        if(a%i==0&&b%i==0) {
            show=false;
            console.log("%d是%d與%d的公因數",i,a,b);
            break;
        }    
    }if(show)console.log("沒有公因數");

    
} 
commonFactor(12,15);