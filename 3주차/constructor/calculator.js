function calculator (a,b){
    this.a = a;
    this.b = b;

    this.sum = (a,b) => {
        return this.a + this.b
    }

    this.mul = (a,b) => {
        return this.a * this.b
    }

    this.sub = (a,b) => {
        return this.a - this.b
    }

    this.div = (a,b) => {
        return this.a / this.b
    }
}

let math = new calculator(2,3);
console.log(math.sum())