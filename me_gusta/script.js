var likesCounter1 = 3;
var likeSpan1 = document.querySelector("#primerlike");

function like1(){

    likesCounter1++;
    likeSpan1.innerHTML=likesCounter1 +' like(s)'
}


var likes = [9, 12, 9];
var spans = [
    document.querySelector("#like2_1"),
    document.querySelector("#like2_2"),
    document.querySelector("#like2_3")];

    function like(id){
        likes [id]++;
        spans[id].innerHTML = likes[id]+' like(s)';
    }