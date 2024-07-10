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

    // Filter
    if (name == '' || age <= 0 || gender == '' || isSmoker == '') {
        window.alert('All data must be filled in')
    } else {
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
    }
    // const data = await pushData.json()

    dataSmoker.reset()
})
const tBody = document.getElementById('inputData')

async function getData() {
    const response = await fetch(endPoint);
    const data = await response.json()
    tBody.innerHTML = ''
    data.results.forEach((e) => {
        const rowData = document.createElement('tr')
        const dataName = document.createElement('td')
        const dataAge = document.createElement('td')
        const dataGender = document.createElement('td')
        const dataIsSmoker = document.createElement('td')
        const dataVariant = document.createElement('td')
        console.log(e)
        dataName.textContent = e.name
        dataAge.textContent = e.age
        dataGender.textContent = e.gender
        if (e.isSmoker) {
            dataIsSmoker.textContent = document.getElementById('yes').value
        } else {
            dataIsSmoker.textContent = document.getElementById('no').value
        }
        dataVariant.textContent = e.cigarVariant.join('; ')
        rowData.appendChild(dataName)
        rowData.appendChild(dataAge)
        rowData.appendChild(dataGender)
        rowData.appendChild(dataIsSmoker)
        rowData.appendChild(dataVariant)
        tBody.appendChild(rowData)
    })
}

getData()