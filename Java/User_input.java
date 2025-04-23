import java.util.Scanner;
public class User_input {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter your age:");
        int age = scanner.nextInt();

        if (age >= 18) {
            System.out.println("Access granted");
        } else if (age >= 13 && age < 18) {
            System.out.println("Access granted with restrictions");
        } else {
            System.out.println("Access denied");
        }
        scanner.close();
      }
    }

