// ===============================
// Budget Tracker – Week 1 START
// ===============================

// In deze startversie:
// - Er is al HTML aanwezig
// - Er is al voorbeelddata
// - De transacties worden getoond
//
// JIJ moet nog:
// - Het formulier werkend maken
// - Een nieuwe transactie toevoegen aan de array
// - Zorgen dat de pagina niet refresht bij submit
// - Zorgen de transacties worden getoond

// 1. Voorbeelddata (hier ga je straks nieuwe transacties aan toevoegen)
const transactions = [
  {
    id: "tx_1",
    date: "2026-01-10",
    amount: 12.5,
    type: "expense",
    category: "food"
  }
];

// 2. Selecteer HTML-elementen
const form = document.getElementById("txForm");
const listEl = document.getElementById("txList");

// 3. Deze functie laat transacties zien in de lijst
function renderTransactions() {
  
}

//4. Deze functie is een event listener



// ===============================
// TODO (DIT MOET JIJ MAKEN):
// ===============================
// - Voeg een submit event listener toe aan het formulier
// - Gebruik e.preventDefault()
// - Lees de values uit de inputs
// - Maak een nieuw transactie-object
// - Voeg deze toe aan de transactions array
// - Maak renderTransactions af
