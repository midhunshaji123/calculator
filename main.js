// dislay in calculator screen
function dislayContent(content){
    result.value += content
    
}
// clear data
function clearCalcScreen(){
    result.value = ""
}
// backspace
function removeCalc(){
    result.value = result.value.slice(0,-1)
}
// Evaluation
function calcOut(){
    result.value = eval(result.value)
}