/**
 * Calculates Cost of Goods Sold (COGS) using the FIFO Perpetual method.
 *
 * In FIFO Perpetual, inventory layers are tracked, and the cost of the oldest
 * items is used when sales occur.
 *
 * @param {object} beginningInventory - The beginning inventory { units, costPerUnit }.
 * @param {Array<object>} transactions - An array of transactions { type, units, costPerUnit? }.
 * @returns {number} The calculated Cost of Goods Sold.
 */
export const calculateFifoPerpetualCogs = (beginningInventory, transactions) => {
  let inventory = []; // Stores layers of inventory: { units, costPerUnit }
  let cogs = 0;

  // Add beginning inventory as the first layer
  if (beginningInventory && beginningInventory.units > 0) {
    inventory.push({ ...beginningInventory });
  }

  transactions.forEach(transaction => {
    if (transaction.type === 'purchase') {
      inventory.push({ units: transaction.units, costPerUnit: transaction.costPerUnit });
    } else if (transaction.type === 'sale') {
      let unitsToSell = transaction.units;
      while (unitsToSell > 0 && inventory.length > 0) {
        const layer = inventory[0]; // Oldest layer
        if (layer.units <= unitsToSell) {
          // Consume the entire layer
          cogs += layer.units * layer.costPerUnit;
          unitsToSell -= layer.units;
          inventory.shift(); // Remove the layer
        } else {
          // Consume part of the layer
          cogs += unitsToSell * layer.costPerUnit;
          layer.units -= unitsToSell;
          unitsToSell = 0;
        }
      }
    }
  });

  return cogs;
};

// Placeholder for LIFO Perpetual
export const calculateLifoPerpetualCogs = (beginningInventory, transactions) => {
  let inventory = []; // Stores layers of inventory: { units, costPerUnit }
  let cogs = 0;

  if (beginningInventory && beginningInventory.units > 0) {
    inventory.push({ ...beginningInventory });
  }

  transactions.forEach(transaction => {
    if (transaction.type === 'purchase') {
      inventory.push({ units: transaction.units, costPerUnit: transaction.costPerUnit });
    } else if (transaction.type === 'sale') {
      let unitsToSell = transaction.units;
      while (unitsToSell > 0 && inventory.length > 0) {
        const layer = inventory[inventory.length - 1]; // Newest layer
        if (layer.units <= unitsToSell) {
          // Consume the entire layer
          cogs += layer.units * layer.costPerUnit;
          unitsToSell -= layer.units;
          inventory.pop(); // Remove the layer from the end
        } else {
          // Consume part of the layer
          cogs += unitsToSell * layer.costPerUnit;
          layer.units -= unitsToSell;
          unitsToSell = 0;
        }
      }
    }
  });

  return cogs;
};

// Placeholder for Moving Average
export const calculateMovingAverageCogs = (beginningInventory, transactions) => {
  let inventoryUnits = 0;
  let inventoryTotalCost = 0;
  let cogs = 0;

  if (beginningInventory && beginningInventory.units > 0) {
    inventoryUnits = beginningInventory.units;
    inventoryTotalCost = beginningInventory.units * beginningInventory.costPerUnit;
  }

  transactions.forEach(transaction => {
    if (transaction.type === 'purchase') {
      inventoryUnits += transaction.units;
      inventoryTotalCost += transaction.units * transaction.costPerUnit;
    } else if (transaction.type === 'sale') {
      if (inventoryUnits === 0) return; // Should not happen if sales are valid
      
      const averageCost = inventoryTotalCost / inventoryUnits;
      const costOfSale = transaction.units * averageCost;
      cogs += costOfSale;
      
      inventoryUnits -= transaction.units;
      inventoryTotalCost -= costOfSale; 

      // Edge case: if inventory units become zero, total cost should also be zero to avoid NaN issues with averageCost if another sale follows with 0 units.
      if (inventoryUnits === 0) {
        inventoryTotalCost = 0;
      }
    }
  });

  return cogs;
};

