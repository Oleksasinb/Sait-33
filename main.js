let miniblock = document.querySelector('.begunok')
let divtb = 0
let divrl = 0
function vniz () {
    divtb+=10
    if(divtb>=360) {
        alert('Куда?!')
    }
    else {
        miniblock.style.top = divtb + 'px'
    }
}
function verh () {
    divtb-=10
    if(divtb<0) {
        alert('далеко собрался?')
    }
    else {
        miniblock.style.top = divtb + 'px'
    } 
}
function vpravo () {
    divrl+=10
    if(divrl>800) {
        alert('айайайаайа')
    }
    else {
        miniblock.style.left = divrl + 'px'
    }
}
function vlevo () {
    divrl-=10
    if(divrl<0) {
        alert('зачем?')
    }
    else {
        miniblock.style.left = divrl + 'px'
    }
}