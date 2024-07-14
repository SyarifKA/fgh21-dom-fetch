const addForm = document.getElementById('myForm')

// event disini mengarah ke anak dari form sehingga masing2 input dapat diakses


 addForm.addEventListener('submit', async(event) => { 
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    
     const data = new URLSearchParams()
     data.append('email', email)
     data.append('password', password)
     
     const response = await fetch('https://st2lww-8888.csb.app/auth/login', {
         method: 'POST',
         body: data
     })
     const uploadData = await response.json()
    if (uploadData.success) {
        window.alert(uploadData.message)
        window.location = 'survey.html'
        const overlay = document.getElementsByClassName('overlay').item(0)
        overlay.classList.toggle('hide')
    } else {
        window.alert(uploadData.message)
        overlay.classList.toggle('hide')
     }
     addForm.reset()
})