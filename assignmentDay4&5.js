// 1. Using Promises and try...catch
// function fetchData(api){
//     // const api = '';
//     fetch(api).then(respo => {
//         if(!respo.ok){
//             console.log("Error Occured !");
//             throw new Error("Error occured during fetching !");
//         }
//         return respo.json();
//     }).then((succ) => {
//         console.log(succ);
//     })
//     .catch(error =>{
//         console.log(`Error fetching data :${error}`);
//     })
// }

// fetchData("https://jsonplaceholder.typicode.com/users");

// 2. Advanced Closure with Configuration
// function createCounter (initialVal ){
//     let current = initialVal;
//     function increment(step){
//         current = current + step;
//     }
//     function decrement (step){
//         current = current - step;
//     }
//     function reset (){
//         current = initialVal;
//     }
//     function getValue(){
//         return `The current value is ${current}`;
//     }
//     return {increment,decrement,reset,getValue};
// }
// const count = createCounter(10);
// count.increment(5);
// console.log(count.getValue());

//3.Using bind Method with Event Listeners
// class User {
//     constructor(name){
//         this.name = name;
//         this.greet = this.greet.bind(this);
//     }
//     greet(){
//         return `Welcome to the coding world ${this.name} `;
//     }
// }

// const u1 = new User('abhi');
// console.log(u1.greet());

//4. Combining Promises and Closures
// function createDataFetcher(api) {
//     let fetchedData = null;
//     async function fetchData(){
//         try{
//             const respo = await fetch(api);
//             if (!respo.ok) {
//                 throw new Error(`Error to fetch data ${respo.status}`);
//             }
//             return respo.json();
//         }
//         catch(error){
//             throw(error);
//         }
//     }
//     function getData() {
//         if (fetchedData) {
//             return fetchedData;
//         }
        
//     }
//     return {fetchData, getData };
// }

// const dataFecher = createDataFetcher("https://jsonplaceholder.typicode.com/users");
// dataFecher.fetchData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(`Error ${error.message}`);
//     })


// function createDataFetcher() {
//     let data = null; // Closure variable to store fetched data

//     async function fetchData(url) {
//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error(`Failed to fetch data: ${response.status}`);
//             }
//             data = await response.json();
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     }

//     function getData() {
//         console.table(data);
//         return data;
//     }

//     return {
//         fetchData,
//         getData,
//     };
// }

// const dataFecher = createDataFetcher();
// dataFecher.fetchData("https://jsonplaceholder.typicode.com/users")
//     .then(() => {
//         const fetchedData = dataFecher.getData();
//         console.log(fetchedData);
//     })
//     .catch((error) => {
//         console.log(`Error ${error.message}`);
//     })

// 5. Handling Asynchronous Operations with Error Handling
function fetchDataWithRetry(url ,  maxRetryCount){
    let retry = 0;
    async function fetchData(){
        try {
            const respon = await fetch(url);
            if (!respon.ok){
                throw new Error(`Error fetching data :${respon.status}`);
            }
            return respon.json();
        }
        catch(error){
            if (retry < maxRetryCount){
                retry ++;
                console.log(`Retrying attem ${retry}`);
                return fetchData();
            }else{
                throw error;
            }
        }
    }
    return fetchData();
}
const maxRetry = 4;
const api = "https://jsonplaceholder.typicode.com/users";
fetchDataWithRetry(api,maxRetry).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})