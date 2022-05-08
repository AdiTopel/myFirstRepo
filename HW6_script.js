const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const count = document.getElementById("count")



function add(){
    count.innerHTML++   
}

function substract(){
    count.innerHTML--
}


plus.addEventListener('click', add)
minus.addEventListener('click', substract)











// function getValue(){
//     var selectedValue = document.getElementById("list").value;
//     console.log(getValue);
// }





// function Plus_Minus_Function(){
//     var optionsValue = document.getElementById("list").value;
//     if (optionsValue==1){
//         function add(){
//             count.innerHTML++
//         }

//         function substract(){
//             count.innerHTML--
//         }
        
//         plus.addEventListener('click', add)
//         minus.addEventListener('click', substract)
//     }
        
//     else if (optionsValue==5){
//          function add5(){
//              count.innerHTML+5
//          }

//          function substract5(){
//              count.innerHTML-5
//         }
//         plus.addEventListener('click', add5)
//         minus.addEventListener('click', substract5)
//      }
//  }

// function add(){
//     count.innerHTML++   
// }

// function substract(){
//     count.innerHTML--
// }


// plus.addEventListener('click', add)
// minus.addEventListener('click', substract)












// while (num == 5){
//     let counter = 1
//     function add5(){
//         count.innerHTML = +counter+4
//         counter+5
//         return counter
//     }

   
    
//     function substract5(){
//         count.innerHTML = -counter-4
//         counter-5
//         return counter
//     }   
    
        
// }
// plus.addEventListener('click', add5)
// minus.addEventListener('click', substract5)


// if ("num" === 5){
//     function add(){
//         count.innerHTML = +counter+4
//         counter+5
//     }
    
//     function substract(){
//         count.innerHTML = -counter-4
//         counter-5
//     }
// }
//plus.addEventListener('click', add5)
//minus.addEventListener('click', substract5)
