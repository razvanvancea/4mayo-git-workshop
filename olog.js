console.log("js")
// structuri repetitive
for (let i=0; i<100; i++){
    console.log("js"+i)
}


//JS loops
for (let i=0; i<100; i++){
    console.log("js"+i)
    if (i=2){
        break;
    }
}

for (let i=0; i<5; i++){
    if(i=2)
    continue; //case where is passing over the value of compare and continue counting
}


let x=0;
while (x<50){
    console.log("sumper")
    x++;
}


let y=0;
do {
    console.log(y);
    y++;
} while(y<0) //do is running even if the while condition is false and display a value/message