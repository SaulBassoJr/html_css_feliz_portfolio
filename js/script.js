function clickMenu() {
        menu.style.display='flex' 
}


function clickClose() {
        menu.style.display='none' 
}

function changedSize() {
    if(window.innerWidth >= 981) {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
}