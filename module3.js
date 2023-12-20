// const arr = {name1:'kira',
// name2:'lekshana',
// name3:'shivani',
// name4:'pranesh'}

// let {name1, name2, name3, name4} = arr

// console.log(name1)
// console.log(name3)

const cp = require('child_process');
const s = new Promise(function(resolve,reject)
{
    setTimeout(function(){
        try{
            cp.execSync('start brave https://www.youtube.com')
            resolve('Chrome opened successfully')
        }catch(err){
            reject('Chrome is not found' + err.message)
        }
    }, 5000);

});

s.then((res) => console.log(res))
.catch((err) => console.log(err));


