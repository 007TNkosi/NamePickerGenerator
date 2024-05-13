var names = [];

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

document.getElementById("openModalButton").addEventListener("click", function() {
    pickRandom();
});
btn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function addName() {
    var name = document.getElementById('name').value;
    var motivation = document.getElementById('motivation').value;
    names.push({name: name, motivation: motivation});
    document.getElementById('name').value = '';
    document.getElementById('motivation').value = '';
    displayNames();
}

function pickRandom() {
    if (names.length < 2) {
        alert('Please add at least two names.');
        return;
    }
    var indices = [];
    while (indices.length < 2) {
        var randomIndex = Math.floor(Math.random() * names.length);
        if (!indices.includes(randomIndex)) {
            indices.push(randomIndex);
        }
    }
    var winner1 = 'Winner 1: ' + names[indices[0]].name + ', Motivation: ' + names[indices[0]].motivation;
    var winner2 = 'Winner 2: ' + names[indices[1]].name + ', Motivation: ' + names[indices[1]].motivation;

    document.getElementById('myModal').style.display = "block";
    document.getElementById('modal-content').innerText = winner1 + '\n' + winner2;

    // alert('Winner 1: ' + names[indices[0]].name + ', Motivation: ' + names[indices[0]].motivation + 
    // '\nWinner 2: ' + names[indices[1]].name + ', Motivation: ' + names[indices[1]].motivation)
}

function displayNames() {
    var nameList = document.getElementById('nameList');
    nameList.innerHTML = '';
    for(var i = 0; i < names.length; i++) {
        var card = document.createElement('div');
        card.className = 'card';
        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        var nameHeader = document.createElement('h5');
        nameHeader.className = 'card-title';
        nameHeader.textContent = names[i].name;
        var motivationText = document.createElement('p');
        motivationText.className = 'card-text';
        motivationText.textContent = names[i].motivation;
        cardBody.appendChild(nameHeader);
        cardBody.appendChild(motivationText);
        card.appendChild(cardBody);
        nameList.appendChild(card);
    }
}

function refreshList() {
    if (confirm("Are you sure you want to clear?")) {
    names = [];
    displayNames();
    }
}