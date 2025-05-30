const employees = [
  { name: "Alice", isActive: true, submittedTimesheet: true },
  { name: "Bob", isActive: false, submittedTimesheet: false },
  { name: "Charlie", isActive: true, submittedTimesheet: false },
  { name: "Diana", isActive: true, submittedTimesheet: true },
  { name: "Edward", isActive: true, submittedTimesheet: false }
];

function sendReminders(employees) {
  const pending = employees.filter(emp =>
    emp.isActive && !emp.submittedTimesheet
  );

  pending.forEach(emp => {
    console.log(`⏰ Reminder: ${emp.name}, please submit your timesheet.`);
  });
}

sendReminders(employees);
