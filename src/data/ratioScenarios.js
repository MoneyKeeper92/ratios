// src/data/ratioScenarios.js

const ratioScenarios = [
  // ===== LEVEL 1: BASIC CALCULATIONS WITH IRRELEVANT DATA =====
  
  // Liquidity Ratios
  {
    id: "RA-L1-CUR-01",
    topic: "ratio",
    level: 1,
    ratioType: "current",
    category: "Liquidity",
    financials: [
      { label: "Long Term Debt", value: 120000 },
      { label: "Current Assets", value: 180000 },
      { label: "Net Sales", value: 320000 },
      { label: "Current Liabilities", value: 90000 },
      { label: "Total Assets", value: 450000 },
      { label: "Net Income", value: 25000 }
    ],
    task: "Calculate the current ratio (round to 2 decimal places).",
    solution: { 
      type: "numeric", 
      value: 2.00, 
      tolerance: 0.01 
    },
    explanation: "### Theory: Current Ratio Analysis\nThe current ratio measures a company's ability to pay short-term obligations with short-term assets. It's calculated as Current Assets ÷ Current Liabilities. A ratio above 1.0 indicates the company has more current assets than current liabilities.\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Current Assets:** $180,000\n- **Current Liabilities:** $90,000\n\nThe other data (long-term debt, net sales, total assets, net income) are irrelevant for this calculation.\n\n### Calculation\n```text\nCurrent Ratio = Current Assets ÷ Current Liabilities\n              = $180,000 ÷ $90,000\n              = 2.00\n```\n\n### Interpretation\nA current ratio of 2.00 means the company has $2.00 of current assets for every $1.00 of current liabilities, indicating strong short-term liquidity.",
    successMessage: "Correct! A current ratio of 2.00 indicates strong short-term liquidity."
  },

  {
    id: "RA-L1-QUI-01", 
    topic: "ratio",
    level: 1,
    ratioType: "quick",
    category: "Liquidity",
    financials: [
      { label: "Operating Expenses", value: 150000 },
      { label: "Cash", value: 25000 },
      { label: "Long Term Debt", value: 100000 },
      { label: "Short Term Investments", value: 15000 },
      { label: "Current Liabilities", value: 80000 },
      { label: "Accounts Receivable", value: 40000 },
      { label: "Total Assets", value: 345000 },
      { label: "Inventory", value: 35000 },
      { label: "Gross Sales", value: 400000 }
    ],
    task: "Calculate the quick ratio (acid-test ratio) (round to 2 decimal places).",
    solution: { 
      type: "numeric", 
      value: 1.00, 
      tolerance: 0.01 
    },
    explanation: "### Theory: Quick Ratio (Acid-Test Ratio)\nThe quick ratio is a more stringent test of liquidity than the current ratio. It excludes inventory, focusing only on assets that can be quickly converted to cash.\n\n### Formula\n```text\nQuick Ratio = (Cash + Short-term Investments + Accounts Receivable) ÷ Current Liabilities\n```\n\n### Relevant Information Identification\nFrom the financial data provided, the relevant items are:\n- **Cash:** $25,000\n- **Short-term Investments:** $15,000\n- **Accounts Receivable:** $40,000\n- **Current Liabilities:** $80,000\n\n**Excluded:** Inventory ($35,000) is excluded from the calculation.\n\n### Calculation\n```text\nQuick Assets = $25,000 + $15,000 + $40,000 = $80,000\nQuick Ratio = $80,000 ÷ $80,000 = 1.00\n```\n\n### Interpretation\nA quick ratio of 1.00 means the company can exactly cover its current liabilities with its most liquid assets.",
    successMessage: "Excellent! The quick ratio excludes inventory to focus on the most liquid assets."
  },

  // Activity Ratios
  {
    id: "RA-L1-INV-01",
    topic: "ratio", 
    level: 1,
    ratioType: "inventory_turnover",
    category: "Activity",
    financials: [
      { label: "Current Assets", value: 120000 },
      { label: "Cost Of Goods Sold", value: 240000 },
      { label: "Long Term Debt", value: 80000 },
      { label: "Average Inventory", value: 40000 },
      { label: "Net Sales", value: 360000 },
      { label: "Operating Expenses", value: 85000 }
    ],
    task: "Calculate the inventory turnover ratio (round to 1 decimal place).",
    solution: { 
      type: "numeric", 
      value: 6.0, 
      tolerance: 0.1 
    },
    explanation: "### Theory: Inventory Turnover Analysis\nInventory turnover measures how efficiently a company manages its inventory by showing how many times inventory is sold and replaced over a period. Higher turnover generally indicates efficient inventory management.\n\n### Formula\n```text\nInventory Turnover = Cost of Goods Sold ÷ Average Inventory\n```\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Cost of Goods Sold:** $240,000\n- **Average Inventory:** $40,000\n\nOther data like current assets, long-term debt, net sales, and operating expenses are not needed for this calculation.\n\n### Calculation\n```text\nInventory Turnover = $240,000 ÷ $40,000 = 6.0 times\n```\n\n### Interpretation\nAn inventory turnover of 6.0 means the company sold and replaced its inventory 6 times during the period, which suggests efficient inventory management.",
    successMessage: "Great! Higher inventory turnover generally indicates efficient inventory management."
  },

  {
    id: "RA-L1-AR-01",
    topic: "ratio",
    level: 1, 
    ratioType: "ar_turnover",
    category: "Activity",
    financials: [
      { label: "Total Assets", value: 420000 },
      { label: "Net Credit Sales", value: 480000 },
      { label: "Current Liabilities", value: 75000 },
      { label: "Average Accounts Receivable", value: 60000 },
      { label: "Inventory", value: 80000 },
      { label: "Operating Expenses", value: 140000 }
    ],
    task: "Calculate the accounts receivable turnover ratio (round to 1 decimal place).",
    solution: { 
      type: "numeric", 
      value: 8.0, 
      tolerance: 0.1 
    },
    explanation: "### Theory: Accounts Receivable Turnover Analysis\nAccounts receivable turnover measures how efficiently a company collects its receivables. It shows how many times per period the company collects its average receivables balance.\n\n### Formula\n```text\nA/R Turnover = Net Credit Sales ÷ Average Accounts Receivable\n```\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Net Credit Sales:** $480,000\n- **Average Accounts Receivable:** $60,000\n\n**Note:** We use credit sales, not total sales, because only credit sales create receivables. Total assets, current liabilities, inventory, and operating expenses are irrelevant.\n\n### Calculation\n```text\nA/R Turnover = $480,000 ÷ $60,000 = 8.0 times\n```\n\n### Interpretation\nAn A/R turnover of 8.0 means the company collects its average receivables balance 8 times per year, or approximately every 45.6 days (365 ÷ 8).",
    successMessage: "Perfect! This means the company collects its receivables 8 times per year."
  },

  // Profitability Ratios
  {
    id: "RA-L1-GM-01",
    topic: "ratio",
    level: 1,
    ratioType: "gross_margin", 
    category: "Profitability",
    financials: [
      { label: "Interest Expense", value: 8000 },
      { label: "Cost of Goods Sold", value: 350000 },
      { label: "Current Assets", value: 180000 },
      { label: "Net Sales", value: 500000 },
      { label: "Total Assets", value: 425000 }
    ],
    task: "Calculate the gross profit margin as a decimal (round to 2 decimal places).",
    solution: { 
      type: "numeric", 
      value: 0.30, 
      tolerance: 0.01 
    },
    explanation: "### Theory: Gross Profit Margin Analysis\nGross profit margin measures the portion of revenue that remains after accounting for the cost of goods sold. It reflects the core profitability of a company's products or services.\n\n### Formula\n```text\nGross Profit = Net Sales - Cost of Goods Sold\nGross Profit Margin = Gross Profit / Net Sales\n```\n\n### Relevant Information Identification\nFrom the financial data, the necessary items are:\n- **Net Sales:** $500,000\n- **Cost of Goods Sold:** $350,000\n\nInterest expense and other assets are not used in this calculation.\n\n### Calculation\nFirst, calculate Gross Profit:\n```text\nGross Profit = $500,000 - $350,000 = $150,000\n```\nThen, calculate the Gross Profit Margin:\n```text\nGross Profit Margin = $150,000 / $500,000 = 0.30\n```\n\n### Interpretation\nA gross margin of 0.30 means that for every dollar of sales, the company retains $0.30 after paying for direct production costs. This indicates a healthy pricing strategy and cost control.",
    successMessage: "Correct! A gross margin of 0.30 indicates the company retains 30 cents of every sales dollar after direct costs."
  },

  {
    id: "RA-L1-ROA-01",
    topic: "ratio",
    level: 1,
    ratioType: "roa",
    category: "Profitability", 
    financials: [
      { label: "Net Sales", value: 480000 },
      { label: "Average Total Assets", value: 600000 },
      { label: "Current Liabilities", value: 110000 },
      { label: "Net Income", value: 45000 },
      { label: "Operating Income", value: 72000 }
    ],
    task: "Calculate the return on assets (ROA) as a decimal (round to 3 decimal places).",
    solution: { 
      type: "numeric", 
      value: 0.075, 
      tolerance: 0.001 
    },
    explanation: "### Theory: Return on Assets (ROA) Analysis\nROA measures how efficiently a company uses its assets to generate profit. It shows how much net income is generated per dollar of assets.\n\n### Formula\n```text\nROA = Net Income ÷ Average Total Assets\n```\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Net Income:** $45,000\n- **Average Total Assets:** $600,000\n\nNet sales, current liabilities, and operating income are irrelevant for ROA calculation.\n\n### Calculation\n```text\nROA = $45,000 ÷ $600,000 = 0.075\n```\n\n### Interpretation\nAn ROA of 0.075 means the company generates $0.075 of net income for every dollar of assets, showing reasonable asset efficiency.",
    successMessage: "Excellent! An ROA of 0.075 shows how efficiently the company uses its assets to generate profit."
  },

  // Leverage Ratios
  {
    id: "RA-L1-DE-01",
    topic: "ratio",
    level: 1,
    ratioType: "debt_to_equity",
    category: "Leverage",
    financials: [
      { label: "Cash", value: 35000 },
      { label: "Total Debt", value: 120000 },
      { label: "Net Sales", value: 320000 },
      { label: "Total Equity", value: 180000 },
      { label: "Operating Expenses", value: 85000 }
    ],
    task: "Calculate the debt-to-equity ratio (round to 2 decimal places).",
    solution: { 
      type: "numeric", 
      value: 0.67, 
      tolerance: 0.01 
    },
    explanation: "### Theory: Debt-to-Equity Ratio Analysis\nThe debt-to-equity ratio measures financial leverage by comparing total debt to total equity. It indicates how much debt the company uses relative to equity financing.\n\n### Formula\n```text\nDebt-to-Equity = Total Debt ÷ Total Equity\n```\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Total Debt:** $120,000\n- **Total Equity:** $180,000\n\nCash, net sales, and operating expenses are not relevant for this calculation.\n\n### Calculation\n```text\nDebt-to-Equity = $120,000 ÷ $180,000 = 0.67\n```\n\n### Interpretation\nA debt-to-equity ratio of 0.67 means the company has $0.67 of debt for every dollar of equity, indicating moderate financial leverage.",
    successMessage: "Good work! This indicates moderate financial leverage."
  },
  {
    id: "RA-L1-NPM-01",
    topic: "ratio",
    level: 1,
    ratioType: "net_profit_margin",
    category: "Profitability",
    financials: [
      { label: "Current Assets", value: 250000 },
      { label: "Net Income", value: 36000 },
      { label: "Total Assets", value: 480000 },
      { label: "Net Sales", value: 600000 },
      { label: "Long Term Debt", value: 150000 }
    ],
    task: "Calculate the net profit margin as a decimal (round to 2 decimal places).",
    solution: { 
      type: "numeric", 
      value: 0.06, 
      tolerance: 0.01 
    },
    explanation: "### Theory: Net Profit Margin Analysis\nNet profit margin measures what portion of sales revenue remains as profit after all expenses are paid. It shows the overall profitability and efficiency of the company's operations.\n\n### Formula\n```text\nNet Profit Margin = Net Income ÷ Net Sales\n```\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Net Income:** $36,000\n- **Net Sales:** $600,000\n\nCurrent assets, total assets, and long-term debt are not relevant for this calculation.\n\n### Calculation\n```text\nNet Profit Margin = $36,000 ÷ $600,000 = 0.06\n```\n\n### Interpretation\nA net profit margin of 0.06 means the company keeps $0.06 of every sales dollar as profit after paying all expenses, indicating reasonable overall profitability and cost control.",
    successMessage: "Correct! This shows the company retains 6 cents of every sales dollar as final profit after all expenses."
  },

  // Total Debt Ratio
  {
    id: "RA-L1-TDR-01",
    topic: "ratio",
    level: 1,
    ratioType: "total_debt_ratio",
    category: "Leverage",
    financials: [
      { label: "Net Sales", value: 750000 },
      { label: "Total Liabilities", value: 240000 },
      { label: "Current Assets", value: 180000 },
      { label: "Total Assets", value: 600000 },
      { label: "Operating Expenses", value: 420000 }
    ],
    task: "Calculate the total debt ratio (round to 2 decimal places).",
    solution: { 
      type: "numeric", 
      value: 0.40, 
      tolerance: 0.01 
    },
    explanation: "### Theory: Total Debt Ratio Analysis\nThe total debt ratio measures what proportion of a company's assets are financed by debt. It indicates the company's financial leverage and risk level from a creditor's perspective.\n\n### Formula\n```text\nTotal Debt Ratio = Total Liabilities ÷ Total Assets\n```\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Total Liabilities:** $240,000\n- **Total Assets:** $600,000\n\nNet sales, current assets, and operating expenses are not relevant for this calculation.\n\n### Calculation\n```text\nTotal Debt Ratio = $240,000 ÷ $600,000 = 0.40\n```\n\n### Interpretation\nA total debt ratio of 0.40 means that $0.40 of every asset dollar is financed by debt, indicating moderate leverage. The remaining $0.60 per asset dollar is financed by equity, suggesting a balanced capital structure.",
    successMessage: "Good work! This indicates 40% of assets are financed by debt, showing moderate leverage."
  },

  // Times Interest Earned Ratio
  {
    id: "RA-L1-TIE-01",
    topic: "ratio",
    level: 1,
    ratioType: "times_interest_earned",
    category: "Coverage",
    financials: [
      { label: "Interest Expense", value: 12000 },
      { label: "Current Liabilities", value: 85000 },
      { label: "Earnings Before Interest and Taxes", value: 96000 },
      { label: "Total Equity", value: 320000 },
      { label: "Inventory", value: 55000 }
    ],
    task: "Calculate the times interest earned ratio (round to 1 decimal place).",
    solution: { 
      type: "numeric", 
      value: 8.0, 
      tolerance: 0.1 
    },
    explanation: "### Theory: Times Interest Earned Analysis\nTimes interest earned ratio measures a company's ability to meet its debt obligations by comparing earnings to interest expense. A higher ratio indicates better ability to service debt.\n\n### Formula\n```text\nTimes Interest Earned = Earnings Before Interest and Taxes ÷ Interest Expense\n```\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Earnings Before Interest and Taxes (EBIT):** $96,000\n- **Interest Expense:** $12,000\n\nCurrent liabilities, total equity, and inventory are not relevant for this calculation.\n\n### Calculation\n```text\nTimes Interest Earned = $96,000 ÷ $12,000 = 8.0 times\n```\n\n### Interpretation\nA times interest earned ratio of 8.0 means the company's earnings are 8 times larger than its interest obligations, indicating strong ability to service its debt and low financial risk.",
    successMessage: "Excellent! This shows the company can easily cover its interest payments 8 times over."
  },

  // Return on Equity
  {
    id: "RA-L1-ROE-01",
    topic: "ratio",
    level: 1,
    ratioType: "return_on_equity",
    category: "Profitability",
    financials: [
      { label: "Cost of Goods Sold", value: 280000 },
      { label: "Total Equity", value: 400000 },
      { label: "Net Income", value: 72000 },
      { label: "Current Assets", value: 190000 },
      { label: "Interest Expense", value: 15000 }
    ],
    task: "Calculate the return on equity (ROE) as a decimal (round to 2 decimal places).",
    solution: { 
      type: "numeric", 
      value: 0.18, 
      tolerance: 0.01 
    },
    explanation: "### Theory: Return on Equity Analysis\nReturn on Equity (ROE) measures how effectively a company uses shareholders' equity to generate profit. It shows the return that shareholders earn on their investment in the company.\n\n### Formula\n```text\nROE = Net Income ÷ Total Equity\n```\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Net Income:** $72,000\n- **Total Equity:** $400,000\n\nCost of goods sold, current assets, and interest expense are not relevant for this calculation.\n\n### Calculation\n```text\nROE = $72,000 ÷ $400,000 = 0.18\n```\n\n### Interpretation\nAn ROE of 0.18 means the company generates $0.18 of profit for every dollar of shareholders' equity, indicating strong profitability and efficient use of shareholder investments.",
    successMessage: "Outstanding! This shows excellent returns for shareholders at 18 cents on their equity investment."
  },

  // Earnings Per Share
  {
    id: "RA-L1-EPS-01",
    topic: "ratio",
    level: 1,
    ratioType: "earnings_per_share",
    category: "Per Share Analysis",
    financials: [
      { label: "Total Assets", value: 850000 },
      { label: "Net Income", value: 120000 },
      { label: "Preferred Dividends", value: 8000 },
      { label: "Common Shares Outstanding", value: 25000 },
      { label: "Total Liabilities", value: 380000 }
    ],
    task: "Calculate the basic earnings per share (round to 2 decimal places).",
    solution: { 
      type: "numeric", 
      value: 4.48, 
      tolerance: 0.01 
    },
    explanation: "### Theory: Earnings Per Share Analysis\nEarnings per share (EPS) measures the amount of net income allocated to each outstanding share of common stock. It's a key metric for evaluating a company's profitability on a per-share basis.\n\n### Formula\n```text\nEarnings Per Share = (Net Income - Preferred Dividends) ÷ Common Shares Outstanding\n```\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Net Income:** $120,000\n- **Preferred Dividends:** $8,000\n- **Common Shares Outstanding:** 25,000\n\nTotal assets and total liabilities are not relevant for this calculation.\n\n### Calculation\n```text\nEarnings Available to Common Shareholders = $120,000 - $8,000 = $112,000\nEarnings Per Share = $112,000 ÷ 25,000 = $4.48\n```\n\n### Interpretation\nAn EPS of $4.48 means each share of common stock earned $4.48 in profit during the period. This metric helps investors evaluate the company's profitability relative to their ownership stake.",
    successMessage: "Perfect! Each common share generated $4.48 in earnings for shareholders."
  },




  // Working Capital
  {
    id: "RA-L1-WC-01",
    topic: "ratio",
    level: 1,
    ratioType: "working_capital",
    category: "Liquidity",
    financials: [
      { label: "Current Assets", value: 480000 },
      { label: "Total Assets", value: 920000 },
      { label: "Current Liabilities", value: 180000 },
      { label: "Long Term Debt", value: 220000 },
      { label: "Net Income", value: 65000 }
    ],
    task: "Calculate the working capital.",
    solution: { 
      type: "numeric", 
      value: 300000, 
      tolerance: 1000 
    },
    explanation: "### Theory: Working Capital Analysis\nWorking capital represents the amount of short-term assets remaining after paying all short-term obligations. It measures the company's short-term financial health and operational liquidity.\n\n### Formula\n```text\nWorking Capital = Current Assets - Current Liabilities\n```\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Current Assets:** $480,000\n- **Current Liabilities:** $180,000\n\nTotal assets, long-term debt, and net income are not relevant for this calculation.\n\n### Calculation\n```text\nWorking Capital = Current Assets - Current Liabilities\n                = $480,000 - $180,000\n                = $300,000\n```\n\n### Interpretation\nPositive working capital of $300,000 means the company has $300,000 in current assets remaining after paying all current liabilities. This indicates strong short-term liquidity and the ability to fund operations and growth initiatives.",
    successMessage: "Perfect! Positive working capital of $300,000 indicates strong short-term liquidity."
  },

  


  // Price-to-Earnings Ratio
  {
    id: "RA-L1-PE-01",
    topic: "ratio",
    level: 1,
    ratioType: "price_to_earnings",
    category: "Market Valuation",
    financials: [
      { label: "Price Per Share", value: 42 },
      { label: "Earnings Per Share", value: 3.50 },
      { label: "Dividends Per Share", value: 1.20 },
      { label: "Book Value Per Share", value: 18 },
      { label: "Market Capitalization", value: 1260000 }
    ],
    task: "Calculate the price-to-earnings (P/E) ratio (round to 1 decimal place).",
    solution: { 
      type: "numeric", 
      value: 12.0, 
      tolerance: 0.1 
    },
    explanation: "### Theory: Price-to-Earnings Ratio Analysis\nThe price-to-earnings (P/E) ratio measures how much investors are willing to pay for each dollar of earnings. It's a key valuation metric that reflects market expectations about the company's future growth and profitability.\n\n### Formula\n```text\nPrice-to-Earnings Ratio = Price Per Share ÷ Earnings Per Share\n```\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Price Per Share:** $42\n- **Earnings Per Share:** $3.50\n\nDividends per share, book value per share, and market capitalization are not relevant for this calculation.\n\n### Calculation\n```text\nPrice-to-Earnings Ratio = Price Per Share ÷ Earnings Per Share\n                        = $42 ÷ $3.50\n                        = 12.0\n```\n\n### Interpretation\nA P/E ratio of 12.0 means investors are willing to pay $12 for every $1 of annual earnings. This suggests moderate market expectations for the company's future growth and performance, as it's neither extremely high (growth expectations) nor very low (value/concern).",
    successMessage: "Excellent! A P/E ratio of 12.0 indicates moderate market valuation expectations."
  },
  {
    id: "RA-L1-INVAVG-01",
    topic: "ratio",
    level: 1,
    ratioType: "inventory_turnover_average",
    category: "Activity",
    financials: [
      { label: "Cost Of Goods Sold", value: 840000 },
      { label: "Beginning Inventory", value: 95000 },
      { label: "Net Sales", value: 1200000 },
      { label: "Ending Inventory", value: 125000 },
      { label: "Accounts Receivable", value: 160000 },
      { label: "Total Assets", value: 950000 }
    ],
    task: "Calculate the inventory turnover (round to 1 decimal place).",
    solution: { 
      type: "numeric", 
      value: 7.6, 
      tolerance: 0.1 
    },
    explanation: "### Theory: Inventory Turnover with Average Balance\nInventory turnover measures how efficiently a company manages its inventory. Using average inventory provides a more accurate measure than using only ending inventory, as it accounts for fluctuations throughout the period.\n\n### Formula\n```text\nInventory Turnover = Cost of Goods Sold ÷ Average Inventory\n\nAverage Inventory = (Beginning Inventory + Ending Inventory) ÷ 2\n```\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Cost of Goods Sold:** $840,000\n- **Beginning Inventory:** $95,000\n- **Ending Inventory:** $125,000\n\nNet sales, accounts receivable, and total assets are not relevant for this calculation.\n\n### Step-by-Step Calculation\n\n**Step 1: Calculate Average Inventory**\n```text\nAverage Inventory = (Beginning Inventory + Ending Inventory) ÷ 2\n                  = ($95,000 + $125,000) ÷ 2\n                  = $220,000 ÷ 2\n                  = $110,000\n```\n\n**Step 2: Calculate Inventory Turnover**\n```text\nInventory Turnover = Cost of Goods Sold ÷ Average Inventory\n                   = $840,000 ÷ $110,000\n                   = 7.6 times\n```\n\n### Interpretation\nAn inventory turnover of 7.6 times means the company sold and replaced its average inventory 7.6 times during the period. This indicates efficient inventory management, with inventory turning over approximately every 48 days (365 ÷ 7.6).",
    successMessage: "Excellent! You correctly calculated the average inventory and turnover ratio."
  },

  // Level 1: Accounts Receivable Turnover with Average Calculation
  {
    id: "RA-L1-ARAVG-01",
    topic: "ratio",
    level: 1,
    ratioType: "ar_turnover_average",
    category: "Activity",
    financials: [
      { label: "Net Credit Sales", value: 1560000 },
      { label: "Beginning Accounts Receivable", value: 180000 },
      { label: "Inventory", value: 240000 },
      { label: "Ending Accounts Receivable", value: 220000 },
      { label: "Cash", value: 85000 },
      { label: "Current Liabilities", value: 195000 }
    ],
    task: "Calculate the accounts receivable turnover ratio (round to 1 decimal place).",
    solution: { 
      type: "numeric", 
      value: 7.8, 
      tolerance: 0.1 
    },
    explanation: "### Theory: Accounts Receivable Turnover with Average Balance\nAccounts receivable turnover measures how efficiently a company collects its receivables. Using average A/R provides a more accurate assessment than using only the ending balance, as receivables fluctuate throughout the period.\n\n### Formula\n```text\nA/R Turnover = Net Credit Sales ÷ Average Accounts Receivable\n\nAverage A/R = (Beginning A/R + Ending A/R) ÷ 2\n```\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Net Credit Sales:** $1,560,000\n- **Beginning Accounts Receivable:** $180,000\n- **Ending Accounts Receivable:** $220,000\n\nInventory, cash, and current liabilities are not relevant for this calculation.\n\n### Step-by-Step Calculation\n\n**Step 1: Calculate Average Accounts Receivable**\n```text\nAverage A/R = (Beginning A/R + Ending A/R) ÷ 2\n            = ($180,000 + $220,000) ÷ 2\n            = $400,000 ÷ 2\n            = $200,000\n```\n\n**Step 2: Calculate A/R Turnover**\n```text\nA/R Turnover = Net Credit Sales ÷ Average A/R\n             = $1,560,000 ÷ $200,000\n             = 7.8 times\n```\n\n### Interpretation\nAn A/R turnover of 7.8 times means the company collects its average receivables balance 7.8 times per year. This translates to collecting receivables approximately every 47 days (365 ÷ 7.8), indicating efficient collection processes.",
    successMessage: "Perfect! You correctly averaged the receivables and calculated the turnover ratio."
  },

  // ===== LEVEL 3: UPDATED RATIO CALCULATIONS =====

  {
    id: "RA-L3-CUR-01",
    topic: "ratio",
    level: 3,
    ratioType: "current_impact",
    category: "Effect Analysis",
    companyName: "Mill Corp",
    financials: [
      { label: "Current Assets", value: 360000 },
      { label: "Current Liabilities", value: 200000 },
      { label: "Inventory Write-Down", value: 40000 }
    ],
    task: "Given the financial data for Mill Corp, what is the updated current ratio if the company writes down inventory by $40,000? (Round to 2 decimal places)",
    solution: { 
      type: "numeric", 
      value: 1.60, 
      tolerance: 0.01 
    },
    explanation: "### Theory: Impact of Asset Write-downs on Current Ratio\nAn inventory write-down reduces current assets while leaving current liabilities unchanged. This decreases the current ratio since the numerator gets smaller while the denominator remains constant.\n\n### Original Position\n```text\nOriginal Current Ratio = $360,000 ÷ $200,000 = 1.80\n```\n\n### Transaction Analysis\n**Transaction:** Write down inventory by $40,000\n- **Effect on Current Assets:** Decrease by $40,000\n- **Effect on Current Liabilities:** No change\n- **Journal Entry:** Dr. Loss on Inventory Write-down $40,000, Cr. Inventory $40,000\n\n### Updated Calculation\n```text\nNew Current Assets = $360,000 - $40,000 = $320,000\nCurrent Liabilities = $200,000 (unchanged)\n\nUpdated Current Ratio = $320,000 ÷ $200,000 = 1.60\n```\n\n### Impact Summary\nThe current ratio decreased from 1.80 to 1.60, a decline of 0.20. Asset write-downs always worsen liquidity ratios because they reduce assets without providing any cash or reducing liabilities.",
    successMessage: "Correct! Asset write-downs reduce the current ratio by decreasing current assets."
  },


  {
    id: "RA-L3-ROA-01",
    topic: "ratio",
    level: 3,
    ratioType: "roa_impact",
    category: "Effect Analysis",
    companyName: "Phoenix Corp",
    financials: [
      { label: "Total Assets", value: 1000000 },
      { label: "Net Income", value: 85000 },
      { label: "Stock Issuance", value: 100000 }
    ],
    task: "Given the financial data for Phoenix Corp, what is the updated ROA as a decimal if the company issues common stock for $100,000 cash? (Round to 3 decimal places)",
    solution: { 
      type: "numeric", 
      value: 0.077, 
      tolerance: 0.001 
    },
    explanation: "### Theory: Impact of Stock Issuance on ROA\nIssuing stock for cash increases total assets immediately but doesn't change current period net income. This creates a dilution effect on ROA since the denominator increases while the numerator stays constant.\n\n### Original Position\n```text\nOriginal ROA = Net Income ÷ Total Assets\n             = $85,000 ÷ $1,000,000\n             = 0.085\n```\n\n### Transaction Analysis\n**Transaction:** Issue stock for $100,000 cash\n- **Effect on Net Income:** No immediate change\n- **Effect on Total Assets:** Increase by $100,000 (cash increase)\n- **Journal Entry:** Dr. Cash $100,000, Cr. Common Stock $100,000\n\n### Updated Calculation\n```text\nNet Income = $85,000 (unchanged)\nNew Total Assets = $1,000,000 + $100,000 = $1,100,000\n\nUpdated ROA = $85,000 ÷ $1,100,000 = 0.077\n```\n\n### Impact Summary\nROA decreased from 0.085 to 0.077. Stock issuances typically depress ROA until the new capital is deployed to generate additional income through profitable investments.",
    successMessage: "Correct! Stock issuances typically decrease ROA in the short term due to asset increase without immediate income impact."
  },

  {
    id: "RA-L3-DE-01",
    topic: "ratio",
    level: 3,
    ratioType: "debt_equity_impact",
    category: "Effect Analysis",
    companyName: "Alpine Corp",
    financials: [
      { label: "Bond Conversion", value: 50000 },
      { label: "Total Equity", value: 500000 },
      { label: "Total Debt", value: 300000 }
    ],
    task: "Given the financial data for Alpine Corp, what is the updated debt-to-equity ratio if the company converts $50,000 of bonds payable to common stock? (Round to 2 decimal places)",
    solution: { 
      type: "numeric", 
      value: 0.45, 
      tolerance: 0.01 
    },
    explanation: "### Theory: Impact of Debt-to-Equity Conversion\nConverting debt to equity simultaneously reduces total debt and increases total equity by the same amount. This improves the debt-to-equity ratio since the numerator decreases and the denominator increases.\n\n### Original Position\n```text\nOriginal Debt-to-Equity = $300,000 ÷ $500,000 = 0.60\n```\n\n### Transaction Analysis\n**Transaction:** Convert $50,000 of bonds payable to common stock\n- **Effect on Total Debt:** Decrease by $50,000\n- **Effect on Total Equity:** Increase by $50,000\n- **Journal Entry:** Dr. Bonds Payable $50,000, Cr. Common Stock $50,000\n\n### Updated Calculation\n```text\nNew Total Debt = $300,000 - $50,000 = $250,000\nNew Total Equity = $500,000 + $50,000 = $550,000\n\nUpdated Debt-to-Equity = $250,000 ÷ $550,000 = 0.45\n```\n\n### Impact Summary\nThe debt-to-equity ratio improved from 0.60 to 0.45, a decrease of 0.15. Debt-to-equity conversions are favorable for leverage ratios because they simultaneously reduce debt and increase equity.",
    successMessage: "Perfect! Debt-to-equity conversions improve leverage ratios."
  },

  

  
  

  // Working Capital - Transaction Impact
  {
    id: "RA-L3-WC-01",
    topic: "ratio",
    level: 3,
    ratioType: "working_capital_impact",
    category: "Liquidity Analysis",
    companyName: "Dynamic Enterprises",
    financials: [
      { label: "Current Assets", value: 540000 },
      { label: "Current Liabilities", value: 240000 },
      { label: "Inventory Purchase", value: 60000 }
    ],
    task: "Given the financial data for Dynamic Enterprises, what is the updated working capital if the company purchases $60,000 of inventory on credit?",
    solution: { 
      type: "numeric", 
      value: 300000, 
      tolerance: 1000 
    },
    explanation: "### Theory: Working Capital Transaction Impact\nWorking capital can be affected by transactions that change current assets or current liabilities. Understanding these impacts is crucial for working capital management.\n\n### Original Position\n```text\nOriginal Working Capital = $540,000 - $240,000 = $300,000\n```\n\n### Transaction Analysis\n**Transaction:** Purchase $60,000 of inventory on credit\n- **Effect on Current Assets:** Increase by $60,000 (inventory increase)\n- **Effect on Current Liabilities:** Increase by $60,000 (accounts payable increase)\n- **Journal Entry:** Dr. Inventory $60,000, Cr. Accounts Payable $60,000\n\n### Updated Calculation\n```text\nNew Current Assets = $540,000 + $60,000 = $600,000\nNew Current Liabilities = $240,000 + $60,000 = $300,000\n\nUpdated Working Capital = $600,000 - $300,000 = $300,000\n```\n\n### Impact Summary\nThe working capital remains unchanged at $300,000. When a transaction increases both current assets and current liabilities by the same amount, working capital stays constant. This demonstrates that purchasing inventory on credit doesn't immediately affect liquidity position.",
    successMessage: "Correct! Purchasing inventory on credit has no net effect on working capital."
  },
  {
    id: "RA-L3-ATAVG-01",
    topic: "ratio",
    level: 3,
    ratioType: "asset_turnover_average",
    category: "Efficiency Analysis",
    companyName: "Growth Dynamics Inc",
    financials: [
      { label: "Net Sales", value: 2800000 },
      { label: "Beginning Total Assets", value: 1650000 },
      { label: "Ending Total Assets", value: 1950000 },
    ],
    task: "Given the financial data for Growth Dynamics Inc, calculate the asset turnover ratio. (Round to 2 decimal places)",
    solution: { 
      type: "numeric", 
      value: 1.56, 
      tolerance: 0.01 
    },
    explanation: "### Theory: Asset Turnover with Average Balance\nAsset turnover measures how efficiently a company uses its assets to generate sales. When companies acquire significant assets during the year, using average total assets provides a more accurate measure of efficiency than using only ending balances.\n\n### Formula\n```text\nAsset Turnover = Net Sales ÷ Average Total Assets\n\nAverage Total Assets = (Beginning Total Assets + Ending Total Assets) ÷ 2\n```\n\n### Business Context Analysis\nGrowth Dynamics Inc acquired $300,000 in new assets during the year, which explains the increase from beginning to ending total assets:\n- **Asset Growth:** $1,950,000 - $1,650,000 = $300,000\n- This matches the stated acquisitions, confirming data consistency\n\n### Step-by-Step Calculation\n\n**Step 1: Calculate Average Total Assets**\n```text\nAverage Total Assets = (Beginning Total Assets + Ending Total Assets) ÷ 2\n                     = ($1,650,000 + $1,950,000) ÷ 2\n                     = $3,600,000 ÷ 2\n                     = $1,800,000\n```\n\n**Step 2: Calculate Asset Turnover**\n```text\nAsset Turnover = Net Sales ÷ Average Total Assets\n               = $2,800,000 ÷ $1,800,000\n               = 1.56 times\n```\n\n### Analysis and Interpretation\n\n**Efficiency Assessment:**\n- Asset turnover of 1.56 indicates the company generates $1.56 of sales for every dollar of average assets\n- This is a reasonable efficiency level, especially considering the significant asset expansion\n\n**Impact of Asset Acquisitions:**\n- Using ending assets only: $2,800,000 ÷ $1,950,000 = 1.44 times\n- Using average assets: 1.56 times\n- The average method shows higher efficiency because it accounts for the fact that new assets weren't productive for the entire year\n\n**Strategic Insights:**\n- The company maintained good asset utilization despite significant expansion\n- New assets will likely improve efficiency in future periods as they reach full productivity\n- Management successfully integrated new assets without major efficiency disruption",
    successMessage: "Excellent! You properly averaged the assets and considered the impact of mid-year acquisitions."
  },

  // ===== LEVEL 4: ADVANCED PROBLEM-SOLVING =====

  {
    id: "RA-L4-TARGET-01",
    topic: "ratio",
    level: 4,
    ratioType: "current_target",
    category: "Problem-Solving",
    task: "Management wants to achieve a current ratio of 2.0. By how much must current liabilities decrease to reach this target? (Assume current assets remain constant)",
    financials: [
      { "label": "Current Assets", "value": 500000 },
      { "label": "Current Liabilities", "value": 300000 }
    ],
    solution: { 
      type: "numeric", 
      value: 50000, 
      tolerance: 100 
    },
    explanation: "### Theory: Working Backwards from Target Ratios\nWhen management sets a target ratio, we can work backwards to determine what changes are needed in the ratio components using algebraic manipulation.\n\n### Given Information\n- **Current Assets:** $500,000 (will remain constant)\n- **Current Liabilities:** $300,000 (to be reduced)\n- **Target Current Ratio:** 2.0\n\n### Current Position\n```text\nCurrent Ratio = $500,000 ÷ $300,000 = 1.67\n```\n\n### Target Calculation\n```text\nTarget: Current Assets ÷ New Current Liabilities = 2.0\n$500,000 ÷ X = 2.0\nX = $500,000 ÷ 2.0 = $250,000\n```\n\n### Required Change\n```text\nRequired Decrease = Current CL - Target CL\n                  = $300,000 - $250,000\n                  = $50,000\n```\n\n### Verification\n```text\nNew Current Ratio = $500,000 ÷ $250,000 = 2.0 ✓\n```\n\n### Implementation Options\nManagement could achieve this by:\n- Paying down short-term debt with cash\n- Converting short-term debt to long-term debt\n- Refinancing current liabilities",
    successMessage: "Perfect! Current liabilities must decrease by $50,000 to achieve the target ratio."
  },

  {
    id: "RA-L4-TREND-01", 
    topic: "ratio",
    level: 4,
    ratioType: "roa_trend",
    category: "Trend Analysis",
    task: "Calculate the 3-year trend in Return on Assets (ROA). What is the ROA for Year 3, as a decimal? (Round to 3 decimal places)",
    financials: [
      { label: "Year 1 Net Income", value: 80000 },
      { label: "Year 1 Total Assets", value: 1000000 },
      { label: "Year 2 Net Income", value: 95000 },
      { label: "Year 2 Total Assets", value: 1100000 },
      { label: "Year 3 Net Income", value: 105000 },
      { label: "Year 3 Total Assets", value: 1250000 }
    ],
    solution: { 
      type: "numeric", 
      value: 0.084, 
      tolerance: 0.001 
    },
    explanation: "### Theory: ROA Trend Analysis\nReturn on Assets measures how efficiently a company uses its assets to generate profit. Analyzing trends helps identify whether management is improving or declining in asset utilization over time.\n\n### Three-Year ROA Calculation\n\n**Year 1 ROA:**\n```text\nROA₁ = $80,000 ÷ $1,000,000 = 0.080\n```\n\n**Year 2 ROA:**\n```text\nROA₂ = $95,000 ÷ $1,100,000 = 0.086\n```\n\n**Year 3 ROA:**\n```text\nROA₃ = $105,000 ÷ $1,250,000 = 0.084\n```\n\n### Trend Analysis\n```text\nYear 1 → Year 2: +0.006 (improving)\nYear 2 → Year 3: -0.002 (declining)\n```\n\n### Detailed Analysis\n- **Asset Growth:** 25% over 3 years ($1,000k to $1,250k)\n- **Income Growth:** 31.25% over 3 years ($80k to $105k)\n- **Efficiency Trend:** Initial improvement followed by slight decline\n\n### Interpretation\nWhile ROA improved from Year 1 to Year 2, it declined slightly in Year 3. The company is growing assets faster than it's growing income in Year 3, suggesting potential inefficiencies in asset deployment or integration challenges from rapid expansion. Management should investigate whether recent asset investments are generating expected returns.",
    successMessage: "Excellent analysis! You've identified both the Year 3 ROA and the concerning trend reversal."
  },



{
  id: "RA-L4-WCT-01",
  topic: "ratio",
  level: 4,
  ratioType: "working_capital_turnover_target",
  category: "Efficiency Analysis",
  task: "Management wants to achieve a working capital turnover ratio of 10.0 times. Given current net sales of $2,400,000, current assets of $450,000, and current liabilities of $150,000, by how much must working capital decrease to reach this target? (Assume net sales remain constant)",
  solution: { 
    type: "numeric", 
    value: 60000, 
    tolerance: 1000 
  },
  explanation: "### Theory: Working Capital Turnover Optimization\nWorking Capital Turnover (Net Sales ÷ Working Capital) measures how efficiently a company uses its working capital to generate sales. A higher ratio indicates more efficient use of working capital.\n\n### Given Information\n- **Net Sales:** $2,400,000 (will remain constant)\n- **Current Assets:** $450,000\n- **Current Liabilities:** $150,000\n- **Target Working Capital Turnover:** 10.0 times\n\n### Current Position Analysis\n```text\nCurrent Working Capital = Current Assets - Current Liabilities\n                        = $450,000 - $150,000\n                        = $300,000\n\nCurrent WC Turnover = $2,400,000 ÷ $300,000 = 8.0 times\n```\n\n### Target Calculation\n```text\nTarget: Net Sales ÷ Target Working Capital = 10.0\n$2,400,000 ÷ X = 10.0\nX = $2,400,000 ÷ 10.0 = $240,000\n```\n\n### Required Change Analysis\n```text\nCurrent Working Capital = $300,000\nTarget Working Capital = $240,000\nRequired Decrease = $300,000 - $240,000 = $60,000\n```\n\n### Efficiency Improvement\n```text\nCurrent Turnover: 8.0 times\nTarget Turnover: 10.0 times\nImprovement: 25% increase in efficiency\nWorking Capital Reduction: 20% decrease needed\n```\n\n### Implementation Strategies\nTo reduce working capital by $60,000, management could:\n\n**Option 1: Reduce Current Assets by $60,000**\n- Accelerate A/R collection\n- Optimize inventory levels\n- Improve cash management\n\n**Option 2: Increase Current Liabilities by $60,000**\n- Negotiate extended payment terms with suppliers\n- Utilize short-term financing more effectively\n\n**Option 3: Combination Approach**\n- Reduce current assets by $30,000\n- Increase current liabilities by $30,000\n\n### Strategic Benefits\nAchieving 10.0x turnover will:\n- Free up $60,000 in cash\n- Improve return on assets\n- Enhance operational efficiency\n- Provide funds for growth investments\n\n### Monitoring Metrics\nTrack key components:\n- A/R turnover (target: faster collection)\n- Inventory turnover (target: leaner inventory)\n- Payables period (target: optimized timing)",
  successMessage: "Excellent! You've calculated that working capital must decrease by $60,000 to achieve the target 10.0x turnover ratio."
},

{
  id: "RA-L4-ITO-01",
  topic: "ratio",
  level: 4,
  ratioType: "inventory_turnover_optimization",
  category: "Inventory Management",
  task: "The company has cost of goods sold of $1,800,000 and currently holds inventory worth $450,000. Management wants to improve inventory turnover from the current level to 6.0 times per year. What should the new inventory balance be to achieve this target?",
  solution: { 
    type: "numeric", 
    value: 300000, 
    tolerance: 2000 
  },
  explanation: "### Theory: Inventory Turnover Optimization\nInventory Turnover (COGS ÷ Average Inventory) measures how efficiently a company manages its inventory. Higher turnover indicates faster inventory movement, improved cash flow, and reduced carrying costs.\n\n### Current Position Analysis\n```text\nCurrent Inventory Turnover = COGS ÷ Average Inventory\n                           = $1,800,000 ÷ $450,000\n                           = 4.0 times per year\n\nEquivalent Days in Inventory = 365 ÷ 4.0 = 91.25 days\n```\n\n### Target Analysis\n```text\nTarget Inventory Turnover = 6.0 times per year\nEquivalent Days in Inventory = 365 ÷ 6.0 = 60.8 days\n```\n\n### Target Inventory Calculation\n```text\nFormula: Inventory Turnover = COGS ÷ Average Inventory\nRearranged: Average Inventory = COGS ÷ Inventory Turnover\n\nTarget Inventory = $1,800,000 ÷ 6.0\n                 = $300,000\n```\n\n### Implementation Impact\n```text\nRequired Inventory Reduction = $450,000 - $300,000 = $150,000\nTurnover Improvement = 6.0 - 4.0 = 2.0 additional turns per year\nDays Improvement = 91.25 - 60.8 = 30.45 days faster\nCash Flow Benefit = $150,000 (one-time improvement)\n```\n\n### Performance Benchmarking\n```text\nCurrent Performance: 4.0 times (Below Industry Average)\nTarget Performance:  6.0 times (Industry Best Practice)\nImprovement Needed:  50% increase in efficiency\n```\n\n### Annual Financial Benefits\n```text\nAssuming 18% annual carrying cost:\nAnnual Savings = $150,000 × 18% = $27,000\n\nThis includes savings from:\n- Reduced warehousing costs\n- Lower insurance and taxes\n- Decreased obsolescence risk\n- Reduced financing costs\n- Improved working capital efficiency\n```\n\n### Implementation Strategy\nTo achieve 6.0x inventory turnover:\n\n**1. Demand Planning Excellence:**\n- Advanced forecasting algorithms\n- Real-time demand sensing\n- Collaborative planning with customers\n- Seasonal trend analysis\n\n**2. Supply Chain Optimization:**\n- Vendor-managed inventory programs\n- Shorter supplier lead times\n- Flexible manufacturing schedules\n- Cross-docking capabilities\n\n**3. Inventory Control Systems:**\n- ABC classification for focused management\n- Economic order quantity optimization\n- Safety stock optimization\n- Automated reorder points\n\n**4. Operational Excellence:**\n- Lean manufacturing principles\n- Quick changeover processes\n- Quality improvements to reduce waste\n- Continuous improvement culture\n\n### Turnover Benchmarks by Industry\n```text\nRetail (Grocery):     12-20 times\nRetail (Apparel):     4-6 times\nManufacturing:        6-12 times\nAutomotive:           8-15 times\nPharmaceuticals:      2-4 times\n```\n\n### Risk Management\n- **Service Level Monitoring:** Maintain 95%+ fill rates\n- **Safety Stock Optimization:** Balance cost vs. stockout risk\n- **Supplier Performance:** Ensure reliable delivery capabilities\n- **Market Volatility:** Build flexibility for demand fluctuations",
  successMessage: "Excellent! You've calculated the optimal inventory level to achieve 6.0x turnover, improving efficiency by 50%."
},


  // ===== LEVEL 2: TRANSACTION ANALYSIS (ENHANCED EXPLANATIONS) =====
  
 

];

export default ratioScenarios;