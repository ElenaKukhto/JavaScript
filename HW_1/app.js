// 1. Create a variable "item_1"
// 2. Assign the number 5 to the item_1 variable.
// 3. Output item_1 to the console.

let item_1 = 5;
console.log(item_1);

// 4. Create a variable "item_2".
// 5. Assign number 3 to the item_2 variable.
// 6. Output item_2 to the console.

let item_2 = 3;
console.log(item_2);

// 7. Create a variable "item_3".
// 8. Assign the item_3 variable to the addition of item_1 and item_2.
// 9. Output item_3 to the console.

let item_3 = item_1 + item_2;
console.log(item_3);

// 10. Create a variable "item_4".
// 11. Assign the string "Yolochka" to the item_4 variable.
// 12. Output item_4 to the console.

let item_4 = "Yolochka";
console.log(item_4);

// 13. Output the addition of item_3 and item_4 to the console.

let result1 = item_3 + item_4;
console.log(result1);

// 14. Output the multiplication of item_3 and item_4 to the console.

let result = item_3 * item_4;
console.log(result);

// 15. Create a variable "item_5".
// 16. Assign the item_5 variable to the item_3 variable
// 17. Create a variable item_6.
// 18. Create a variable item_6_type.
// 19. Assign value 15 to item_6.
// 20. Assign the item_6_type variable type to the item_6 variable
// 21. Output the item_6 data type to the console as -- "item_6 == " item_6, "item_6_type == " item_6_type --.  

let item_5 = item_3;
let item_6 = 15;
let item_6_type = item_6;
console.log("item_6==", item_6, "item_6_type==", item_6_type);

// 22. Create an item_7 variable and convert item_6 to String in it.
// 23. Create item_7_type variable
// 24. Assign to the item_7_type variable the item_7 variable type.
// 25. Output the item_7 data type to the console as -- "item_7 == " item_7, "item_7_type == " item_7_type --.  
// 26. Create the variable "age_1" and assign a value of 10 to it

let item_7 = String(item_6);
let item_7_type = item_7;
console.log("item_7 ==", item_7, "item_7_type ==", item_7_type);

// 27. Create the variable "age_2" and assign a value of 18
// 28. Create the variable "age_3" and set its value to 60
// 29. Create an if in which you will check the value of the variable age_1

let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

// 30. If age_1 < age_2, output to the console "You don't have access cause your age is " + age_1 + " It's less then ".
// 31. If age_1 >= age_2 and age_1 < age_3, output to the console "Welcome !
// 32. If age_1 > age_3, output "Keep calm and look Culture channel" to the console.
// 33. Otherwise, output "Technical work".
 
 if (age_1 < age_2){
console.log("You don't have access cause your age is", + age_1 + "It's less then");
 }
 if (age_1 >= age_2 && age_1 < age_3){
    console.log("Welcome!")
 }
 else if (age_1 > age_3){
    console.log("Keep calm and look Culture channel!")
 }
 else {
    console.log("Technical work")
 }

 