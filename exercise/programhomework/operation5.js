function grade(a){
    if(a>=90) console.log("A");
    else if(80<=a&&a<90) console.log("B");
    else if(70<=a&&a<80) console.log("C");
    else if(60<=a&&a<70) console.log("D");
    else if(0<=a&&a<60) console.log("F");
    else console.log("請輸入正確分數");
}
grade(85);