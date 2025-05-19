package problems.Heaps;

public class Main {
    public static void main(String[] args) throws Exception {
        Heap<Integer> heap = new Heap<>();
        heap.insert(7);
        heap.insert(8);
        heap.insert(9);
        heap.insert(10);
        heap.insert(11);
        heap.insert(1);

        System.out.println(heap.remove());
        System.out.println(heap.remove());
        System.out.println(heap.remove());

        System.out.println(heap.heapsort());
    }

    
}
