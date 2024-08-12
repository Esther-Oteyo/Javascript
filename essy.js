const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the score: ', (input) => {
    let percentage = parseInt(input);

    if (isNaN(percentage) || percentage > 100 || percentage < 0){
        console.log('Error: Invalid score');
    }
    else if (percentage >= 90){
        console.log('You scored an A');
    }
    else if (percentage >= 80){
        console.log('You scored a B');
    }
    else if (percentage >= 70){
        console.log('You scored a C');
    }
    else if (percentage >= 60){
        console.log('You scored a D');
    }
    else {
        console.log('You scored an E');
    }

    rl.close();
});
      