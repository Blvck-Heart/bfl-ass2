// 1

let regStatus;
let airtimeBalance;
let selectedBundle;
let transaction;

regStatus = "active";
airtimeBalance = 20;
selectedBundle = 2;
transaction = true;

if (regStatus === "inactive" && !transaction && !Number.isFinite(selectedBundle)) {
  console.log("Please activate your sim card!");
  console.log("Transaction failed!");
} else if (!Number.isFinite(selectedBundle)) {
  console.log("Please enter a valid option!");
  console.log("Transaction failed!");
} else {
  console.log("Transaction successful!");
}

// 2 A
let userName;
let phoneNumber;
let bundleCode;
let dataPrice;

userName = "John";
phoneNumber = 8138765242;
bundleCode = [1, 2, 3, 4];
selectedBundle = bundleCode[1];
// dataPrice = [200, 350, 600, 1500];

const data = [
  {
    price: 200,
    dataAmount: "200MB",
  },
  {
    price: 350,
    dataAmount: "1GB",
  },
  {
    price: 600,
    dataAmount: "2GB",
  },
  {
    price: 1500,
    dataAmount: "5GB",
  },
];

// B
switch (selectedBundle) {
  case 1:
    console.log(`Available data is 500MB for N${data[0].price}`);
    break;
  case 2:
    console.log(`Available data is 1GB for N${data[1].price}`);
    break;
  case 3:
    console.log(`Available data is 2GB for N${data[2].price}`);
    break;
  case 4:
    console.log(`Available data is 5GB for N${data[3].price}`);
    break;
  default:
    console.log(`Please select a valid code to purchase your data`);
    break;
}

// C

selectedBundle = 3;
airtimeBalance = 1500;
// dataPrice = dataPrice[0];

let remainingBalance;
remainingBalance = airtimeBalance - data;

if (!bundleCode.includes(selectedBundle)) {
  console.log("Please select an appropriate code.");
} else if (selectedBundle < 0) {
  console.log("Bundle code cannot be negative");
} else if (airtimeBalance < 1000) {
  console.log("Insufficient balance.");
} else {
  console.log("Data purchased successfully.");
  console.log(
    `Dear ${userName}, your selected bundle is ${selectedBundle} and the amount deducted is ${data.price} and your remaining balance is ${remainingBalance}.`,
  );
}

console.log(data[0].price);