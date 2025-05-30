const user = {
  isLoggedIn: true,
  hasUnreadMessages: true,
  wantsEmailAlerts: false,
  isAdmin: true
};
function getUserNotification(user) {
  if (!user.isLoggedIn) {
  console.log("🔐 Please log in to view your dashboard.");
}
else if (user.hasUnreadMessages && user.wantsEmailAlerts) {
  console.log("📧 You have unread messages. Check your inbox!");
}
else if (user.hasUnreadMessages && !user.wantsEmailAlerts) {
  console.log("🙅 You have unread messages, but email alerts are off.");
}
else {
  console.log("✅ No new notifications.");
}
if (user.isAdmin) {
  console.log("🛠 You have admin privileges.");
}

  // We'll write our logic here
}
getUserNotification(user);
