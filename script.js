document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Name: " + name + "<br>Email: " + email;
  });
  