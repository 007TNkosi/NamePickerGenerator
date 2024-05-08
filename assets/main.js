var names = [];

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
    alert('Winner 1: ' + names[indices[0]].name + ', Motivation: ' + names[indices[0]].motivation + 
    '\nWinner 2: ' + names[indices[1]].name + ', Motivation: ' + names[indices[1]].motivation)
}

function refreshList() {
    if (confirm("Are you sure you want to clear?")) {
    names = [];
    displayNames();
    }
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