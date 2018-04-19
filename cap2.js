//Looping a triangle
let hashtag = "";
for (i = 0; i < 6; i++) {
    hashtag += "#";
    console.log(hashtag);
}

//FizzBuzz
for (i = 1; i <= 100; i++) {
    if((i % 3 === 0) && (i % 5 === 0)){
        console.log("FizzBuzz");
    }     
}

//Chess board
const size = Number(prompt("Qual é o tamanho do tabuleiro?"));
for(let i = 0; i < size; i++) {
    if (i % 2) {
        console.log("# ".repeat(size));
    } else {
        console.log(" #".repeat(size));
    }
}
