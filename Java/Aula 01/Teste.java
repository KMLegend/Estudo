
class Pessoa {
    static int x = 0;

    public static void setX(int x) {
        Pessoa.x = x;
    }

    int y = 0;

    public void setY(int y) {
        this.y = y;
    }
}
class X {
    int a = 10;
    public void metodo() {
        int a = 20;
        System.out.println(a);
    }
}

public class Teste {
    public static void main(String[] args){
        new X().metodo();

    }

}





/*

class Pessoa {
    static int id = 1;
    static void metodo(){

        System.out.println(id);
    }

}

public class Teste {

    public static void main(String[] args){
        
        /*Pessoa p = new Pessoa();

        System.out.println(p.id);
        System.out.println(Pessoa.id);

        Pessoa.metodo();
    }
    

    String nome = "Kevin";
    String nomeCompleto = nome + " " + "Maykel";

    public Teste(){
        System.out.println(nome);
    }

    public void m2(){
        System.out.println(nomeCompleto);
    }
    
    public static void main(String[] args) {
        Teste t = new Teste();
        t.m2();

        t.nome = "joao";
        System.out.println(t.nome);
    }
     

}

*/