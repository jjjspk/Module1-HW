const peopleObj1 = { name: "John", surname: "Doe" }
const peopleObj2 = { name: "Sarah", surname: "Wilson" }
const peopleObj3 = { name: "David", surname: "Brown" }

if (peopleObj1.name.toLowerCase() === peopleObj2.name.toLowerCase() && peopleObj1.name.toLowerCase() === peopleObj3.name.toLowerCase()); {
    console.log(peopleObj2);
}