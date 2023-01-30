let fehInput = document.getElementById("fehrenheit");
let celInput = document.getElementById("celcius");
let kelInput = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input");

for(let i = 0;i < inputs.length; i++){
    let input = inputs[i];
    input.addEventListener("input",function(e){
        let value = parseFloat(e.target.value);
        console.log(value);
        switch(e.target.name){
            case "fehrenheit":
                celInput.value = (value - 32) / 1.8;
                kelInput.value = ((value - 32) / 1.8) + 273.15;
                break;
            case "celcius":
                fehInput.value = (value * 1.8) + 32;
                kelInput.value = value + 273.15;
                break;
            case "kelvin":
                fehInput.value = ((value - 273-15) * 1.8) + 32;
                celInput.value = value - 273.15;
                break;

        }
    })
}