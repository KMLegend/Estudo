// Declaração do pacote, Pacote só pode ter 1
package certificacao.br.com.caelum.certificacao;
// Quando não tem declarado o pacote , é por que o pacote é default( Padrão ).

// Segunda etapa os Imports
import java.util.Date;
import java.io.*;


// Terceira etapa classes

// Em um arquivo java só pode existir uma interface , classe ou tipo, Publico --> E se for publico , ele tem q possuir o mesmo nome do arquivo.

class B {
    int b;
    
    // Contrutor não retorna nada.
    B() {
        // A.TAMANHO = 15; --> é uma variavel do tipo final e não pode ser alterada.
    }

    // O metodo retorna algo , nesse caso Void.
    void B() {
    }
}

class Pessoa {

    static int totalDePessoas = 0; // Variavel de classe.

    String nome; // Variavel de Instacia.

    // construtores pode ter o mesmo nome da classe.
    Pessoa(String nome) {
        if(nome == null ){
            nome = "Kevin";
            return;
        }
        this.nome = nome;
    }

    public String getNome() {
        String sobrenome = "Maykel";
        return nome + sobrenome;
    }
}

// Quarta etapa Interfaces
interface Figura {

}
interface A {
    int TAMANHO = 5; // variavel que não pode ser alterado.
    void autentica(String nome, String senha);

    // Se não coloca abstract, static , public, final , por padrão ele tera esses valores sem a necessidade de escreve-los.
}


/** Javadoc
 * Variáveis
        Usando como exemplo a classe Pessoa definida anteriormente, nome e sobrenome são variáveis. A declaração de variáveis é bem simples, sempre o tipo seguido do nome da variável.
        Dizemos que essas são variáveis de instância, pois existe uma cópia delas para cada objeto Pessoa criado em nosso programa. Cada cópia guarda o estado de uma certa instância desses objetos.
        Existem ainda variáveis que não guardam valores ou referências para uma determinada instância, mas sim um valor compartilhado por todas as instâncias de objetos. Essas são variáveis estáticas, definidas com a palavra-chave static. Veremos mais sobre esse tipo de membro mais à frente.

    Métodos
        A declaração de métodos é um pouquinho diferente pois precisamos do tipo do retorno, seguido do nome do método e seguido de parênteses, sendo que pode ou não haver parâmetros de entrada desse método. Cada parâmetro é uma declaração de variável em si. Essa linha do método, onde está definido o retorno, o nome e os parâmetros é onde temos a assinatura do método. Cuidado, pois a assinatura de um método inclui somente o nome do método e os tipos dos parâmetros.
        Assim como variáveis, métodos também podem ser static, como veremos mais adiante.

    Construtores
        Uma classe pode possuir zero ou vários construtores. Nossa classe Pessoa possui um construtor que recebe como parâmetros o nome e o sobrenome da pessoa. A principal diferença entre a declaração de um método e um construtor é que um construtor não tem retorno e possui o mesmo nome da classe.

    
 */