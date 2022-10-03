let fullName = "Mohamed Abdiaziz", firstName, lastName;
firstName = fullName.slice(0,fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ")+1);
console.log("Last Name is "+lastName);
console.log("first Name is "+firstName);
