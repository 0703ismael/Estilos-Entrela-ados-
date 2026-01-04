let servicos = [
    { nome: "Nagô Masculina", preco: "60 $", img: "Nagô Masculina.jpg" },
    { nome: "Nagô Masculina Simples", preco: "50 $", img: "Nagô Masculina simples.jpg" },
    { nome: "Nagô Masculina Desenho", preco: "80 $", img: "Nagô Masculina Desenho.jpg" },
    { nome: "Nagô Feminina 1", preco: "35 $", img: "Nago feminina 1.jpg" },
    { nome: "Trança Nagô Lateral", preco: "25 $", img: "Trança Nagô Lateral.jpg" },
    { nome: "Box Braids", preco: "280 $", img: "Box braids.jpg" },
    { nome: "Box Braids Jumbo", preco: "190 $", img: "Box braids jumbo.jpg" },
    { nome: "Boho Braids", preco: "280 $", img: "Boho Braids.jpg" },
    { nome: "Gypsy Braids", preco: "380 $", img: "Gypsy Braids.jpg" },
    { nome: "Fulani Braids", preco: "280 $", img: "Fulani Braids.jpg" },
    { nome: "Fulani Braids Curta", preco: "200 $", img: "Fulani Braids Curta.jpg" },
    { nome: "Twist Feminina", preco: "250 $", img: "Twist Feminina.jpg" },
    { nome: "Twist Feminina Desenho", preco: "200 $", img: "Twist Feminina Desenho.jpg" }
];

function renderizar() {
    const lista = document.getElementById('lista-servicos');
    if(!lista) return;
    lista.innerHTML = '';
    servicos.forEach((s) => {
        lista.innerHTML += `
            <div class="card">
                <img src="${s.img}">
                <h3>${s.nome}</h3>
                <p>${s.preco}</p>
            </div>`;
    });
}
renderizar();


function renderizar() {
    const lista = document.getElementById('lista-servicos');
    if(!lista) return;
    lista.innerHTML = '';
    servicos.forEach((s) => {
        lista.innerHTML += `
            <div class="card">
                <img src="${s.img}">
                <h3>${s.nome}</h3>
                <p>${s.preco}</p>
            </div>`;
    });
}
renderizar();


function renderizar() {
    const lista = document.getElementById('lista-servicos');
    if(!lista) return;
    lista.innerHTML = '';
    servicos.forEach((s) => {
        lista.innerHTML += `
            <div class="card">
                <img src="${s.img}">
                <h3>${s.nome}</h3>
                <p>${s.preco}</p>
            </div>`;
    });
}
renderizar();


function renderizar() {
    const lista = document.getElementById('lista-servicos');
    const listaEdicao = document.getElementById('listaEdicao');
    if(!lista) return;
    
    lista.innerHTML = ''; 
    listaEdicao.innerHTML = '';
    
    servicos.forEach((s, i) => {
        // Renderiza no site
        lista.innerHTML += `
            <div class="card">
                <img src="${s.img}">
                <h3>${s.nome}</h3>
                <p>${s.preco}</p>
            </div>`;
        
        // Renderiza na lista de exclusão do Admin
        listaEdicao.innerHTML += `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; background:#333; padding:5px; border-radius:5px;">
                <span>${s.nome}</span>
                <button onclick="remover(${i})" style="color:white; background:red; border:none; padding:5px 10px; border-radius:3px; cursor:pointer;">Apagar</button>
            </div>`;
    });
}

function abrirAdmin() { document.getElementById('modalAdmin').style.display = 'block'; }
function fecharAdmin() { 
    document.getElementById('modalAdmin').style.display = 'none'; 
    document.getElementById('senhaAdmin').value = ''; 
}

function verificarSenha() {
    if(document.getElementById('senhaAdmin').value === "HELLENA07") {
        document.getElementById('loginAdmin').style.display = 'none';
        document.getElementById('areaGerenciamento').style.display = 'block';
    } else { alert("Senha Incorreta!"); }
}

function adicionarServico() {
    const nome = document.getElementById('novoNome').value;
    const preco = document.getElementById('novoPreco').value;
    const fotoInput = document.getElementById('novaImg');
    const arquivo = fotoInput.files[0];

    if(nome && preco && arquivo) {
        const leitor = new FileReader();
        
        leitor.onload = function(e) {
            const base64Image = e.target.result;
            servicos.push({ nome, preco, img: base64Image });
            localStorage.setItem('trancas_bd', JSON.stringify(servicos));
            
            // Limpa campos
            document.getElementById('novoNome').value = '';
            document.getElementById('novoPreco').value = '';
            fotoInput.value = '';
            
            renderizar();
            alert("Salvo com sucesso!");
        };
        
        leitor.readAsDataURL(arquivo);
    } else {
        alert("Preencha todos os campos e escolha uma foto!");
    }
}

function remover(i) {
    if(confirm("Deseja apagar este serviço?")) {
        servicos.splice(i, 1);
        localStorage.setItem('trancas_bd', JSON.stringify(servicos));
        renderizar();
    }
}

// Envio para WhatsApp
document.getElementById('formOrcamento').onsubmit = function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const contato = document.getElementById('whatsapp').value;
    const modelo = document.getElementById('tipoTranca').value;
    const msg = document.getElementById('mensagem').value;
    
    const texto = `Olá! Quero um orçamento.\n*Nome:* ${nome}\n*Contato:* ${contato}\n*Modelo:* ${modelo}\n*Obs:* ${msg}`;
    
    // COLOQUE SEU NÚMERO ABAIXO (Exemplo: 55 + DDD + NUMERO)
    const meuZap = "5599992119096"; 
    
    window.open(`https://wa.me/${meuZap}?text=${encodeURIComponent(texto)}`, '_blank');
};

renderizar();
