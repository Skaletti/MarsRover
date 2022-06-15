// import { get } from 'axios';
// import { default as axios } from "axios";
const roverPickerСuriosity = document.getElementById('rover-curiosity')
const roverPickerOpportunity = document.getElementById('rover-opportunity')
const roverPickerSpirit = document.getElementById('rover-spirit')
const selectRover = document.getElementById('main-list__rovers')

 let roverSelected = selectRover.addEventListener("click", () => {
    let target = Event.target
    if (target == roverPickerСuriosity.target)
    {
        roverSelected = 0
        console.log("000")
    }      
    else if (target == roverPickerOpportunity.target)
    {
        roverSelected = 1
        console.log("111")
    }
    else if (target == roverPickerSpirit.target)
    {
        roverSelected = 2
        console.log("222")
    }
    
})

console.log(roverSelected)



const datePicker = document.getElementById("date")
datePicker.min = "2012-08-06";
const button = document.getElementById("button")

const APIKEY = "Kxxlkd2hUzVR8tw66hpQWLNdXHG8WAVaE7iZaemg"

button.addEventListener("click", function () {
    const date = datePicker.value;
    console.log(date)
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${APIKEY}`
    console.log(url)

    axios.get(url)
        .then(function (response) {
            var image = response.data.photos[0].img_src;
            console.log(image)
            var sol = response.data.photos[0].sol;
            console.log(sol)
            var cameraName = response.data.photos[0].camera.full_name;
            console.log(cameraName)
            var roverName = response.data.photos[0].rover.name;
            console.log(roverName);
            var text = `The image below was taken by the ${cameraName} on the ${roverName} rover on Martian sol ${sol}.`;
            document.getElementById("results").innerHTML = text;
            document.getElementById("image").src = image;
            document.getElementById("image").style.display = "block";
        })
        .catch(function (error) {
            console.log(error)
            var error = "Sorry, there are no photos on this date! Pick another.";
            document.getElementById("results").innerHTML = error;
        })

});



