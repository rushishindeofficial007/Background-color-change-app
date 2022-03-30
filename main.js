const colors=['red','green','blue','purple','pink','yellow','black','chocolate','powdered blue','purple','coral','punch'];
function changeColor(){
    const colorIndex = parseInt(Math.random()*colors.length);
    document.body.style.background = colors[colorIndex];
}