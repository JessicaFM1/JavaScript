const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let operationSuccessful = true;
        if(operationSuccessful){
            resolve("La operaciòn fue exitosa!");
        }else{
            reject("Fallò la operaciòn");
        }
    },2000);
});

promise
    .then((successMessage) => {
        console.log(successMessage);
    })
    .catch((errorMessage)=>{
        console.log(errorMessage);
    });