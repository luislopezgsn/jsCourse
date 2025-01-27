//BMI = mass / (height * height)

let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

BMIMark = markMass / (markHeight * markHeight);
BMIJohn = johnMass / (johnHeight * johnHeight);


console.log('Mark\'\s BMI IS' + BMIMark);
console.log('John\'\s BMI IS' + BMIJohn);

if(BMIMark > BMIJohn){
    console.log('Mark\'\s BMI is higher than John\'\s');
}else{
    console.log('John\'\s BMI is higher than Mark\'\s');
}