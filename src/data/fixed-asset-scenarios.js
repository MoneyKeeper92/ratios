const fixedAssetScenarios = [
  // LEVEL 1: CAPITALIZATION SCENARIOS
  {
    id: "FA-CAP-01",
    topic: "fixedAsset",
    level: 1,
    difficulty: 1,
    task: "ABC Company purchased a new manufacturing machine. From the list below, identify which costs should be capitalized and calculate the total capitalized cost.",
    data: {
      costs: [
        { description: "Purchase price of machine", amount: 75000, capitalizable: true },
        { description: "Sales tax", amount: 6000, capitalizable: true },
        { description: "Shipping and delivery", amount: 2500, capitalizable: true },
        { description: "Installation labor", amount: 4300, capitalizable: true },
        { description: "Routine maintenance for first month", amount: 500, capitalizable: false },
        { description: "Employee training", amount: 1800, capitalizable: false },
        { description: "Testing and calibration", amount: 1200, capitalizable: true }
      ]
    },
    solution: { 
      type: "numeric", 
      value: 89000,
      tolerance: 0.01
    },
    explanation: "Capitalizable costs include the purchase price, sales tax, shipping, installation, and testing costs.\nNon-capitalizable costs include routine maintenance and employee training as these are operating expenses."
  },
  {
    id: "FA-CAP-02",
    topic: "fixedAsset",
    level: 1,
    difficulty: 1,
    task: "NexGen Manufacturing acquired a new robotics assembly arm. From the list below, identify which costs should be capitalized and calculate the total capitalized cost.",
    data: {
      costs: [
        { description: "Annual service agreement (first year)", amount: 4800, capitalizable: false },
        { description: "Base unit purchase price", amount: 187500, capitalizable: true },
        { description: "Employee technical training", amount: 6200, capitalizable: false },
        { description: "Freight and delivery", amount: 3750, capitalizable: true },
        { description: "Professional installation and calibration", amount: 8350, capitalizable: true }
      ]
    },
    solution: { 
      type: "numeric", 
      value: 199600,
      tolerance: 0.01
    },
    explanation: "Capitalizable costs include the base unit purchase price, freight and delivery, and professional installation/calibration. Employee training and service agreements are operating expenses that should be expensed as incurred."
  },
  {
    id: "FA-CAP-03",
    topic: "fixedAsset",
    level: 1,
    difficulty: 1,
    task: "Skyline Enterprises purchased digital audio-visual equipment for their conference center. From the list below, identify which costs should be capitalized and calculate the total capitalized cost.",
    data: {
      costs: [
        { description: "Equipment maintenance plan (2-years)", amount: 7500, capitalizable: false },
        { description: "Hardware customization for venue", amount: 12800, capitalizable: true },
        { description: "Initial software setup", amount: 3200, capitalizable: true },
        { description: "Purchase price of A/V system", amount: 78500, capitalizable: true },
        { description: "Staff operational training", amount: 4500, capitalizable: false }
      ]
    },
    solution: { 
      type: "numeric", 
      value: 94500,
      tolerance: 0.01
    },
    explanation: "Capitalizable costs include the purchase price of the A/V system, hardware customization, and initial software setup. Staff training and the maintenance plan are operating expenses that should be expensed as incurred."
  },
  {
    id: "FA-CAP-04",
    topic: "fixedAsset",
    level: 1,
    difficulty: 2,
    task: "Pinnacle Industries purchased a specialized CNC machine on April 15. From the list below, identify which costs should be capitalized and calculate the total capitalized cost.",
    data: {
      costs: [
        { description: "Estimated residual value", amount: 3500, capitalizable: false },
        { description: "First quarter depreciation", amount: 2200, capitalizable: false },
        { description: "Machine base price", amount: 42500, capitalizable: true },
        { description: "Safety feature upgrades", amount: 5800, capitalizable: true },
        { description: "Sales tax (7.5%)", amount: 3188, capitalizable: true },
        { description: "Specialized foundation construction", amount: 6750, capitalizable: true }
      ]
    },
    solution: { 
      type: "numeric", 
      value: 58238,
      tolerance: 0.01
    },
    explanation: "Capitalizable costs include the machine base price, sales tax, safety feature upgrades, and specialized foundation construction. Estimated residual value and depreciation expense are not part of the capitalized cost."
  },
  {
    id: "FA-CAP-06",
    topic: "fixedAsset",
    level: 1,
    difficulty: 3,
    task: "Evergreen Development acquired a plot of land for future retail space. From the list below, identify which costs should be capitalized to land and calculate the total capitalized cost of the land.",
    data: {
      costs: [
        { description: "Building demolition costs", amount: 18500, capitalizable: true },
        { description: "Current year property tax", amount: 3200, capitalizable: false },
        { description: "Environmental assessment", amount: 7500, capitalizable: true },
        { description: "Fencing installation", amount: 9800, capitalizable: false },
        { description: "Land purchase price", amount: 275000, capitalizable: true },
        { description: "Legal fees for acquisition", amount: 12300, capitalizable: true },
        { description: "Prior owner's unpaid taxes", amount: 8400, capitalizable: true },
        { description: "Title search and insurance", amount: 4600, capitalizable: true }
      ]
    },
    solution: { 
      type: "numeric", 
      value: 326300,
      tolerance: 0.01
    },
    explanation: "Capitalizable costs for land include the purchase price, legal fees, title search/insurance, environmental assessment, prior owner's unpaid taxes, and demolition costs. Fencing installation would be capitalized separately as a land improvement. Current property taxes are operating expenses."
  },
  // LEVEL 2: DEPRECIATION SCENARIOS
  {
    id: "FA-DEP-01",
    topic: "fixedAsset",
    level: 2,
    difficulty: 2,
    task: "Calculate the current year's depreciation expense for a machine purchased on January 1, 2024, using the straight-line method.",
    data: {
      assetDescription: "Manufacturing equipment",
      acquisitionCost: 120000,
      salvageValue: 20000,
      usefulLife: 10, // years
      dateAcquired: "2024-01-01",
      currentYear: 2024,
      depreciationMethod: "Straight-Line"
    },
    solution: {
      type: "numeric",
      value: 10000,
      tolerance: 0.01
    },
    explanation: "Straight-line depreciation calculation:\nDepreciable amount = Cost - Salvage value\nDepreciable amount = $120,000 - $20,000 = $100,000\nAnnual depreciation = Depreciable amount / Useful life\nAnnual depreciation = $100,000 / 10 years = $10,000"
  },
  {
    id: "FA-DEP-01A",
    topic: "fixedAsset",
    level: 2,
    difficulty: 1,
    task: "Calculate the current year's depreciation expense for a vehicle purchased on January 1, 2024, using the straight-line method.",
    data: {
      assetDescription: "Delivery truck",
      acquisitionCost: 85000,
      salvageValue: 15000,
      usefulLife: 7, // years
      dateAcquired: "2024-01-01",
      currentYear: 2024,
      depreciationMethod: "Straight-Line"
    },
    solution: {
      type: "numeric",
      value: 10000,
      tolerance: 0.01
    },
    explanation: "Straight-line depreciation calculation:\nDepreciable amount = Cost - Salvage value\nDepreciable amount = $85,000 - $15,000 = $70,000\nAnnual depreciation = Depreciable amount / Useful life\nAnnual depreciation = $70,000 / 7 years = $10,000"
  },
  {
    id: "FA-DEP-02",
    topic: "fixedAsset",
    level: 2,
    difficulty: 2,
    task: "Calculate the depreciation expense for 2024 for office equipment purchased on April 1, 2024, using the straight-line method with partial year calculation.",
    data: {
      assetDescription: "Office furniture and fixtures",
      acquisitionCost: 48000,
      salvageValue: 3000,
      usefulLife: 5, // years
      dateAcquired: "2024-04-01",
      currentYear: 2024,
      depreciationMethod: "Straight-Line (partial year)"
    },
    solution: {
      type: "numeric",
      value: 6750,
      tolerance: 0.01
    },
    explanation: "Straight-line depreciation with partial year calculation:\nDepreciable amount = Cost - Salvage value\nDepreciable amount = $48,000 - $3,000 = $45,000\nAnnual depreciation = Depreciable amount / Useful life\nAnnual depreciation = $45,000 / 5 years = $9,000\nPartial year fraction = 9 months / 12 months = 0.75\nDepreciation for 2024 = $9,000 × 0.75 = $6,750"
  },
  {
    id: "FA-DEP-03",
    topic: "fixedAsset",
    level: 2,
    difficulty: 3,
    task: "Calculate the first year's depreciation expense for machinery purchased on January 1, 2024, using the double declining balance method.",
    data: {
      assetDescription: "CNC manufacturing machine",
      acquisitionCost: 240000,
      salvageValue: 40000, // Note: Not used in initial DDB calculation
      usefulLife: 8, // years
      dateAcquired: "2024-01-01",
      currentYear: 2024,
      depreciationMethod: "Double Declining Balance"
    },
    solution: {
      type: "numeric",
      value: 60000,
      tolerance: 0.01
    },
    explanation: "Double declining balance depreciation calculation:\nStraight-line rate = 1 / Useful life = 1 / 8 = 12.5%\nDDB rate = 2 × Straight-line rate = 2 × 12.5% = 25%\nFirst year depreciation = Cost × DDB rate\nFirst year depreciation = $240,000 × 25% = $60,000\nNote: Salvage value is not used in the initial DDB calculation but serves as a floor (depreciation stops when book value reaches salvage value)"
  },
  {
    id: "FA-DEP-04",
    topic: "fixedAsset",
    level: 2,
    difficulty: 4,
    task: "Calculate the depreciation expense for 2024 for equipment purchased on July 1, 2024, using the double declining balance method with partial year calculation.",
    data: {
      assetDescription: "Industrial refrigeration system",
      acquisitionCost: 180000,
      salvageValue: 30000, // Note: Not used in initial DDB calculation
      usefulLife: 10, // years
      dateAcquired: "2024-07-01",
      currentYear: 2024,
      depreciationMethod: "Double Declining Balance (partial year)"
    },
    solution: {
      type: "numeric",
      value: 18000,
      tolerance: 0.01
    },
    explanation: "Double declining balance depreciation with partial year calculation:\nStraight-line rate = 1 / Useful life = 1 / 10 = 10%\nDDB rate = 2 × Straight-line rate = 2 × 10% = 20%\nFull year depreciation = Cost × DDB rate = $180,000 × 20% = $36,000\nPartial year fraction = 6 months / 12 months = 0.5\nDepreciation for 2024 = $36,000 × 0.5 = $18,000"
  },
  {
    id: "FA-DEP-05",
    topic: "fixedAsset",
    level: 2,
    difficulty: 3,
    task: "Calculate the depreciation expense for 2024 for a building improvement completed on August 1, 2024, using the straight-line method with monthly precision.",
    data: {
      assetDescription: "Building renovation (structural improvements)",
      acquisitionCost: 360000,
      salvageValue: 0,
      usefulLife: 15, // years
      dateAcquired: "2024-08-01",
      currentYear: 2024,
      depreciationMethod: "Straight-Line (monthly precision)"
    },
    solution: {
      type: "numeric",
      value: 10000,
      tolerance: 0.01
    },
    explanation: "Straight-line depreciation with monthly precision:\nDepreciable amount = Cost - Salvage value = $360,000 - $0 = $360,000\nAnnual depreciation = Depreciable amount / Useful life = $360,000 / 15 years = $24,000\nMonths in service during first year: August through December = 5 months\nDepreciation for 2024 = $24,000 × (5 / 12) = $24,000 × 0.4167 = $10,000"
  },
  {
    id: "FA-DEP-06",
    topic: "fixedAsset",
    level: 2,
    difficulty: 3,
    task: "Calculate the second year's depreciation expense for equipment purchased on January 1, 2023, using the double declining balance method.",
    data: {
      assetDescription: "Automated packaging system",
      acquisitionCost: 150000,
      salvageValue: 10000, // Floor value
      usefulLife: 5, // years
      dateAcquired: "2023-01-01",
      currentYear: 2024, // Second year
      firstYearDepreciation: 60000, // Given information
      depreciationMethod: "Double Declining Balance"
    },
    solution: {
      type: "numeric",
      value: 36000,
      tolerance: 0.01
    },
    explanation: "Double declining balance depreciation calculation for second year:\nBook value at end of first year = Original cost - First year depreciation\nBook value at end of first year = $150,000 - $60,000 = $90,000\nStraight-line rate = 1 / Useful life = 1 / 5 = 20%\nDDB rate = 2 × Straight-line rate = 2 × 20% = 40%\nSecond year depreciation = Book value at beginning of second year × DDB rate\nSecond year depreciation = $90,000 × 40% = $36,000"
  },
  {
    "id": "FA-DEP-08",
    "topic": "fixedAsset",
    "level": 2,
    "difficulty": 3,
    "task": "Calculate the third year's depreciation expense for a printing press purchased on January 1, 2022, using the double declining balance method.",
    "data": {
      "assetDescription": "Commercial printing press",
      "acquisitionCost": 250000,
      "salvageValue": 25000,
      "usefulLife": 8,
      "dateAcquired": "2022-01-01",
      "currentYear": 2024,
      "accumulatedDepreciation": 109375,
      "depreciationMethod": "Double Declining Balance"
    },
    "solution": {
      "type": "numeric",
      "value": 35156,
      "tolerance": 1
    },
    "explanation": "Double declining balance depreciation calculation for third year:\nBook value at beginning of third year = Original cost - Accumulated depreciation\nBook value at beginning of third year = $250,000 - $109,375 = $140,625\nStraight-line rate = 1 / Useful life = 1 / 8 = 12.5%\nDDB rate = 2 × Straight-line rate = 2 × 12.5% = 25%\nThird year depreciation = Book value at beginning of third year × DDB rate\nThird year depreciation = $140,625 × 25% = $35,156.25, rounded to $35,156\nBookkeeping check: Is book value after third year ($140,625 - $35,156 = $105,469) greater than salvage value ($25,000)? Yes, so the calculated amount is valid."
  },
  {
    id: "FA-DEP-09",
    topic: "fixedAsset",
    level: 2,
    difficulty: 2,
    task: "Calculate the depreciation expense for 2024 for a delivery truck using the units of production method based on mileage.",
    data: {
      assetDescription: "Delivery truck",
      acquisitionCost: 60000,
      salvageValue: 10000,
      totalEstimatedMileage: 100000, // miles
      milesDriven2024: 18000, // miles driven in current year
      dateAcquired: "2023-01-15",
      currentYear: 2024,
      depreciationMethod: "Units of Production"
    },
    solution: {
      type: "numeric",
      value: 9000,
      tolerance: 0.01
    },
    explanation: "Units of production depreciation calculation:\nDepreciable amount = Cost - Salvage value = $60,000 - $10,000 = $50,000\nDepreciation per mile = Depreciable amount / Total estimated mileage\nDepreciation per mile = $50,000 / 100,000 miles = $0.50 per mile\nDepreciation for 2024 = Depreciation per mile × Miles driven in 2024\nDepreciation for 2024 = $0.50 × 18,000 miles = $9,000"
  },
  {
    id: "FA-DEP-10",
    topic: "fixedAsset",
    level: 2,
    difficulty: 2,
    task: "Calculate the depreciation expense for 2024 for mining equipment using the units of production method based on tons of ore extracted.",
    data: {
      assetDescription: "Mining excavator",
      acquisitionCost: 800000,
      salvageValue: 100000,
      totalEstimatedProduction: 500000, // tons
      productionUnits2024: 75000, // tons extracted in current year
      dateAcquired: "2023-06-01",
      currentYear: 2024,
      depreciationMethod: "Units of Production"
    },
    solution: {
      type: "numeric",
      value: 105000,
      tolerance: 0.01
    },
    explanation: "Units of production depreciation calculation:\nDepreciable amount = Cost - Salvage value = $800,000 - $100,000 = $700,000\nDepreciation per unit = Depreciable amount / Total estimated production\nDepreciation per unit = $700,000 / 500,000 tons = $1.40 per ton\nDepreciation for 2024 = Depreciation per unit × Units produced in 2024\nDepreciation for 2024 = $1.40 × 75,000 tons = $105,000"
  },
  {
    id: "FA-DEP-07",
    topic: "fixedAsset",
    level: 2,
    difficulty: 3,
    task: "Calculate the depreciation expense for 2024 for mining equipment using the units of production method.",
    data: {
      assetDescription: "Heavy mining excavator",
      acquisitionCost: 500000,
      salvageValue: 50000,
      totalEstimatedProduction: 100000, // hours
      productionUnits2024: 15000, // hours used in current year
      dateAcquired: "2023-05-15", // Not directly relevant for units of production
      currentYear: 2024,
      depreciationMethod: "Units of Production"
    },
    solution: {
      type: "numeric",
      value: 67500,
      tolerance: 0.01
    },
    explanation: "Units of production depreciation calculation:\nDepreciable amount = Cost - Salvage value = $500,000 - $50,000 = $450,000\nDepreciation per unit = Depreciable amount / Total estimated production\nDepreciation per unit = $450,000 / 100,000 hours = $4.50 per hour\nDepreciation for 2024 = Depreciation per unit × Units produced in 2024\nDepreciation for 2024 = $4.50 × 15,000 hours = $67,500"
  },
  
  // LEVEL 3: DISPOSAL SCENARIOS
  {
    id: "FA-DISP-01",
    topic: "fixedAsset",
    level: 3,
    difficulty: 3,
    task: "Record the journal entry to dispose of equipment that was sold for $30,000 on December 31, 2024.",
    data: {
      assetDescription: "Office equipment",
      originalCost: 80000,
      accumulatedDepreciation: 65000,
      salePrice: 30000,
      disposalDate: "2024-12-31"
    },
    solution: {
      type: "journal",
      entry: [
        { account: "Cash", debit: 30000, credit: null },
        { account: "Accumulated Depreciation", debit: 65000, credit: null },
        { account: "Fixed Asset", debit: null, credit: 80000 },
        { account: "Gain on Sale", debit: null, credit: 15000 }
      ]
    },
    explanation: "To record the disposal of equipment, we:\n1. Debit Cash for the sales proceeds ($30,000)\n2. Debit Accumulated Depreciation to remove it ($65,000)\n3. Credit Fixed Asset to remove the asset ($80,000)\n4. Credit Gain on Sale for the difference ($15,000)\n\nBook value = $80,000 - $65,000 = $15,000\nGain = $30,000 - $15,000 = $15,000"
  },
  {
    id: "FA-DISP-01A",
    topic: "fixedAsset",
    level: 3,
    difficulty: 2,
    task: "Record the journal entry to dispose of manufacturing equipment that was sold for $28,500 on June 30, 2024.",
    data: {
      assetDescription: "Manufacturing equipment",
      originalCost: 120000,
      accumulatedDepreciation: 100000,
      salePrice: 28500,
      disposalDate: "2024-06-30"
    },
    solution: {
      type: "journal",
      entry: [
        { account: "Cash", debit: 28500, credit: null },
        { account: "Accumulated Depreciation", debit: 100000, credit: null },
        { account: "Fixed Asset", debit: null, credit: 120000 },
        { account: "Gain on Sale", debit: null, credit: 8500 }
      ]
    },
    explanation: "To record the disposal of equipment with a gain:\n1. Debit Cash for the sales proceeds ($28,500)\n2. Debit Accumulated Depreciation to remove it ($100,000)\n3. Credit Fixed Asset to remove the asset ($120,000)\n4. Credit Gain on Sale for the difference ($8,500)\n\nBook value = $120,000 - $100,000 = $20,000\nGain = $28,500 - $20,000 = $8,500"
  },
  {
    id: "FA-DISP-02",
    topic: "fixedAsset",
    level: 3,
    difficulty: 2,
    task: "Record the journal entry to dispose of delivery vehicles that were sold for $12,000 on March 15, 2024.",
    data: {
      assetDescription: "Delivery vehicles",
      originalCost: 75000,
      accumulatedDepreciation: 52000,
      salePrice: 12000,
      disposalDate: "2024-03-15"
    },
    solution: {
      type: "journal",
      entry: [
        { account: "Cash", debit: 12000, credit: null },
        { account: "Accumulated Depreciation", debit: 52000, credit: null },
        { account: "Loss on Sale", debit: 11000, credit: null },
        { account: "Fixed Asset", debit: null, credit: 75000 }
      ]
    },
    explanation: "To record the disposal of vehicles with a loss:\n1. Debit Cash for the sales proceeds ($12,000)\n2. Debit Accumulated Depreciation to remove it ($52,000)\n3. Debit Loss on Sale for the difference ($11,000)\n4. Credit Fixed Asset to remove the asset ($75,000)\n\nBook value = $75,000 - $52,000 = $23,000\nLoss = $23,000 - $12,000 = $11,000"
  },
  {
    id: "FA-DISP-03",
    topic: "fixedAsset",
    level: 3,
    difficulty: 2,
    task: "Record the journal entry to dispose of computer equipment that was sold for $15,000 on September 30, 2024.",
    data: {
      assetDescription: "Computer equipment",
      originalCost: 90000,
      accumulatedDepreciation: 75000,
      salePrice: 15000,
      disposalDate: "2024-09-30"
    },
    solution: {
      type: "journal",
      entry: [
        { account: "Cash", debit: 15000, credit: null },
        { account: "Accumulated Depreciation", debit: 75000, credit: null },
        { account: "Fixed Asset", debit: null, credit: 90000 }
      ]
    },
    explanation: "To record the disposal of computer equipment with no gain or loss:\n1. Debit Cash for the sales proceeds ($15,000)\n2. Debit Accumulated Depreciation to remove it ($75,000)\n3. Credit Fixed Asset to remove the asset ($90,000)\n\nBook value = $90,000 - $75,000 = $15,000\nSale price = $15,000\nSince sale price equals book value, there is no gain or loss."
  },
  {
    id: "FA-DISP-04",
    topic: "fixedAsset",
    level: 3,
    difficulty: 2,
    task: "Record the journal entry to dispose of fully depreciated office furniture that was scrapped on November 30, 2024.",
    data: {
      assetDescription: "Office furniture",
      originalCost: 45000,
      accumulatedDepreciation: 45000,
      salePrice: 0,
      disposalDate: "2024-11-30"
    },
    solution: {
      type: "journal",
      entry: [
        { account: "Accumulated Depreciation", debit: 45000, credit: null },
        { account: "Fixed Asset", debit: null, credit: 45000 }
      ]
    },
    explanation: "To record the disposal of fully depreciated furniture with no proceeds:\n1. Debit Accumulated Depreciation to remove it ($45,000)\n2. Credit Fixed Asset to remove the asset ($45,000)\n\nSince the asset is fully depreciated (book value = $0) and no proceeds were received, there is no gain or loss on disposal."
  },
  {
    id: "FA-DISP-05",
    topic: "fixedAsset",
    level: 3,
    difficulty: 2,
    task: "Record the journal entry to dispose of obsolete manufacturing equipment that had to be discarded on April 30, 2024.",
    data: {
      assetDescription: "Manufacturing equipment",
      originalCost: 36000,
      accumulatedDepreciation: 30000,
      salePrice: 0,
      disposalDate: "2024-04-30"
    },
    solution: {
      type: "journal",
      entry: [
        { account: "Accumulated Depreciation", debit: 30000, credit: null },
        { account: "Loss on Sale", debit: 6000, credit: null },
        { account: "Fixed Asset", debit: null, credit: 36000 }
      ]
    },
    explanation: "To record the disposal of equipment with no proceeds but remaining book value:\n1. Debit Accumulated Depreciation to remove it ($30,000)\n2. Debit Loss on Sale for the remaining book value ($6,000)\n3. Credit Fixed Asset to remove the asset ($36,000)\n\nBook value = $36,000 - $30,000 = $6,000\nSale proceeds = $0\nLoss = $6,000 - $0 = $6,000"
  }
];

export default fixedAssetScenarios; 