// Placeholder for FIFO Periodic
export const calculateFifoPeriodicCogs = (beginningInventory, transactions) => {
  let cogs = 0;
  let unitsSold = 0;
  transactions.forEach(t => {
    if (t.type === 'sale') {
      unitsSold += t.units;
    }
  });

  if (unitsSold === 0) return 0;

  let availableInventory = [];
  if (beginningInventory && beginningInventory.units > 0) {
    availableInventory.push({ ...beginningInventory });
  }
  transactions.forEach(t => {
    if (t.type === 'purchase') {
      availableInventory.push({ units: t.units, costPerUnit: t.costPerUnit });
    }
  });

  // Sort by cost - not needed for FIFO periodic as order of purchases matters
  // For FIFO, we process in the order they came (beginning, then purchases as listed)

  let unitsToAccountFor = unitsSold;
  for (const layer of availableInventory) {
    if (unitsToAccountFor === 0) break;

    if (layer.units <= unitsToAccountFor) {
      cogs += layer.units * layer.costPerUnit;
      unitsToAccountFor -= layer.units;
    } else {
      cogs += unitsToAccountFor * layer.costPerUnit;
      unitsToAccountFor = 0;
    }
  }
  return cogs;
};

// Placeholder for LIFO Periodic
export const calculateLifoPeriodicCogs = (beginningInventory, transactions) => {
  let cogs = 0;
  let unitsSold = 0;
  transactions.forEach(t => {
    if (t.type === 'sale') {
      unitsSold += t.units;
    }
  });

  if (unitsSold === 0) return 0;

  let purchaseLayers = [];
  transactions.forEach(t => {
    if (t.type === 'purchase') {
      purchaseLayers.push({ units: t.units, costPerUnit: t.costPerUnit });
    }
  });

  let unitsToAccountFor = unitsSold;

  // Cost sales from latest purchases first
  while (unitsToAccountFor > 0 && purchaseLayers.length > 0) {
    const layer = purchaseLayers.pop(); // Get the latest purchase
    if (layer.units <= unitsToAccountFor) {
      cogs += layer.units * layer.costPerUnit;
      unitsToAccountFor -= layer.units;
    } else {
      cogs += unitsToAccountFor * layer.costPerUnit;
      unitsToAccountFor = 0;
    }
  }

  // If more units still need to be accounted for, use beginning inventory
  if (unitsToAccountFor > 0 && beginningInventory && beginningInventory.units > 0) {
    if (beginningInventory.units <= unitsToAccountFor) {
      cogs += beginningInventory.units * beginningInventory.costPerUnit;
      unitsToAccountFor -= beginningInventory.units;
    } else {
      cogs += unitsToAccountFor * beginningInventory.costPerUnit;
      unitsToAccountFor = 0;
    }
  }

  return cogs;
};

// Placeholder for Weighted Average Periodic
export const calculateWeightedAveragePeriodicCogs = (beginningInventory, transactions) => {
  let totalUnitsAvailable = 0;
  let totalCostAvailable = 0;
  let unitsSold = 0;

  // Include beginning inventory
  if (beginningInventory && beginningInventory.units > 0) {
    totalUnitsAvailable += beginningInventory.units;
    totalCostAvailable += beginningInventory.units * beginningInventory.costPerUnit;
  }

  // Add purchases and sum units sold
  transactions.forEach(t => {
    if (t.type === 'purchase') {
      totalUnitsAvailable += t.units;
      totalCostAvailable += t.units * t.costPerUnit;
    } else if (t.type === 'sale') {
      unitsSold += t.units;
    }
  });

  if (unitsSold === 0) return 0;
  if (totalUnitsAvailable === 0) return 0; // Avoid division by zero if no inventory was ever available

  const weightedAverageCost = totalCostAvailable / totalUnitsAvailable;
  const cogs = unitsSold * weightedAverageCost;

  return cogs;
}; 