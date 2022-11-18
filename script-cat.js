var selectedPath = null
var paths = document.querySelectorAll("path")
const usedColors = []
for (var i = 0; i < paths.length; i++) {
    paths[i].addEventListener('click', function (event) {
        if (selectedPath) {
            selectedPath.style.stroke = 'black'
        }
        selectedPath = event.target
        selectedPath.style.stroke = 'red'
    })
}

document.querySelector('#colorize').addEventListener('click', function () {
    if (!selectedPath) {
        window.alert('please select a path to color')
        return
    }
    //continue coloring
    var color = document.querySelector('#color').value
    selectedPath.style.fill = color
    
    //selectedPath = null  //if you want to reset the selectedPath immediately 
    if (usedColors.indexOf(color) == -1) {
        usedColors.push(color)
        displayUsedColors()
    }
})
function displayUsedColors() {
    var divs = ''
    for (var i = 0; i < usedColors.length; i++) {
        divs += `<div class="used-color" data-color="${usedColors[i]}" style="background-color:${usedColors[i]};"></div>`
    }
    document.querySelector('#used').innerHTML = divs
    var usedColorsDivs = document.querySelectorAll('.used-color')
    for (var i = 0; i < usedColorsDivs.length; i++) {
        usedColorsDivs[i].addEventListener('click', function (event) {
            document.getElementById('color').value = event.target.getAttribute('data-color')
        })
    }
}
document.querySelector('#remove-color').addEventListener('click', function() {
    if (selectedPath) {
        selectedPath.style.fill = 'transparent'
        selectedPath.style.stroke = 'black'
    }
})