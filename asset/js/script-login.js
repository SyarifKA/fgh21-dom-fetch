const addForm = document.getElementById('myForm')

// event disini mengarah ke anak dari form sehingga masing2 input dapat diakses
 addForm.addEventListener('submit', (event) => { 
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    if (email === 'admin@gmail.com' && password === '1234') {
        window.alert('success')
    } else {
        window.alert('salah')
     }
     addForm.reset()
})