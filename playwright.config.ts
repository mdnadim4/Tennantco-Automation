import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests/',
  timeout: 60*1000,
  reporter: [
      ['list'], 
      ['html', { open: 'never' }],
      ['junit', { outputFile: 'test-results/e2e-junit-results.xml' }],
  ],

  use: {
    baseURL: process.env.BASE_URL,
    screenshot: 'on',
    video: 'on',
    trace: 'on-first-retry',
    headless: true,
  },

  expect: {
    timeout: 30*1000
  },

  projects: [

    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },

    // {
    //   name: 'Firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    
    // {
    //   name: 'Safari',
    //   use: { ...devices['Desktop Safari'] },
    // },
        
  ],

});
