const cena = document.querySelectorAll('td:nth-child(3)')
const kolicina = document.querySelectorAll('td:nth-child(4)')
let ukupno = ""

for (let i = 0; i < kolicina.length; i++) {
    ukupno = cena * kolicina
    get inner
    console.log(kolicina[i])
}


const ukupno = document.getElementById("ukupno")
const cene = document.querySelectorAll(".cena")
const kolicine = document.querySelectorAll("td:nth-child(4) input")

function azuriraj() {
    let total = 0
    for (let i = 0; i < cene.length; i++) {
        const cena = Number(cene[i].innerText)
        const kolicina = Number(kolicine[i].value)
        if (kolicina) total += cena * kolicina
    }
    ukupno.innerText = total
}

for (let i = 0; i < kolicina.length; i++) {
    kolicine[i].addEventListener("input", azuriraj)
}

azuriraj()