// src/data/inventory-scenarios.js
// Explanations enhanced with step‑by‑step bullet lists.
// Scenario IDs 7, 13, 14, 21, 24, 26 and 27 removed per request.
// -----------------------------------------------------------------------------

const inventoryScenarios = [
  {
    id: 1,
    topic: "inventory",
    level: 1,
    method: "fifo-periodic",
    task: "Compute COGS under FIFO Periodic (no beginning inventory).",
    data: {
      beginningInventory: { units: 0, costPerUnit: 0 },
      transactions: [
        { date: "Jan 18", type: "purchase", units: 100, costPerUnit: 9 },
        { date: "Feb 25", type: "sale",    units: 60 },
        { date: "Apr 5",  type: "purchase", units: 30,  costPerUnit: 10 },
        { date: "Jun 2",  type: "sale",    units: 20 }
      ],
      endingUnits: 50
    },
    solution: { type: "numeric", value: 720 },
    explanation: `In FIFO Periodic, we ignore the timing of individual sales. We simply look at total units purchased, total units sold, and determine which cost layers were sold. In periodic inventory systems, we calculate COGS at the end of the period - not after each sale. FIFO Periodic always assigns the oldest costs to COGS first, regardless of when sales occurred throughout the period.\n1. First, identify total units sold during the period: 60 + 20 = 80 units\n2. Determine which layers were sold (oldest first): - 80 units were sold from the first purchase layer (cost $9 each) - COGS = 80 units × $9 = $720 FIFO`
  },
  {
    id: 2,
    topic: "inventory",
    level: 1,
    method: "lifo-periodic",
    task: "Compute COGS under LIFO Periodic (no beginning inventory).",
    data: {
      beginningInventory: { units: 0, costPerUnit: 0 },
      transactions: [
        { date: "Feb 1",  type: "purchase", units: 50, costPerUnit: 4 },
        { date: "Mar 5",  type: "sale",    units: 30 },
        { date: "Apr 18", type: "purchase", units: 40, costPerUnit: 5 },
        { date: "Jun 9",  type: "sale",    units: 20 }
      ],
      endingUnits: 40
    },
    solution: { type: "numeric", value: 240 },
    explanation: `In LIFO Periodic, we treat all sales as if they happened at the end of the period, after all purchases.

Key Concept: In periodic inventory, we first pool all sales, then assign costs from newest to oldest purchases.

1. Total units sold during the period: 30 + 20 = 50 units
2. Determine which layers were sold (newest first):
   - 40 units from second purchase (cost $5 each) = $200
   - 10 units from first purchase (cost $4 each) = $40
   - COGS = $200 + $40 = $240

LIFO Periodic always assigns the newest costs to COGS first, regardless of when sales actually occurred during the period.`
  },
  {
    id: 3,
    topic: "inventory",
    level: 1,
    method: "wavg-periodic",
    task: "Compute COGS under Weighted Average Periodic (no beginning inventory).",
    data: {
      beginningInventory: { units: 0, costPerUnit: 0 },
      transactions: [
        { date: "Feb 3",  type: "purchase", units: 40, costPerUnit: 6 },
        { date: "Feb 28", type: "sale",    units: 30 },
        { date: "Apr 12", type: "purchase", units: 50, costPerUnit: 7 },
        { date: "May 25", type: "sale",    units: 20 }
      ],
      endingUnits: 40
    },
    solution: { type: "numeric", value: 328, tolerance: 5 },
    explanation: `In Weighted Average Periodic, timing doesn't matter at all. We calculate one average cost for all inventory available.

Key Concept: We determine a single average cost per unit based on all available inventory, then apply it to all sales.

1. Calculate total goods available and their cost:
   - 40 units @ $6 = $240
   - 50 units @ $7 = $350
   - Total: 90 units costing $590

2. Determine weighted average cost per unit:
   - $590 ÷ 90 units = $6.5556 per unit

3. Apply this average cost to all units sold:
   - Total units sold: 30 + 20 = 50 units
   - COGS = 50 units × $6.5556 = $328 (rounded)

All units sold during the period are assigned the same average cost, regardless of when they were purchased or sold.`
  },
  {
    id: 4,
    topic: "inventory",
    level: 1,
    method: "fifo-perpetual",
    task: "Calculate COGS using FIFO Perpetual.",
    data: {
      beginningInventory: { units: 20, costPerUnit: 2 },
      transactions: [
        { date: "Jan 8",  type: "purchase", units: 30, costPerUnit: 3 },
        { date: "Jan 20", type: "sale",    units: 25 },
        { date: "Feb 14", type: "purchase", units: 20, costPerUnit: 4 },
        { date: "Mar 1",  type: "sale",    units: 15 }
      ]
    },
    solution: { type: "numeric", value: 100 },
    explanation: `In FIFO Perpetual, we update inventory records after EACH sale, always selling from the oldest layers first.

Key Concept: Unlike periodic inventory, perpetual systems track costs after every transaction.

1. First sale (Jan 20, 25 units):
   - We sell from oldest layers first:
   - 20 units from beginning inventory @ $2 = $40
   - 5 units from Jan 8 purchase @ $3 = $15
   - COGS for first sale = $55

2. Second sale (Mar 1, 15 units):
   - At this point, we have:
      25 units from Jan 8 purchase @ $3
      20 units from Feb 14 purchase @ $4
   - We sell from oldest remaining inventory:
   - 15 units from Jan 8 purchase @ $3 = $45
   - COGS for second sale = $45

Total COGS = $55 + $45 = $100

In perpetual FIFO, the exact timing of sales impacts which cost layers are assigned to each sale.`
  },
  {
    id: 5,
    topic: "inventory",
    level: 1,
    method: "fifo-perpetual",
    task: "Compute COGS under FIFO Perpetual.",
    data: {
      beginningInventory: { units: 30, costPerUnit: 5 },
      transactions: [
        { date: "Feb 2",  type: "sale",    units: 20 },
        { date: "Feb 10", type: "purchase", units: 40, costPerUnit: 6 },
        { date: "Mar 3",  type: "sale",    units: 30 },
        { date: "Apr 1",  type: "purchase", units: 10, costPerUnit: 7 }
      ]
    },
    solution: { type: "numeric", value: 270 },
    explanation: `Perpetual FIFO → track layers as we go.\n\n- Sale on Feb 2 (20 units): 20 @ $5 = $100\n- Sale on Mar 3 (30 units):\n  - 10 @ $5 = $50\n  - 20 @ $6 = $120\n  - Sale 2 COGS = $170\n\n- Total COGS = $270`
  },
  {
    id: 6,
    topic: "inventory",
    level: 1,
    method: "lifo-perpetual",
    task: "Calculate COGS using LIFO Perpetual.",
    data: {
      beginningInventory: { units: 25, costPerUnit: 6 },
      transactions: [
        { date: "Jan 9",  type: "purchase", units: 35, costPerUnit: 7 },
        { date: "Jan 25", type: "sale",    units: 30 },
        { date: "Feb 17", type: "purchase", units: 20, costPerUnit: 8 },
        { date: "Mar 10", type: "sale",    units: 20 }
      ]
    },
    solution: { type: "numeric", value: 370 },
    explanation: `In LIFO Perpetual, we update inventory after each transaction, always selling from the newest cost layers first.

Key Concept: Each sale is processed immediately using the most recent purchase costs available at that moment.

1. First sale (Jan 25, 30 units):
   - We sell from newest layers first:
   - 30 units from Jan 9 purchase @ $7 = $210
   - COGS for first sale = $210

2. Second sale (Mar 10, 20 units):
   - At this point, we have:
      25 units from beginning inventory @ $6
      5 units from Jan 9 purchase @ $7
      20 units from Feb 17 purchase @ $8
   - We sell from newest layers:
   - 20 units from Feb 17 purchase @ $8 = $160
   - COGS for second sale = $160

Total COGS = $210 + $160 = $370

In perpetual LIFO, the exact sequence of purchases and sales determines which cost layers are assigned to each transaction.`
  },
  {
    id: 8,
    topic: "inventory",
    level: 1,
    method: "fifo-periodic",
    task: "Calculate the cost of goods sold (COGS) using FIFO Periodic method.",
    data: {
      beginningInventory: { units: 80, costPerUnit: 5 },
      transactions: [
        { date: "Apr 2",  type: "purchase", units: 120, costPerUnit: 6 },
        { date: "May 14", type: "sale",    units: 100 },
        { date: "Jul 8",  type: "purchase", units: 80,  costPerUnit: 7 },
        { date: "Sep 20", type: "sale",    units: 70 }
      ],
      endingUnits: 110
    },
    solution: { type: "numeric", value: 940 },
    explanation: `Key Concept: In FIFO Periodic, we count total units sold for the entire period and assign costs from oldest to newest layers, regardless of when the sales occurred.
  
  1. First, identify total sales for the period:
     - May 14 sale: 100 units
     - Sep 20 sale: 70 units
     - Total units sold: 170 units
  
  2. Available inventory during period (280 units):
     - Beginning inventory: 80 units @ $5 = $400
     - Apr 2 purchase: 120 units @ $6 = $720
     - Jul 8 purchase: 80 units @ $7 = $560
     - Total available: 280 units at $1,680
  
  3. Direct COGS calculation (oldest costs first):
     - 80 units from beginning inventory @ $5 = $400
     - 90 units from Apr 2 purchase @ $6 = $540
     - COGS = $400 + $540 = $940
  
  4. Verification: Ending inventory (110 units):
     - 30 units from Apr 2 purchase @ $6 = $180
     - 80 units from Jul 8 purchase @ $7 = $560
     - Total ending inventory = $740
  
  In periodic FIFO, the timing of individual sales throughout the period doesn't affect which cost layers are used for COGS. We simply assign the oldest costs first to the total units sold during the period.`
  },
  {
    id: 9,
    topic: "inventory",
    level: 1,
    method: "wavg-periodic",
    task: "Calculate COGS under the Weighted Average Periodic method.",
    data: {
      beginningInventory: { units: 50, costPerUnit: 4 },
      transactions: [
        { date: "Jan 20", type: "purchase", units: 100, costPerUnit: 5 },
        { date: "Mar 15", type: "sale",    units: 90 },
        { date: "Apr 30", type: "purchase", units: 120, costPerUnit: 6 },
        { date: "Jul 10", type: "sale",    units: 80 }
      ],
      endingUnits: 100
    },
    solution: { type: "numeric", value: 894, tolerance: 5 },
    explanation: `- Goods available for sale (270 units):\n  - 50  @ $4 = $200\n  - 100 @ $5 = $500\n  - 120 @ $6 = $720\n  - Total = $1,420\n\n- Weighted‑average cost = $1,420 ÷ 270 = $5.2593\n\n- Units sold (170) × $5.2593 ≈ $894\n- Ending inventory (100) × $5.2593 ≈ $526\n\n(Periodic W‑AVG → sale timing within the period doesn't affect the average cost.)`
  },
  {
    id: 10,
    topic: "inventory",
    level: 1,
    method: "fifo-periodic",
    task: "Calculate the cost of goods sold (COGS) using FIFO Periodic method.",
    data: {
      beginningInventory: { units: 50, costPerUnit: 4 },
      transactions: [
        { date: "Mar 2",  type: "purchase", units: 70, costPerUnit: 5 },
        { date: "Apr 10", type: "sale",    units: 60 },
        { date: "Jun 8",  type: "purchase", units: 40, costPerUnit: 6 },
        { date: "Aug 15", type: "sale",    units: 30 }
      ],
      endingUnits: 70
    },
    solution: { type: "numeric", value: 400 },
    explanation: `Key Concept: In FIFO Periodic, we assign costs to COGS starting with the oldest inventory first, regardless of when sales occur throughout the period.
  
  1. First, calculate total units sold during the period:
     - Apr 10 sale: 60 units
     - Aug 15 sale: 30 units
     - Total units sold: 90 units
  
  2. Identify all available inventory during the period:
     - Beginning inventory: 50 units @ $4 = $200
     - Mar 2 purchase: 70 units @ $5 = $350
     - Jun 8 purchase: 40 units @ $6 = $240
     - Total available: 160 units costing $790
  
  3. Direct COGS calculation (oldest costs first):
     - 50 units from beginning inventory @ $4 = $200
     - 40 units from Mar 2 purchase @ $5 = $200
     - COGS = $200 + $200 = $400
  
  4. Verification: Ending inventory (70 units):
     - 30 units from Mar 2 purchase @ $5 = $150
     - 40 units from Jun 8 purchase @ $6 = $240
     - Total ending inventory = $390
     - Check: $790 - $400 = $390 ✓
  
  In FIFO Periodic, we focus on the total units sold during the accounting period rather than tracking each individual sale. The earliest costs are always assigned to COGS regardless of which specific units were physically sold first.`
  },
  {
    id: 11,
    topic: "inventory",
    level: 1,
    method: "lifo-periodic",
    task: "Calculate COGS using LIFO Periodic.",
    data: {
      beginningInventory: { units: 80, costPerUnit: 7 },
      transactions: [
        { date: "Mar 10", type: "purchase", units: 60, costPerUnit: 8 },
        { date: "May 6",  type: "sale",    units: 70 },
        { date: "Jul 22", type: "purchase", units: 40, costPerUnit: 9 },
        { date: "Oct 12", type: "sale",    units: 30 }
      ],
      endingUnits: 80
    },
    solution: { type: "numeric", value: 840 },
    explanation: `Key Concept: In LIFO Periodic, we assign the newest costs first to COGS, treating all sales as if they occurred at the end of the period after all purchases.
  
  1. First, determine total units sold during the period:
     - May 6 sale: 70 units
     - Oct 12 sale: 30 units
     - Total units sold: 100 units
  
  2. Identify all available inventory during the period:
     - Beginning inventory: 80 units @ $7 = $560
     - Mar 10 purchase: 60 units @ $8 = $480
     - Jul 22 purchase: 40 units @ $9 = $360
     - Total available: 180 units costing $1,400
  
  3. Direct COGS calculation (newest costs first):
     - 40 units from Jul 22 purchase @ $9 = $360
     - 60 units from Mar 10 purchase @ $8 = $480
     - COGS = $360 + $480 = $840
  
  4. Verification: Ending inventory (80 units):
     - 80 units from beginning inventory @ $7 = $560
     - Check: $1,400 - $840 = $560 ✓
  
  In LIFO Periodic, the timing of sales doesn't matter because we apply the most recent costs to COGS regardless of when the sales actually occurred. This approach assumes the oldest inventory items remain in ending inventory while the newest ones are sold first.`
  },
  {
    id: 12,
    topic: "inventory",
    level: 1,
    method: "wavg-periodic",
    task: "Calculate COGS using Weighted Average Periodic.",
    data: {
      beginningInventory: { units: 30, costPerUnit: 3 },
      transactions: [
        { date: "Jan 22", type: "purchase", units: 70, costPerUnit: 4 },
        { date: "Mar 19", type: "sale",    units: 60 },
        { date: "May 7",  type: "purchase", units: 20, costPerUnit: 5 },
        { date: "Jul 30", type: "sale",    units: 30 }
      ],
      endingUnits: 30
    },
    solution: { type: "numeric", value: 353, tolerance: 5 },
    explanation: `Key Concept: Weighted Average Periodic blends all inventory costs together and applies a single average cost to all units sold, regardless of when purchases or sales occurred.
  
  1. First, calculate total units sold during the period:
     - Mar 19 sale: 60 units
     - Jul 30 sale: 30 units
     - Total units sold: 90 units
  
  2. Determine all available inventory and its cost:
     - Beginning inventory: 30 units @ $3 = $90
     - Jan 22 purchase: 70 units @ $4 = $280
     - May 7 purchase: 20 units @ $5 = $100
     - Total available: 120 units costing $470
  
  3. Calculate the weighted average cost per unit:
     - Total cost ÷ Total units = $470 ÷ 120 = $3.9167 per unit
  
  4. Direct COGS calculation:
     - 90 units sold × $3.9167 = $352.50 ≈ $353
  
  5. Verification: Ending inventory (30 units):
     - 30 units × $3.9167 = $117.50 ≈ $118
     - Check: $470 - $353 = $118
  
  In Weighted Average Periodic, we create a cost pool that treats all inventory as one homogeneous group. This approach eliminates the need to track which specific cost layers are sold, making it simpler to implement when individual unit tracking is difficult or impractical.`
  },
  {
    id: 15,
    topic: "inventory",
    level: 1,
    method: "fifo-periodic",
    task: "Calculate the cost of goods sold (COGS) using FIFO Periodic method.",
    data: {
      beginningInventory: { units: 100, costPerUnit: 10 },
      transactions: [
        { date: "Feb 15", type: "purchase", units: 150, costPerUnit: 12 },
        { date: "Mar 10", type: "sale",    units: 120 },
        { date: "May 3",  type: "purchase", units: 200, costPerUnit: 13 },
        { date: "Jun 18", type: "sale",    units: 180 },
        { date: "Aug 27", type: "purchase", units: 120, costPerUnit: 14 },
        { date: "Oct 5",  type: "sale",    units: 150 }
      ],
      endingUnits: 120
    },
    solution: { type: "numeric", value: 5400 },
    explanation: `Key Concept: In FIFO Periodic, we assign the oldest inventory costs first to total units sold, regardless of the sequence of sales and purchases throughout the period.
  
  1. First, calculate total units sold during the period:
     - Mar 10 sale: 120 units
     - Jun 18 sale: 180 units
     - Oct 5 sale: 150 units
     - Total units sold: 450 units
  
  2. Identify all available inventory during the period:
     - Beginning inventory: 100 units @ $10 = $1,000
     - Feb 15 purchase: 150 units @ $12 = $1,800
     - May 3 purchase: 200 units @ $13 = $2,600
     - Aug 27 purchase: 120 units @ $14 = $1,680
     - Total available: 570 units costing $7,080
  
  3. Direct COGS calculation (oldest costs first):
     - 100 units from beginning inventory @ $10 = $1,000
     - 150 units from Feb 15 purchase @ $12 = $1,800
     - 200 units from May 3 purchase @ $13 = $2,600
     - COGS = $1,000 + $1,800 + $2,600 = $5,400
  
  4. Verification: Ending inventory (120 units):
     - 120 units from Aug 27 purchase @ $14 = $1,680
     - Check: $7,080 - $5,400 = $1,680 ✓
  
  In FIFO Periodic, we simply consider the total units sold during the period (450) and assign costs from the oldest available layers, regardless of when each sale physically occurred. This explains why the 120 units remaining in ending inventory come entirely from the most recent (Aug 27) purchase.`
  },
  {
    id: 16,
    topic: "inventory",
    level: 1,
    method: "lifo-periodic",
    task: "Calculate the cost of goods sold (COGS) using LIFO Periodic method.",
    data: {
      beginningInventory: { units: 100, costPerUnit: 10 },
      transactions: [
        { date: "Feb 15", type: "purchase", units: 150, costPerUnit: 12 },
        { date: "Mar 10", type: "sale",    units: 120 },
        { date: "May 3",  type: "purchase", units: 200, costPerUnit: 13 },
        { date: "Jun 18", type: "sale",    units: 180 },
        { date: "Aug 27", type: "purchase", units: 120, costPerUnit: 14 },
        { date: "Oct 5",  type: "sale",    units: 150 }
      ],
      endingUnits: 120
    },
    solution: { type: "numeric", value: 5840 },
    explanation: `Key Concept: In LIFO Periodic, we assign the newest inventory costs first to total units sold, regardless of when sales actually occurred during the period.
  
  1. First, calculate total units sold during the period:
     - Mar 10 sale: 120 units
     - Jun 18 sale: 180 units
     - Oct 5 sale: 150 units
     - Total units sold: 450 units
  
  2. Identify all available inventory during the period:
     - Beginning inventory: 100 units @ $10 = $1,000
     - Feb 15 purchase: 150 units @ $12 = $1,800
     - May 3 purchase: 200 units @ $13 = $2,600
     - Aug 27 purchase: 120 units @ $14 = $1,680
     - Total available: 570 units costing $7,080
  
  3. Direct COGS calculation (newest costs first):
     - 120 units from Aug 27 purchase @ $14 = $1,680
     - 200 units from May 3 purchase @ $13 = $2,600
     - 130 units from Feb 15 purchase @ $12 = $1,560
     - COGS = $1,680 + $2,600 + $1,560 = $5,840
  
  4. Verification: Ending inventory (120 units):
     - 100 units from beginning inventory @ $10 = $1,000
     - 20 units from Feb 15 purchase @ $12 = $240
     - Total ending inventory = $1,240
     - Check: $7,080 - $5,840 = $1,240 ✓
  
  In LIFO Periodic, we consider the total units sold for the entire period (450) and assign costs from the newest layers first. This is why the ending inventory contains the oldest units (beginning inventory), regardless of the actual sequence of sales throughout the period.`
  },
  {
    id: 17,
    topic: "inventory",
    level: 1,
    method: "wavg-periodic",
    task: "Calculate the cost of goods sold (COGS) using Weighted Average Periodic method.",
    data: {
      beginningInventory: { units: 100, costPerUnit: 10 },
      transactions: [
        { date: "Feb 15", type: "purchase", units: 150, costPerUnit: 12 },
        { date: "Mar 10", type: "sale",    units: 120 },
        { date: "May 3",  type: "purchase", units: 200, costPerUnit: 13 },
        { date: "Jun 18", type: "sale",    units: 180 },
        { date: "Aug 27", type: "purchase", units: 120, costPerUnit: 14 },
        { date: "Oct 5",  type: "sale",    units: 150 }
      ],
      endingUnits: 120
    },
    solution: { type: "numeric", value: 5589, tolerance: 5 },
    explanation: `Key Concept: Weighted Average Periodic combines all inventory costs into a single average cost per unit, which is then applied to all units sold, regardless of purchase timing or sales sequence.
  
  1. First, calculate total units sold during the period:
     - Mar 10 sale: 120 units
     - Jun 18 sale: 180 units
     - Oct 5 sale: 150 units
     - Total units sold: 450 units
  
  2. Identify all available inventory and its total cost:
     - Beginning inventory: 100 units @ $10 = $1,000
     - Feb 15 purchase: 150 units @ $12 = $1,800
     - May 3 purchase: 200 units @ $13 = $2,600
     - Aug 27 purchase: 120 units @ $14 = $1,680
     - Total available: 570 units costing $7,080
  
  3. Calculate the weighted average cost per unit:
     - Total cost ÷ Total units = $7,080 ÷ 570 = $12.4211 per unit
  
  4. Direct COGS calculation:
     - 450 units sold × $12.4211 = $5,589.50 ≈ $5,589
  
  5. Verification: Ending inventory (120 units):
     - 120 units × $12.4211 = $1,490.53 ≈ $1,491
     - Check: $7,080 - $5,589 = $1,491 ✓
  
  In Weighted Average Periodic, we don't need to track which specific units were sold or when. Instead, we blend all costs together and apply the same average cost to every unit. This means that even though sales occurred at different times (before some purchases), all units sold are valued at the same average cost calculated at the end of the period.`
  },
  {
    id: 18,
    topic: "inventory",
    level: 1,
    method: "lifo-periodic",
    task: "Calculate the cost of goods sold (COGS) using LIFO Periodic method.",
    data: {
      beginningInventory: { units: 60, costPerUnit: 9 },
      transactions: [
        { date: "Feb 10", type: "purchase", units: 100, costPerUnit: 11 },
        { date: "Mar 12", type: "sale",    units: 80 },
        { date: "Jun 5",  type: "purchase", units: 90,  costPerUnit: 12 },
        { date: "Aug 18", type: "sale",    units: 60 },
        { date: "Oct 25", type: "purchase", units: 70,  costPerUnit: 13 },
        { date: "Nov 30", type: "sale",    units: 100 }
      ],
      endingUnits: 80
    },
    solution: { type: "numeric", value: 2870 },
    explanation: `Key Concept: In LIFO Periodic, we assign the newest costs first to total units sold, treating all sales as if they occurred at the end of the period after all purchases.
  
  1. First, calculate total units sold during the period:
     - Mar 12 sale: 80 units
     - Aug 18 sale: 60 units
     - Nov 30 sale: 100 units
     - Total units sold: 240 units
  
  2. Identify all available inventory during the period:
     - Beginning inventory: 60 units @ $9 = $540
     - Feb 10 purchase: 100 units @ $11 = $1,100
     - Jun 5 purchase: 90 units @ $12 = $1,080
     - Oct 25 purchase: 70 units @ $13 = $910
     - Total available: 320 units costing $3,630
  
  3. Direct COGS calculation (newest costs first):
     - 70 units from Oct 25 purchase @ $13 = $910
     - 90 units from Jun 5 purchase @ $12 = $1,080
     - 80 units from Feb 10 purchase @ $11 = $880
     - COGS = $910 + $1,080 + $880 = $2,870
  
  4. Verification: Ending inventory (80 units):
     - 60 units from beginning inventory @ $9 = $540
     - 20 units from Feb 10 purchase @ $11 = $220
     - Total ending inventory = $760
     - Check: $3,630 - $2,870 = $760 ✓
  
  In LIFO Periodic, even though sales occurred before some purchases (e.g., the Mar 12 sale happened before the Jun 5 and Oct 25 purchases), we still assign costs as if all sales happened at the end. This is why the newest costs (Oct 25 purchase) are assigned first, even to units sold earlier in the year.`
  },
  {
    id: 19,
    topic: "inventory",
    level: 2,
    method: "fifo-perpetual",
    task: "Calculate the cost of goods sold (COGS) using FIFO Perpetual method.",
    data: {
      beginningInventory: { units: 50, costPerUnit: 8 },
      transactions: [
        { date: "Jan 5",  type: "purchase", units: 100, costPerUnit: 10 },
        { date: "Jan 12", type: "sale",    units: 80 },
        { date: "Feb 3",  type: "purchase", units: 70,  costPerUnit: 11 },
        { date: "Feb 20", type: "sale",    units: 90 },
        { date: "Mar 15", type: "purchase", units: 60,  costPerUnit: 12 },
        { date: "Mar 28", type: "sale",    units: 40 }
      ]
    },
    solution: { type: "numeric", value: 2060 },
    explanation: `Key Concept: In FIFO Perpetual, we update inventory records after EACH sale, always selling from the oldest layers first based on what's available at the time of each transaction.
  
  1. Initial inventory situation:
     - Beginning inventory: 50 units @ $8
     - After Jan 5 purchase: Add 100 units @ $10
     - Available before first sale: 50 units @ $8 and 100 units @ $10
  
  2. First sale on Jan 12 (80 units):
     - Sell oldest costs first:
     - 50 units from beginning inventory @ $8 = $400
     - 30 units from Jan 5 purchase @ $10 = $300
     - COGS for first sale = $700
     - Remaining inventory: 70 units @ $10
  
  3. Inventory update after Feb 3 purchase:
     - 70 units from Jan 5 @ $10
     - Add 70 units from Feb 3 @ $11
     - Available before second sale: 70 units @ $10 and 70 units @ $11
  
  4. Second sale on Feb 20 (90 units):
     - Sell oldest costs first:
     - 70 units from Jan 5 purchase @ $10 = $700
     - 20 units from Feb 3 purchase @ $11 = $220
     - COGS for second sale = $920
     - Remaining inventory: 50 units @ $11
  
  5. Inventory update after Mar 15 purchase:
     - 50 units from Feb 3 @ $11
     - Add 60 units from Mar 15 @ $12
     - Available before third sale: 50 units @ $11 and 60 units @ $12
  
  6. Third sale on Mar 28 (40 units):
     - Sell oldest costs first:
     - 40 units from Feb 3 purchase @ $11 = $440
     - COGS for third sale = $440
     - Remaining inventory: 10 units @ $11 and 60 units @ $12
  
  7. Total COGS = $700 + $920 + $440 = $2,060
  
  Unlike periodic inventory, perpetual FIFO requires us to track inventory composition after every transaction. The exact timing of each sale determines which cost layers are available to be sold at that point in time.`
  },
  {
    id: 20,
    topic: "inventory",
    level: 2,
    method: "lifo-perpetual",
    task: "Calculate the cost of goods sold (COGS) using LIFO Perpetual method.",
    data: {
      beginningInventory: { units: 50, costPerUnit: 8 },
      transactions: [
        { date: "Jan 5",  type: "purchase", units: 100, costPerUnit: 10 },
        { date: "Jan 12", type: "sale",    units: 80 },
        { date: "Feb 3",  type: "purchase", units: 70,  costPerUnit: 11 },
        { date: "Feb 20", type: "sale",    units: 90 },
        { date: "Mar 15", type: "purchase", units: 60,  costPerUnit: 12 },
        { date: "Mar 28", type: "sale",    units: 40 }
      ]
    },
    solution: { type: "numeric", value: 2250 },
    explanation: `Key Concept: In LIFO Perpetual, we update inventory after each transaction, always selling from the newest cost layers first based on what's available at the time of each sale.
  
  1. Initial inventory situation:
     - Beginning inventory: 50 units @ $8
     - After Jan 5 purchase: Add 100 units @ $10
     - Available before first sale: 50 units @ $8 and 100 units @ $10
  
  2. First sale on Jan 12 (80 units):
     - Sell newest costs first:
     - 80 units from Jan 5 purchase @ $10 = $800
     - COGS for first sale = $800
     - Remaining inventory: 50 units @ $8 and 20 units @ $10
  
  3. Inventory update after Feb 3 purchase:
     - 50 units from beginning inventory @ $8
     - 20 units from Jan 5 purchase @ $10
     - Add 70 units from Feb 3 @ $11
     - Available before second sale: 50 units @ $8, 20 units @ $10, and 70 units @ $11
  
  4. Second sale on Feb 20 (90 units):
     - Sell newest costs first:
     - 70 units from Feb 3 purchase @ $11 = $770
     - 20 units from Jan 5 purchase @ $10 = $200
     - COGS for second sale = $970
     - Remaining inventory: 50 units @ $8
  
  5. Inventory update after Mar 15 purchase:
     - 50 units from beginning inventory @ $8
     - Add 60 units from Mar 15 @ $12
     - Available before third sale: 50 units @ $8 and 60 units @ $12
  
  6. Third sale on Mar 28 (40 units):
     - Sell newest costs first:
     - 40 units from Mar 15 purchase @ $12 = $480
     - COGS for third sale = $480
     - Remaining inventory: 50 units @ $8 and 20 units @ $12
  
  7. Total COGS = $800 + $970 + $480 = $2,250
  
  In perpetual LIFO, the timing of each transaction is critical since we must know exactly which cost layers are available at the moment of each sale. Notice how the oldest inventory (50 units @ $8) remains untouched throughout all transactions because newer layers are always sold first.`
  },
  {
    id: 22,
    topic: "inventory",
    level: 2,
    method: "fifo-perpetual",
    task: "Calculate COGS using FIFO Perpetual.",
    data: {
      beginningInventory: { units: 40, costPerUnit: 7 },
      transactions: [
        { date: "Jan 5",  type: "purchase", units: 80, costPerUnit: 8 },
        { date: "Jan 18", type: "sale",    units: 60 },
        { date: "Feb 10", type: "purchase", units: 70, costPerUnit: 9 },
        { date: "Feb 28", type: "sale",    units: 50 },
        { date: "Mar 22", type: "purchase", units: 50, costPerUnit: 10 },
        { date: "Mar 30", type: "sale",    units: 30 }
      ]
    },
    solution: { type: "numeric", value: 1100 },
    explanation: `Key Concept: In FIFO Perpetual, we track inventory continuously and assign costs from the oldest available layers at the time of each sale.
  
  1. Initial inventory situation:
     - Beginning inventory: 40 units @ $7
     - After Jan 5 purchase: Add 80 units @ $8
     - Available before first sale: 40 units @ $7 and 80 units @ $8
  
  2. First sale on Jan 18 (60 units):
     - Sell oldest costs first:
     - 40 units from beginning inventory @ $7 = $280
     - 20 units from Jan 5 purchase @ $8 = $160
     - COGS for first sale = $440
     - Remaining inventory: 60 units @ $8
  
  3. Inventory update after Feb 10 purchase:
     - 60 units from Jan 5 purchase @ $8
     - Add 70 units from Feb 10 @ $9
     - Available before second sale: 60 units @ $8 and 70 units @ $9
  
  4. Second sale on Feb 28 (50 units):
     - Sell oldest costs first:
     - 50 units from Jan 5 purchase @ $8 = $400
     - COGS for second sale = $400
     - Remaining inventory: 10 units @ $8 and 70 units @ $9
  
  5. Inventory update after Mar 22 purchase:
     - 10 units from Jan 5 purchase @ $8
     - 70 units from Feb 10 purchase @ $9
     - Add 50 units from Mar 22 @ $10
     - Available before third sale: 10 units @ $8, 70 units @ $9, and 50 units @ $10
  
  6. Third sale on Mar 30 (30 units):
     - Sell oldest costs first:
     - 10 units from Jan 5 purchase @ $8 = $80
     - 20 units from Feb 10 purchase @ $9 = $180
     - COGS for third sale = $260
     - Remaining inventory: 50 units @ $9 and 50 units @ $10
  
  7. Total COGS = $440 + $400 + $260 = $1,100
  
  The perpetual FIFO method creates a continuous flow of inventory costs where each sale draws from the oldest available cost layers at that point in time. This ensures that inventory valuation closely tracks the physical flow of goods in a first-in, first-out manner.`
  },
  {
    id: 23,
    topic: "inventory",
    level: 2,
    method: "lifo-perpetual",
    task: "Calculate COGS using LIFO Perpetual.",
    data: {
      beginningInventory: { units: 30, costPerUnit: 6 },
      transactions: [
        { date: "Jan 6",  type: "purchase", units: 70, costPerUnit: 7 },
        { date: "Jan 22", type: "sale",    units: 50 },
        { date: "Feb 12", type: "purchase", units: 60, costPerUnit: 8 },
        { date: "Feb 26", type: "sale",    units: 40 },
        { date: "Mar 18", type: "purchase", units: 40, costPerUnit: 9 },
        { date: "Mar 29", type: "sale",    units: 30 }
      ]
    },
    solution: { type: "numeric", value: 940 },
    explanation: `Key Concept: In LIFO Perpetual, we update inventory records after each transaction and always assign costs from the newest available layers at the time of each sale.
  
  1. Initial inventory situation:
     - Beginning inventory: 30 units @ $6
     - After Jan 6 purchase: Add 70 units @ $7
     - Available before first sale: 30 units @ $6 and 70 units @ $7
  
  2. First sale on Jan 22 (50 units):
     - Sell newest costs first:
     - 50 units from Jan 6 purchase @ $7 = $350
     - COGS for first sale = $350
     - Remaining inventory: 30 units @ $6 and 20 units @ $7
  
  3. Inventory update after Feb 12 purchase:
     - 30 units from beginning inventory @ $6
     - 20 units from Jan 6 purchase @ $7
     - Add 60 units from Feb 12 @ $8
     - Available before second sale: 30 units @ $6, 20 units @ $7, and 60 units @ $8
  
  4. Second sale on Feb 26 (40 units):
     - Sell newest costs first:
     - 40 units from Feb 12 purchase @ $8 = $320
     - COGS for second sale = $320
     - Remaining inventory: 30 units @ $6, 20 units @ $7, and 20 units @ $8
  
  5. Inventory update after Mar 18 purchase:
     - 30 units from beginning inventory @ $6
     - 20 units from Jan 6 purchase @ $7
     - 20 units from Feb 12 purchase @ $8
     - Add 40 units from Mar 18 @ $9
     - Available before third sale: 30 units @ $6, 20 units @ $7, 20 units @ $8, and 40 units @ $9
  
  6. Third sale on Mar 29 (30 units):
     - Sell newest costs first:
     - 30 units from Mar 18 purchase @ $9 = $270
     - COGS for third sale = $270
     - Remaining inventory: 30 units @ $6, 20 units @ $7, 20 units @ $8, and 10 units @ $9
  
  7. Total COGS = $350 + $320 + $270 = $940
  
  In LIFO Perpetual, each sale is calculated based on the newest inventory available at that specific moment. Notice how the oldest inventory (30 units @ $6) remains untouched throughout all transactions, creating a "base layer" that may stay in inventory indefinitely as long as newer purchases continue to occur.`
  },
  {
    id: 25,
    topic: "inventory",
    level: 2,
    method: "wavg-periodic",
    task: "Compute COGS using the Weighted Average Periodic method.",
    data: {
      beginningInventory: { units: 120, costPerUnit: 18 },
      transactions: [
        { date: "Feb 10", type: "purchase", units: 200, costPerUnit: 20 },
        { date: "Apr 12", type: "sale",    units: 180 },
        { date: "Jun 1",  type: "purchase", units: 160, costPerUnit: 21 },
        { date: "Aug 20", type: "sale",    units: 140 }
      ],
      endingUnits: 160
    },
    solution: { type: "numeric", value: 6347, tolerance: 5 },
    explanation: `Key Concept: Weighted Average Periodic calculates a single average cost based on all inventory available during the period, then applies this uniform cost to all units sold, regardless of when sales occurred.
  
  1. First, calculate total units sold during the period:
     - Apr 12 sale: 180 units
     - Aug 20 sale: 140 units
     - Total units sold: 320 units
  
  2. Identify all available inventory and its total cost:
     - Beginning inventory: 120 units @ $18 = $2,160
     - Feb 10 purchase: 200 units @ $20 = $4,000
     - Jun 1 purchase: 160 units @ $21 = $3,360
     - Total available: 480 units costing $9,520
  
  3. Calculate the weighted average cost per unit:
     - Total cost ÷ Total units = $9,520 ÷ 480 units = $19.8333 per unit
  
  4. Direct COGS calculation:
     - 320 units sold × $19.8333 = $6,346.66 ≈ $6,347
  
  5. Verification: Ending inventory (160 units):
     - 160 units × $19.8333 = $3,173.33 ≈ $3,173
     - Check: $9,520 - $6,347 = $3,173 ✓
  
  In Weighted Average Periodic, the sequence of purchases and sales is irrelevant to the final calculation. Notice that even though some units were sold in April (before the June purchase), all units sold throughout the period receive the same average cost calculated from all available inventory. This approach simplifies inventory accounting by treating all units as interchangeable parts of a homogeneous pool.`
  }
];

export default inventoryScenarios;
