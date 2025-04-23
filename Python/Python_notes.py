#7modern7weeks

#Python notes and examples form the 7 languages 7 weeks course  


# Variables
submission_count = 3

# Conditionals
if submission_count > 5:
    print("Too many submissions. Try again later.")
elif submission_count == 0:
    print("No submissions yet.")
else:
    print("Submission accepted.")

# Loops
emails = ["alice@example.com", "bob@example.com", "spam@fake.com"]

# For Loop
for email in emails:
    print("Sending confirmation to:", email)

# While Loop
attempts = 0
while attempts < 3:
    print("Checking server...")
    attempts += 1

# Functions
def is_valid_email(email):
    return "@" in email and "." in email

print(is_valid_email("hello@example.com"))  # True
print(is_valid_email("nope"))              # False

# Scope
def submit_form(name):
    greeting = f"Hello {name}"
    return greeting

print(submit_form("Michelle"))
