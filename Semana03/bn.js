class pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    falar (){
console.log('ola mundo')
    }
}

const aluno = new pessoa('william',18)
aluno.falar()

class professor extends pessoa{
    constructor(nome,idade,falar,materia){
        super(nome,idade,falar)
            this.materia = materia
            this.nome='Walberson'
    }
    darAula(){
        console.log('agora vamos dar aula de'+this.materia)
    }
falar(){
        console.log('ola mundo,ola mundo,ola mundo')
    }
}
const henrique = new professor('willian',18,'geografia')
/* henrique.falar() */
console.log(henrique.nome)
Ja mandei kkk