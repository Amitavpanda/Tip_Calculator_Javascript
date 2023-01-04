console.log("working");

const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const noOfPeopleDiv = document.getElementById("noOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");

let numberOfPeople = Number(noOfPeopleDiv.innerText);
const calculateBill = () => {
    const billAmount = Number(billInput.value);
    const tipPercentage = Number(tipInput.value) / 100;

    const tipAmount = billAmount * tipPercentage;

    const total = tipAmount + billAmount;

    const perPerson = total / numberOfPeople;
    perPersonTotal.innerText = `$${perPerson.toFixed(2)}`;
};

const increasePeople = () => {
    numberOfPeople += 1;
    noOfPeopleDiv.innerText = numberOfPeople;
    calculateBill();
};

const decreasePeople = () => {
    if (numberOfPeople <= 1) {
        return;
    }
    numberOfPeople -= 1;
    noOfPeopleDiv.innerText = numberOfPeople;
    calculateBill();
};