window.onload = function () {
    const inp       = document.getElementById('inp')
    const nameList  = document.getElementById('name-list')
    const display   = document.getElementById('display')
    const giveAtry  = document.getElementById('give-a-try')
    const firstPosition = document.getElementById('first-position')
    const secondPosition = document.getElementById('second-position')
    const thirdPostion = document.getElementById('third-position')

    const participentNames = []

    inp.addEventListener('keypress', function (event) {
        if(event.key === 'Enter') {
            let newNames = event.target.value.split(', ')
            if(newNames[0] !== '') {
                newNames.forEach(name => {
                    participentNames.push(name)
                    let item = createListItem(name)
                    nameList.appendChild(item)
                    event.target.value = ''
                });
            }
        }
    })

    function createListItem(name)
    {
        let li = document.createElement('li')
        li.className = 'list-group-item'
        li.innerHTML = name
        return li
    }
}