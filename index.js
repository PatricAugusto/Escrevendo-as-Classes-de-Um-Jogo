class Personagem {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        switch (this.tipo) {
            case "mago":
                console.log("Usou magia");
                break;
            case "guerreiro":
                console.log("Usou espada");
                break;
            case "monge":
                console.log("Usou artes marciais");
                break;
            case "ninja":
                console.log("Usou shuriken");
                break;
            default:
                console.log("Tipo de personagem inválido");
        }
    }
}

const personagem = new Personagem("Patric", 24, "monge");
personagem.atacar();