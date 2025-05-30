const fs = require('fs');

const employees = [
  { name: "Alice", isActive: true, submittedTimesheet: true },
  { name: "Bob", isActive: false, submittedTimesheet: false },
  { name: "Charlie", isActive: true, submittedTimesheet: false },
  { name: "Diana", isActive: true, submittedTimesheet: true },
  { name: "Edward", isActive: true, submittedTimesheet: false },
  { name: "Sarah", isActive: true, submittedTimesheet: true },
  { name: "Brian", isActive: false, submittedTimesheet: true },
  { name: "Evan", isActive: true, submittedTimesheet: false },
  { name: "Devon", isActive: true, submittedTimesheet: false },
  { name: "Elizabeth", isActive: true, submittedTimesheet: true }
];

// ✅ Step 1: Filter employees who are active and submitted on time
const onTimeEmployees = employees.filter(emp => emp.isActive && emp.submittedTimesheet);

// ✅ Step 2: Create summary lines
const summaryLines = onTimeEmployees.map(emp => {
  return `${emp.name} submitted on time.`;
});

// ✅ Step 3: Join summary into a single string
const finalSummary = summaryLines.join("\n");

// ✅ Step 4: Log to preview
console.log(finalSummary); // optional

// ✅ Step 5: Write to file
fs.writeFile('weekly_summary.txt', finalSummary, (err) => {
  if (err) {
    console.error("❌ Error writing file:", err);
  } else {
    console.log("✅ Summary successfully written to weekly_summary.txt");
  }
});
