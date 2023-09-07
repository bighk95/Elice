const classcheck = document.querySelector('.content')
classcheck.innerHTML += "<h2>올해 최고의 치킨 브랜드</h2>"

const all = document.querySelectorAll('p')

all.forEach(parameter=>{
    parameter.innerText += '양념치킨'
})

const alphabets = ['A', 'B', 'C']
alphabets.forEach(value=>{
    classcheck.innerHTML += `<p>${value}</p>`
})