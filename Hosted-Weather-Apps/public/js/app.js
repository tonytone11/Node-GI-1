const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const temperatureOptions = document.querySelector('#temperature')

messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    const temperature = temperatureOptions.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location + '&temperature=' + temperature).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
    console.log(location)
})