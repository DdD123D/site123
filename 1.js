var counter = 0;
osnova();
function osnova(){
    var canvas = document.getElementById('c1');
    var ctx = canvas.getContext('2d');
    ctx.moveTo(200,0);
    ctx.lineTo(200,400);
    ctx.stroke();
    ctx.moveTo(0,200);
    ctx.lineTo(400,200);    
    ctx.stroke();
}
function f1(){
    var arr = [];
    arr[0] = +document.getElementById('alpha').value;
    arr[1] = +document.getElementById('beta').value;
    arr[2] = +document.getElementById('gamma').value;
    arr[3] = +document.getElementById('delta').value;
    arr[4] = +document.getElementById('epsilon').value;
    for (i = 0; i < 5; i++){
        if(arr[i] == '') arr[i] = 0;
        if(isNaN(arr[i])){
            alert('Вы ввели что то не то!');
            return;
        }
    }
    counter++;
    var y = [];
    for (var i = -200; i<200; i++){
        y[i]=Math.round(arr[0]*Math.sin(Math.tan(arr[1]/(i-arr[2])))+arr[3]*Math.cos(arr[4]*i));
    }
    number(arr);
    
    schedule(y);
}
function number(arr){
    var result;
    result = 'График ' + counter + ' : &#945; = ' + arr[0] + ' &#946; = ' + arr[1] + ' &#947; = ' + arr[2] + ' &#948; = ' + arr[3] + ' &#949; = ' + arr[4] + '<br \/>';
    document.getElementById('a').insertAdjacentHTML('beforeEnd', result)
}
function schedule(y){
    
}