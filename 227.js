// var calculate = function(s) {
//     let result = 0;
//     let sonlar = s.match(/\d+/g);
//     let amallar = s.match(/[-|/|+/*]/g);
//     let j = sonlar.length - 1;
//     for(let i = amallar.length; i < ; i++){
//         // switch(amallar[i]){
//         //     case '*':
//         //         let res = sonlar[j] + sonlar[j]
//         //         result += res;
//         //         sonlar[j-1]=res
//         //         break;
//         //     case '/':
//         //         let res = sonlar[j] + sonlar[j]
//         //         result += res;
//         //         sonlar[j-1]=res
//         //         break;
//         //     case '+':
//         //         let res = sonlar[j] + sonlar[j]
//         //         result += res;
//         //         sonlar[j-1]=res
//         //         break;
//         //     case '-':
//         //         let res = sonlar[j] + sonlar[j]
//         //         result += res;
//         //         sonlar[j-1]=res
//         //         break;
//         // }
//         // j--;
//     }
//     return result
    
//     let stack = [];
//     for(let i = 0; i < s.length; i++){
//         if(isNaN(s[i])){
//             if(s[i] === '*' === '/'){
//                 let last_num = stack.pop();
//                 console.log(last_num);
//                 if(s[i] === '/'){
//                     stack.push(Math.floor(last_num / +s[i+1]));
//                 }else{
//                     stack.push(Math.floor(last_num * +s[i+1]));
                    
//                 }
//             }else{
//                 stack.push(s[i]);
//             }
//         }
//         let result = 0;
//         while(stack.length > 0){
//             console.log(stack.pop());
//         }
//         return result;
//     }
// };



// return {number}
//  */


var calculate = function(s) {
    s = s.replaceAll(/\s/g,'');
    console.log(s);
    s = s.match(/\d+[+|-|/|*]/g);
    console.log(s);
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(isNaN(s[i])){
            if(s[i] === '*' === '/'){
                let last_num = stack.pop();
                console.log(last_num);
                if(s[i] === '/'){
                    stack.push(Math.floor(last_num / +s[i+1]));
                }else{
                    stack.push(Math.floor(last_num * +s[i+1]));
                    
                }
            }else{
                stack.push(s[i]);
            }
        }
        let result = 0;
        while(stack.length > 0){
            console.log(stack.pop());
        }
        return result;
    }
};