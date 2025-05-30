const users = [
  { name: "Alice", isLoggedIn: true, hasUnreadMessages: true },
  { name: "Bob", isLoggedIn: false, hasUnreadMessages: false },
  { name: "Charlie", isLoggedIn: true, hasUnreadMessages: false },
  { name: "Diana", isLoggedIn: true, hasUnreadMessages: true }
];

function notifyUser(user) {
  if (!user.isLoggedIn) {
    console.log(`${user.name} is not logged in.`);
  } else if (user.hasUnreadMessages) {
    console.log(`${user.name}, you have unread messages.`);
  } else {
    console.log(`${user.name}, no new notifications.`);
  }
}

// Loop through each user
for (const user of users) {
  notifyUser(user);
} 