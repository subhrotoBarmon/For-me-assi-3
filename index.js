//call function section================================
function historyFunction(id){
   let callContainer= document.getElementById(id);
    
      let div=document.createElement("div")
      let convertData=history[history.length-1]
      div.innerHTML=`
      <div class="history bg-[#f7f3f3] rounded-2xl h-[60px] flex justify-between items-center mt-2">
    <div>
        <p class="font-bold text-[20px]">${convertData.name}</p>
        <p>${convertData.Number}</p>
        </div>
        <div>
        <p>${convertData.date}</p>
    </div>
   </div>
       `
      callContainer.appendChild(div)
};
let history=[];

// copy function==============================
let num=0;
function copyIncrease(id){
   num++;
   let totalCopy=document.getElementById(id).innerText=num +" "+"Copy";
   alert("Copy done.");
   return totalCopy;
};

// heart function---================================>>.
let heart=0;
function heartIncrease(id){
   heart++;
   let totalHeart=document.getElementById(id).innerText=heart;
   return totalHeart;
}
// credit reduce============================>...
let credit=100;
function creditReduce(id){
   credit=credit-20;
   let avaiableCredit=document.getElementById(id).innerText=credit;
   let int=parseInt(avaiableCredit);
   if(int<0){
      credit=0;
   }
   return int;
}

// clear section====================

document.getElementById("clear-btn").addEventListener("click",function(){
   document.getElementById("history-ontainer").innerHTML="";
})

// N - section -=======================================================..>>

document.getElementById("heart-n-btn").addEventListener("click",function(){
  heartIncrease("heart-num")
});

document.getElementById("btn-n").addEventListener("click",function(){
     copyIncrease("copyId")
});


// }
document.getElementById("N-call").addEventListener("click",function(){
   let data={
   name:"N",
   Number:9,
   date:new Date().toLocaleString()
   }
    history.push(data);
    console.log(history);
    
    historyFunction("history-ontainer")
   creditReduce("reduce-credit")
    
   });


 
// M-section
document.getElementById("heart-m-btn").addEventListener("click",function(){
  heartIncrease("heart-num")
});

document.getElementById("m-btn").addEventListener("click",function(){
copyIncrease("copyId")

});
document.getElementById("m-call").addEventListener("click",function(){
   let data={
   name:"M",
   Number:10,
   date:new Date().toLocaleString()
   }
    history.push(data);
    console.log(history);
    
    historyFunction("history-ontainer")
    creditReduce("reduce-credit")
   });

   // O-------------------------------------OOOOOOO-----------------------
document.getElementById("heart-o-btn").addEventListener("click",function(){
  heartIncrease("heart-num")
});


document.getElementById("o-btn").addEventListener("click",function(){
copyIncrease("copyId")

});
document.getElementById("o-call").addEventListener("click",function(){
   let data={
   name:"O",
   Number:11,
   date:new Date().toLocaleString()
   }
    history.push(data);
    console.log(history);
    
    historyFunction("history-ontainer")
    creditReduce("reduce-credit")
   });

   // ++++++++++++++++++++++++++QQQQQQ-----------------
   document.getElementById("heart-q-btn").addEventListener("click",function(){
  heartIncrease("heart-num")
});

document.getElementById("q-btn").addEventListener("click",function(){
   
copyIncrease("copyId")

   });
document.getElementById("q-call").addEventListener("click",function(){
   let data={
   name:"Q",
   Number:12,
   date:new Date().toLocaleString()
   }
    history.push(data);
    console.log(history);
    
    historyFunction("history-ontainer")
   creditReduce("reduce-credit")
   });

   //  RRRRRRRRRRRRRRRRRRRRRRRRR-----------------------------------------
   document.getElementById("heart-r-btn").addEventListener("click",function(){
  heartIncrease("heart-num")
});

document.getElementById("r-btn").addEventListener("click",function(){
copyIncrease("copyId")

});
document.getElementById("r-call").addEventListener("click",function(){
   let data={
   name:"R",
   Number:13,
   date:new Date().toLocaleString()
   }
    history.push(data);
    console.log(history);
    
    historyFunction("history-ontainer")
    creditReduce("reduce-credit")
   });

   // =====================A--------------------------------=============
   document.getElementById("heart-a-btn").addEventListener("click",function(){
  heartIncrease("heart-num")
});

document.getElementById("a-btn").addEventListener("click",function(){
copyIncrease("copyId")
});

document.getElementById("a-call").addEventListener("click",function(){
   let data={
   name:"A",
   Number:14,
   date:new Date().toLocaleString()
   }
    history.push(data);
    console.log(history);
    
    historyFunction("history-ontainer")
    creditReduce("reduce-credit")
   });
   // ============================BBBBBBBBBB----------------------------------
   document.getElementById("heart-b-btn").addEventListener("click",function(){
  heartIncrease("heart-num")
});


   document.getElementById("b-btn").addEventListener("click",function(){
copyIncrease("copyId")
});
document.getElementById("b-call").addEventListener("click",function(){
   let data={
   name:"B",
   Number:15,
   date:new Date().toLocaleString()
   }
    history.push(data);
    console.log(history);
    
    historyFunction("history-ontainer")
    creditReduce("reduce-credit")
   });

   // +++++++++++++++++Ccccccccccccccccccccc==============
document.getElementById("heart-c-btn").addEventListener("click",function(){
  heartIncrease("heart-num")
});

   document.getElementById("c-btn").addEventListener("click",function(){
copyIncrease("copyId")
});

document.getElementById("c-call").addEventListener("click",function(){
   let data={
   name:"C",
   Number:16,
   date:new Date().toLocaleString()
   }
    history.push(data);
    console.log(history);
    
    historyFunction("history-ontainer")
    creditReduce("reduce-credit")
   });

   // ------------DDDDDDDDDDDDDDDDDD===============
   document.getElementById("heart-d-btn").addEventListener("click",function(){
  heartIncrease("heart-num")
});

   document.getElementById("d-btn").addEventListener("click",function(){
   
copyIncrease("copyId")
});

document.getElementById("d-call").addEventListener("click",function(){
   let data={
   name:"D",
   Number:19,
   date:new Date().toLocaleString()
   }
    history.push(data);
    console.log(history);
    
    historyFunction("history-ontainer")
    creditReduce("reduce-credit")
   })

