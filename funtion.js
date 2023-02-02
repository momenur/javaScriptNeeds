function minNumber(numbers){
    let min = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        if(min > numbers[i]){
            min = numbers[i];
        }
    }
    return min;
}
const elements = [10, 20, 30, 15, 5];
var result = minNumber(elements);
console.log(result);