//sardhamaam
// callbackhell
function getUser(userId, callback) {
    setTimeout(() => {
        console.log("Fetched user from DB");
        callback({ userId: userId, username: "JohnDoe" });
    }, 1000);
}

function getPosts(username, callback) {
    setTimeout(() => {
        console.log("Fetched posts for user");
        callback(["post1", "post2", "post3"]);
    }, 1000);
}

function getComments(post, callback) {
    setTimeout(() => {
        console.log("Fetched comments for post");
        callback(["comment1", "comment2"]);
    }, 1000);
}

// Callback Hell Example
getUser(1, (user) => {
    getPosts(user.username, (posts) => {
        getComments(posts[0], (comments) => {
            console.log("Comments:", comments);
        });
    });
});

// promise chain
function getData(dataId){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data",dataId);
       resolve(dataId);
        },2000);
});
   
    }
 getData(1).then((res)=>{
    return getData(2);})
   .then((res)=>{
    return getData(3);
   }).then((res)=>{
    console.log("sucess");
   });
  

//promise chain
let promise = new Promise((resolve,reject)=>{
    console.log("i am a promises");
    // reject("some error occurred");
    // resolve("i am a resolved promise");
});
function asyncfun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("sucess");
        },4000);
    })
}
function asyncfun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("sucess");
        },4000);
    })
} console.log("fetching data1 .....");
asyncfun1().then((res)=>{
    console.log("fetching data2.....");
    asyncfun2().then((res)=>{});
});

// async await
// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//    await api(); //1st
//    await api(); //2st


// }
// getWeatherData();

// async await
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
           resolve(dataId);
            },2000);
    });
       
      }
  async function getAllData() {
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data2...");
    await getData(1);
  }  
  getAllData();

// use IIFE: immediately invoked function expression 
//iife is  a function that called immediately as soon as it is defined.
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
           resolve(dataId);
            },2000);
    });
       
      }
(async function () {
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data2...");
    await getData(1);
  } )(); 
