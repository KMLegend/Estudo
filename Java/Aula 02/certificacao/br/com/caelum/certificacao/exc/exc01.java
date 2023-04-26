package certificacao.br.com.caelum.certificacao.exc;


import java.util.*;

class D {
    public static void main(String[] args) {
        ArrayList<String> lista = new ArrayList<String>();

        for (String arg : args) {
            /*
            if (new E().existe(arg))
                lista.add(arg);
             */
        }
    }
}

//import java.io.*; --> O arquivo não compila pois não podemos ter um import após a definição de uma classe.

class E {
    /*
    public boolean existe(String nome) {
        File f = new File(nome);
        return f.exists();
    }
    */
}