-- Create the table
CREATE TABLE submissions (
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT,
  message TEXT
);

-- Insert fake data
INSERT INTO submissions (name, email, message)
VALUES
  ('Alex', 'alex@email.com', 'I love your product!'),
  ('SpammySam', 'promo@deals.biz', 'Buy now for free bitcoin!!!'),
  ('Jordan', 'jordan@aol.com', 'Thanks, good support!'),
  ('BotBot', 'click@spam.net', 'Click now, free crypto gift!');
