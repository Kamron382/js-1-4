let div = document.querySelector('div')
let inp1 = document.querySelector('.name')
let inp2 = document.querySelector('.password')
let btn = document.querySelector('button')
fetch('https://688e0d48a459d5566b13ebd0.mockapi.io/yahya_narkoman')
.then((res) => res.json())
.then((data) => {
    data.map((item)=>{
        div.innerHTML += `
        <div class="card">
            <h1>${item.name}</h1>
            <h2>${item.password}</h2>
            </div>
        `
    })
})
div.addEventListener('click', (e) => {
    if (e.target.tagName === 'H1' || e.target.tagName === 'H2') {
        const card = e.target.closest('.card');
        const name = card.querySelector('h1').textContent;

        fetch(`https://688e0d48a459d5566b13ebd0.mockapi.io/yahya_narkoman`)
            .then((res) => res.json())
            .then((data) => {
                const itemToDelete = data.find(item => item.name === name);
                if (itemToDelete) {
                    fetch(`https://688e0d48a459d5566b13ebd0.mockapi.io/yahya_narkoman/${itemToDelete.id}`, {
                        method: 'DELETE'
                    }).then(() => {
                        card.remove();
                    });
                }
            });
    }
});
btn.addEventListener(`click`, ()=>{
    fetch(`https://688e0d48a459d5566b13ebd0.mockapi.io/yahya_narkoman`,{
        method: `POST`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: inp1.value,
            password: inp2.value
        })
    })
})