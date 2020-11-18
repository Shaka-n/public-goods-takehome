// Un-hides the popup after 5 seconds
document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=> {
        document.getElementById('popup-box').classList.remove('hide')
        document.getElementById('popup-box').classList.add('show')
    }, 5000)
})
// 

document.addEventListener('click', (e)=>{
    if(e.target.textContent==="X" || e.target.textContent==='Claim Now'){
        document.getElementById('popup-box').classList.add('hide')
        document.getElementById('popup-box').classList.remove('show')
    }
})