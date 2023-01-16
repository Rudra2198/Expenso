import Expenses from "./Components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 250,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "OTT Subscription",
      amount: 999,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 749,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 549,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
