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
    financials: { 
      // Relevant data
      currentAssets: 180000, 
      currentLiabilities: 90000,
      // Irrelevant data to test student focus
      totalAssets: 450000,
      longTermDebt: 120000,
      commonStock: 100000,
      retainedEarnings: 140000,
      netSales: 320000,
      netIncome: 25000,
      costOfGoodsSold: 200000,
      operatingExpenses: 180000,
      propertyPlantEquipment: 270000
    },
    task: "Calculate the current ratio (round to 2 decimal places).",
    solution: { 
      type: "numeric", 
      value: 2.00, 
      tolerance: 0.01 
    },
    explanation: "### Theory: Current Ratio Analysis\nThe current ratio measures a company's ability to pay short-term obligations with short-term assets. It's calculated as Current Assets ÷ Current Liabilities. A ratio above 1.0 indicates the company has more current assets than current liabilities.\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Current Assets:** $180,000\n- **Current Liabilities:** $90,000\n\nThe other data (total assets, long-term debt, sales, net income, etc.) are irrelevant for this calculation.\n\n### Calculation\n```text\nCurrent Ratio = Current Assets ÷ Current Liabilities\n              = $180,000 ÷ $90,000\n              = 2.00\n```\n\n### Interpretation\nA current ratio of 2.00 means the company has $2.00 of current assets for every $1.00 of current liabilities, indicating strong short-term liquidity.",
    successMessage: "Correct! A current ratio of 2.00 indicates strong short-term liquidity."
  },

  {
    id: "RA-L1-QUI-01", 
    topic: "ratio",
    level: 1,
    ratioType: "quick",
    category: "Liquidity",
    financials: { 
      // Relevant data
      cash: 25000,
      shortTermInvestments: 15000,
      accountsReceivable: 40000,
      inventory: 35000,
      currentLiabilities: 80000,
      // Irrelevant data
      propertyPlantEquipment: 200000,
      accumulatedDepreciation: 50000,
      longTermDebt: 100000,
      commonStock: 75000,
      grossSales: 400000,
      salesReturns: 20000,
      operatingExpenses: 150000,
      totalAssets: 345000,
      totalEquity: 195000
    },
    task: "Calculate the quick ratio (acid-test ratio) (round to 2 decimal places).",
    solution: { 
      type: "numeric", 
      value: 1.00, 
      tolerance: 0.01 
    },
    explanation: "### Theory: Quick Ratio (Acid-Test Ratio)\nThe quick ratio is a more stringent test of liquidity than the current ratio. It excludes inventory and other less liquid current assets, focusing only on assets that can be quickly converted to cash.\n\n### Formula\n```text\nQuick Ratio = (Cash + Short-term Investments + Accounts Receivable) ÷ Current Liabilities\n```\n\n### Relevant Information Identification\nQuick assets include:\n- **Cash:** $25,000\n- **Short-term Investments:** $15,000\n- **Accounts Receivable:** $40,000\n- **Current Liabilities:** $80,000\n\n**Excluded:** Inventory ($35,000) is excluded because it may take time to sell and convert to cash. Other data like PPE, long-term debt, and sales figures are also irrelevant.\n\n### Calculation\n```text\nQuick Assets = $25,000 + $15,000 + $40,000 = $80,000\nQuick Ratio = $80,000 ÷ $80,000 = 1.00\n```\n\n### Interpretation\nA quick ratio of 1.00 means the company can exactly cover its current liabilities with its most liquid assets, indicating adequate short-term liquidity.",
    successMessage: "Excellent! The quick ratio excludes inventory to focus on the most liquid assets."
  },

  // Activity Ratios
  {
    id: "RA-L1-INV-01",
    topic: "ratio", 
    level: 1,
    ratioType: "inventory_turnover",
    category: "Activity",
    financials: { 
      // Relevant data
      costOfGoodsSold: 240000,
      averageInventory: 40000,
      // Irrelevant data
      netSales: 360000,
      grossProfit: 120000,
      operatingExpenses: 85000,
      currentAssets: 120000,
      currentLiabilities: 60000,
      accountsReceivable: 45000,
      cash: 20000,
      totalAssets: 280000,
      longTermDebt: 80000,
      commonStock: 50000
    },
    task: "Calculate the inventory turnover ratio (round to 1 decimal place).",
    solution: { 
      type: "numeric", 
      value: 6.0, 
      tolerance: 0.1 
    },
    explanation: "### Theory: Inventory Turnover Analysis\nInventory turnover measures how efficiently a company manages its inventory by showing how many times inventory is sold and replaced over a period. Higher turnover generally indicates efficient inventory management.\n\n### Formula\n```text\nInventory Turnover = Cost of Goods Sold ÷ Average Inventory\n```\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Cost of Goods Sold:** $240,000\n- **Average Inventory:** $40,000\n\nOther data like net sales, current assets, debt, and equity accounts are not needed for this calculation.\n\n### Calculation\n```text\nInventory Turnover = $240,000 ÷ $40,000 = 6.0 times\n```\n\n### Interpretation\nAn inventory turnover of 6.0 means the company sold and replaced its inventory 6 times during the period, which suggests efficient inventory management.",
    successMessage: "Great! Higher inventory turnover generally indicates efficient inventory management."
  },

  {
    id: "RA-L1-AR-01",
    topic: "ratio",
    level: 1, 
    ratioType: "ar_turnover",
    category: "Activity",
    financials: { 
      // Relevant data
      netCreditSales: 480000,
      averageAccountsReceivable: 60000,
      // Irrelevant data
      cashSales: 120000,
      totalSales: 600000,
      inventory: 80000,
      costOfGoodsSold: 360000,
      operatingExpenses: 140000,
      currentLiabilities: 75000,
      longTermDebt: 150000,
      totalAssets: 420000,
      commonStock: 100000,
      retainedEarnings: 95000
    },
    task: "Calculate the accounts receivable turnover ratio (round to 1 decimal place).",
    solution: { 
      type: "numeric", 
      value: 8.0, 
      tolerance: 0.1 
    },
    explanation: "### Theory: Accounts Receivable Turnover Analysis\nAccounts receivable turnover measures how efficiently a company collects its receivables. It shows how many times per period the company collects its average receivables balance.\n\n### Formula\n```text\nA/R Turnover = Net Credit Sales ÷ Average Accounts Receivable\n```\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Net Credit Sales:** $480,000\n- **Average Accounts Receivable:** $60,000\n\n**Note:** We use credit sales, not total sales, because only credit sales create receivables. Cash sales and other financial data are irrelevant.\n\n### Calculation\n```text\nA/R Turnover = $480,000 ÷ $60,000 = 8.0 times\n```\n\n### Interpretation\nAn A/R turnover of 8.0 means the company collects its average receivables balance 8 times per year, or approximately every 45.6 days (365 ÷ 8).",
    successMessage: "Perfect! This means the company collects its receivables 8 times per year."
  },

  // Profitability Ratios
  {
    id: "RA-L1-GM-01",
    topic: "ratio",
    level: 1,
    ratioType: "gross_margin", 
    category: "Profitability",
    financials: { 
      // Relevant data
      grossProfit: 150000,
      netSales: 500000,
      // Irrelevant data
      costOfGoodsSold: 350000,
      operatingExpenses: 95000,
      interestExpense: 8000,
      netIncome: 47000,
      currentAssets: 180000,
      inventory: 65000,
      accountsReceivable: 70000,
      totalAssets: 425000,
      currentLiabilities: 85000,
      longTermDebt: 120000
    },
    task: "Calculate the gross profit margin as a percentage (round to 1 decimal place).",
    solution: { 
      type: "numeric", 
      value: 30.0, 
      tolerance: 0.1 
    },
    explanation: "### Theory: Gross Profit Margin Analysis\nGross profit margin measures the percentage of sales revenue that remains after paying for direct costs of goods sold. It indicates how efficiently a company produces its goods or services.\n\n### Formula\n```text\nGross Profit Margin = (Gross Profit ÷ Net Sales) × 100\n```\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Gross Profit:** $150,000\n- **Net Sales:** $500,000\n\nOperating expenses, interest, assets, and liabilities are not relevant for gross margin calculation.\n\n### Calculation\n```text\nGross Profit Margin = ($150,000 ÷ $500,000) × 100 = 30.0%\n```\n\n### Interpretation\nA gross profit margin of 30.0% means the company retains $0.30 of every sales dollar after paying direct production costs, indicating reasonable pricing power and cost control.",
    successMessage: "Correct! This indicates the company retains 30% of sales after direct costs."
  },

  {
    id: "RA-L1-ROA-01",
    topic: "ratio",
    level: 1,
    ratioType: "roa",
    category: "Profitability", 
    financials: { 
      // Relevant data
      netIncome: 45000,
      averageTotalAssets: 600000,
      // Irrelevant data
      netSales: 480000,
      grossProfit: 192000,
      operatingIncome: 72000,
      interestExpense: 12000,
      currentAssets: 220000,
      currentLiabilities: 110000,
      longTermDebt: 180000,
      commonStock: 150000,
      retainedEarnings: 160000
    },
    task: "Calculate the return on assets (ROA) as a percentage (round to 1 decimal place).",
    solution: { 
      type: "numeric", 
      value: 7.5, 
      tolerance: 0.1 
    },
    explanation: "### Theory: Return on Assets (ROA) Analysis\nROA measures how efficiently a company uses its assets to generate profit. It shows how much net income is generated per dollar of assets.\n\n### Formula\n```text\nROA = (Net Income ÷ Average Total Assets) × 100\n```\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Net Income:** $45,000\n- **Average Total Assets:** $600,000\n\nSales, gross profit, current assets/liabilities, and equity components are irrelevant for ROA calculation.\n\n### Calculation\n```text\nROA = ($45,000 ÷ $600,000) × 100 = 7.5%\n```\n\n### Interpretation\nAn ROA of 7.5% means the company generates $0.075 of net income for every dollar of assets, showing reasonable asset efficiency.",
    successMessage: "Excellent! This shows how efficiently the company uses its assets to generate profit."
  },

  // Leverage Ratios
  {
    id: "RA-L1-DE-01",
    topic: "ratio",
    level: 1,
    ratioType: "debt_to_equity",
    category: "Leverage",
    financials: { 
      // Relevant data
      totalDebt: 120000,
      totalEquity: 180000,
      // Irrelevant data
      currentAssets: 150000,
      currentLiabilities: 60000,
      longTermAssets: 210000,
      netSales: 320000,
      netIncome: 28000,
      operatingExpenses: 85000,
      interestExpense: 7200,
      cash: 35000,
      inventory: 45000
    },
    task: "Calculate the debt-to-equity ratio (round to 2 decimal places).",
    solution: { 
      type: "numeric", 
      value: 0.67, 
      tolerance: 0.01 
    },
    explanation: "### Theory: Debt-to-Equity Ratio Analysis\nThe debt-to-equity ratio measures financial leverage by comparing total debt to total equity. It indicates how much debt the company uses relative to equity financing.\n\n### Formula\n```text\nDebt-to-Equity = Total Debt ÷ Total Equity\n```\n\n### Relevant Information Identification\nFrom the financial data provided, only these items are needed:\n- **Total Debt:** $120,000\n- **Total Equity:** $180,000\n\nAssets, sales, expenses, and individual asset/liability components are not relevant for this calculation.\n\n### Calculation\n```text\nDebt-to-Equity = $120,000 ÷ $180,000 = 0.67\n```\n\n### Interpretation\nA debt-to-equity ratio of 0.67 means the company has $0.67 of debt for every dollar of equity, indicating moderate financial leverage.",
    successMessage: "Good work! This indicates moderate financial leverage."
  },

  // ===== LEVEL 2: TRANSACTION ANALYSIS (ENHANCED EXPLANATIONS) =====

  {
    id: "RA-L2-CUR-01",
    topic: "ratio",
    level: 2,
    ratioType: "current_change",
    category: "Liquidity Analysis",
    scenarioData: {
      companyName: "TechCorp Inc.",
      ratioName: "Current Ratio",
      initialRatio: 1.5,
      finalRatio: 2.0,
      timeframe: "during the quarter"
    },
    task: "TechCorp's current ratio increased from 1.5 to 2.0 during the quarter. Which transaction most likely explains this improvement?",
    options: [
      { id: "A", text: "Purchased inventory for cash" },
      { id: "B", text: "Paid off a short-term bank loan using cash" },
      { id: "C", text: "Collected accounts receivable" },
      { id: "D", text: "Purchased equipment with a long-term loan" }
    ],
    solution: { 
      type: "multiple_choice", 
      correct: "B",
      explanation: "### Theory: Current Ratio Transaction Effects\nThe current ratio can be improved by either increasing current assets or decreasing current liabilities. When the ratio is already above 1.0, reducing current liabilities has a greater positive impact than equivalent changes in current assets.\n\n### Analysis of Each Option\n**Option A - Purchase inventory for cash:**\n- Current assets: No net change (inventory ↑, cash ↓)\n- Current liabilities: No change\n- **Effect:** No impact on current ratio\n\n**Option B - Pay off short-term loan with cash:**\n- Current assets: Decrease (cash ↓)\n- Current liabilities: Decrease (loan payable ↓)\n- **Effect:** When ratio > 1.0, this increases the ratio\n\n**Option C - Collect accounts receivable:**\n- Current assets: No net change (cash ↑, A/R ↓)\n- Current liabilities: No change\n- **Effect:** No impact on current ratio\n\n**Option D - Purchase equipment with long-term loan:**\n- Current assets: No change\n- Current liabilities: No change\n- **Effect:** No impact on current ratio\n\n### Mathematical Proof\nIf original ratio was 1.5 (e.g., $150 CA ÷ $100 CL), paying off $20 of short-term debt:\nNew ratio = $130 ÷ $80 = 1.625 (improvement)\n\nThe same transaction improving from 1.5 to 2.0 suggests a larger debt payment."
    },
    successMessage: "Correct! Reducing current liabilities improves the current ratio when it's already above 1.0."
  },

  {
    id: "RA-L2-ROA-01", 
    topic: "ratio",
    level: 2,
    ratioType: "roa_change",
    category: "Profitability Analysis",
    scenarioData: {
      companyName: "Manufacturing Co.",
      ratioName: "Return on Assets (ROA)",
      initialRatio: "8.5%",
      finalRatio: "6.2%", 
      timeframe: "this year compared to last year"
    },
    task: "Manufacturing Co.'s ROA decreased from 8.5% to 6.2% this year. Which scenario most likely caused this decline?",
    options: [
      { id: "A", text: "Increased sales with proportional increase in net income" },
      { id: "B", text: "Acquired a large competitor using mostly cash reserves" },
      { id: "C", text: "Sold underperforming assets at book value" },
      { id: "D", text: "Issued common stock to raise capital for expansion" }
    ],
    solution: { 
      type: "multiple_choice", 
      correct: "B",
      explanation: "### Theory: ROA Decline Analysis\nROA = Net Income ÷ Average Total Assets. ROA can decline due to decreased profitability, increased assets without proportional income growth, or both.\n\n### Analysis of Each Option\n**Option A - Increased sales with proportional income:**\n- Net income: Increases proportionally\n- Assets: May increase but usually less than income\n- **Effect:** ROA would likely improve or stay stable\n\n**Option B - Acquired competitor using cash:**\n- Net income: Immediate impact minimal (acquisition costs reduce income)\n- Assets: Massive increase from acquired company's assets\n- **Effect:** Significant ROA decline due to asset base expansion\n\n**Option C - Sold underperforming assets at book value:**\n- Net income: No gain/loss on sale\n- Assets: Decrease (asset sold)\n- **Effect:** ROA would likely improve (same income, fewer assets)\n\n**Option D - Issued stock for expansion capital:**\n- Net income: No immediate change\n- Assets: Increase from cash raised\n- **Effect:** ROA decline, but usually not as dramatic as acquisition\n\n### Real-World Context\nMajor acquisitions typically cause temporary ROA decline because:\n1. Acquired assets are immediately added to the balance sheet\n2. Synergies and improved performance take time to realize\n3. Integration costs reduce short-term profitability"
    },
    successMessage: "Excellent! Major acquisitions often temporarily depress ROA due to the significant asset increase."
  },

  {
    id: "RA-L2-INV-01",
    topic: "ratio",
    level: 2, 
    ratioType: "inventory_turnover_change",
    category: "Activity Analysis",
    scenarioData: {
      companyName: "Retail Solutions Ltd.",
      ratioName: "Inventory Turnover",
      initialRatio: "4.2 times",
      finalRatio: "6.8 times",
      timeframe: "after implementing new inventory management"
    },
    task: "Retail Solutions improved its inventory turnover from 4.2 to 6.8 times after implementing new inventory management. What change most likely drove this improvement?",
    options: [
      { id: "A", text: "Increased purchase volumes to get better supplier discounts" },
      { id: "B", text: "Implemented just-in-time inventory with more frequent deliveries" },
      { id: "C", text: "Expanded product lines to serve more customer segments" },
      { id: "D", text: "Built additional warehouse space to accommodate growth" }
    ],
    solution: { 
      type: "multiple_choice", 
      correct: "B",
      explanation: "### Theory: Inventory Turnover Improvement\nInventory Turnover = Cost of Goods Sold ÷ Average Inventory. To improve this ratio, companies must either increase sales (COGS) or reduce average inventory levels, with inventory reduction being more directly controllable.\n\n### Analysis of Each Option\n**Option A - Increased purchase volumes:**\n- COGS: Potential increase if sales grow\n- Average inventory: Increase due to larger purchase quantities\n- **Effect:** Likely decrease in turnover ratio\n\n**Option B - Just-in-time inventory system:**\n- COGS: Maintains current levels or potentially increases\n- Average inventory: Significant decrease through frequent, smaller deliveries\n- **Effect:** Dramatic improvement in turnover ratio\n\n**Option C - Expanded product lines:**\n- COGS: Potential increase from additional sales\n- Average inventory: Increase from carrying more product varieties\n- **Effect:** Uncertain, but often decreases turnover initially\n\n**Option D - Built additional warehouse space:**\n- COGS: No direct impact\n- Average inventory: Likely increase (more space to hold inventory)\n- **Effect:** Likely decrease in turnover ratio\n\n### Just-in-Time Benefits\n- Reduces average inventory through frequent deliveries\n- Minimizes obsolete and slow-moving stock\n- Improves cash flow by reducing inventory investment\n- The improvement from 4.2 to 6.8 (62% increase) is consistent with JIT implementation"
    },
    successMessage: "Perfect! JIT inventory management is a classic way to improve inventory turnover ratios."
  },

  // ===== LEVEL 3: UPDATED RATIO CALCULATIONS =====

  {
    id: "RA-L3-CUR-01",
    topic: "ratio",
    level: 3,
    ratioType: "current_impact",
    category: "Effect Analysis",
    financials: {
      currentAssets: 360000,
      currentLiabilities: 200000,
      inventoryWriteDown: 40000
    },
    task: "Mill Corp currently has current assets of $360,000 and current liabilities of $200,000. If Mill writes down inventory by $40,000, what is the updated current ratio? (Round to 2 decimal places)",
    solution: { 
      type: "numeric", 
      value: 1.60, 
      tolerance: 0.01 
    },
    explanation: "### Theory: Impact of Asset Write-downs on Current Ratio\nAn inventory write-down reduces current assets while leaving current liabilities unchanged. This decreases the current ratio since the numerator gets smaller while the denominator remains constant.\n\n### Original Position\n```text\nOriginal Current Ratio = $360,000 ÷ $200,000 = 1.80\n```\n\n### Transaction Analysis\n**Transaction:** Write down inventory by $40,000\n- **Effect on Current Assets:** Decrease by $40,000\n- **Effect on Current Liabilities:** No change\n- **Journal Entry:** Dr. Loss on Inventory Write-down $40,000, Cr. Inventory $40,000\n\n### Updated Calculation\n```text\nNew Current Assets = $360,000 - $40,000 = $320,000\nCurrent Liabilities = $200,000 (unchanged)\n\nUpdated Current Ratio = $320,000 ÷ $200,000 = 1.60\n```\n\n### Impact Summary\nThe current ratio decreased from 1.80 to 1.60, a decline of 0.20. Asset write-downs always worsen liquidity ratios because they reduce assets without providing any cash or reducing liabilities.",
    successMessage: "Correct! Asset write-downs reduce the current ratio by decreasing current assets."
  },

  {
    id: "RA-L3-QUI-01",
    topic: "ratio",
    level: 3,
    ratioType: "quick_impact",
    category: "Effect Analysis",
    financials: {
      cash: 60000,
      shortTermInvestments: 20000,
      accountsReceivable: 80000,
      inventory: 100000,
      currentLiabilities: 120000,
      inventorySale: 40000
    },
    task: "Delta Industries has cash $60,000, short-term investments $20,000, accounts receivable $80,000, inventory $100,000, and current liabilities $120,000. If Delta sells $40,000 of inventory for cash at cost, what is the updated quick ratio? (Round to 2 decimal places)",
    solution: { 
      type: "numeric", 
      value: 1.50, 
      tolerance: 0.01 
    },
    explanation: "### Theory: Impact of Inventory Sales on Quick Ratio\nSelling inventory for cash converts an asset excluded from the quick ratio (inventory) into an asset included in the quick ratio (cash). This improves the quick ratio numerator.\n\n### Original Position\n```text\nOriginal Quick Assets = $60,000 + $20,000 + $80,000 = $160,000\nOriginal Quick Ratio = $160,000 ÷ $120,000 = 1.33\n```\n\n### Transaction Analysis\n**Transaction:** Sell $40,000 of inventory for cash at cost\n- **Effect on Cash:** Increase by $40,000\n- **Effect on Inventory:** Decrease by $40,000 (not in quick ratio anyway)\n- **Effect on Current Liabilities:** No change\n- **Journal Entry:** Dr. Cash $40,000, Cr. Inventory $40,000\n\n### Updated Calculation\n```text\nNew Cash = $60,000 + $40,000 = $100,000\nShort-term Investments = $20,000 (unchanged)\nAccounts Receivable = $80,000 (unchanged)\n\nNew Quick Assets = $100,000 + $20,000 + $80,000 = $200,000\nUpdated Quick Ratio = $200,000 ÷ $120,000 = 1.67\n```\n\n### Impact Summary\nThe quick ratio improved from 1.33 to 1.67, an increase of 0.34. Converting inventory to cash always improves the quick ratio because cash is included while inventory is excluded from quick assets.",
    successMessage: "Excellent! Converting inventory to cash improves the quick ratio."
  },

  {
    id: "RA-L3-ROA-01",
    topic: "ratio",
    level: 3,
    ratioType: "roa_impact",
    category: "Effect Analysis",
    financials: {
      netIncome: 85000,
      totalAssets: 1000000,
      stockIssuance: 100000
    },
    task: "Phoenix Corp currently has net income of $85,000 and total assets of $1,000,000. If Phoenix issues common stock for $100,000 cash, what is the updated ROA as a percentage? (Round to 1 decimal place)",
    solution: { 
      type: "numeric", 
      value: 7.7, 
      tolerance: 0.1 
    },
    explanation: "### Theory: Impact of Stock Issuance on ROA\nIssuing stock for cash increases total assets immediately but doesn't change current period net income. This creates a dilution effect on ROA since the denominator increases while the numerator stays constant.\n\n### Original Position\n```text\nOriginal ROA = Net Income ÷ Total Assets\n             = $85,000 ÷ $1,000,000\n             = 8.5%\n```\n\n### Transaction Analysis\n**Transaction:** Issue stock for $100,000 cash\n- **Effect on Net Income:** No immediate change\n- **Effect on Total Assets:** Increase by $100,000 (cash increase)\n- **Journal Entry:** Dr. Cash $100,000, Cr. Common Stock $100,000\n\n### Updated Calculation\n```text\nNet Income = $85,000 (unchanged)\nNew Total Assets = $1,000,000 + $100,000 = $1,100,000\n\nUpdated ROA = $85,000 ÷ $1,100,000 = 7.7%\n```\n\n### Impact Summary\nROA decreased from 8.5% to 7.7%, a decline of 0.8 percentage points. Stock issuances typically depress ROA until the new capital is deployed to generate additional income through profitable investments.",
    successMessage: "Correct! Stock issuances typically decrease ROA in the short term due to asset increase without immediate income impact."
  },

  {
    id: "RA-L3-DE-01",
    topic: "ratio",
    level: 3,
    ratioType: "debt_equity_impact",
    category: "Effect Analysis",
    financials: {
      totalDebt: 300000,
      totalEquity: 500000,
      bondConversion: 50000
    },
    task: "Alpine Corp has total debt of $300,000 and total equity of $500,000. If Alpine converts $50,000 of bonds payable to common stock, what is the updated debt-to-equity ratio? (Round to 2 decimal places)",
    solution: { 
      type: "numeric", 
      value: 0.45, 
      tolerance: 0.01 
    },
    explanation: "### Theory: Impact of Debt-to-Equity Conversion\nConverting debt to equity simultaneously reduces total debt and increases total equity by the same amount. This improves the debt-to-equity ratio since the numerator decreases and the denominator increases.\n\n### Original Position\n```text\nOriginal Debt-to-Equity = $300,000 ÷ $500,000 = 0.60\n```\n\n### Transaction Analysis\n**Transaction:** Convert $50,000 of bonds payable to common stock\n- **Effect on Total Debt:** Decrease by $50,000\n- **Effect on Total Equity:** Increase by $50,000\n- **Journal Entry:** Dr. Bonds Payable $50,000, Cr. Common Stock $50,000\n\n### Updated Calculation\n```text\nNew Total Debt = $300,000 - $50,000 = $250,000\nNew Total Equity = $500,000 + $50,000 = $550,000\n\nUpdated Debt-to-Equity = $250,000 ÷ $550,000 = 0.45\n```\n\n### Impact Summary\nThe debt-to-equity ratio improved from 0.60 to 0.45, a decrease of 0.15. Debt-to-equity conversions are favorable for leverage ratios because they simultaneously reduce debt and increase equity.",
    successMessage: "Perfect! Debt-to-equity conversions improve leverage ratios."
  },

  {
    id: "RA-L3-INV-01",
    topic: "ratio",
    level: 3,
    ratioType: "inventory_turnover_impact",
    category: "Effect Analysis",
    financials: {
      costOfGoodsSold: 260000,
      averageInventory: 50000,
      inventoryPurchase: 30000
    },
    task: "Retail Plus has cost of goods sold of $260,000 and average inventory of $50,000. If Retail Plus purchases additional inventory worth $30,000 on credit, what is the updated inventory turnover? (Round to 1 decimal place)",
    solution: { 
      type: "numeric", 
      value: 4.3, 
      tolerance: 0.1 
    },
    explanation: "### Theory: Impact of Inventory Purchases on Turnover\nPurchasing inventory increases average inventory (the denominator) while COGS (the numerator) remains unchanged in the short term. This decreases inventory turnover.\n\n### Original Position\n```text\nOriginal Inventory Turnover = $260,000 ÷ $50,000 = 5.2 times\n```\n\n### Transaction Analysis\n**Transaction:** Purchase $30,000 of inventory on credit\n- **Effect on COGS:** No immediate change (COGS changes when inventory is sold)\n- **Effect on Average Inventory:** Increase (new average calculation needed)\n- **Journal Entry:** Dr. Inventory $30,000, Cr. Accounts Payable $30,000\n\n### Updated Calculation\n```text\nAssuming the purchase occurs mid-period:\nNew Average Inventory = ($50,000 + ($50,000 + $30,000)) ÷ 2\n                      = ($50,000 + $80,000) ÷ 2\n                      = $65,000\n\nAlternatively, if end inventory increases by $30,000:\nNew Average Inventory ≈ $50,000 + ($30,000 ÷ 2) = $65,000\n\nUpdated Inventory Turnover = $260,000 ÷ $60,000 = 4.3 times\n```\n\n### Impact Summary\nInventory turnover decreased from 5.2 to 4.3 times, a decline of 0.9. Inventory purchases reduce turnover ratios until the goods are sold, which is why companies focus on just-in-time inventory management.",
    successMessage: "Correct! Inventory purchases reduce turnover ratios until the goods are sold."
  },

  {
    id: "RA-L3-TIE-01",
    topic: "ratio",
    level: 3,
    ratioType: "times_interest_earned_impact",
    category: "Effect Analysis",
    financials: {
      ebit: 96000,
      interestExpense: 20000,
      newLoanAmount: 200000,
      newLoanRate: 0.08
    },
    task: "Global Manufacturing has EBIT of $96,000 and current interest expense of $20,000. If the company takes out a $200,000 loan at 8% annual interest, what is the updated times interest earned ratio? (Round to 1 decimal place)",
    solution: { 
      type: "numeric", 
      value: 2.7, 
      tolerance: 0.1 
    },
    explanation: "### Theory: Impact of Additional Borrowing on Times Interest Earned\nTaking out additional loans increases interest expense, which decreases the times interest earned ratio since EBIT stays constant while interest expense increases.\n\n### Original Position\n```text\nOriginal Times Interest Earned = $96,000 ÷ $20,000 = 4.8 times\n```\n\n### Transaction Analysis\n**Transaction:** Borrow $200,000 at 8% annual interest\n- **Effect on EBIT:** No immediate change\n- **Effect on Interest Expense:** Increase by $16,000 annually ($200,000 × 8%)\n- **Journal Entry:** Dr. Cash $200,000, Cr. Notes Payable $200,000\n\n### Updated Calculation\n```text\nEBIT = $96,000 (unchanged)\nNew Annual Interest Expense = $20,000 + $16,000 = $36,000\n\nUpdated Times Interest Earned = $96,000 ÷ $36,000 = 2.7 times\n```\n\n### Impact Summary\nTimes interest earned decreased from 4.8 to 2.7 times, a decline of 2.1. This significant decrease indicates reduced ability to cover interest payments, which creditors view unfavorably. The company should ensure the borrowed funds generate sufficient additional EBIT to maintain adequate interest coverage.",
    successMessage: "Excellent! Additional borrowing reduces interest coverage ratios."
  },

  // ===== LEVEL 4: ADVANCED PROBLEM-SOLVING =====

  {
    id: "RA-L4-TARGET-01",
    topic: "ratio",
    level: 4,
    ratioType: "current_target",
    category: "Problem-Solving",
    task: "Management wants to achieve a current ratio of 2.0. Given current assets of $500,000 and current liabilities of $300,000, by how much must current liabilities decrease to reach this target? (Assume current assets remain constant)",
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
    task: "Calculate the 3-year trend in Return on Assets (ROA). What is the ROA for Year 3? (Round to 1 decimal place)\n\nYear 1: Net Income $80,000, Total Assets $1,000,000\nYear 2: Net Income $95,000, Total Assets $1,100,000\nYear 3: Net Income $105,000, Total Assets $1,250,000",
    solution: { 
      type: "numeric", 
      value: 8.4, 
      tolerance: 0.1 
    },
    explanation: "### Theory: ROA Trend Analysis\nReturn on Assets measures how efficiently a company uses its assets to generate profit. Analyzing trends helps identify whether management is improving or declining in asset utilization over time.\n\n### Three-Year ROA Calculation\n\n**Year 1 ROA:**\n```text\nROA₁ = $80,000 ÷ $1,000,000 = 8.0%\n```\n\n**Year 2 ROA:**\n```text\nROA₂ = $95,000 ÷ $1,100,000 = 8.6%\n```\n\n**Year 3 ROA:**\n```text\nROA₃ = $105,000 ÷ $1,250,000 = 8.4%\n```\n\n### Trend Analysis\n```text\nYear 1 → Year 2: +0.6 percentage points (improving)\nYear 2 → Year 3: -0.2 percentage points (declining)\n```\n\n### Detailed Analysis\n- **Asset Growth:** 25% over 3 years ($1,000k to $1,250k)\n- **Income Growth:** 31.25% over 3 years ($80k to $105k)\n- **Efficiency Trend:** Initial improvement followed by slight decline\n\n### Interpretation\nWhile ROA improved from Year 1 to Year 2, it declined slightly in Year 3. The company is growing assets faster than it's growing income in Year 3, suggesting potential inefficiencies in asset deployment or integration challenges from rapid expansion. Management should investigate whether recent asset investments are generating expected returns.",
    successMessage: "Excellent analysis! You've identified both the Year 3 ROA and the concerning trend reversal."
  },

  {
    id: "RA-L4-MULTI-01",
    topic: "ratio", 
    level: 4,
    ratioType: "comprehensive",
    category: "Multiple Ratios",
    task: "This company's main competitor has a current ratio of 2.0, inventory turnover of 12 times, and ROE of 18%. Calculate this company's ROE as a percentage (round to 1 decimal place).\n\nCash: $50,000, Accounts Receivable: $120,000, Inventory: $180,000, Total Current Assets: $350,000, Total Assets: $1,200,000, Current Liabilities: $200,000, Total Liabilities: $500,000, Total Equity: $700,000, Net Sales: $2,400,000, Cost of Goods Sold: $1,800,000, Net Income: $144,000",
    solution: { 
      type: "numeric", 
      value: 20.6, 
      tolerance: 0.1 
    },
    explanation: "### Theory: Comprehensive Ratio Analysis\nWhen analyzing multiple ratios, it's important to calculate the requested metric accurately while understanding how the company compares to competitors across different performance dimensions.\n\n### Given Financial Data\n- **Net Income:** $144,000\n- **Total Equity:** $700,000\n- **Total Assets:** $1,200,000\n- **Current Assets:** $350,000\n- **Current Liabilities:** $200,000\n- **Cost of Goods Sold:** $1,800,000\n- **Inventory:** $180,000\n\n### ROE Calculation (Requested)\n```text\nROE = Net Income ÷ Total Equity\n    = $144,000 ÷ $700,000\n    = 20.6%\n```\n\n### Competitive Comparison Analysis\n**This Company vs. Competitor:**\n\n1. **Current Ratio:**\n   - This company: $350,000 ÷ $200,000 = 1.75\n   - Competitor: 2.0\n   - **Assessment:** Competitor has better liquidity\n\n2. **Inventory Turnover:**\n   - This company: $1,800,000 ÷ $180,000 = 10.0 times\n   - Competitor: 12.0 times\n   - **Assessment:** Competitor manages inventory more efficiently\n\n3. **ROE (Return on Equity):**\n   - This company: 20.6%\n   - Competitor: 18.0%\n   - **Assessment:** This company generates superior returns for shareholders\n\n### Strategic Insights\nWhile this company trails in operational efficiency (inventory turnover) and liquidity (current ratio), it significantly outperforms in profitability (ROE), suggesting strong profit margins and effective equity utilization.",
    successMessage: "Outstanding! You've correctly calculated ROE and can compare performance to competitors."
  },

  {
    id: "RA-L4-BREAKEVEN-01",
    topic: "ratio",
    level: 4, 
    ratioType: "days_sales",
    category: "Activity Analysis",
    task: "The company currently has average accounts receivable of $80,000 and annual credit sales of $1,460,000. Management wants to reduce days sales in accounts receivable to 15 days. What should the new average accounts receivable balance be? (Assume 365 days per year)",
    solution: { 
      type: "numeric", 
      value: 60000, 
      tolerance: 500 
    },
    explanation: "### Theory: Days Sales in Accounts Receivable Management\nDays Sales in A/R measures how long it takes to collect receivables. Reducing this metric improves cash flow and reduces bad debt risk. The formula can be rearranged to solve for target receivable levels.\n\n### Current Position Analysis\n```text\nCurrent Days Sales in A/R = (Average A/R × 365) ÷ Credit Sales\n                          = ($80,000 × 365) ÷ $1,460,000\n                          = 20.0 days\n```\n\n### Daily Credit Sales Calculation\n```text\nDaily Credit Sales = Annual Credit Sales ÷ 365\n                   = $1,460,000 ÷ 365\n                   = $4,000 per day\n```\n\n### Target A/R Calculation\n```text\nFormula: Days Sales in A/R = (Average A/R × 365) ÷ Credit Sales\nRearranged: Average A/R = (Days Sales in A/R × Credit Sales) ÷ 365\n\nTarget A/R = (15 days × $1,460,000) ÷ 365\n           = $21,900,000 ÷ 365\n           = $60,000\n```\n\n### Alternative Approach\n```text\nTarget A/R = Daily Credit Sales × Target Days\n           = $4,000 × 15 days\n           = $60,000\n```\n\n### Implementation Impact\n```text\nRequired A/R Reduction = $80,000 - $60,000 = $20,000\nCash Flow Improvement = $20,000 (one-time)\nImproved Collection Period = 20 - 15 = 5 days faster\n```\n\n### Management Actions Needed\nTo achieve this target, management should:\n- Tighten credit policies\n- Improve collection procedures\n- Offer early payment discounts\n- Implement better customer screening",
    successMessage: "Excellent! You've solved for the target A/R balance to achieve the desired collection period."
  },

  {
    id: "RA-L4-LEVERAGE-01",
    topic: "ratio",
    level: 4,
    ratioType: "equity_multiplier", 
    category: "DuPont Analysis",
    task: "Using DuPont analysis, this company's ROE can be broken down into components. Calculate the equity multiplier (round to 2 decimal places).\n\nNet Income: $120,000, Net Sales: $2,000,000, Average Assets: $1,200,000, Average Equity: $800,000",
    solution: { 
      type: "numeric", 
      value: 1.50, 
      tolerance: 0.01 
    },
    explanation: "### Theory: DuPont Analysis Framework\nDuPont analysis breaks down ROE into three components: Net Profit Margin, Asset Turnover, and Equity Multiplier. This helps identify the sources of profitability and areas for improvement.\n\n### DuPont Formula\n```text\nROE = Net Profit Margin × Asset Turnover × Equity Multiplier\nROE = (Net Income ÷ Sales) × (Sales ÷ Assets) × (Assets ÷ Equity)\n```\n\n### Component Calculations\n\n**1. Net Profit Margin:**\n```text\nNet Profit Margin = Net Income ÷ Net Sales\n                  = $120,000 ÷ $2,000,000\n                  = 6.0%\n```\n\n**2. Asset Turnover:**\n```text\nAsset Turnover = Net Sales ÷ Average Assets\n               = $2,000,000 ÷ $1,200,000\n               = 1.67 times\n```\n\n**3. Equity Multiplier (Requested):**\n```text\nEquity Multiplier = Average Assets ÷ Average Equity\n                  = $1,200,000 ÷ $800,000\n                  = 1.50\n```\n\n### ROE Verification\n```text\nROE = 6.0% × 1.67 × 1.50 = 15.0%\n\nDirect calculation: $120,000 ÷ $800,000 = 15.0% ✓\n```\n\n### Financial Leverage Interpretation\nAn equity multiplier of 1.50 means:\n- The company has $1.50 of assets for every $1.00 of equity\n- Debt-to-equity ratio = (1.50 - 1.00) ÷ 1.00 = 0.50\n- The company uses moderate financial leverage\n- 33.3% of assets are financed by debt ($400k debt ÷ $1,200k assets)\n\n### Strategic Insights\nThe company's ROE of 15% is driven by:\n- **Profitability:** 6% net margin (efficiency in operations)\n- **Activity:** 1.67× asset turnover (efficiency in asset utilization)\n- **Leverage:** 1.50× equity multiplier (moderate use of debt financing)",
    successMessage: "Perfect! The equity multiplier shows the company's financial leverage in the DuPont framework."
  }
];

export default ratioScenarios;