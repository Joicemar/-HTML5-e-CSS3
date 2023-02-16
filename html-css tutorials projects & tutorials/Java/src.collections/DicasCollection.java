import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;

public class DicasCollection{
    public static void main(String[] args) {
        
        ArrayList<String> pokemons = new ArrayList<>();
        pokemons.add("C");
        pokemons.add("B");
        pokemons.add("A");
        System.out.println(pokemons);
        
        /*Ordenas uma lista com Collections por ordem alfabetica*/
        Collections.sort(pokemons);
        System.out.println(pokemons);
        
        pokemons.add("B");
        System.out.println(pokemons);

        /*Remover Elelemtos duplicados*/
        HashSet<String> listaNaoDuplicada = new HashSet<>(pokemons);
        System.out.println(listaNaoDuplicada);
    }
}