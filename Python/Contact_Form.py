#Contact Form Processor Logic 

#Define Funciton to validate email
def is_valid_email(email):
    return "@" in email and "." in email and not email.endswith(".xyz")

#Define Spam function
def is_spammy_name(name):
    spam_keywords = ["buy now", "free", "click here"]
    name_lower = name.lower()
    return any(keyword in name_lower for keyword in spam_keywords)


#Simulate incoming form submissions
submissions = [
    {"name":"Chris", "email": "chris@example.com"},
    {"name":"Buy now cheap leads", "email": "spam@cheap.xyz"},
    {"name":"Sam", "email": "sam_domain.com"},
    {"name":"Bot", "email": "notanemail"}
]

#Process each submission
for submission in submissions:
    name = submission["name"]
    email = submission["email"]

    print(f"📩 Reviewing submission from: {name} | {email}")

    if not is_valid_email(email):
        print("  ❌ Invalid email. Rejected.")
        continue

    if is_spammy_name(name):
        print("  🚫 Detected spammy name. Rejected.")
        continue

    print("  ✅ Submission accepted!\n")