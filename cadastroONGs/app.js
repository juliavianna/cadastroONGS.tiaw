var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "PetFriend",
            "cidade": "Belo Horizonte",
            "cep": "ong.20398566",
            "email": "petfriend@gmail.com",
            "telefone": "31-99337721",
            "website": "@petfriend"
        },
        {
            "id": 2,
            "nome": "Auau&Miau",
            "cidade": "Betim",
            "cep": "30140987",
            "email": "auaumiau@gmail.com",
            "telefone": "31-99990000",
            "website": "@auaumiau"
        },
        {
            "id": 3,
            "nome": "Caes e Gatos",
            "cidade": "Rio de Janeiro",
            "cep": "33974678",
            "email": "caesegatos@gmail.com",
            "telefone": "21-23450098",
            "website": "@caesegatos.ong"
        },
        {
            "id": 4,
            "nome": "ONG Bichinhos",
            "cidade": "Betim",
            "cep": "2987734",
            "email": "bichinhos@gmail.com",
            "telefone": "31-99223456",
            "website": "@bichinhos.ong"
        },
        {
            "id": 5,
            "nome": "ONG Gatinhos",
            "cidade": "São Paulo",
            "cep": "00987223",
            "email": "cgatinhosong@hotmail.com",
            "telefone": "11-23893345",
            "website": "@gatinhos.ong"
        },
        {
            "id": 6,
            "nome": "ONG 4 patas",
            "cidade": "Rio de Janeiro",
            "cep": "22398366",
            "email": "quatropatas@gmail.com",
            "telefone": "21-90227733",
            "website": "@quatropatas"
        },
        {
            "id": 7,
            "nome": "PetSavior",
            "cidade": "Belo Horizonte",
            "cep": "22397345",
            "email": "petsavior@gmail.com",
            "telefone": "210.067.6132",
            "website": "@petsavior.ong"
        },
        {
            "id": 8,
            "nome": "Amigo do Cao",
            "cidade": "Belo Horizonte",
            "cep": "129673220",
            "email": "ongamgdocao@hotmail.com",
            "telefone": "31-923654312",
            "website": "@ongamgdocao"
        },
        {
            "id": 9,
            "nome": "Amigo do Gato",
            "cidade": "Betim",
            "cep": "20830987",
            "email": "ongamgdogato@hotmail.com",
            "telefone": "31-22098876",
            "website": "@ongamgdogato"
        },
        {
            "id": 10,
            "nome": "Dogs & Cats",
            "cidade": "São Paulo",
            "cep": "30150340",
            "email": "cdogsecats@hotmail.com",
            "telefone": "11-92378899",
            "website": "@ong.dogsecats"
        }
    ]
}

var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "cidade" : contato.cidade,
        "cep": contato.cep,
        "instagram": contato.instagram
    };

    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    let index = db.data.map(obj => obj.id).indexOf(id);

    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].cidade = contato.cidade,
    db.data[index].cep = contato.cep,
    db.data[index].website = contato.website

    displayMessage("Contato alterado com sucesso");

    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    localStorage.setItem('db_contato', JSON.stringify(db));
}