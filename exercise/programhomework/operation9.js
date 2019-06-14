function countPrime(a,b){
var n=0,count=0;
    for(var i=a;i<=b;i++)
    {
        count=0;
        for(var p=2;p<i;p++)
        {
            if(i%p==0)
            {
                count=1;
            }
        } 
        if(count==0) n++;
    
    }
    console.log("有%d個質數",n);
} 
countPrime(3,7);