function addUser()
{
    player1_input=document.getElementById("player1_input").value;
    player2_input=document.getElementById("player2_input").value;

    localStorage.setItem("player1_input", player1_input);
    localStorage.setItem("player2_input", player2_input);

    window.location="game_page.html";
}
