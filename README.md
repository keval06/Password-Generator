# 🔐 Password Generator App

A sleek and functional React application that generates secure passwords with customizable options including length control, numbers, and special characters with one-click clipboard functionality.

## ✨ Features

- **Adjustable Password Length**: Range slider to set password length from 6 to 100 characters
- **Dynamic Password Generation**: Real-time password generation as you adjust settings
- **Number Toggle**: Optional inclusion of numbers (0-9) in generated passwords
- **Special Characters**: Optional inclusion of special characters (~`!@#$%^&*()_+-=[]{};:"/<>|)
- **One-Click Copy**: Copy generated password to clipboard with visual selection feedback
- **Responsive Design**: Clean, centered layout that works on all screen sizes
- **Real-time Updates**: Password regenerates automatically when settings change
- **Visual Feedback**: Input selection and hover effects for better user experience

## 🚀 Technologies Used

- **React 18** with Hooks (useState, useCallback, useEffect, useRef)
- **Tailwind CSS** for styling and responsive design
- **Clipboard API** for copy functionality
- **Math.random()** for password generation
- **Vite** for fast development and building

## 🎯 How It Works

The app uses React's state management and hooks for efficient password generation:

1. **Length Control**: Range slider updates the `length` state (6-100 characters)
2. **Character Options**: Checkboxes toggle `numberAllowed` and `charAllowed` states
3. **Password Generation**: `passwordGenerator` function creates random passwords using:
   - Base string: uppercase and lowercase letters (A-Z, a-z)
   - Optional numbers: 0-9 (when numberAllowed is true)
   - Optional special characters: ~`!@#$%^&*()_+-=[]{};:"/<>| (when charAllowed is true)
4. **Auto-Regeneration**: `useEffect` triggers password generation when dependencies change
5. **Clipboard Copy**: `copyPasswordToClipboard` function copies password and selects input text

## 🎨 Design Highlights

- **Dark Theme**: Gray-800 background with orange-500 accent colors
- **Centered Layout**: Responsive card design with shadow and rounded corners
- **Interactive Controls**: Smooth range slider and checkbox interactions
- **Input Focus**: Visual selection feedback when copying passwords
- **Hover Effects**: Blue button hover states for better UX
- **Clean Typography**: Clear labels and readable text sizing

## 🛠️ Project Structure

```
src/
├── assets/
├── App.jsx          # Main component with password generation logic
├── index.css
└── main.jsx         # React app entry point
```

## 💡 Code Quality Features

- **React Hooks Optimization**: Uses `useCallback` to prevent unnecessary re-renders
- **Efficient State Management**: Minimal state with `useState` for length, number, and character toggles
- **Ref Usage**: `useRef` for direct DOM manipulation during copy operation
- **Dependency Management**: `useEffect` with proper dependency array for auto-regeneration
- **Clean Architecture**: Single component with well-organized functions
- **Performance Optimized**: Memoized functions with `useCallback` for better performance

## 🎮 Usage

1. **Set Length**: Use the range slider to choose password length (6-100 characters)
2. **Toggle Numbers**: Check "Numbers" to include digits 0-9 in your password
3. **Toggle Characters**: Check "Characters" to include special symbols
4. **Auto-Generation**: Password updates automatically as you change settings
5. **Copy Password**: Click "Copy Me..!" button to copy password to clipboard

Perfect for:
- Learning React hooks (useState, useCallback, useEffect, useRef)
- Understanding controlled components and state management
- Exploring clipboard API integration
- Building practical utility applications
- Demonstrating real-time UI updates

## 🔧 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/keval06/Password-Generator

# Navigate to project directory
cd Password-Generator

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🔐 Password Generation Logic

The app generates passwords using a string-based approach:

```javascript
// Base character set (always included)
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

// Add numbers if enabled
if (numberAllowed) str += "0123456789"

// Add special characters if enabled  
if (charAllowed) str += '~`!@#$%^&*()_+-=[]{};:"/<>|'

// Generate random characters from the combined string
```

## 📱 Browser Compatibility

Works perfectly on all modern browsers with support for:
- ES6+ JavaScript features (arrow functions, template literals)
- CSS Flexbox 
- Clipboard API for copy functionality
- HTML5 input types (range, checkbox)

## 🎯 Component Architecture

- **Single Component Design**: All functionality contained in one `App.jsx` component
- **State Management**: Four state variables managing password generation
- **Hook Integration**: Combines multiple React hooks for optimal performance
- **Event Handling**: Controlled inputs with proper event handling

---

*Built with 🔒 using React and Tailwind CSS for secure password generation*