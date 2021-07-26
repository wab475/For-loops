for (let i = 1; i <= 10; i++) {
   const result = i * 9;

   console.log(`${i} * ${9} = ${result}`);

}



//Outer loop
for (let number = 1; number <= 10; number++) {
    //inner loop
    for(let number2 =1; number2<=10;number2++){

    const result = number * number2;    
    console.log(`${number} * ${number2} = ${result}`);
}
}