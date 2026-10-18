**English** | [Italiano](README.it.md)

# 🎬 Adastra Cinema - Front-End [![Netlify Status](https://api.netlify.com/api/v1/badges/8facd8ef-4002-437d-9f42-89319a2c682f/deploy-status)](https://app.netlify.com/projects/adastracinema/deploys)

Front-end of the **Adastra Cinema** web application, a website that manages user interaction with a cinema chain: choosing a cinema, browsing the films currently showing, selecting seats in the theater and buying tickets.

**Link:** [Adastra Cinema website](https://adastracinema.netlify.app/)

> 🔗 Back-End Repository: [BE-AdAdstra-Capstone-EPICODE](https://github.com/giannibussoletti/BE-AdAdstra-Capstone-EPICODE)

---

## 🛠️ Tech Stack

- **TypeScript**
- **React**
- **Redux Store** (global state management)
- **Vite** (build tool and dev server)
- **React-Bootstrap** (UI components)
- **SCSS** (variables and style customization)

---

## 📋 Prerequisites

Before getting started, make sure you have installed:

| Tool                     | Recommended version | Download                                     |
| ------------------------ | ------------------- | -------------------------------------------- |
| Node.js (includes npm)   | LTS ≥ 18            | [nodejs.org](https://nodejs.org/)            |
| Git                      | any recent version  | [git-scm.com](https://git-scm.com/downloads) |

> ⚠️ The front-end communicates with the Adastra Cinema back-end: to use the full application, the [back-end server](https://github.com/giannibussoletti/BE-AdAdstra-Capstone-EPICODE) must be running and reachable (by default on `localhost:5555`).

---

## 🚀 Installation and Startup

1. **Clone the repository**

   ```bash
   git clone https://github.com/giannibussoletti/FE-AdAdstra-Capstone-EPICODE.git
   cd FE-AdAdstra-Capstone-EPICODE
   ```

2. **Install the dependencies**

   ```bash
   npm install
   ```

3. **Start the project in development mode**

   ```bash
   npm run dev
   ```

4. Open your browser at the address shown in the terminal (by default Vite serves the project on `localhost:5173`).

---

## 🎮 User Guide

Here's how to navigate the application:

1. **Choose a cinema** from the menu in the top navbar: the available films and their showtimes will be loaded.
2. **Select a showtime** for one of the films: you'll be taken to the theater map to choose your seats.
3. Once you've chosen your seats, click **"Verifica e acquista"** (Review and buy) to proceed to payment.
4. On the payment page:
   - if you're **logged in**, the email address the tickets will be sent to is filled in automatically;
   - if you're **not logged in**, entering an email address is required to receive the tickets.
5. From the user menu in the top right corner you can **sign up** or **log in**: this also lets you keep track of the films you've purchased during the current year.
6. Each film has a **dedicated page** with plot, director, cast and release date. If the film has already been released, you can choose a showtime and buy a ticket directly from that page.

---

## 🗺️ Project Roadmap

Some features planned for upcoming versions:

- Advance ticket sales for upcoming films
- Seat map management for seats reserved for people with disabilities
- Profile picture cropping for better handling of the avatar's aspect ratio
- A management page for creating and maintaining films, showtimes and cinemas
- An expanded user profile with a new section dedicated to points collected through the loyalty card

---

## 🔗 Useful Links

- [Back-End Repository](https://github.com/giannibussoletti/BE-AdAdstra-Capstone-EPICODE)
- [Download Node.js](https://nodejs.org/)
- [Download Git](https://git-scm.com/downloads)
