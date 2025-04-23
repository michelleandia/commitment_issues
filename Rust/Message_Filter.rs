fn main() {
  let messages = vec![
    "I love your product, thanks for the support!",
    "Click here for a free crypto gift!",
    "Can you help me reset my password?",
    "Buy one, get one free — limited time offer!",
    "Hello, I’m interested in a bulk order. Please advise.",
    "WIN A NEW PHONE! Just click this link!",
    "Free gift with every subscription!",
    "Thanks again, your customer service was excellent.",
    "Where can I download the invoice?",
    "Click to claim your free reward now!"];
   
    for message in messages {
        let lowercase = message.to_lowercase();
        if lowercase.contains("free") {
            println!("Spam detected:{}", message);
        } else if lowercase.contains("click here") {
            println!("Spam detected:{}", message);
        } else if lowercase.contains("win a new phone") {
            println!("Spam detected:{}", message);
        } else if lowercase.contains("bulk order") {
            println!("Spam detected:{}", message);
        } else if lowercase.contains("customer service") {
            println!("Spam detected:{}", message);
        } else {
            println!("No spam detected: {}", message);
    }
}
}