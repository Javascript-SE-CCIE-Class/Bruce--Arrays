
function sort() {
    var data = document.getElementById('num1').value;
    let points = data.split("");

    
    points.sort(function(a, b){return a-b});
    document.getElementById("ans").value = points;
    document.getElementById('num1').value = "";
}