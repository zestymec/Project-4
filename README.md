# 🎨 ColorMagic - Dynamic UI & Haptic Experiment

A high-performance React Native application built to explore dynamic state management, UI optimization, and tactile user feedback.

## 🚀 Overview
ColorMagic is more than just a color changer. It’s a project focused on efficiency and user experience. With a single tap, the app generates unique, random hex codes for the background and multiple child components (Boxes) while maintaining smooth performance.

## 🛠️ Key Features
- **Smart Color Logic:** A reusable random color generator that calculates independent hex codes for each element.
- **Optimized Rendering:** Implemented `React.memo` on child components to ensure the UI structure remains stable, re-painting only the necessary style properties without full component re-destruction.
- **Haptic Feedback:** Integrated `react-native-haptic-feedback` to provide tactile "Impact" responses, making the digital interaction feel physical.
- **Responsive Grid:** A flexible layout using `flexWrap` and `gap` to ensure the UI adapts across different screen sizes.

## 🧠 Technical Highlights
- **Performance:** Used memoization to prevent unnecessary re-renders of the 8+ box components.
- **State Management:** Managed multiple independent states for individual UI elements to create a diverse visual experience.
- **Styling:** Leveraged Array-style props to merge static styles with dynamic, state-driven background colors.

## 📱 Tech Stack
- **Framework:** React Native (v0.85+)
- **Language:** TypeScript
- **Feedback:** Native Haptic Vibration

---
*Created with passion for clean code and smooth UX.*