// tests/comprehensive.spec.js
import { test, expect } from '@playwright/test';
import ratioScenarios from '../src/data/ratioScenarios.js';

test.describe('Ratio Analysis Practice Tool - Comprehensive Tests', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the app before each test
    await page.goto('http://localhost:3001');
    // Clear cookies before each test to ensure a clean state
    await page.context().clearCookies();
    // Reload the page to apply the cleared cookies state
    await page.reload();
  });

  test('should reset progress correctly', async ({ page }) => {
    // First, complete one scenario to create some progress
    const firstScenario = ratioScenarios[0];
    await page.locator('[data-testid=numeric-input]').fill(firstScenario.solution.value.toString());
    await page.getByRole('button', { name: 'Submit Answer' }).click();
    await expect(page.locator('.feedback.correct')).toBeVisible();
    await expect(page.getByText('Progress: 1/21 Scenarios')).toBeVisible();

    // Click the reset progress button and confirm
    await page.getByRole('button', { name: 'Reset Progress' }).click();
    
    // Check for the confirmation dialog and accept it.
    page.on('dialog', dialog => dialog.accept());
    
    // After resetting, the progress should be back to 0
    await expect(page.getByText('Progress: 0/21 Scenarios')).toBeVisible();
    // The first scenario should be displayed again
    await expect(page.getByText(firstScenario.task)).toBeVisible();
  });

  test('should allow navigation and save progress', async ({ page }) => {
    // Navigate to the second scenario
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByText(ratioScenarios[1].task)).toBeVisible();

    // Go back to the first scenario
    await page.getByRole('button', { name: 'Previous' }).click();
    await expect(page.getByText(ratioScenarios[0].task)).toBeVisible();

    // Complete the first scenario
    const firstScenario = ratioScenarios[0];
    await page.locator('[data-testid=numeric-input]').fill(firstScenario.solution.value.toString());
    await page.getByRole('button', { name: 'Submit Answer' }).click();
    await expect(page.getByText('Progress: 1/21 Scenarios')).toBeVisible();

    // Reload the page
    await page.reload();

    // Check if progress is still 1 and we are on the first scenario
    await expect(page.getByText('Progress: 1/21 Scenarios')).toBeVisible();
    await expect(page.getByText(firstScenario.task)).toBeVisible();
  });


  // Dynamically create a test for each scenario
  for (let i = 0; i < ratioScenarios.length; i++) {
    const scenario = ratioScenarios[i];
    
    test(`Scenario ${i + 1}/${ratioScenarios.length}: ${scenario.id}`, async ({ page }) => {
      // Navigate to the correct scenario by clicking 'Next' i times
      for (let j = 0; j < i; j++) {
        await page.getByRole('button', { name: 'Next' }).click();
      }

      // Verify the correct task is displayed
      await expect(page.getByText(scenario.task, { exact: true })).toBeVisible();

      // Handle different solution types
      if (scenario.level === 2) {
        // Level 2 scenarios are multiple choice
        const correctOptionId = scenario.solution.correct;
        await page.locator(`[data-testid=mcq-option-${correctOptionId}]`).click();
      } else {
        // Other levels are numeric
        const testId = scenario.level === 4 ? 'advanced-input' : 'numeric-input';
        await page.locator(`[data-testid=${testId}]`).fill(scenario.solution.value.toString());
      }

      // Submit the answer
      await page.getByRole('button', { name: 'Submit Answer' }).click();

      // Verify success feedback is shown
      await expect(page.locator('.feedback.correct')).toBeVisible();
      await expect(page.getByText(scenario.successMessage)).toBeVisible();

      // Verify the solution and explanation are visible
      await expect(page.locator('.solution-container')).toBeVisible();
      if (scenario.explanation) {
        // Checking for a small, unique part of the explanation
        const explanationSnippet = scenario.explanation.substring(20, 50);
        await expect(page.getByText(explanationSnippet)).toBeVisible();
      }

      // Click continue to move to the next scenario (if not the last one)
      if (i < ratioScenarios.length - 1) {
        await page.getByRole('button', { name: 'Continue' }).click();
        // Check if the next scenario is loaded
        await expect(page.getByText(ratioScenarios[i+1].task)).toBeVisible();
      }
    });
  }
}); 