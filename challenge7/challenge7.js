//bmi calculator 3.0 now object oriented
const mark = { fullName: 'Mark Miller', mass: 78, height: 1.69, 
    calcBMI: function () { 
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI; } 
    };
const john = { fullName: 'John Smith', mass: 92, height: 1.95, 
    calcBMI: function () { 
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI; } 
    };

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`);
} else if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`);
}