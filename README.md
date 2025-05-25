# README.md

# Fineye Resume Website

Professional resume website for Unathi Mahlangabeza, hosted on Azure Static Web Apps.

## Features

- Modern, minimalist design with Tailwind CSS
- Dark/light mode toggle with system preference detection
- Visitor counter powered by Azure Functions
- Fully responsive layout
- Print-friendly styles
- SEO optimized

## Setup

1. Clone this repository
2. Install dependencies (none required for basic setup)
3. Customize content in `index.html`
4. Update the Azure Function URL in `script.js`

## Deployment to Azure

1. Create a new Static Web App in Azure Portal
2. Connect to your GitHub repository
3. Set build settings:
   - App location: `/`
   - Api location: `api` (if using Functions)
   - Output location: ``
4. Add environment variables for your Function App

## Testing

- JavaScript: Open the website and test dark mode toggle
- API: Run `python tests/test_counter.py`