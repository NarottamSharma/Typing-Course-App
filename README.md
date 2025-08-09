# Typing Speed Test App

A modern, responsive web application for measuring typing speed and accuracy. Test your typing skills with randomly selected text passages and track your performance in real-time.

## 🚀 Features

- **Real-time Typing Test**: 60-second typing tests with instant feedback
- **Performance Metrics**: Track Words Per Minute (WPM), accuracy percentage, and character count
- **Visual Feedback**: Color-coded characters showing correct, incorrect, and current typing position
- **Progress Tracking**: Real-time progress bar showing completion percentage
- **Random Text Selection**: 15 different text passages for varied typing practice
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Theme**: Modern dark UI with smooth animations and transitions
- **Results Modal**: Detailed results display after test completion

## 🎯 Live Demo

Simply open `index.html` in your web browser to start using the application immediately.

## 📁 Project Structure

```
Typing-Course-App/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── app.js              # Core JavaScript functionality
└── README.md          # Project documentation
```

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NarottamSharma/Typing-Course-App.git
   cd Typing-Course-App
   ```

2. **Open the application:**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have live-server installed)
     npx live-server
     ```

3. **Start typing:**
   - Click "Start Test" to begin
   - Type the displayed text as accurately as possible
   - View your results after 60 seconds

## 🎮 How to Use

1. **Starting a Test:**
   - Click the "Start Test" button
   - A random text passage will appear
   - Begin typing in the input field

2. **During the Test:**
   - Characters turn green when typed correctly
   - Incorrect characters appear in red
   - Current position is highlighted in yellow
   - Real-time stats update as you type

3. **Test Completion:**
   - Tests automatically end after 60 seconds
   - Results modal displays final statistics
   - Click "Try Again" to start a new test

4. **Resetting:**
   - Use the "Reset" button to restart at any time
   - Stats and progress reset to initial state

## 📊 Metrics Explained

- **WPM (Words Per Minute)**: Calculated as (characters typed ÷ 5) ÷ time in minutes
- **Accuracy**: Percentage of correctly typed characters
- **Characters**: Total number of characters typed

## 🎨 Customization

### Adding New Text Passages

Edit the `texts` array in `app.js`:

```javascript
const texts = [
  "Your new text passage here...",
  // Add more passages
];
```

### Modifying Test Duration

Change the timer duration in `app.js`:

```javascript
let timeLeft = 60; // Change to desired seconds
```

### Styling Customization

Modify `style.css` to change:
- Colors and themes
- Font sizes and families
- Layout and spacing
- Animations and transitions

## 🌐 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes and orientations

## 🛡️ Features in Detail

### Real-time Feedback
- Instant visual feedback for each character typed
- Dynamic progress tracking
- Live statistics updates

### Error Handling
- Backspace support for corrections
- Accurate error counting
- Visual indication of mistakes

### User Experience
- Smooth animations and transitions
- Intuitive interface design
- Keyboard-focused interaction
- Accessible design principles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔧 Technical Details

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: No external dependencies
- **Font Awesome**: Icons for enhanced UI
- **Responsive**: Mobile-first design approach

## 📈 Future Enhancements

- [ ] Multiple test durations (30s, 60s, 120s)
- [ ] Difficulty levels
- [ ] User accounts and progress tracking
- [ ] Leaderboards
- [ ] Custom text input
- [ ] Detailed statistics and analytics
- [ ] Sound effects and notifications
- [ ] Multiple language support

## 🐛 Bug Reports

If you find any bugs or issues, please report them by creating an issue on GitHub.

## 📞 Contact

For questions or suggestions, please reach out through GitHub issues or contact the repository owner.

---

**Happy Typing! 🎯**