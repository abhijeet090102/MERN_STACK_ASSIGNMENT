// 1.
// class personDe{
//     constructor(name,age,gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     personShow(){
//         return `Person name :${this.name} age :${this.age} gender : ${this.gender}`;
//     }
// }
// let p1 = new personDe('abhi',22,'M');
// let p2 = new personDe('sontu',24,'M');
// let p3 = new personDe('priyanshu',22,'M');

// console.log(p1.personShow());
// console.log(p2.personShow());
// console.log(p3.personShow());

// 2. 
// class Student extends personDe{
//     constructor(name,stID){
//         super(name);
//         this.stID = stID;
//     }
//     show(){
//         return `The student ${this.name} is studing`;

//     }
// }
// let st = new Student('Abhi',6894);
// console.log(st.show());
// console.log(st.personShow());

// 3. Map Operations:

// let map = new Map();
// map.set("Student name","abhi");
// map.set("Score","409");
// console.log(map);
// map.set("Student name","priyanshu");
// map.set("Score","450");
// console.log(map);


// function add(name,score){
//     let map = new Map();
//     map.set("Student name",`${name}`);
//     map.set("Score",`${score}`);
//     console.log(map);
//     function remove(rem){
//         map.delete(rem);
//         return map;
//     }
//     function get(){
//         return map.get("Score");
//     }
//     return {map , remove,get}; // returning the inner functions to use code readibility and acessibility  
// }
// const value = add('abhijeet',460); // using add method store a object value in case of returnning 
// // console.log(value.remove("Score"));
// // console.log(value);
// console.log(value.get());

// //4. Set Operations:
// const myCourse = new Set();
// function add(name) {
//     myCourse.add(name);
//     return myCourse;
// }
// function remove(value){
//     myCourse.delete(value);
//     return myCourse;
// }
// function checkCourse(test){
//     return `${test} exists ${myCourse.has(test)}`;

// }
// console.log(add('MCA'));
// console.log(add('B.sc Physics'));
// console.log(checkCourse("MCA"));
// console.log(remove('B.sc Physics'));

// 5.Advanced Class Features:
// class books {
//     constructor(title,author,year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     }
// }
// class Library{
//     constructor(name){
//         this.name = name;
//         this.books = [];
//     }
//     addBooks(title,author,year){
//        const book = new books(title,author,year) ;
//        this.books.push(book);
//     }
//     remBooks(nameTitle){
//         this.books = this.books.filter(book => book.title !== nameTitle);
//     }
//     findBooks(nameFind){
//         return this.books.find(book => book.title === nameFind);
//     }

// }
// const myLib = new Library("My own Library ASTM");
// myLib.addBooks('Gita','gita press',1988);
// myLib.addBooks('Kung fu','japan',1984);
// console.log(myLib);
// // myLib.remBooks('Kung fu');
// console.log(myLib.findBooks('Kung fu'));

// 6.Object Methods:
// let calculator = {
//     add(a,m){
//         return a+m;
//     },
//     subtra(a,b){
//         return a -b;
//     },
//     multi(a,m){
//         return a*m;
//     },
//     divide(a,b){
//         let val = b > 0 ?  a / b : `${b} can't be devide zero to ${a}`;
//         return val;
//     }
// };
// // console.log(calculator.divide(4,9).toFixed(2));
// console.log(calculator.add(4,8));
// console.log(calculator.subtra(4,8));
// console.log(calculator.multi(4,8));

// 7. Custom Error Classes:
// class ValidationError extends Error{
//     constructor(message){
//         super(message);
//         this.name = "ValidationError";
//     }
// }
// function validateUser(userObj){
//         if(typeof userObj.name !== 'string' || userObj.name.trim() === ""){
//             throw new ValidationError("Invalid name Please provide proper non empty string");
//         }
//         if (typeof userObj.age !== 'number' || userObj.age <= 0){
//             throw new ValidationError("Invalid age. Age must be greater than 0 ");
//         }
//         return true;
// }
// const user = {name:'abhi',age:0};
// try {
//     validateUser(user);
//     console.log("Valid user ");
// } catch (error) {
//     console.log(error.name,error.message);
// }

// 8. Advanced Object Methods:
// class book {
//     constructor(title, author, year) {
//         this.title = title,
//         this.author = author,
//         this.year = year;
//     }
//     getTitle(){
//         return `Book title ${this.title}`;
//     }
//     getAuthor(){
//         return `Book author ${this.author}`;
//     }
//     getYear(){
//         return `Book year ${this.year}`;
//     }

//     setTitle(titleNew){
//         this.title = titleNew;
//     }
//     setAuthor(authorNew){
//         this.author = authorNew;
//     }
//     setYear(yearNew){
//         this.year = yearNew;
//     }
//     getSummary(){
//         return `The book title ${this.title} author is ${this.author} publish year ${this.year}`;
//     }
// }
// const b1 = new book('gita','gitapress',1988);
// console.log(b1);
// b1.setAuthor("Gita press");
// console.log(b1);

// 9. Symbols and Private Methods:
// class BankAccount{
//     constructor(accountNumber,balance,accountHolder){
//         this.accountNumber = accountNumber,
//         this.balance = balance,
//         this.accountHolder = accountHolder;
//     }
//     deposit(ammount){
//         this.balance = ammount > 0 ? this.balance+ammount : "Insufficient money";
//         return `${ammount} Deposited !`
//     }
//     withdraw(ammount){
//         this.balance = this.balance > ammount ? this.balance - ammount : "Insufficient money in bank account";
//         return `${ammount} Withdrawn !`
//     }
// }

// const p1 = new BankAccount(495069,500,'abhi');
// // console.log(p1);
// console.log(p1.deposit(500));
// console.log(p1);
// console.log(p1.withdraw(200));
// console.log(p1);

// 10.Creating Custom Error Classes:
// class InvalidAgeError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }
// function checkAge(age){
//     if (age < 0 || age >120){
//         throw new InvalidAgeError("Age is invalid entered !");
//     }
//     return true;
// }
// try {
//     checkAge(140);
//     console.lo("Valid age !");
    
// } catch (error) {
//     console.log(error.name,error.message);
// }