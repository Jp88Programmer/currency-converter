# Currency Converter Application

## Overview
The Currency Converter application allows users to convert the price of any currency to another in real-time. Users can select the source and destination currencies, enter an amount, and see the converted value instantly. The application ensures that changes in either the source or destination currency fields are reflected immediately, thanks to real-time data fetching and debouncing functionality.

## Features
- Convert any currency to another currency in real-time.
- Select currencies from a dropdown menu.
- Automatic update of converted value when the input amount or selected currencies change.
- Debouncing to optimize performance and reduce unnecessary API calls.

## Preview 
![image](https://github.com/Jp88Programmer/currency-converter/assets/88284160/fe725048-0f14-4462-844c-49bfaa047331)

## Tech Stack
- Next.js: Framework for server-rendered React applications.
- Tailwind CSS: Utility-first CSS framework for styling.
- currencyapi.js: API to fetch real-time currency conversion rates.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. Clone the repository

```
git clone https://github.com/Jp88Programmer/currency-converter.git
cd currency-converter
```

2.Install dependencies

```
npm install
# or
yarn install
```

3.Set up the environment variables
Create a .env file in the root directory and add your Currency API key:
get API key  [API_KEY](https://currencyapi.com/docs/examples/currency-converter-javascript) 

```
API_KEY=your_currency_api_key
```
Run the application
```
npm run dev
# or
yarn dev
```

Open your browser
Navigate to http://localhost:3000 to see the application in action.

## Usage
1.Enter the amount in the source currency field.
2.Select the source currency from the dropdown menu.
3;Select the destination currency from the dropdown menu.
4.The converted amount will automatically appear in the destination currency field.
5.If the destination amount is edited, the source amount will update accordingly.

## Contribution
Contributions are welcome! Please follow these steps:

1. Fork the repository

2. Create a new branch

```
git checkout -b feature/your-feature-name
```
3. Make your changes

4. Commit your changes
```
git commit -m 'Add some feature'
```
5. Push to the branch
```
git push origin feature/your-feature-name
```

6.Open a pull request

## Contact
For any questions or feedback, please open an issue on GitHub.
