#! /usr/bin/env node
import inquirer from "inquirer"

let questionBank = ["Who was the first Women Prime Minister of Pakistan?","Who is known as the Mother of the Nation of Pakistan?","The national sport of Pakistan is?","Which animal is the national animal of Pakistan?","Which tree is the national tree of Pakistan?","Which bird is the national bird of Pakistan?"];
let score = 0;


let que1 = await inquirer.prompt([
    {
        name: "ques1",
        type: "list",
        message: questionBank[0],
        choices: ["Benazir Bhutto","Sheikh Hasina Wazzed","Hina Rabbina Khar","None of These"],
        filter: function(val: string) {
            if (val === 'Benazir Bhutto') {
              score++;
            }
            return val;
          }
    }
])
if(que1.ques1  == "Benazir Bhutto"){
    console.log("Correct! Benazir Bhutto is the First Woman Prime Minister of Pakistan");
    // score = 10;
    console.log("Score: " + score);
}else{
    console.log("Wrong Answere")
}





let que2 = await inquirer.prompt([
    {
        name: "ques2",
        type: "list",
        message: questionBank[1],
        choices: ["Benazir Bhutto","Faitma Jinnah","Faitma Sughra","None of These"],
        filter: function(val: string) {
            if (val === "Faitma Jinnah") {
              score++;
            }
            return val;
          }
    }
]);
if(que2.ques2 == "Faitma Jinnah"){
    console.log("Correct! Faitma Jinnah is the mother of the nation of Pakistan");
    // score = 10;
    console.log("Score: " + score);
}else{
    console.log("Wrong Answere")
}





let que3 = await inquirer.prompt([
    {
        name: "ques3",
        type: "list",
        message: questionBank[2],
        choices: ["Cricket","Hockey","Squash","Football"],
        filter: function(val: string) {
            if (val === "Hockey") {
              score++;
            }
            return val;
          }
    }
]);
if(que3.ques3 == "Hockey"){
    console.log("Correct! Hockey is the national sports game of Pakistan");
    // score = 10;
    console.log("Score: " + score);
}else{
    console.log("Wrong Answere")
}





let que4 = await inquirer.prompt([
    {
        name: "ques4",
        type: "list",
        message: questionBank[3],
        choices: ["Tiger","Lion","Markhor","Panda"],
        filter: function(val: string) {
            if (val === "Markhor") {
              score++;
            }
            return val;
          }
    }
]);
if(que4.ques4 == "Markhor"){
    console.log("Correct! Markhor is the national animal of Pakistan");
    // score = 10;
    console.log("Score: " + score);
}else{
    console.log("Wrong Answere")
}






let que5 = await inquirer.prompt([
    {
        name: "ques5",
        type: "list",
        message: questionBank[4],
        choices: ["Neem","Sheeshum","Diyodar","Date Palm"],
        filter: function(val: string) {
            if (val === "Diyodar") {
              score++;
            }
            return val;
          }
    }
]);
if(que5.ques5 == "Diyodar"){
    console.log("Correct! Diyodar is the national tree of Pakistan")
    // score = 10;
    console.log("Score: " + score);
}else{
    console.log("Wrong Answere")
}





let que6 = await inquirer.prompt([
    {
        name: "ques6",
        type: "list",
        message: questionBank[5],
        choices: ["Cikor","Eagle","Pigeon","Parrot"],
        filter: function(val: string) {
            if (val === "Cikor") {
              score++;
            }
            return val;
          }
    }
]);
if(que6.ques6 == "Cikor"){
    console.log("Correct! Cikor is the national bird of Pakistan");
    // score = 10;
    console.log("Score: " + score);
}else{
    console.log("Wrong Answere")
}

console.log(`Your Final Score is ${score}`)













// Bilkul! Ek basic quiz application banane ke liye, aap ek simple CLI interface ka istemal kar sakte hain jisme users ko kuch questions puche jate hain aur unke jawabon ka score calculate kiya jata hai. Yahan kuch steps hain jo aap follow kar sakte hain:

// 1. *Question Data Structure*: Pehle, aapko har question ke liye ek data structure banani hogi. Har question ke saath, uska text aur sahi answer shamil hona chahiye.

// 2. *Question Bank*: Ek array mein aap apne saare questions ko store kar sakte hain.

// 3. *User Interface*: CLI interface banayein jisme user se questions puche jayein aur unke jawabon ko record kiya jayein. Har question ke saath multiple choice options dijiye.

// 4. *Score Calculation*: Har sahi jawab ke liye user ko points milein aur galat jawab par points na milein. Score user ke saath track kiya jaye.

// 5. *End Result*: Jab saare questions khatam ho jayein, final score ko user ko display kiya jaye aur unhein unka performance bataya jaye.

// Aap quiz mein kisi bhi subject ya topic par questions include kar sakte hain jaise ki general knowledge, programming concepts, history, ya kuch aur jo aapka interest ho. Is project mein aap TypeScript ka istemal karke basic input/output, arrays, loops, aur conditionals ka istemal kar sakte hain.







