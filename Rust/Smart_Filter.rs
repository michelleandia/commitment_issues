fn main() {
  let messages = vec![
    "I love your product, thanks for the support!",
    "Click here for a free crypto gift!",
    "Can you help me reset my password?",
    "Buy one, get one free — limited time offer!",
    "Hello, I’m interested in a bulk order. Please advise.",
    "WiN a NeW pHoNe Just click this link!",
    "Free gift with every subscription!",
    "Thanks again, your customer service was excellent.",
    "Where can I download the invoice?",
    "Click to claim your free reward now!"];

    let indicators = vec![
        "free",
        "click here",
        "win",
        "reward",
        "limited",
        "offer",
        "urgent",
        "gift",
    ];
    for message in messages {
        let lowercase = message.to_lowercase();
        let mut spam_detected = false;
        for indicator in &indicators {
            if lowercase.contains(indicator) {
                println!("Spam detected: {}", message);
                spam_detected = true;
                break;
            }
        }
        if !spam_detected {
            println!("No spam detected: {}", message);
        }
    }
  }