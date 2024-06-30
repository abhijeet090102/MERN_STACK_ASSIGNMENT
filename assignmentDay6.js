/*1. E-commerce Order Processing
Scenario: You're building an e-commerce platform, and you need to process a list of orders to generate a report.*/

/* function processOrders(arrOrder){
    const orderId = arrOrder.map(arrOrder => arrOrder.id); // iterate over all values and return all vlaues
    // console.log(orderId);
    const orderStatus = arrOrder.filter(arrOrder => arrOrder.status === 'delivered'); // iterate over all values but return with some condition
    // console.log(orderStatus);
    const totalShipedMoney = orderStatus.reduce((total,arrOrder) => total+ arrOrder.amount , 0);
    // console.log(totalShipedMoney);

    return {orderId,orderStatus,totalShipedMoney }
}

const orderArr= [
    {id:1,amount:200,status:'pending'},
    {id:2,amount:400,status:'shipped'},
    {id:3,amount:600,status:'delivered'},

]
const result = processOrders(orderArr); */


/*  User Data Analysis
Scenario: You need to analyze user data for a social media platform. */

/* function analyzeUsers(arrUser) {
    const userName = arrUser.map(arrUser => arrUser.name);
    // console.log(userName);
    const userPostLike = arrUser.filter(arrUser => arrUser.posts.like > 100);
    // console.log(userPostLike);
    const userAgeArr = arrUser.map( arrUser => arrUser.age); // used for creating array of age
    const userAvgAge = userAgeArr.reduce((totalVal,ageVal) => totalVal + ageVal , 0)/userAgeArr.length;
    console.log( userAvgAge);
}
const arrUsers = [
    {name : 'abhi', age:22,posts:{title:'Python Dev',like:600}},
    {name : 'sontu', age:24,posts:{title:'Dev',like:100}},
    {name : 'nitesh', age:24,posts:{title:'Web Dev',like:200}},
    {name : 'biswajit', age:26,posts:{title:'Developer',like:240}}
];
const result  = analyzeUsers(arrUsers); */

/* 3. Real-Time Chat Application
Scenario: You're developing a real-time chat application and need to manage messages. */
/*
function manageMessages(arrMessage) {
    const messageCont = arrMessage.map(arrMessage => arrMessage.constent);
    // console.log(messageCont);
    const specifiedUser = arrMessage.filter (arrMessage => arrMessage.sender === 'Alice');
    // console.log(specifiedUser);
    const totalNumMsg = messageCont.reduce((total,currNum) => total + 1 , 0);
    console.log(totalNumMsg);
}
const arrMessage = [
    {constent : 'Hi how you are doing!', sender:'Alice'},
    {constent : 'I am doing good how you are doing!', sender:'Bob'},
    {constent : 'Hi guys how your day doing!', sender:'Nitesh'},
    {constent : 'Quite good ! , and how was the coding going', sender:'Alice'}
];
const results = manageMessages(arrMessage); */

/* 4. Dynamic Form Validation and Submission
Scenario: You are developing a web application where users can register by filling out a form. The form contains fields for username, email, password, and confirm password. You need to validate the form dynamically and submit the data only if all fields are valid. */
