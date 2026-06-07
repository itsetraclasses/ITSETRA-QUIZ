export const questions = [
  {
    prompt: "What will be the Operating Ratio of Zenia Ltd. from the following particulars? Revenue from Operations ₹9,00,000; Gross Profit 20% on Cost; Operating Expenses ₹60,000.",
    hint: "Operating Ratio = (Cost of Revenue from Operations + Operating Expenses) / Revenue from Operations × 100",
    choices: ["85%", "86.67%", "88%", "90%"],
    answer: 1,
    explanation: "GP = 20% of cost. Cost = ₹7,50,000. Operating Ratio = (7,50,000 + 60,000)/9,00,000 ×100 = 86.67%."
  },
  {
    prompt: "What will be the Operating Profit Ratio of Gama Ltd.? Net Revenue from Operations ₹14,00,000; Gross Profit ₹9,00,000; Operating Expenses ₹75,000; Commission Received ₹5,000; Profit on Sale of Fixed Asset ₹10,000.",
    hint: "Ignore non-operating incomes.",
    choices: ["58.93%", "60.00%", "62.50%", "64.29%"],
    answer: 1,
    explanation: "Operating Profit = 9,00,000 − 75,000 = ₹8,25,000. Ratio = 8,25,000/14,00,000 ×100 = 58.93%."
  },
  {
    prompt: "Calculate Trade Receivables Turnover Ratio: Opening Debtors ₹50,000; Cash Received from Debtors ₹2,20,000; Closing Debtors ₹30,000.",
    hint: "Credit Sales = Cash received + Closing Debtors − Opening Debtors.",
    choices: ["5 times", "5.5 times", "6 times", "6.5 times"],
    answer: 2,
    explanation: "Credit Sales = 2,20,000 + 30,000 − 50,000 = ₹2,00,000. Average Debtors = ₹40,000. Ratio = 2,00,000/40,000 = 5 times."
  },
  {
    prompt: "Calculate Trade Receivables Turnover Ratio: Revenue from Operations ₹12,00,000; Cash Revenue from Operations = 25% of Credit Revenue; Gross Debtors ₹1,90,000; Bills Receivable ₹50,000; Provision for Doubtful Debts ₹10,000.",
    hint: "Trade Receivables = Debtors + Bills Receivable.",
    choices: ["4 times", "4.5 times", "5 times", "5.45 times"],
    answer: 3,
    explanation: "Credit Sales = ₹9,60,000. Trade Receivables = 1,90,000 + 50,000 = ₹2,40,000. Ratio = 9,60,000/2,40,000 = 4 times."
  },
  {
    prompt: "During the year ended 31.03.2021, Soma Ltd. earned Net Profit after Tax ₹6,00,000. Long-term Debt ₹50,00,000 @10%. Tax Rate 40%. What is the Interest Coverage Ratio?",
    hint: "ICR = EBIT / Interest.",
    choices: ["2.5 times", "3 times", "3.8 times", "4 times"],
    answer: 1,
    explanation: "Interest = ₹5,00,000. PBT = 6,00,000/0.6 = ₹10,00,000. EBIT = 10,00,000 + 5,00,000 = ₹15,00,000. ICR = 15,00,000/5,00,000 = 3 times."
  },
  {
    prompt: "The Debt-Equity Ratio of a company is 1.7:1. Which transaction will reduce the Debt-Equity Ratio?",
    hint: "Think of reducing debt or increasing equity.",
    choices: [
      "Purchase fixed assets on long-term credit",
      "Issue equity shares for cash",
      "Take a bank loan",
      "Redeem preference shares from cash"
    ],
    answer: 1,
    explanation: "Issue of equity shares increases shareholders' funds and reduces the Debt-Equity Ratio."
  },
  {
    prompt: "Gross Profit Ratio of a company is 25%. Revenue from Operations is ₹60,00,000. Find Gross Profit.",
    hint: "GP = Revenue × GP Ratio.",
    choices: ["₹12,00,000", "₹15,00,000", "₹18,00,000", "₹20,00,000"],
    answer: 1,
    explanation: "Gross Profit = 25% × ₹60,00,000 = ₹15,00,000."
  },
  {
    prompt: "If selling price is fixed 25% above cost, the Gross Profit Ratio is:",
    hint: "GP Ratio = GP / Sales ×100.",
    choices: ["20%", "25%", "30%", "33.33%"],
    answer: 0,
    explanation: "Assume Cost = ₹100. Sales = ₹125. GP = ₹25. GP Ratio = 25/125 ×100 = 20%."
  },
  {
    prompt: "A company earns ₹6,25,000 in a quarter and pays interest of ₹30,000 per month. The ratio calculated by lenders is 6.94. What is this ratio called?",
    hint: "Measures ability to pay interest.",
    choices: [
      "Debt-Equity Ratio",
      "Current Ratio",
      "Interest Coverage Ratio",
      "Debt Service Coverage Ratio"
    ],
    answer: 2,
    explanation: "Quarterly interest = ₹90,000. Ratio = 6,25,000/90,000 = 6.94. This is Interest Coverage Ratio."
  },
  {
    prompt: "Net Revenue from Operations ₹4,00,000; Average Inventory ₹50,000; Gross Loss on Sales 25%. Find Inventory Turnover Ratio.",
    hint: "Cost of Goods Sold = Sales + Gross Loss.",
    choices: ["8 times", "9 times", "10 times", "12 times"],
    answer: 2,
    explanation: "Gross Loss = 25% of ₹4,00,000 = ₹1,00,000. COGS = ₹5,00,000. Inventory Turnover Ratio = 5,00,000/50,000 = 10 times."
  }
];
