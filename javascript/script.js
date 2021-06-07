 setTimeout(presentation, 2000);

function presentation() {
    console.log("Hello World");
}

let compteur = 0;

setInterval( () => {
    compteur++;
    console.log(compteur)
}, 1000);

const promise1 = new Promise((resolve, reject) => {
    console.log("Hello async");
    reject('les données sont arrivées');
})

promise1.then((value) => {
    console.log(value)
}).catch(() => {
    console.log(promise1);
})


async function foo() {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Action effectuée'), 1000)
    });

    let result = await p1;
    console.log(result);
}

