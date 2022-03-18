/*
setTimeout(()=>{
    let counter = 1;
    console.log(counter,'I get up.');
    setTimeout(()=>{
        counter++
        console.log(counter,'I brush my teeth, have a shower and get dressed.');
        setTimeout(()=>{
            counter++
            console.log(counter,'I have breakfast.');
            setTimeout(()=>{
                counter++
                console.log(counter,' I have free time.');
                setTimeout(()=>{
                    counter++
                    console.log(counter,'I go to my guitar lesson.');
                    setTimeout(()=>{
                        counter++
                        console.log(counter,'I sit down to code');
                        setTimeout(()=>{
                            counter++
                            console.log(counter,' I have dinner.');
                            setTimeout(()=>{
                                counter++
                                console.log(counter,'I go for a walk');
                                setTimeout(()=>{
                                    counter++
                                    console.log(counter,'I do my homework');
                                    setTimeout(()=>{
                                        counter++
                                        console.log(counter,'I go to bed');
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)

            },1000)
        },1000)
    },1000)

},1000)


*/


let promise = new Promise((resolve, reject) => {
    let counter = 1;
    setTimeout(()=>{
        console.log(counter,'I get up.')
        resolve(counter);
    },1000)

});


promise
    .then(counter=>{
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            counter++
            console.log(counter,'I brush my teeth, have a shower and get dressed.')
            resolve(counter);
        },1000)
    }))
})

    .then((counter)=>{
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                counter++
                console.log(counter,'I have breakfast.')
                resolve(counter);
            },1000)
        })
    })
    .then((counter)=>{
        return new Promise((resolve, reject) =>{
           setTimeout(()=>{
               counter++
               console.log(counter,'I have free time.')
               resolve(counter);
           },1000)
        })
    })

    .then((counter)=>{
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                counter++
                console.log(counter,'I go to my guitar lesson.')
                resolve(counter);
            },1000)
        })
    })
    .then((counter)=>{
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                counter++
                console.log(counter,'I sit down to code')
                resolve(counter);
            },1000)
        })
    })
    .then((counter => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                counter++
                console.log(counter,'I have dinner.')
                resolve(counter);
            },1000)
        })
    }))
    .then((counter => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                counter++
                console.log(counter,'I go for a walk.')
                resolve(counter);
            },1000)
        })
    }))
    .then((counter => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                counter++
                console.log(counter,'I do my homework')
                resolve(counter);
            },1000)
        })
    }))
    .then((counter => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                counter++
                console.log(counter,'I go to bed')
                resolve(counter);
            },1000)
        })
    }))


