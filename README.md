# Anyware Dashboard – Fullstack Challenge (React + Redux + Express + MongoDB)

This is a full-stack dashboard application built for the **Anyware Software Fullstack Challenge**. It displays quizzes and announcements data for the current semester, with protected routes, i18n support, Material UI styling, and full CRUD capabilities via a MongoDB backend.

---

## Features

### Frontend
- Built with **React**, **Redux Toolkit**, and **TypeScript**
- Styled using **Material UI**
- **Responsive design** (works on all screen sizes)
- **Authentication simulation** (login/logout toggle)
- **Protected routes** using a `RequireAuth` HOC
- Fully **i18n-ready** with `react-i18next` (`en` / `ar` supported)
- Hover effect on sidebar links (white background + foreground)
- Reusable components and modular folder structure
- Unit and integration tests using your preferred test library

### Backend
- Built using **Express.js** and **MongoDB**
- RESTful APIs for:
  - **Announcements**
    - Create, Read, Update, Delete
  - **Quizzes**
    - Create, Read, Update, Delete
- Separated routes and controllers
- Clean code and best practices followed

---

## Technologies Used

| Frontend                  | Backend                  |
|---------------------------|--------------------------|
| React + Redux Toolkit     | Express.js               |
| TypeScript                | MongoDB + Mongoose       |
| Material UI               | Node.js                  |
| react-i18next             | REST API (JSON)          |
| Tailwind CSS              | Express middleware       |

---

## Getting Started

### Prerequisites

- Node.js v16+ (recommended)
- npm or yarn package manager

### Installation

1. Clone this repository or download the source code
2. Run:

    Install dependencies for both the frontend and backend:

    ```bash
    npm install
    ```

    To run the frontend, use:

    ```bash
    npm run dev
    ```

    To run the backend, use:

    ```bash
    npm start
    ```

    Builds the app and packages it

## 📁 Folder Structure

<pre><code>```
backend/
├── config/
│   ├── constants.js
│   └── db.js
├── controllers/
│   ├── announcements.js
│   └── quizzes.js
├── middlewares/
│   └── validators.js
├── models/
│   ├── Announcement.js
│   └── Quiz.js
├── routes/
│   ├── announcements.js
│   ├── index.js
│   └── quizzes.js
├── .env
├── index.js


frontend/
├── components/
│   ├── auth/
│   │   └── RequireAuth.ts
│   ├── dashboard/
├── layout/
│   ├── Header.ts
│   └── Sidebar.ts
├── LanguageSwitcher.ts
├── HomePage.ts
├── constants/
│   └── index.ts
├── dashboard/
│   └── page.ts
├── hooks/
│   └── useApiData.ts
├── t18n/
│   ├── ar.json
│   ├── en.json
│   └── index.ts
├── lib/
│   └── t18n-client.ts
├── store/
│   ├── authSlice.ts
│   └── index.ts
├── styles/
│   └── global.css 
├── types/
│   └── index.ts 
├── layout.tsx
├── pages.tsx
├── providers.jsx
 ```</code></pre>
