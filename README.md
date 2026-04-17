# 🎨 Random Background Color Generator (React Native)

A simple yet elegant mobile application built with React Native that generates a random background color every time the user interacts with the UI. This project was developed to master the core concepts of State management and Logic implementation in a mobile environment.

## 🚀 Features

- **Dynamic Background:** Changes the entire screen's background color on a button press.
- **StatusBar Sync:** The device's Status Bar automatically matches the background color for a seamless UI experience.
- **Random Logic:** Uses a Hexadecimal-based random color generation algorithm.
- **Responsive UI:** Centered layout that works perfectly on both Android and iOS.

## 🛠️ Concepts Applied

In this project, I focused on the following key technical areas:

1. **React Hooks (`useState`):** Managed the state of the background color to trigger re-renders whenever a new color is generated.
2. **Hexadecimal Logic:** Implemented a `for` loop that picks 6 random characters from the `0123456789ABCDEF` range to create a valid CSS color code.
3. **Props & Styling:**
   - Used **Inline Objects** `{{ backgroundColor: randombg }}` to pass dynamic styles.
   - Applied `StyleSheet.create` for structured and performant styling.
4. **Event Handling:** Used `TouchableOpacity` with the `onPress` prop to trigger functions efficiently.
5. **UI Components:** Utilized `View`, `Text`, and `StatusBar` components from the React Native core library.

## 📸 Demo

?
