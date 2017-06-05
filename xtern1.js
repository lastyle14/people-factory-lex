const personForm = document.querySelector('form#personForm')
function handleSubmit(ev) {
    ev.preventDefault()
    const form = ev.target
    const name = form.personName.value
    const age = form.personNumber.value
    const month = form.personMonth.value
    document.querySelector('h1').textContent = name + " " + age + " " + month
}
personForm.addEventListener('submit', handleSubmit)

