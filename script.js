document.addEventListener('DOMContentLoaded', function () {

    const menuData = [
        {
            id: 1,
            nome: "Café Coado",
            preco: "R$ 7,90",
            desc: "Café coado na hora, preparado individualmente para garantir frescor e aroma em cada xícara.",
            img: "img/cafe-coado.jpeg",
            alt: "Xícara de café coado",
            categoria: "cafe"
        },
        {
            id: 2,
            nome: "Cappuccino",
            preco: "R$ 12,90",
            desc: "Espresso com leite vaporizado e espuma de leite, finalizado com canela.",
            img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7443cac1-0fab-4e8f-951f-f959cdf9123e.png",
            alt: "Cappuccino escuro em xícara de porcelana com canela polvilhada",
            categoria: "cafe"
        },
        {
            id: 3,
            nome: "Café Especial",
            preco: "R$ 14,90",
            desc: "Café especial com toque de chocolate e espuma cremosa, acompanhado de um delicado biscoito de coração.",
            img: "img/cafe-especial.jpeg",
            alt: "Café com especial em caneca grande com desenho na espuma, e um biscoito em formato de coração",
            categoria: "cafe"
        },
        {
            id: 4,
            nome: "Frappuccino",
            preco: "R$ 22,00",
            desc: "Bebida gelada à base de café com gelo e leite batidos e chantilly cremoso.",
            img: "img/frappuccino.jpeg",
            alt: "Bebida gelada à base de café com gelo e leite batidos e chantilly cremoso",
            categoria: "cafe"
        },
        {
            id: 5,
            nome: "Chá do Poema",
            preco: "R$ 7,90",
            desc: "Infusão de frutas vermelhas, com sabor adocicado e aroma vibrante.",
            img: "img/cha.jpeg",
            alt: "Xícara chá",
            categoria: "cha"
        },
        {
            id: 6,
            nome: "Brownie",
            preco: "R$ 12,90",
            desc: "Com uma casquinha crocante por fora e um interior macio. Nosso brownie é feito com o mais puro chocolate.",
            img: "img/brownie.jpeg",
            alt: "Fatia de brownie",
            categoria: "bolo"
        },
        {
            id: 7,
            nome: "Bolo de Cenoura",
            preco: "R$ 10,90",
            desc: "Bolo de cenoura fofinho com cobertura de chocolate meio amargo.",
            img: "img/bolo-de-cenoura.jpeg",
            alt: "Bolo de cenoura com cobertura de chocolate",
            categoria: "bolo"
        },
        {
            id: 8,
            nome: "Cheesecake",
            preco: "R$ 12,90",
            desc: "Feito com uma base crocante, um creme de queijo suave e aerado, e finalizado com uma deliciosa cobertura de frutas vermelhas.",
            img: "img/cheesecake.jpeg",
            alt: "Cheesecake com cobertura de frutas vermelhas",
            categoria: "bolo"
        },
        {
            id: 9,
            nome: "Cookie",
            preco: "R$ 15,90",
            desc: "Um delicioso Cookie feito com massa de baunilha e recheado de Nutella.",
            img: "img/cookie-nutella.jpeg",
            alt: "Cookie recheado de Nutella",
            categoria: "cookie"
        },
        {
            id: 10,
            nome: "Red Velvet",
            preco: "R$ 15,90",
            desc: "Uma delícia que combina a textura macia com o sabor sutil do chocolate e o toque vibrante do red velvet. Recheado com chocolate branco.",
            img: "img/cookie-redvelvet.jpeg",
            alt: "Cookie Red Velvet",
            categoria: "cookie"
        },
        {
            id: 11,
            nome: "Trio de Cookies",
            preco: "R$ 42,00",
            desc: "Experimente o nosso Trio de Cookies Especiais - Doce de Leite, Red Velvet, Nutella.",
            img: "img/cookies-trio-02.jpg",
            alt: "Trio de Cookies: nutella, redvelvet e doce de leite",
            categoria: "cookie"
        },
        {
            id: 12,
            nome: "Torta de Frango",
            preco: "R$ 10,90",
            desc: "Um pedaço generoso da nossa torta salgada com massa macia, recheada com suculento frango desfiado temperado.",
            img: "img/torta-de-frango.jpeg",
            alt: "Torta de frango",
            categoria: "torta"
        },
        {
            id: 13,
            nome: "Tortilha Doce",
            preco: "R$ 13,90",
            desc: "Mini torta com base crocante, recheada com creme suave e coberta com morangos frescos.",
            img: "img/mini-torta-morango.jpeg",
            alt: "Tortihas de morango",
            categoria: "torta"
        },
        {
            id: 14,
            nome: "Torta de Cookie",
            preco: "R$ 16,90",
            desc: "Mini torta com base de cookie, recheada generosamente com Nutella e pedaços de bolacha cookie.",
            img: "img/mini-torta-cookie.jpeg",
            alt: "Mini torta com base de cookie",
            categoria: "torta"
        },
        {
            id: 15,
            nome: "Suco de Laranja",
            preco: "R$ 9,90",
            desc: "Suco natural de laranja espremido na hora.",
            img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8a83a4d7-2eda-4c4c-885d-d19d7cfa0dd8.png",
            alt: "Suco de laranja natural em jarra de vidro com fatias de laranja decorando",
            categoria: "bebida"
        },
        {
            id: 16,
            nome: "Hard Tea",
            preco: "R$ 12,00",
            desc: "O primeiro Hard Tea (Chá Alcóolico) do Brasil! Limão, ervas e um delicioso toque de gin, refrescância e sabor inesquecíveis.",
            img: "img/cha-de-pinheirinho.jpg",
            alt: "Chá de Pinheirinho",
            categoria: "bebida"
        },
        {
            id: 17,
            nome: "Caipirinha",
            preco: "R$ 26,00",
            desc: "Sua caipirinha, do seu jeito! Escolha a base entre vodka, cachaça ou saquê, e combine com seu sabor favorito: limão, maracujá ou frutas vermelhas. Uma explosão de frescor e sabor.",
            img: "img/caipirinha.jpg",
            alt: "Caipirinha",
            categoria: "bebida"
        },
        {
            id: 18,
            nome: "Drink do Poema",
            preco: "R$ 28,00",
            desc: "Caipirinha refrescante preparada com a cachaça de sua preferência, combinando limão siciliano, tahiti e cravo, adoçada no ponto certo.",
            img: "img/caipirinha-tres-limoes.jpg",
            alt: "Caipirinha três limões",
            categoria: "bebida"
        },
        {
            id: 19,
            nome: "Gin",
            preco: "R$ 32,00",
            desc: "Gin tônica clássica com especiarias selecionadas, como zimbro, pimenta rosa e rodelas de limão siciliano, para uma experiência aromática e sofisticada.",
            img: "img/gin-especiarias.jpg",
            alt: "Gin com Especiarias como zimbro, pimenta rosa e rodelas de limão siciliano",
            categoria: "bebida"
        }
    ];

    const menuContainer = document.querySelector('.menu-container');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderMenu(items) {
        if (items.length === 0) {
            menuContainer.innerHTML = '<p class="menu-empty">Nenhum item encontrado nesta categoria.</p>';
            return;
        }

        let menuHTML = items.map(item => {
            return `
                        <div class="menu-item" data-category="${item.categoria}">
                            <div class="menu-img">
                                <img src="${item.img}" alt="${item.alt}" />
                            </div>
                            <div class="menu-content">
                                <div class="menu-title">
                                    <h3>${item.nome}</h3>
                                    <span class="menu-price">${item.preco}</span>
                                </div>
                                <div class="divider"></div>
                                <p class="menu-desc">${item.desc}</p>
                            </div>
                        </div>
                    `;
        }).join('');

        menuContainer.innerHTML = menuHTML;
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const category = this.dataset.category;

            const filteredItems = category === 'todos'
                ? menuData
                : menuData.filter(item => item.categoria === category);

            renderMenu(filteredItems);
        });
    });

    renderMenu(menuData);

});