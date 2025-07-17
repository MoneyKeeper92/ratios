const equityScenarios = [
  {
    "id": 1,
    "level": 1,
    "subType": "retainedEarnings",
    "task": "Given the following transactions for Year 3, what is the ending balance of Retained Earnings?",
    "data": {
      "Beginning Retained Earnings": 600000,
      "Net Income": 400000,
      "Stock Dividend Declared": 150000,
      "Cash Dividends Paid": 75000
    },
    "solution": {
      "type": "numeric",
      "value": 775000,
      "tolerance": 100
    },
    "explanation": "### 1️⃣  Items that affect Retained Earnings (RE)\n- **Beginning RE** – starting point (closing balance from Year 2).\n- **Net Income** ⬆️ – increases RE; every revenue & gain minus every expense & loss is closed here at year-end.\n- **Stock Dividend** (small, recorded at FMV) ⬇️ – re-classifies the fair-value amount out of RE and into paid-in capital.\n- **Cash Dividends** ⬇️ – direct distribution of accumulated earnings to shareholders.\n\n### 2️⃣  Calculation\n```text\nEnding RE  =  Beginning RE\n             +  Net Income\n             –  Stock Dividend (FMV)\n             –  Cash Dividends\n\n          =  600,000  +  400,000  –  150,000  –  75,000\n          =  775,000\n```\n\n### 3️⃣  Key take-aways\n* **N**et income **A**dds; **D**ividends (cash & small stock) **S**ubtract  → *Mnemonic: N-A-D-S*.\n* Small stock dividends (≤ 25 % of shares O/S) use **fair market value**; large ones use par.\n* Ending RE = prior RE + current-period income that passes through the I/S − distributions to owners."
  },
  {
    "id": 2,
    "level": 2,
    "subType": "stockDividend",
    "task": "Prepare the journal entry for the declaration of a 5% stock dividend on 200,000 shares of $2 par common stock, when the market value is $25 per share.",
    "data": {},
    "solution": {
      "type": "journal",
      "entry": [
        { "account": "Retained Earnings", "debit": 250000, "credit": null },
        { "account": "Common Stock", "debit": null, "credit": 20000 },
        { "account": "APIC - CS", "debit": null, "credit": 230000 }
      ]
    },
    "explanation": "### 1. Theory: Small vs. Large Stock Dividend\nA stock dividend is considered **small** if it represents **≤ 25%** of the company's outstanding shares. Under U.S. GAAP, small stock dividends are recorded at the **fair market value (FMV)** of the shares on the declaration date. The logic is that a small dividend is not expected to materially reduce the market price, so it is, in substance, a distribution of value to shareholders equal to the FMV. This value is reclassified from Retained Earnings to the permanent paid-in capital accounts (Common Stock and APIC).\n\n### 2. Calculation of Amounts\n- **Shares to be issued:** 200,000 shares × 5% = **10,000 new shares**\n- **Total Fair Value (Debit to Retained Earnings):** 10,000 shares × $25/share = **$250,000**\n- **Par Value (Credit to Common Stock):** 10,000 shares × $2/share = **$20,000**\n- **Excess over Par (Credit to APIC):** $250,000 − $20,000 = **$230,000**\n\n### 3. Journal Entry\nThe journal entry on the declaration date moves the fair value from Retained Earnings into the contributed capital accounts. No assets are affected.\n```text\nRetained Earnings        250,000\n      Common Stock                  20,000\n      APIC - CS                     230,000\n```\nThis entry reduces earned capital and increases contributed capital, leaving total shareholders' equity unchanged."
  },
  {
    "id": 5,
    "level": 1,
    "subType": "treasuryStock",
    "task": "Using the *cost method*, a company reissues 1,000 shares of treasury stock for $20 per share. The stock was originally acquired for $15 per share. What is the increase in Additional Paid-in Capital (APIC) from this transaction?",
    "data": {
    },
    "solution": { 
      "type": "numeric", 
      "value": 5000 
    },
    "explanation": "### 1. Theory: Cost Method for Treasury Stock\nUnder the **cost method**, treasury stock is recorded and carried at its reacquisition cost. When these shares are later reissued for a price **above** the cost, the transaction is treated as a capital transaction. The 'gain' (the excess of the reissue price over cost) is not reported in the income statement. Instead, it is credited to a separate paid-in capital account, **APIC – Treasury Stock**, increasing total shareholders' equity.\n\n### 2. Calculation\n- **Total cash proceeds from reissue:** 1,000 shares × $20/share = **$20,000**\n- **Cost of treasury shares reissued (removed from books):** 1,000 shares × $15/share = **$15,000**\n- **Increase in APIC – Treasury Stock:** $20,000 (proceeds) - $15,000 (cost) = **$5,000**\n\n### 3. Journal Entry\nThe entry records the cash received, removes the treasury shares from the books at their original cost, and credits the difference to APIC.\n```text\nCash                             20,000\n      Treasury Stock                   15,000\n      APIC – Treasury Stock           5,000\n```\nThus, the transaction increases both cash and APIC by $5,000. If the shares had been reissued below cost, the shortfall would first reduce any existing balance in APIC – Treasury Stock from prior transactions, and any remaining difference would reduce Retained Earnings."
  },
  {
    "id": 6,
    "level": 1,
    "subType": "treasuryStockReissue",
    "task": "A company reissues treasury shares it previously acquired (cost method). What is the increase in Additional Paid-in Capital (APIC) from this transaction?",
    "data": {
      "sharesReissued": 500,
      "reissuePrice": 30,
      "treasuryCost": 22
    },
    "solution": { 
      "type": "numeric", 
      "value": 4000 
    },
    "explanation": "### 1. Initial purchase of treasury shares (cost method)\nWhen the company bought back 500 shares at $22 each, it reduced cash and increased the contra-equity Treasury Stock account at cost:\n```\nTreasury Stock        11,000\n      Cash                       11,000\n```\n(cost = 500 × $22)\n\n### 2. Reissue of treasury shares above cost\nThe same shares are later reissued at $30 each. Under the cost method the carrying cost ($11,000) is removed from Treasury Stock, cash received is recorded, and the excess is credited to APIC – Treasury Stock:\n```\nCash                   15,000   (500 × $30)\n      Treasury Stock           11,000   (500 × $22)\n      APIC – Treasury Stock     4,000   (plug: 15,000 − 11,000)\n```\n\n### 3. APIC impact\nIncrease in APIC = (Reissue price − Cost) × Shares\n= ($30 − $22) × 500 = **$4,000**.\n\nThus, the reissue moves $4,000 from paid-in capital in excess of par (APIC – Treasury Stock) into equity, while restoring the shares to the pool of outstanding stock. If the shares had been reissued below cost, any shortfall would first reduce the APIC – Treasury Stock balance and, once exhausted, would reduce Retained Earnings."
  },
  {
    "id": 7,
    "level": 1,
    "subType": "treasuryStockAcquisitionPar",
    "task": "Under the par value method, a corporation reacquires some of its own common shares. By how much will Additional Paid-in Capital from Common Stock (APIC-CS) decrease?",
    "data": {
      "sharesReacquired": 200,
      "parValue": 5,
      "originalIssuePrice": 7,
      "repurchasePrice": 11
    },
    "solution": { 
      "type": "numeric", 
      "value": 400 
    },
    "explanation": "### Why APIC-CS decreases by **$400**\n1. **Remove the shares at par value** → debit *Treasury Stock* for $5 × 200 = **$1,000**. \n2. **Reverse the paid-in capital created when the shares were first issued** → debit *APIC – Common Stock* for the original excess over par ($7 – $5 = $2) × 200 = **$400**. \n3. **Record the cash paid** → credit *Cash* for the repurchase cost, $11 × 200 = **$2,200**. \n4. **Allocate any excess of cost over the amounts removed**. The debits recorded so far total $1,400, but the company paid $2,200, so the **$800** difference must be debited to *Retained Earnings* (assuming no prior balance in APIC – Treasury Stock). \n\n### Journal entry (par value method, reacquisition)\n```text\nTreasury Stock (par)        1,000\nAPIC – Common Stock           400  ← decreases by $400\nRetained Earnings             800\n      Cash                               2,200\n```\n\n- The **debit to APIC-CS ($400)** cannot exceed the amount of APIC originally created when the shares were issued. \n- Any remaining excess paid over the original issue price is charged to **Retained Earnings**. \n\n> \n"
  },
  {
    "id": 8,
    "level": 1,
    "subType": "retainedEarnings",
    "task": "Given the Year 4 information below—including an item reported in Other Comprehensive Income (OCI)—determine the **ending balance of Retained Earnings**.",
    "data": {
      "beginningRE": 800000,
      "netIncome": 350000,
      "stockDividendFairValue": 200000,
      "cashDividends": 120000,
      "OCI—Unrealized holding gain on AFS debt securities": 50000
    },
    "solution": {
      "type": "numeric",
      "value": 830000,
      "tolerance": 100
    },
    "explanation": "**Which items affect Retained Earnings?**\n\n- **Beginning RE** – starting point (closing balance from Year 3).\n- **Net Income** – **increases** RE because all income-statement activity ultimately closes here.\n- **Cash Dividends** – **decrease** RE; they distribute accumulated earnings to shareholders.\n- **Stock Dividend (small, recorded at FMV)** – **decreases** RE by the fair-value amount reclassified to paid-in capital.\n- **OCI – Unrealized AFS gain** – **no impact** on RE; it is recorded in **Accumulated OCI (AOCI)** until the gain is realized and reclassified.\n\n**Calculation**\n```\nEnding RE = Beginning RE\n           + Net Income\n           – Stock Dividend (FMV)\n           – Cash Dividends\n\n           = 800,000 + 350,000 – 200,000 – 120,000\n           = 830,000\n```\nThe **$50,000 OCI gain is ignored** for RE because it bypasses the income statement and goes straight to AOCI. Only when the gain becomes **realized** (e.g., the debt security is sold) and is reclassified into profit or loss will it flow into Retained Earnings.\n\n**Mnemonic to remember:**\n- **N**et income **A**dds to RE.\n- **C**ash & **S**tock dividends **S**ubtract from RE.\n- **O**CI items go to **O**ther equity (AOCI)—not RE, unless later reclassified."
  },
  {
    "id": 10,
    "level": 1,
    "subType": "propertyDividendRE",
    "task": "Sunrise Inc. declares a property dividend consisting of land. How much should be debited to **Retained Earnings** on the declaration date?",
    "data": {
      "carryingAmount": 120000,
      "fairValue": 160000
    },
    "solution": {
      "type": "numeric",
      "value": 160000
    },
    "explanation": "### Why *fair value* (not book value) hits Retained Earnings\nUnder U.S. GAAP, a property (\"non-cash\") dividend is accounted for as if the company first **sold** the asset for its fair value (FV) and then distributed the proceeds to shareholders.  \n1. **Re-measure the asset to FV** – recognize any gain or loss in current earnings **before** the dividend is declared.  \n2. **Declare the dividend** – debit *Retained Earnings* and credit *Property Dividends Payable* for the asset's FV because that amount is leaving the enterprise.\n\n---\n### Journal entries (properly formatted)\n**1. Re-measurement to FV (immediately before declaration)**\n```text\nLand                                 40,000\n     Gain on Property Dividend                 40,000\n```\n*(Adjust carrying amount from $120,000 to $160,000 and record the gain in the income statement.)*\n\n**2. Declaration date**\n```text\nRetained Earnings                   160,000\n     Property Dividends Payable                 160,000\n```\n*(Record the liability and reduce earned capital by the land's FV.)*\n\n**3. Distribution (payment) date**\n```text\nProperty Dividends Payable         160,000\n     Land                                         160,000\n```\n*(Settle the liability and remove the land from the books.)*\n\n---\n### Key take-aways\n- **Retained Earnings is always reduced by the asset's fair value**, never its carrying amount.\n- Any **gain or loss** from marking the property to FV flows through the **income statement**, not directly through Retained Earnings.\n- On payment, the liability is extinguished and the asset is removed—no further impact on equity.\n\n> **Exam tip:** remember the two-step approach—*re-value first, dividend second*—for all property dividends."
  },
  {
    "id": 11,
    "level": 2,
    "subType": "stockDividendSmall",
    "task": "Prepare the journal entry to record declaration of a 5% stock dividend.",
    "data": {
      "sharesOutstanding": 300000,
      "dividendPct": 0.05,
      "parValue": 1,
      "marketValue": 12
    },
    "solution": {
      "type": "journal",
      "entry": [
        { "account": "Retained Earnings", "debit": 180000, "credit": null },
        { "account": "Common Stock",      "debit": null,   "credit": 15000 },
        { "account": "APIC - CS",         "debit": null,   "credit": 165000 }
      ]
    },
    "explanation": "### 1. Why we use **fair value** for a *small* stock dividend\n- If the dividend is **≤ 25 % of shares outstanding**, U.S. GAAP treats it like a cash dividend *in substance*—shareholders receive value equal to the shares' **fair market value (FMV)**.  \n- The company therefore **re-classifies** that FMV from *Retained Earnings* to paid-in capital.  \n- For a **large** stock dividend (> 25 %), only **par value** would be moved because the market price is expected to fall proportionally.\n\n### 2. Calculations\n```text\nShares issued:        300,000 × 5 %  = 15,000 shares\nFair value of shares: 15,000 × $12   = $180,000  ← debit Retained Earnings\nPar value portion:    15,000 × $1    =  $15,000  ← credit Common Stock\nExcess to APIC:       $180,000 − 15,000 = $165,000 ← credit APIC – CS\n```\n\n### 3. Declaration-date journal entry\n```text\nRetained Earnings                 180,000\n      Common Stock (par $1)                    15,000\n      APIC – Common Stock                     165,000\n```\n*(No cash changes hands—equity is simply re-allocated.)*\n\n### 4. Distribution (issuance) date\nNo additional entry is needed under GAAP; the new share certificates are issued to shareholders.\n\n### 5. Effects on equity and share count\n- **Retained Earnings ↓ $180,000**  \n- **Contributed Capital ↑ $180,000** (par + APIC)  \n- **Shares outstanding ↑ 5 %** to **315,000** (300,000 + 15,000)\n\n> **Memory aid:** *Small = FMV, Large = Par.*"
  },
  {
    "id": 12,
    "level": 2,
    "subType": "stockDividendLarge",
    "task": "Prepare the journal entry to record declaration of a 30% stock dividend.",
    "data": {
      "sharesOutstanding": 100000,
      "dividendPct": 0.30,
      "parValue": 2,
      "marketPrice": 18          // ← given to test whether students know it is **ignored**
    },
    "solution": {
      "type": "journal",
      "entry": [
        { "account": "Retained Earnings", "debit": 60000, "credit": null },
        { "account": "Common Stock",      "debit": null,  "credit": 60000 }
      ]
    },
    "explanation": "### 1. Why we use **par value** for a *large* stock dividend\n- A dividend that **exceeds 25 % of shares outstanding** is considered *large*.  \n- U.S. GAAP views it like a **stock split in the form of a dividend**—the market price per share is expected to drop in roughly the same proportion, so shareholders are not receiving additional economic value.  \n- **Only the shares' par (or stated) value** is re-classified from Retained Earnings to Common Stock; the **market price is irrelevant** and is purposely provided here as a distractor.\n\n### 2. Calculations (market price intentionally ignored)\n```text\nShares issued:        100,000 × 30 %  = 30,000 shares\nAmount reclassified:  30,000 × $2 par = 60,000  ← debit RE, credit CS\n```\n\n### 3. Declaration-date journal entry\n```text\nRetained Earnings                 60,000\n      Common Stock (par $2)                     60,000\n```\n*(No APIC entry, because only par value is moved.)*\n\n### 4. Effects on equity and share count\n- **Retained Earnings ↓ $60,000**  \n- **Common Stock ↑ $60,000**  \n- **Total equity unchanged.**  \n- **Shares outstanding ↑ 30 %** to **130,000** (100,000 + 30,000).\n\n> **Contrast with small dividends:**  Small (≤ 25 %) → record at **fair value** (par + APIC).  Large (> 25 %) → record at **par only**.  Remember: *Big = Book (par); Small = Street (FMV).*"
  },
  {
    "id": 13,
    "level": 2,
    "subType": "propertyDividendDeclaration",
    "task": "TechWave Corp. declares a property dividend of land that will be given next year. Provide the necessary journal entries to revalue the land and declare the property dividend.",
    "data": {
      "carryingAmount": 90000,
      "fairValue": 140000
    },
    "solution": {
      "type": "journal",
      "entry": [
        { "account": "Land", "debit": 50000,  "credit": null },
        { "account": "Gain on Property Dividend", "debit": null, "credit": 50000 },
        { "account": "Retained Earnings", "debit": 140000, "credit": null },
        { "account": "Property Dividend Payable", "debit": null, "credit": 140000 }
      ]
    },
    "explanation": "### Why two separate entries?\n1. **Re-measure the land to fair value (FV)**  \n   *GAAP treats a property dividend as if the company first sold the asset at FV and then distributed the \"proceeds.\"*  \n   - Increase Land by the difference between FV ($140 k) and carrying amount ($90 k).  \n   - Recognize the resulting **$50 k gain** in current earnings (it will flow into Net Income, then to Retained Earnings at year-end).\n2. **Declare the dividend**  \n   - Debit *Retained Earnings* for the land's **full FV** ($140 k).  \n   - Credit *Property Dividend Payable* for the same amount—this is a liability until the land is transferred.\n\n### Journal entries (declaration date)\n```text\nLand                                 50,000\n     Gain on Property Dividend                50,000\n\nRetained Earnings                   140000\n     Property Dividend Payable                   140000\n```\n\n### What happens on the payment date?\n```text\nProperty Dividend Payable           140,000\n     Land                                         140,000\n```\n(The liability is settled and the land leaves the books—no additional impact on equity.)\n\n### Net effect on equity\n- **Retained Earnings ↓ 140,000** (dividend)  \n- **Net Income ↑ 50,000** (gain) → will increase RE when closed  \n- **Overall equity ↓ 90,000** (the land's original carrying amount), the same as if the land had been sold at book value and cash paid out.\n\n> **Exam tip:** Remember the two-step rule for property dividends—*re-value first, dividend second*. Fair value hits RE; the gain or loss hits the income statement."
  },
  {
    "id": 20,
    "level": 2,
    "subType": "stockIssuedForLand",
    "task": "On Feb 1, Year 2, Quonset issued 14,500 shares of $1-par common stock (market price $14) to acquire land. Prepare the journal entry to record the exchange.",
    "solution": {
      "type": "journal",
      "entry": [
        { "account": "Land",         "debit": 203000, "credit": null },
        { "account": "Common Stock", "debit": null,   "credit": 14500 },
        { "account": "APIC - CS",      "debit": null,   "credit": 188500 }
      ]
    },
    "explanation": "### 1. Guiding Principle: Fair Value\\nUnder U.S. GAAP, when a company issues stock to acquire a non-cash asset like land, the transaction is measured at the **fair value** of either the asset received or the stock given up, whichever is more clearly determinable. In this case, the stock is actively traded, so its market price provides a reliable measure of the transaction's value.\\n\\n### 2. Calculation of Value\\nThe total value of the exchange is based on the market price of the shares issued, not their par value.\\n- **Shares issued:** 14,500\\n- **Market price per share:** $14\\n- **Total value (cost of land):** 14,500 shares × $14/share = **$203,000**\\n\\n### 3. Journal Entry Components\\n- **Debit (Asset):** The Land account is debited for its acquisition cost, which is the total fair value calculated above ($203,000).\\n- **Credit (Equity - Par):** The Common Stock account is always credited for the **par value** of the shares issued. (14,500 shares × $1 par = **$14,500**).\\n- **Credit (Equity - APIC):** The remaining amount, representing the excess of the market price over the par value, is credited to Additional Paid-in Capital (APIC). ($203,000 − $14,500 = **$188,500**).\\n\\nThis entry correctly reflects the land's cost on the balance sheet and properly allocates the corresponding increase in shareholders' equity between its par value and APIC components."
  },
  {
    "id": 23,
    "level": 2,
    "subType": "propertyDividendInventory",
    "task": "On Jun 5, Y2, Quonset declared a property dividend consisting of inventory (CV $70,000; FV $60,000). This will be paid out next year. Provide the declaration-date journal entries.",
    "solution": {
      "type": "journal",
      "entry": [
        { "account": "Loss on Property Dividend", "debit": 10000, "credit": null },
        { "account": "Inventory",                       "debit": null,  "credit": 10000 },
        { "account": "Retained Earnings",               "debit": 60000, "credit": null },
        { "account": "Property Dividend Payable",       "debit": null,  "credit": 60000 }
      ]
    },
    "explanation": "### 1. Two-Step Accounting for Property Dividends\nU.S. GAAP requires a two-step approach for property dividends to ensure the asset is distributed at its current fair value (FV). First, the company must re-measure the asset to its FV, recognizing any gain or loss in the income statement. Second, the company declares the dividend, which reduces Retained Earnings by the asset's FV.\n\n### 2. Step 1: Re-measuring Inventory to Fair Value\nBefore the dividend can be declared, the inventory must be written down from its carrying value (CV) to its lower fair value.\n- **Carrying Value:** $70,000\n- **Fair Value:** $60,000\n- **Loss:** $70,000 - $60,000 = **$10,000**\n\nThis loss is recognized immediately in earnings. The journal entry is:\n```text\nLoss on Property Dividend     10,000\n      Inventory                      10,000\n```\nThis entry adjusts the inventory's carrying amount to its fair value of $60,000.\n\n### 3. Step 2: Declaring the Dividend\nWith the inventory now at fair value, the dividend is declared. Retained Earnings is debited for the fair value of the asset being distributed.\n```text\nRetained Earnings            60,000\n      Property Dividend Payable       60,000\n```\nThis creates a liability for the dividend. The total reduction in equity from the transaction is the original $70,000 carrying value of the inventory ($10,000 loss + $60,000 dividend)."
  },
  {
    "id": 24,
    "level": 2,
    "subType": "stockDividendLarge",
    "task": "On Jul 1, Y2, Quonset declared and issued a 35 % stock dividend on 120,000 shares of $3-par common (market $28). Prepare the declaration entry.",
    "solution": {
      "type": "journal",
      "entry": [
        { "account": "Retained Earnings", "debit": 126000, "credit": null },
        { "account": "Common Stock",      "debit": null,   "credit": 126000 }
      ]
    },
    "explanation": "### 1. Theory: Large vs. Small Stock Dividend\nA stock dividend is **large** if it's **> 25%** of the outstanding shares. GAAP treats this like a stock split effected in the form of a dividend—its purpose is to reduce the market price per share, not to distribute corporate earnings. Therefore, it is accounted for by capitalizing (reclassifying) Retained Earnings by the **par value** of the shares issued. The market price is ignored.\n\n### 2. Calculation\n- **Shares to issue:** 120,000 shares × 35% = 42,000 shares\n- **Par value of shares:** 42,000 shares × $3/share = **$126,000**\n\n### 3. Journal Entry\nOn the declaration date, only the par value is moved from Retained Earnings to Common Stock.\n```text\nRetained Earnings        126,000\n      Common Stock                  126,000\n```\n- **Effect:** Retained Earnings decreases, Common Stock increases, but total equity is unchanged. The number of shares outstanding increases to 162,000."
  },
  {
    "id": 25,
    "level": 1,
    "subType": "cashDividendDeclaration",
    "task": "On Dec 5, Y2, Quonset declared a cash dividend of $0.90 per share on 180,000 common shares, payable Jan 5, Y3. What amount is debited to Retained Earnings on the declaration date?",
    "solution": { "type": "numeric", "value": 162000 },
    "explanation": "### 1. Theory: Dividend Declaration\nThe liability to pay a dividend is established on the **declaration date**. On this date, the company has a legal obligation to its shareholders. The reduction in Retained Earnings is recognized at this point, not on the later payment date.\n\n### 2. Calculation\n- **Total Dividend:** 180,000 shares × $0.90/share = **$162,000**\n\n### 3. Journal Entries\n**Declaration Date (Dec 5, Y2)**\nThis entry reduces Retained Earnings and creates a current liability.\n```text\nRetained Earnings        162,000\n      Dividends Payable             162,000\n```\n**Payment Date (Jan 5, Y3)**\nThis entry settles the liability; it has no further effect on equity.\n```text\nDividends Payable        162,000\n      Cash                          162,000\n```\nTherefore, Retained Earnings is debited for **$162,000** in Year 2."
  },
  {
    "id": 31,
    "level": 1,
    "subType": "stockDividendSmall",
    "task": "Sky Ltd. declares a 5 % stock dividend on 250,000 shares of $3-par common when market price is $11. How much is debited to Retained Earnings?",
    "solution": { "type": "numeric", "value": 137500 },
    "explanation": "### 1. Theory: Small vs. Large Stock Dividend\nA stock dividend is **small** if it's **≤ 25%** of the outstanding shares. GAAP requires that small stock dividends be accounted for at the **fair market value (FMV)** of the shares issued. The logic is that a small issuance is unlikely to materially decrease the stock price, so it is, in substance, a distribution of value to shareholders equal to the FMV.\n\n### 2. Calculation\n- **Dividend Percentage:** 5% (which is ≤ 25%, so it's a small dividend)\n- **Shares to issue:** 250,000 shares × 5% = 12,500 shares\n- **Fair Value of Dividend:** 12,500 shares × $11/share = **$137,500**\n\n### 3. Journal Entry\nRetained Earnings is debited for the full fair value. Common Stock is credited for the par value, and the excess is credited to APIC.\n```text\nRetained Earnings            137,500\n      Common Stock (Par)               37,500   (12,500 sh × $3)\n      APIC - Common Stock             100,000   (plug)\n```\nTherefore, the debit to Retained Earnings is **$137,500**."
  },
  {
    "id": 32,
    "level": 1,
    "subType": "treasuryStockRE",
    "task": "Cyan Corp. began Y2 with Retained Earnings $350,000. It bought 6,000 shares at $18 (cost method) and later re-issued 2,000 of them at $22. Net income was $75,000. Compute ending Retained Earnings.",
    "solution": { "type": "numeric", "value": 425000 },
    "explanation": "### 1. Theory: Cost Method for Treasury Stock\nUnder the **cost method**, treasury stock transactions are viewed as capital transactions and generally do not impact Retained Earnings. The exception is when shares are reissued for a price *below* their repurchase cost, which can result in a debit to RE.\n\n- **Purchase:** The purchase of treasury stock reduces cash and total equity, but not RE.\n- **Reissue Above Cost:** When shares are reissued for more than their cost, the excess is credited to APIC-Treasury Stock. It is a capital contribution, not income.\n\n### 2. Journal Entries & Analysis\n- **Purchase (6,000 shares @ $18):**\n  ```text\n  Treasury Stock (6k × $18)    108,000\n        Cash                               108,000\n  ```\n  *(No impact on Retained Earnings)*\n\n- **Reissue (2,000 shares @ $22, cost was $18):**\n  ```text\n  Cash (2k × $22)               44,000\n        Treasury Stock (2k × $18)          36,000\n        APIC - Treasury Stock               8,000  (2k × ($22-$18))\n  ```\n  *(The $8,000 'gain' increases APIC, not Retained Earnings)*\n\n### 3. Retained Earnings Roll-Forward\nOnly net income affects the Retained Earnings balance in this case.\n```text\nBeginning Retained Earnings      $350,000\nNet Income                        +75,000\n-----------------------------    --------\nEnding Retained Earnings         $425,000\n```"
  },
  {
    "id": 33,
    "level": 1,
    "subType": "treasuryStockParMethod",
    "task": "Apex Corp. (par-value method) buys 300 shares of $4-par common for $10. Originally issued at $7. What is the impact on APIC-Common Stock?",
    "solution": { "type": "numeric", "value": -900 },
    "explanation": "### 1. Theory: Par Value Method for Treasury Stock\nThe **par value method** treats the acquisition of treasury stock as a constructive retirement of the shares. The entry reverses the original issuance of the stock. All accounts related to that original issuance (Common Stock at par, APIC-CS for the original premium) are debited.\n\nAny difference between the repurchase price and the original issuance price is typically absorbed by Retained Earnings.\n\n### 2. Calculation & Journal Entry\n- **Original Issue Premium:** $7 issue price - $4 par value = $3 per share.\n- **APIC to Reverse:** 300 shares × $3/share = **$900**. This is the amount of APIC-CS created at issuance, which must now be eliminated.\n- **Total Repurchase Cost:** 300 shares × $10 = $3,000.\n\n```text\nTreasury Stock (at par, 300×$4)     1,200\nAPIC - Common Stock (300×$3)          900  ← The impact\nRetained Earnings (plug)                900\n      Cash (300×$10)                           3,000\n```\n- **Explanation of plug:** The total original issuance price was $7/share. The company paid $10/share. The $3 excess cost per share ($10 - $7) is charged against Retained Earnings (300 sh × $3 = $900). The impact on APIC-Common Stock is a **decrease of $900**."
  },
  {
    "id": 34,
    "level": 1,
    "subType": "stockSplit",
    "task": "NovaTech had 100,000 $10-par shares. On 7-1-Y1 it executed a 2-for-1 split. What is the impact on total shareholders' equity at 12-31-Y1?",
    "solution": { "type": "numeric", "value": "0" },
    "explanation": "### 1. Theory: Stock Split\nA **stock split** changes the number of shares outstanding and the par value per share, but it has **no impact on the dollar amounts** in any shareholders' equity accounts. It is not a transaction between the company and its owners; it simply repackages the existing ownership into more, smaller pieces.\n\nNo journal entry is recorded for a stock split. A memorandum entry is made in the stock ledger to note the change in the par value and number of shares.\n\n### 2. Analysis of the Split\n- **Before Split:**\n  - Shares Outstanding: 100,000\n  - Par Value: $10/share\n  - Common Stock Account: 100,000 × $10 = $1,000,000\n\n- **After 2-for-1 Split:**\n  - Shares Outstanding: 100,000 × 2 = **200,000**\n  - Par Value: $10 / 2 = **$5/share**\n  - Common Stock Account: 200,000 × $5 = $1,000,000 (unchanged)\n\nSince no accounts are changed, there is **no change** to total paid-in capital, Retained Earnings, or total shareholders' equity."
  },
  {
    "id": 35,
    "level": 2,
    "subType": "stockDividendLarge",
    "task": "Crescent Corp. (100,000 shares, $2-par) declares a 30% stock dividend when market price is $10. Provide the declaration entry.",
    "solution": {
      "type": "journal",
      "entry": [
        { "account": "Retained Earnings", "debit": 60000, "credit": null },
        { "account": "Common Stock",      "debit": null,  "credit": 60000 }
      ]
    },
    "explanation": "### 1. Theory: Large Stock Dividend (> 25%)\nAs this dividend is for 30% of outstanding shares, it is classified as **large**. Accounting standards require that large dividends be recorded at the **par value** of the shares issued, not their market value. The rationale is that a large issuance will materially dilute the share price, making it more akin to a stock split than a distribution of value.\n\n### 2. Calculation\n- **Shares to issue:** 100,000 shares × 30% = 30,000 shares\n- **Value to capitalize:** 30,000 shares × $2 par value = **$60,000**\n- The market price of $10 is irrelevant and ignored.\n\n### 3. Journal Entry\n```text\nRetained Earnings        60,000\n      Common Stock                  60,000\n```\nThis entry transfers $60,000 from the company's accumulated earnings (Retained Earnings) to its permanent capital (Common Stock), leaving total equity unchanged."
  }
];

export default equityScenarios;