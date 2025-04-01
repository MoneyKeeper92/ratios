// src/data/scenarios.js
const scenarios = [
    {
      id: 1,
      scenarioNumber: 1,
      leaseType: "finance",
      initialLeaseLiability: 250000,
      leaseTerm: "5 years",
      annualPayment: 25000,
      interestRate: 0.06,
      paymentTiming: "End of Year",
      difficulty: 1,
      task: "Record the first lease payment and the associated amortization.",
      solution: [
        {
          account: "Interest Expense",
          debit: 15000,
          credit: null
        },
        {
          account: "Lease Liability",
          debit: 10000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 25000
        },
        {
          account: "Amortization Expense (ROU Asset)",
          debit: 50000,
          credit: null
        },
        {
          account: "Accumulated Amortization - ROU Asset",
          debit: null,
          credit: 50000
        }
      ],
      keyCalculations: {
        interestExpense: 250000 * 0.06,
        principalReduction: 25000 - 15000,
        amortizationExpense: 250000 / 5
      },
      successMessage: "Correct!"
    },
    {
      id: 2,
      scenarioNumber: 2,
      leaseType: "finance",
      initialLeaseLiability: 200000,
      leaseTerm: "5 years",
      annualPayment: 15000,
      interestRate: 0.05,
      paymentTiming: "End of Year",
      difficulty: 1,
      task: "Record the first lease payment and the associated amortization.",
      solution: [
        {
          account: "Interest Expense",
          debit: 10000,
          credit: null
        },
        {
          account: "Lease Liability",
          debit: 5000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 15000
        },
        {
          account: "Amortization Expense (ROU Asset)",
          debit: 40000,
          credit: null
        },
        {
          account: "Accumulated Amortization - ROU Asset",
          debit: null,
          credit: 40000
        }
      ],
      keyCalculations: {
        interestExpense: 200000 * 0.05,
        principalReduction: 15000 - 10000,
        amortizationExpense: 200000 / 5
      },
      successMessage: "Well done!"
    },
    {
      id: 3,
      scenarioNumber: 3,
      leaseType: "operating",
      initialLeaseLiability: 250000,
      annualPayment: 25000,
      interestRate: 0.06,
      paymentTiming: "End of Year",
      difficulty: 2,
      task: "Record the journal entry for the first lease payment.",
      solution: [
        {
          account: "Lease Expense",
          debit: 25000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 25000
        },
        {
          account: "Right-of-Use Asset",
          debit: null,
          credit: 10000
        },
        {
          account: "Lease Liability",
          debit: 10000,
          credit: null
        }
      ],
      keyCalculations: {
        interest: 250000 * 0.06,
        leaseExpense: 25000,
        rouAssetAmortization: 25000 - 15000,
        liabilityReduction: 25000 - 15000
      },
      successMessage: "Correct! Your journal entry is accurate."
    },
    {
      id: 4,
      scenarioNumber: 4,
      leaseType: "operating",
      initialLeaseLiability: 200000,
      annualPayment: 15000,
      interestRate: 0.05,
      paymentTiming: "End of Year",
      difficulty: 2,
      task: "Record the journal entry for the first lease payment.",
      solution: [
        {
          account: "Lease Expense",
          debit: 15000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 15000
        },
        {
          account: "Right-of-Use Asset",
          debit: null,
          credit: 5000
        },
        {
          account: "Lease Liability",
          debit: 5000,
          credit: null
        }
      ],
      keyCalculations: {
        interest: 200000 * 0.05,
        leaseExpense: 15000,
        rouAssetAmortization: 15000 - 10000,
        liabilityReduction: 15000 - 10000
      },
      successMessage: "Great job!"
    },
    {
      id: 5,
      scenarioNumber: 5,
      leaseType: "operating",
      initialLeaseLiability: 300000,
      annualPayment: 30000,
      interestRate: 0.04,
      paymentTiming: "End of Year",
      difficulty: 2,
      task: "Record the journal entry for the first lease payment.",
      solution: [
        {
          account: "Lease Expense",
          debit: 30000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 30000
        },
        {
          account: "Right-of-Use Asset",
          debit: null,
          credit: 18000
        },
        {
          account: "Lease Liability",
          debit: 18000,
          credit: null
        }
      ],
      keyCalculations: {
        interest: 300000 * 0.04,
        leaseExpense: 30000,
        rouAssetAmortization: 30000 - 12000,
        liabilityReduction: 18000
      },
      successMessage: "Well done!"
    },
    {
      id: 6,
      scenarioNumber: 6,
      leaseType: "operating",
      initialLeaseLiability: 100000,
      annualPayment: 20000,
      interestRate: 0.10,
      paymentTiming: "End of Year",
      difficulty: 3,
      task: "Record the journal entry for the first lease payment.",
      solution: [
        {
          account: "Lease Expense",
          debit: 20000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 20000
        },
        {
          account: "Right-of-Use Asset",
          debit: null,
          credit: 10000
        },
        {
          account: "Lease Liability",
          debit: 10000,
          credit: null
        }
      ],
      keyCalculations: {
        interest: 100000 * 0.10,
        leaseExpense: 20000,
        rouAssetAmortization: 20000 - 10000,
        liabilityReduction: 10000
      },
      successMessage: "Excellent work!"
    },
    {
      id: 7,
      scenarioNumber: 7,
      leaseType: "operating",
      initialLeaseLiability: 400000,
      annualPayment: 50000,
      interestRate: 0.07,
      paymentTiming: "End of Year",
      difficulty: 3,
      task: "Record the journal entry for the first lease payment.",
      solution: [
        {
          account: "Lease Expense",
          debit: 50000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 50000
        },
        {
          account: "Right-of-Use Asset",
          debit: null,
          credit: 22000
        },
        {
          account: "Lease Liability",
          debit: 22000,
          credit: null
        }
      ],
      keyCalculations: {
        interest: 400000 * 0.07,
        leaseExpense: 50000,
        rouAssetAmortization: 50000 - 28000,
        liabilityReduction: 22000
      },
      successMessage: "Excellent!"
    },
    {
      id: 8,
      scenarioNumber: 8,
      leaseType: "operating",
      initialLeaseLiability: 80000,
      annualPayment: 10000,
      interestRate: 0.05,
      paymentTiming: "End of Year",
      difficulty: 2,
      task: "Record the journal entry for the first lease payment.",
      solution: [
        {
          account: "Lease Expense",
          debit: 10000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 10000
        },
        {
          account: "Right-of-Use Asset",
          debit: null,
          credit: 6000
        },
        {
          account: "Lease Liability",
          debit: 6000,
          credit: null
        }
      ],
      keyCalculations: {
        interest: 80000 * 0.05,
        leaseExpense: 10000,
        rouAssetAmortization: 10000 - 4000,
        liabilityReduction: 6000
      },
      successMessage: "Looks good!"
    },
    {
      id: 9,
      scenarioNumber: 9,
      leaseType: "operating",
      initialLeaseLiability: 120000,
      annualPayment: 12000,
      interestRate: 0.05,
      paymentTiming: "End of Year",
      difficulty: 2,
      task: "Record the journal entry for the first lease payment.",
      solution: [
        {
          account: "Lease Expense",
          debit: 12000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 12000
        },
        {
          account: "Right-of-Use Asset",
          debit: null,
          credit: 6000
        },
        {
          account: "Lease Liability",
          debit: 6000,
          credit: null
        }
      ],
      keyCalculations: {
        interest: 120000 * 0.05,
        leaseExpense: 12000,
        rouAssetAmortization: 12000 - 6000,
        liabilityReduction: 6000
      },
      successMessage: "Nice work!"
    },
    {
      id: 10,
      scenarioNumber: 10,
      leaseType: "operating",
      initialLeaseLiability: 500000,
      annualPayment: 40000,
      interestRate: 0.06,
      paymentTiming: "End of Year",
      difficulty: 3,
      task: "Record the journal entry for the first lease payment.",
      solution: [
        {
          account: "Lease Expense",
          debit: 40000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 40000
        },
        {
          account: "Right-of-Use Asset",
          debit: null,
          credit: 10000
        },
        {
          account: "Lease Liability",
          debit: 10000,
          credit: null
        }
      ],
      keyCalculations: {
        interest: 500000 * 0.06,
        leaseExpense: 40000,
        rouAssetAmortization: 40000 - 30000,
        liabilityReduction: 10000
      },
      successMessage: "Correct!"
    },
    {
      id: 11,
      scenarioNumber: 11,
      leaseType: "operating",
      initialLeaseLiability: 600000,
      annualPayment: 60000,
      interestRate: 0.08,
      paymentTiming: "End of Year",
      difficulty: 3,
      task: "Record the journal entry for the first lease payment.",
      solution: [
        {
          account: "Lease Expense",
          debit: 60000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 60000
        },
        {
          account: "Right-of-Use Asset",
          debit: null,
          credit: 12000
        },
        {
          account: "Lease Liability",
          debit: 12000,
          credit: null
        }
      ],
      keyCalculations: {
        interest: 600000 * 0.08,
        leaseExpense: 60000,
        rouAssetAmortization: 60000 - 48000,
        liabilityReduction: 12000
      },
      successMessage: "Excellent!"
    },
    {
      id: 12,
      scenarioNumber: 12,
      leaseType: "operating",
      initialLeaseLiability: 50000,
      annualPayment: 10000,
      interestRate: 0.04,
      paymentTiming: "End of Year",
      difficulty: 2,
      task: "Record the journal entry for the first lease payment.",
      solution: [
        {
          account: "Lease Expense",
          debit: 10000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 10000
        },
        {
          account: "Right-of-Use Asset",
          debit: null,
          credit: 8000
        },
        {
          account: "Lease Liability",
          debit: 8000,
          credit: null
        }
      ],
      keyCalculations: {
        interest: 50000 * 0.04,
        leaseExpense: 10000,
        rouAssetAmortization: 10000 - 2000,
        liabilityReduction: 8000
      },
      successMessage: "Right on!"
    },
    {
      id: 13,
      scenarioNumber: 13,
      leaseType: "operating",
      initialLeaseLiability: 250000,
      annualPayment: 25000,
      interestRate: 0.06,
      paymentTiming: "Beginning of Year",
      difficulty: 4,
      task: "Record the journal entry for the first lease payment (no interest yet).",
      solution: [
        {
          account: "Lease Expense",
          debit: 25000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 25000
        },
        {
          account: "Right-of-Use Asset",
          debit: null,
          credit: 25000
        },
        {
          account: "Lease Liability",
          debit: 25000,
          credit: null
        }
      ],
      keyCalculations: {
        interest: 0,
        leaseExpense: 25000,
        rouAssetAmortization: 25000,
        liabilityReduction: 25000
      },
      successMessage: "Nicely done!"
    },
    {
      id: 14,
      scenarioNumber: 14,
      leaseType: "operating",
      initialLeaseLiability: 200000,
      annualPayment: 15000,
      interestRate: 0.05,
      paymentTiming: "Beginning of Year",
      difficulty: 4,
      task: "Record the journal entry for the first lease payment (no interest yet).",
      solution: [
        {
          account: "Lease Expense",
          debit: 15000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 15000
        },
        {
          account: "Right-of-Use Asset",
          debit: null,
          credit: 15000
        },
        {
          account: "Lease Liability",
          debit: 15000,
          credit: null
        }
      ],
      keyCalculations: {
        interest: 0,
        leaseExpense: 15000,
        rouAssetAmortization: 15000,
        liabilityReduction: 15000
      },
      successMessage: "Great!"
    },
    {
      id: 15,
      scenarioNumber: 15,
      leaseType: "operating",
      initialLeaseLiability: 300000,
      annualPayment: 30000,
      interestRate: 0.04,
      paymentTiming: "Beginning of Year",
      difficulty: 4,
      task: "Record the journal entry for the first lease payment (no interest yet).",
      solution: [
        {
          account: "Lease Expense",
          debit: 30000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 30000
        },
        {
          account: "Right-of-Use Asset",
          debit: null,
          credit: 30000
        },
        {
          account: "Lease Liability",
          debit: 30000,
          credit: null
        }
      ],
      keyCalculations: {
        interest: 0,
        leaseExpense: 30000,
        rouAssetAmortization: 30000,
        liabilityReduction: 30000
      },
      successMessage: "All set!"
    },
    {
      id: 16,
      scenarioNumber: 16,
      leaseType: "operating",
      initialLeaseLiability: 100000,
      annualPayment: 20000,
      interestRate: 0.10,
      paymentTiming: "Beginning of Year",
      difficulty: 5,
      task: "Record the journal entry for the first lease payment (no interest yet).",
      solution: [
        {
          account: "Lease Expense",
          debit: 20000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 20000
        },
        {
          account: "Right-of-Use Asset",
          debit: null,
          credit: 20000
        },
        {
          account: "Lease Liability",
          debit: 20000,
          credit: null
        }
      ],
      keyCalculations: {
        interest: 0,
        leaseExpense: 20000,
        rouAssetAmortization: 20000,
        liabilityReduction: 20000
      },
      successMessage: "Correct!"
    },
    {
      id: 17,
      scenarioNumber: 17,
      leaseType: "operating",
      initialLeaseLiability: 400000,
      annualPayment: 50000,
      interestRate: 0.07,
      paymentTiming: "Beginning of Year",
      difficulty: 5,
      task: "Record the journal entry for the first lease payment (no interest yet).",
      solution: [
        {
          account: "Lease Expense",
          debit: 50000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 50000
        },
        {
          account: "Right-of-Use Asset",
          debit: null,
          credit: 50000
        },
        {
          account: "Lease Liability",
          debit: 50000,
          credit: null
        }
      ],
      keyCalculations: {
        interest: 0,
        leaseExpense: 50000,
        rouAssetAmortization: 50000,
        liabilityReduction: 50000
      },
      successMessage: "Perfect!"
    },
    {
      id: 18,
      scenarioNumber: 18,
      leaseType: "operating",
      initialLeaseLiability: 200000,
      interestRate: 0.05,
      annualPayment: 15000,
      firstPayment: 18000,
      paymentTiming: "End of Year",
      additionalInfo: "Includes $3,000 variable portion",
      difficulty: 6,
      task: "Record the first lease payment (with variable portion).",
      solution: [
        {
          account: "Lease Expense",
          debit: 18000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 18000
        },
        {
          account: "Right-of-Use Asset",
          debit: null,
          credit: 8000
        },
        {
          account: "Lease Liability",
          debit: 8000,
          credit: null
        }
      ],
      keyCalculations: {
        interest: 200000 * 0.05,
        leaseExpense: 18000,
        liabilityReduction: 18000 - 10000,
        rouAssetAmortization: 8000
      },
      successMessage: "Nice!"
    },
    {
      id: 19,
      scenarioNumber: 19,
      leaseType: "finance",
      initialLeaseLiability: 250000,
      leaseTerm: "5 years",
      annualPayment: 25000,
      interestRate: 0.06,
      paymentTiming: "End of Year",
      additionalInfo: "Guaranteed residual value included in measurement",
      difficulty: 7,
      task: "Record the first payment and the associated amortization.",
      solution: [
        {
          account: "Interest Expense",
          debit: 15000,
          credit: null
        },
        {
          account: "Lease Liability",
          debit: 10000,
          credit: null
        },
        {
          account: "Cash",
          debit: null,
          credit: 25000
        },
        {
          account: "Amortization Expense (ROU Asset)",
          debit: 50000,
          credit: null
        },
        {
          account: "Accumulated Amortization - ROU Asset",
          debit: null,
          credit: 50000
        }
      ],
      keyCalculations: {
        interestExpense: 250000 * 0.06,
        principalReduction: 10000,
        amortizationExpense: 50000
      },
      successMessage: "Correct!"
    }
  ];
  
  export default scenarios;