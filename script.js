// import { get } from 'axios';
// import { default as axios } from "axios";
const roverPickerСuriosity = document.getElementById('rover-curiosity')
const roverPickerOpportunity = document.getElementById('rover-opportunity')
const roverPickerSpirit = document.getElementById('rover-spirit')
const selectRover = document.getElementById('main-list__rovers')

const mainImages = document.querySelectorAll('.main-list__item')

const API_BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1'


const datePicker = document.getElementById("date")
datePicker.min = "2008-08-06";
datePicker.value = datePicker.min
const button = document.getElementById("button")

const APIKEY = "Kxxlkd2hUzVR8tw66hpQWLNdXHG8WAVaE7iZaemg"

mainImages.forEach(rover => {
    rover.addEventListener('click', async () => {
        await getData(rover.dataset.name)
    })
})

const roverData = {
    image: '',
    sol: '',
    cameraName: '',
    roverName: ''
}


const getData = (name) => {
    if (typeof name !== 'string') return

    const date = datePicker.value;

    const url = `${API_BASE_URL}/rovers/${name}/photos?earth_date=${date}&api_key=${APIKEY}`

    axios.get(url)
        .then(function (response) {
            roverData.image = response.data.photos[0].img_src;
            console.log(roverData.image)
            roverData.sol = response.data.photos[0].sol;
            console.log(roverData.sol)
            roverData.cameraName = response.data.photos[0].camera.full_name;
            console.log(roverData.cameraName)
            roverData.roverName = response.data.photos[0].rover.name;
            console.log(roverData.roverName);
            const text = `The image below was taken by the ${roverData.cameraName} on the ${roverData.roverName} rover on Martian sol ${roverData.sol}.`;
            document.getElementById("results").innerHTML = text;
            document.getElementById("image").src = roverData.image;
            document.getElementById("image").style.display = "block";
        })
        .catch(function (error) {
            console.log(error)
            var error = "Sorry, there are no photos on this date! Pick another.";
            document.getElementById("results").innerHTML = error;
        })
}


button.addEventListener("click", getData)



