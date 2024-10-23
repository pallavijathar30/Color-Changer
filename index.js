var colors=["red","green","blue","yellow","pink","grey","orange","purple","brown"]
var len=colors.length-1
var buttoncontrol=document.getElementById('btn')
var spancontrol=document.querySelector('.color')

buttoncontrol.addEventListener('click',()=>{
    var index=generateRandomnumber()
    //console.log(index)
    document.body.style.backgroundColor=colors[index]
    spancontrol.textcontent=colors[index]
})
function generateRandomnumber(){
    return Math.round(Math.random()*len)
}
