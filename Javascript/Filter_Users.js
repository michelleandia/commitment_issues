const users = [
  { name: "Alice", isLoggedIn: true, hasUnreadMessages: true },
  { name: "Bob", isLoggedIn: false, hasUnreadMessages: false },
  { name: "Charlie", isLoggedIn: true, hasUnreadMessages: false },
  { name: "Diana", isLoggedIn: true, hasUnreadMessages: true },
];

const activeUnreadUsers = users.filter(user => user.isLoggedIn && user.hasUnreadMessages);

activeUnreadUsers.forEach(user => {
  console.log(`${user.name}, please check your unread messages.`);
});
