// 1. Even or Odd
let num = 4;
console.log(num % 2 === 0 ? "Even" : "Odd");

// 2. Positive, Negative, or Zero
let n = -5;
console.log(n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero");

// 3. Greater of two numbers
let a = 10, b = 20;
console.log(a > b ? a : b);

// 4. Divisible by 3
let x = 9;
console.log(x % 3 === 0 ? "Divisible by 3" : "Not divisible");

// 5. Multiple of 7
let y = 14;
console.log(y % 7 === 0 ? "Multiple of 7" : "Not a multiple");

// 6. Vowel or Consonant (lowercase)
let ch = 'e';
console.log("aeiou".includes(ch) ? "Vowel" : "Consonant");

// 7. Between 10 and 50
let z = 25;
console.log(z >= 10 && z <= 50 ? "Yes" : "No");

// 8. 3-digit number
let d = 123;
console.log(d >= 100 && d <= 999 ? "3-digit" : "Not 3-digit");

// 9. Voting eligibility
let age = 17;
console.log(age >= 18 ? "Eligible" : "Not eligible");

// 10. Temperature condition
let temp = 12;
console.log(temp > 30 ? "Hot" : temp >= 15 ? "Moderate" : "Cold");
// 11. Greatest of three numbers
let a1 = 10, a2 = 25, a3 = 15;
console.log(Math.max(a1, a2, a3));

// 12. Leap Year
let year = 2024;
console.log((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? "Leap Year" : "Not Leap Year");

// 13. Character type
let char = '#';
if (char >= 'A' && char <= 'Z') console.log("Uppercase");
else if (char >= 'a' && char <= 'z') console.log("Lowercase");
else if (char >= '0' && char <= '9') console.log("Digit");
else console.log("Special Character");

// 14. Grade system
let marks = 85;
console.log(marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 60 ? "C" : marks >= 40 ? "D" : "F");

// 15. Weekday by number
let day = 3;
let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(day >= 1 && day <= 7 ? weekdays[day - 1] : "Invalid");

// 16. Divisible by both 5 and 11
let val = 55;
console.log(val % 5 === 0 && val % 11 === 0 ? "Yes" : "No");

// 17. Prime number
let prime = 7, isPrime = true;
if (prime < 2) isPrime = false;
for (let i = 2; i <= Math.sqrt(prime); i++) {
    if (prime % i === 0) isPrime = false;
}
console.log(isPrime ? "Prime" : "Not Prime");

// 18. Driving license check
let userAge = 20, userName = "Alex";
console.log(userAge >= 18 ? `${userName} can apply for license` : "Not eligible");

// 19. Compare two numbers
let p = 7, q = 7;
console.log(p === q ? "Equal" : p > q ? `${p} is greater` : `${q} is greater`);

// 20. Even/Odd + Pos/Neg
let m = -4;
console.log(m % 2 === 0 ? "Even" : "Odd", m >= 0 ? "Positive" : "Negative");

// 21. Average & Grade
let s1 = 80, s2 = 70, s3 = 90, s4 = 60, s5 = 85;
let avg = (s1 + s2 + s3 + s4 + s5) / 5;
let grade = avg >= 90 ? 'A' : avg >= 75 ? 'B' : avg >= 60 ? 'C' : avg >= 40 ? 'D' : 'F';
console.log("Average:", avg, "Grade:", grade);

// 22. Divisible by 3 or 5 but not both
let n2 = 15;
console.log((n2 % 3 === 0) ^ (n2 % 5 === 0) ? "Yes" : "No");

// 23. Palindrome number
let pal = 121, rev = 0, orig = pal;
while (pal > 0) {
    rev = rev * 10 + pal % 10;
    pal = Math.floor(pal / 10);
}
console.log(orig === rev ? "Palindrome" : "Not Palindrome");

// 24. Sum of digits even or odd
let num2 = 123, sum = 0, temp2 = num2;
while (temp2 > 0) {
    sum += temp2 % 10;
    temp2 = Math.floor(temp2 / 10);
}
console.log(sum % 2 === 0 ? "Even" : "Odd");

// 25. Overtime pay
let hours = 45;
console.log(hours > 40 ? `Overtime Pay: Rs. ${(hours - 40) * 12}` : "No Overtime");

// 26. Net Salary
let basic = 12000, HRA, DA;
if (basic < 10000) {
    HRA = basic * 0.2;
    DA = basic * 0.5;
} else {
    HRA = basic * 0.3;
    DA = basic * 0.8;
}
let netSalary = basic + HRA + DA;
console.log("Net Salary:", netSalary);

// 27. Days in month
let month = 2;
let days = month === 2 ? 28 : [4, 6, 9, 11].includes(month) ? 30 : 31;
console.log("Days:", days);

// 28. Strong password check
let password = "Passw@rd9";
let strong = password.length >= 8 && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password);
console.log(strong ? "Strong Password" : "Weak Password");

// 29. Triangle type
let side1 = 5, side2 = 5, side3 = 5;
let valid = side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2;
if (!valid) console.log("Invalid Triangle");
else if (side1 === side2 && side2 === side3) console.log("Equilateral");
else if (side1 === side2 || side2 === side3 || side1 === side3) console.log("Isosceles");
else console.log("Scalene");

// 30. Mini login system
let storedUser = "admin", storedPass = "12345";
let inputUser = "admin", inputPass = "12345";
console.log(inputUser === storedUser && inputPass === storedPass ? "Login Successful" : "Login Failed");
