
let Display = document.getElementById('displayvalue')


function Addvalue(val){
    Display.value+=val
}

function Deletelast(){
    Display.value = Display.value.slice(0,-1)
}

function Totalvalue(){
    Display.value = eval(Display.value)
}

function Allclear(){
    Display.value = ''
}

setInterval(() => {
    let show = document.getElementById('show')

    if(Display.value === ''){
        show.value = 0
    }else{
    show.value = eval(Display.value)
    }

});