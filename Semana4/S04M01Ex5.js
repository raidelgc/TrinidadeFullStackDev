class Person {
    constructor(nome, idade, altura) {
      this.nome = nome;
      this.idade = idade;
      this.altura = altura;
    }
  
    apresentar() {
      console.log(`Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura.`);
    }
  }
  
  class Profissional extends Person {
    constructor(nome, idade, altura, profissao) {
      super(nome, idade, altura);
      this.profissao = profissao;
    }
  
    apresentar() {
      console.log(`Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura e sou ${this.profissao}.`);
    }
  }
  
  const pessoa1 = new Person('João', 30, 1.8);
  pessoa1.apresentar(); // Olá me chamo João tenho 30 anos e tenho 1.8 de altura.
  
  const pessoa2 = new Profissional('Maria', 25, 1.7, 'Engenheira');
  pessoa2.apresentar(); // Olá me chamo Maria tenho 25 anos e tenho 1.7 de altura e sou Engenheira.
  