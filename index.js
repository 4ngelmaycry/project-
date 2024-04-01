document.getElementById('photo').addEventListener('click',function(){
    toggleBlockVisibility('myBlock');
})
function toggleBlockVisibility(blockId){
    var block = document.getElementById('block');
    if (block.style.display ==="block"){
        block.style.display = "none"
    }
    else{
        block.style.display = "block"
    }
}