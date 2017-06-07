{
        const personForm = document.querySelector('form#personForm')

        function renderColor(color) {
            const colorDiv = document.createElement('div')
            colorDiv.style.backgroundColor = color
            colorDiv.style.width = '100px'
            colorDiv.style.height = '50px'
            return colorDiv
        }

        function renderListItem(fieldName, value) {
            const li = document.createElement('li')
            li.innerHTML = `${fieldName}: ${value}`
            return li
        }

        function renderList(personData) {
            const list = document.createElement('ul')
            Object.keys(personData).map(function(fieldName) {
                const li = renderListItem(fieldName, personData[fieldName])
                list.appendChild(li)
            })
            return list
        }

        function handleSubmit(ev) {
            ev.preventDefault()
            const f = ev.target
            const details = document.querySelector('#details')
        
            const person = {
                name: f.personName.value,
                favoriteColor: renderColor(f.favoriteColor.value).outterHTML,
                age: f.age.value,
            }

        details.appendChild(renderList(person)) 
            
            //const colorDiv = `
                //<div style="background-color: ${favoriteColor}; width: 100px; height: 50px;"></div>
        // `
        // details.innerHTML = `<em>${name}</em>`

        //const em = document.createElement('em')
        //em.textContent = name
        //details.appendChild(em)
        //details.innerHTML = `
        //<ul>
            //<li>Name: ${name}</li>
            //<li>Favorite Color: ${renderColor(favoriteColor).outerHTML}</li>
            //<li> Age: ${age}</li>
        //</ul>
        //`
        
        //const ul = document.createElement('UL')
        //const li = document.createElement('LI')
        //const text1 = document.createTextNode(name)
        //details.appendChild(text1)
        //document.getElementById("ul").appendChild(li)





        }
        personForm.addEventListener('submit', handleSubmit)
}