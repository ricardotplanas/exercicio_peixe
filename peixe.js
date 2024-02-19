var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);

var peixinho

var tubarao

function preload() {
    //carregar o fundo
    this.load.image('mar', 'assets/bg_azul-claro.png');

    //carregar o logo
    this.load.image('logo', 'assets/logo-inteli_azul.png');

    //carregar o peixe
    this.load.image('peixe', 'assets/peixes/peixe_listra.png');

    //carregar o crustáceo
    this.load.image('crustaceo', 'assets/peixes/crustaceo.png');

    //carregar a concha
    this.load.image('concha', 'assets/peixes/concha.png');

    //carregar o tubarão
    this.load.image('tubarao', 'assets/peixes/tubarao.png');
}


function create() {
    //adicionar o fundo na tela
    this.add.image(400, 300, 'mar');

    //adicionar o logo na tela
    this.add.image(400, 525, 'logo').setScale(0.5);

    //guardar o peixe em uma variável
    peixinho = this.add.image(400, 300, 'peixe');

    //transformando a variável
    peixinho.setFlip(true, false);

    //adicionar o crustáceo na tela
    this.add.image(750, 550, 'crustaceo');

    //adicionar a concha na tela
    this.add.image(675, 565, 'concha');

    //guardar o tubarão em uma variável
    tubarao = this.add.image(400, 300, 'tubarao')

    //transformando a variável
    tubarao.setFlip(true, false);
}


function update() {
    //adicionando controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

    //adicionando controles no tubarão
    tubarao.x = this.input.x +200;
    tubarao.y = this.input.y;
}