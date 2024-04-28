// const error = new Error("something went wrong");
// console.log(error);

// class CustomError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = this.constructor.name;
//     }
// }

// throw new CustomError('error hai bhut khararnak');

class ValidationError extends Error {
    constructor(message, statusCode) {
        super(message); // (1)
        this.name = 'ValidationError'; // (2)
        this.statusCode = statusCode;
    }
}

function test() {
    throw new ValidationError('Maha badbadi ho gyai hai baba', 401);
}

try {
    test();
} catch (err) {
    console.log(err);
    /*
    console.log('message*****', err.message); // Whoops!
    console.log('name****', err.name); // ValidationError
    console.log('stack****', err.stack); // a list of nested calls with line numbers for each
    */
}
