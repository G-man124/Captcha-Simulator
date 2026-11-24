# 🤖 Captcha Simulator

A clean, browser-based text CAPTCHA simulator that generates randomized, distorted alphanumeric challenges with visual noise, real-time validation, and instant regeneration.

> **Note:** This simulator currently only supports **text-based** CAPTCHAs.

---

## 🎥 Preview

https://github.com/user-attachments/assets/5f66a381-0650-4841-b9f2-ad849b3a6525

---

## ✨ Features
* **Dynamic Text Generation:** Generates randomized 6-character alphanumeric CAPTCHAs on the fly.
* **Case-Insensitive Validation:** Accepts matching characters regardless of uppercase or lowercase input (`npa97a` matches `N p a 9 7 A`).
* **Auto-Refresh on Failure:** Automatically generates a new challenge and displays clear feedback when an incorrect entry is submitted.
* **One-Click Reload:** Includes a dedicated refresh button (`↻`) to cycle through new challenges anytime.

---

## 🚀 Getting Started

### Prerequisites
* A modern web browser (Chrome, Firefox, Edge, or Safari).

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/G-man124/Captcha-Simulator
   cd Captcha-Simulator
   ```

2. **Launch the project:**
   * **Option A (Direct):** Open `index.html` directly in your web browser.
   * **Option B (Local Server):**
     ```bash
     python3 -m http.server
     ```
     Then navigate to [http://localhost:8000](http://localhost:8000).

---

## 🛠️ Built With
* **HTML5 Canvas** (Rendering distorted text and noise)
* **CSS3** (Clean, centered card UI)
* **Vanilla JavaScript** (Challenge generation & input validation)

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
