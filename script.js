// Selectors
const billAmount = document.getElementById("billamount");
const tipPercentage = document.getElementById("tippercentage");
const tipAmount = document.getElementById("tipamount");
const totalBill = document.getElementById("totalbill");
const calculateBtn = document.getElementById("calculate");

// Event Listeners
calculateBtn.addEventListener('click', sum);

// Functions
function sum(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Prevent empty input
  if (billAmount.value == '') {
    alert('you must to fill Bill Amount!');
  } else if (tipPercentage.value == '') {
    alert('you must to fill Tip Percentage!')
  } else {
    // Returns Bill Amount Input Value
    const amount = Number(billAmount.value);
    // Returns Bill Amount Input Value
    const per = Number(tipPercentage.value);
    // Calculate Tip Amount
    const tip = amount * per / 100;
    tipAmount.value = tip;
    // Calculate Total Bill
    const total = amount + tip;
    totalBill.value = total;
  };
}