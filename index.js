function getUsername(){
    userName = document.getElementById("username").value;
    console.log(userName);
    window.location.href = "rooms.html";
    document.getElementById("showUsername").innerText = userName;
}