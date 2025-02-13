---

# Password Generator

## Description

This is a **Password Generator** app built with React that allows users to create secure, random passwords with customizable options. You can generate passwords with varying lengths, numbers, and special characters, and easily copy the generated password to your clipboard. It helps users create strong passwords for enhanced security.

## Features

- **Customizable Password Length**: Set the desired length for your password (between 6 and 50 characters).
- **Include Numbers**: Choose whether to include numbers (0-9) in your password.
- **Include Special Characters**: Optionally add special characters like `!@#$%^&*` for stronger passwords.
- **Copy to Clipboard**: After generating the password, you can copy it to your clipboard with a single click.

## Technologies Used

- **React**: For building the user interface.
- **useState, useEffect, useCallback, useRef Hooks**: For managing state, side effects, and references.
- **Tailwind CSS**: For styling the app with basic classes.

## Code Explanation

Here's a breakdown of how the code works:

### 1. **State Management using `useState`**
```js
let [length, setLegth] = useState(8);
let [number, SetNumberAllow] = useState("false");
let [charater, setCharterAllow] = useState("false");
let [Password, setPassword] = useState("");
```
- **`length`**: Holds the length of the generated password (initially set to 8).
- **`number`**: A state variable to track whether numbers are allowed in the password (boolean value).
- **`charater`**: A state variable to track whether special characters are allowed in the password (boolean value).
- **`Password`**: Holds the current password that is generated.

### 2. **`useRef` Hook to Reference the Password Input Field**
```js
const passwordRef = useRef(null);
```
- **`passwordRef`** is used to reference the password input field. This helps with selecting the text inside the input and copying it to the clipboard.

### 3. **Password Generation using `useCallback`**
```js
let passwordGenter = useCallback(() => {
  let pass = "";
  let str = "QAZWSXEDCRFVTGBYHNUJMIKOLPqazwsxedcrfvtgbyhnujmikolp";

  if (SetNumberAllow) str = str + "1234567890";
  if (setCharterAllow) str = str + "!@#$%^&*";

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }

  setPassword(pass);
}, [length, number, charater]);
```
- **`passwordGenter`** is a function that generates the password based on the selected `length`, whether numbers (`SetNumberAllow`), and special characters (`setCharterAllow`) should be included.
- **`str`**: Contains the possible characters (uppercase, lowercase, and optionally numbers and special characters).
- **Password Generation**: It randomly picks characters from the string and appends them to the `pass` string until the password reaches the desired length.

### 4. **Copy Password to Clipboard**
```js
let copyPasswordkeyboard = useCallback(() => {
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(Password);
}, [Password]);
```
- **`copyPasswordkeyboard`** is a function that selects the password in the input field and copies it to the clipboard using the `Clipboard API`.
- `passwordRef.current?.select()` selects the content inside the input field, and `window.navigator.clipboard.writeText(Password)` copies the password to the clipboard.

### 5. **Triggering Password Generation using `useEffect`**
```js
useEffect(() => { passwordGenter(); }, [length, number, charater, passwordGenter]);
```
- The `useEffect` hook is used to trigger the password generation whenever the `length`, `number`, or `charater` states change.
- It ensures that the password gets updated automatically whenever the user interacts with the sliders or checkboxes.

### 6. **UI Structure**
```js
return (
  <div className="bg-gray-500 m-20">
    <h1 className="text-3xl text-white text-center m-2 p-2">Password Generator</h1>
    <div className="m-4 p-3 pb-0">
      <input type="text" readOnly ref={passwordRef} placeholder="  Password" className="bg-white text-2xl text-black rounded-l-2xl p-1" value={Password} />
      <button className="bg-blue-500 text-1xl h-10 p-3 text-white rounded-r-2xl hover:bg-amber-200 active:bg-red-500" onClick={copyPasswordkeyboard}>Copy</button>
    </div>
    <div className="text-orange-300">
      <input type="range" className="m-3" min={6} max={50} value={length} onChange={(e) => { setLegth(e.target.value); }} />
      <label className="p-2" htmlFor="length">Length: {length}</label>

      <input type="checkbox" onChange={() => { SetNumberAllow((prev) => !prev); }} />
      <label htmlFor="" className="m-2">Numbers</label>

      <input type="checkbox" onChange={() => { setCharterAllow((prev) => !prev); }} />
      <label htmlFor="" className="m-2">Special Characters</label>
    </div>
  </div>
);
```
- **`input[type="text"]`**: This displays the generated password and makes it read-only so users can’t modify it.
- **Slider**: Allows users to adjust the length of the generated password.
- **Checkboxes**: Allow users to include numbers and special characters in the password.
- **Button**: Clicking the "Copy" button triggers the `copyPasswordkeyboard` function to copy the password to the clipboard.

---

## Setup

To run this app locally on your machine, follow these steps:

### Prerequisites
Make sure you have **Node.js** and **npm** installed on your system.

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yashesh-akbari/password_generate.git
   cd password_generate
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Usage

1. **Set Password Length**: Use the slider to adjust the desired length of the password.
2. **Enable/Disable Numbers**: Toggle the checkbox to include or exclude numbers (0-9).
3. **Enable/Disable Special Characters**: Toggle the checkbox to include or exclude special characters like `!@#$%^&*`.
4. **Copy Password**: Once the password is generated, click on the "copy" button to copy it to your clipboard.

## License

This project is open-source and available under the MIT License.
---
