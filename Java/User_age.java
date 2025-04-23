public class User_age {
    public static void main(String[] args) {
      int age =15;

      if (age>= 18) {
        System.out.println("Access granted");
      } else if (age >= 13 && age <18) {
        System.out.println("Access Granted with restrictions");
      } else {
        System.out.println("Access denied");
      }      
    }
}