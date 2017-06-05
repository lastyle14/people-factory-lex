const personForm = document.querySelector('#personFrom')
function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    f = personName.value
    document.querySelector('h1').textContent = name
}
personForm.addEventListener('submit', handleSubmit)