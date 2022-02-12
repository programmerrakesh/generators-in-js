function* numbersGen(){
    let i = 0;
    // yield 0;
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    // yield 5;
    while (true) {
        yield i++ ;

    }
}

const gen = numbersGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
document.write(gen.next().value);
document.write(gen.next());