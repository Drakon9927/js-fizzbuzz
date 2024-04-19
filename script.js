

for (i = 1; i <= 10000; i++) {
    
    let output = i;

    if (i % 3 === 0 && i % 5 === 0) {
        output = 'fizzbuzz';
        console.log('fizzbuzz');
    } else if (i % 3 === 0) {
        output = 'fizz';
        console.log('fizz');
    } else if (i % 5 === 0) {
        output = 'buzz';
        console.log('buzz');
    } else {
        console.log(i);
    }
}

// Bonus 1 Sabato
// Bonus 2 Domenica 