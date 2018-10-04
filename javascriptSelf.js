
var allocationBox = [
  
    {type:"Banana",origin:"USA",price:10},
    {type:"Apple",origin:"China",price:15},
    {type:"Orange",origin:"Malaysia",price:20},
    {type:"Apple",origin:"USA",price:20},
    {type:"Banana",origin:"Indonesia",price:15},
    {type:"Orange",origin:"China",price:12},
    {type:"Apple",origin:"Japan",price:14}
    ];
    
    var bananaBox = [];
    var appleBox = [];
    var orangeBox = [];
    
    for (i=0;i<allocationBox.length;i){
    
    var a;
    a=allocationBox.pop()
    
    if(a.type==="Orange"){
    orangeBox.push(a);
    }else if(a.type==="Banana"){
    bananaBox.push(a);
    }else{
    appleBox.push(a);
    }
    }
   
    console.log("The banana Box contains: ",bananaBox);
    console.log("The apple Box contains:",appleBox);
    console.log("The orange Box contains:",orangeBox);