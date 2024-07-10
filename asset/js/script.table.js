const endPoint = 'https://st2lww-8888.csb.app/syarif/data'
const dataSmoker = document.getElementById('data-survey')

dataSmoker.addEventListener('submit', async(event) => {
    event.preventDefault()
    const name = event.target.name.value
    const age = event.target.age.value
    const gender = event.target.gender.value
    const isSmoker = event.target.smoke.value

    console.log(isSmoker)

    const variant = document.getElementsByName('variant')
    let result = []
    variant.forEach((e) => {
        if (e.checked === true) {
            result.push(e.value)
        }
    })
    const brand = result.join('; ')

    const formData = new URLSearchParams()
    formData.append('name', name)
    formData.append('age', age)
    formData.append('gender', gender)
    formData.append('isSmoker', isSmoker)
    formData.append('cigarVariant', brand)

    const pushData = await fetch(endPoint, {
        method: 'POST',
        body: formData,
    })
    // const data = await pushData.json()

    // getName()
})

async function getName() {
    const tBody = document.getElementById('inputData')
    const rowData = document.createElement('tr')
    const dataName = document.createElement('td')
    const dataAge = document.createElement('td')
    const dataGender = document.createElement('td')
    const dataIsSmoker = document.createElement('td')
    const dataVariant = document.createElement('td')
    const response = await fetch(endPoint);
    const names = await response.json()
    console.log(names)
    const objResult = names.results
    console.log(objResult)
    objResult.forEach((e) => {
        dataName.textContent = e.name.value
    })
    dataName.textContent = names.results[16].name
    rowData.appendChild(dataName)
    tBody.appendChild(rowData)
    // console.log(names.results[2].name)
}

getName()