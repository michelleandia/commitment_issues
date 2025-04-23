fn main() {
  let numbers = vec![0, 1, 2, 3, 4, 5];

  for number in numbers {
      if number == 0 {
          println!("The number is zero");
       } else if number % 2 == 0 {
          println!("The number is even");
       } else {
         println!("The number is odd");
   }
  }
}
