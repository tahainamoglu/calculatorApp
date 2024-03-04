// function topla(x,y){
//     //  let sonuc = x + y
//      return x+ y
// }

// function cikar(x,y){
//     return x-y
// }
// console.log(cikar(topla(10,5),4))

// 

// ******hesap makinesi****//





const input = document.querySelector('.calculate-input')
const item = document.querySelector('.calculate-item')
const equal = document.querySelector('.equal')

let ilkDeger = null
let display = '0'
let bekleyenDeger = false
let operator = null


function updateEkran() {
    input.value = display

}
updateEkran()

item.addEventListener('click', function (e){
    const element = e.target
    if (!element.matches('button')) return;
    if (element.classList.contains('clear')) {
        clear()
        updateEkran()
        return
    }
    if(element.classList.contains('decimal')){
        fordecimal();
        updateEkran()
        return
    }
    if(element.classList.contains('operator')){
        forOperator(element.value);
        updateEkran()
        return
    }
    if(element.classList.contains('delete')){
        deleteBtn()
        updateEkran()
        return
    }

    
    inputNumber(element.value)
    updateEkran()
    return
})  
function deleteBtn(){ 
            display = input.value.slice(0,-1)
            // if(ilkDeger !=null){
            //     ilkDeger = parseFloat(ilkDeger.toString().slice(0, -1))
            // } 
            if(display.toString().endsWith('.')){
                display = display.toString().slice(0,-1)
            }
            
}
function forOperator(element){
    let ikinciDeger = parseFloat(display)
    if(operator && bekleyenDeger){
        operator = element
        return
    }
    if(ilkDeger === null)
    { ilkDeger = parseFloat(display)

    }else if(operator){
        const sonuc = calculate(ilkDeger,ikinciDeger,operator)
        display= sonuc
        ilkDeger = display
    }
    operator = element
    bekleyenDeger=true
 }
 
 function calculate(ilkDeger,ikinciDeger,operator){
    if(operator === '+' ) {
        return ilkDeger + ikinciDeger
    }else if(operator === '-'){
    return ilkDeger - ikinciDeger}
    else if(operator === '*'){
        return ilkDeger * ikinciDeger
    } else if(operator === '/'){
        return ilkDeger / ikinciDeger
    }
    return ilkDeger
 }

   



    function inputNumber(num){
        if(bekleyenDeger){
            display = num
            bekleyenDeger = false
        } else {
           display = display === '0'  ? num : display + num
        }
    }


 function fordecimal(){
    if(!display.includes('.')){
        display += '.'
    }
}
   

    function clear(){
     ilkDeger = null
     display = '0'
     bekleyenDeger = false
     operator = null
    }