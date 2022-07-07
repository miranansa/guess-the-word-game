player1_name=localStorage.getItem("player1_input");
player2_name=localStorage.getItem("player2_input");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("Player_question").innerHTML="Question Turn - "+player1_name;
document.getElementById("Player_answer").innerHTML="Answer Turn - "+player2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lower case = "+word);

    charAt1=word.charAt(1);
    console.log(charAt1);
    length_divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide_2);
    console.log(charAt2);

length_of_word=word.length;
console.log(length_of_word);

    length_minus_1=length_of_word-1;
    charAt3=word.charAt(length_minus_1);
    console.log(charAt3);

    charAt1_remove=word.replace(charAt1,"_");
    charAt2_remove=charAt1_remove.replace(charAt2,"_");
    charAt3_remove=charAt2_remove.replace(charAt3,"_");
    console.log(charAt3_remove);

    question_word="<h4 id='word_display'>Q. "+charAt3_remove+"</h4>";
input_box="<br><br> Answer : <input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-info'onclick='check()'>Check</button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";

function check()
{
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lower case - "+answer);

    if(answer_turn=="player1")
    {
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else
    {
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
    if(question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("Player_question").innerHTML="Question turn - "+player2_name;
    }
    else
    {
        question_turn="player1";
        document.getElementById("Player_question").innerHTML="Question turn - "+player1_name;

    }
    if(answer_turn=="player1")
    {
        answer_turn="player2";
        document.getElementById("Player_answer").innerHTML= "Answer turn : "+player2_name;
    }
    else
    {
        answer_turn="player1";
        document.getElementById("Player_answer").innerHTML="Answer turn : "+player1_name;

    }
    document.getElementById("output").innerHTML="";
}