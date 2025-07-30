# 🛡️ FormSentinel - Registration Form Validator

FormSentinel is a robust, responsive form validator built using HTML, CSS, and vanilla JavaScript. It includes user-friendly, real-time client-side validation and password 
visibility toggles. Designed to help developers learn, test, and integrate form validation in real-world applications.

---

## 🚀 Features

- ✅ Real-time validation with instant error clearing
- 🔒 Password strength enforcement:
  - Length between 8–12 characters
  - At least 1 uppercase, 1 lowercase, 1 digit, and 1 special character
- 👁 Toggle password visibility for better UX
- 📱 Fully responsive across all devices
- 🧠 Clean UI with semantic HTML & accessible markup
- 📝 Custom error messages for better guidance

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3 (Responsive with Media Queries)**
- **Vanilla JavaScript (ES6)**

---

## 📋 Validation Constraints

| Field             | Constraint                                                                 |
|------------------|----------------------------------------------------------------------------|
| Name             | Required, minimum 3 characters                                             |
| Email            | Required, basic structure validation                                       |
| Password         | Required, 8–12 characters, 1 uppercase, 1 lowercase, 1 digit, 1 special char |
| Confirm Password | Must exactly match the password                                            |

> ❌ Fields show inline error messages on validation failure  
> ✅ Errors clear immediately when user starts editing again

---

## 🧠 JavaScript Concepts Used

- `DOM Manipulation`
- `Event Handling` (`input`, `click`, `submit`)
- `Form Validation Logic`
- `String Methods` & Character Checks
- `Conditional Statements`
- `Custom Error Display Logic`
- `Toggle Password with FontAwesome Icons`

---

## 📝 How It Works

1. User fills out the form and submits.
2. The `validate()` function checks:
   - No empty fields
   - Name has at least 3 characters
   - Password and Confirm Password match
   - Password meets strength requirements
3. Errors are shown dynamically.
4. User starts editing → errors automatically disappear.
5. Password visibility toggles via eye icons using FontAwesome.

---

## 🔮 Future Improvements

- ⏳ Add **runtime validation** while typing, not just on submission.
- 💾 Save form state using `localStorage` or `sessionStorage`..
- 🔐 Password strength indicator bar (color-coded).

---

## Author 
- Anmol kumar
- linkedin - https://www.linkedin.com/in/anmol-kumar-1ba37b324/

