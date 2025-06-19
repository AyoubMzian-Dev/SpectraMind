# Spectrumic Mind

## A Personal Platform for Philosophical and Scientific Exploration

Spectrumic Mind is a web application designed to house my personal collection of philosophical insights, scientific explorations, and thought experiments. It’s a place where I can post articles, dive into intellectual debates, and reflect on the vast spectrum of knowledge that interests me.

Built with modern technologies like Next.js, Tailwind CSS, Shadcn, and PostGres, this platform offers a clean, responsive interface and a simple backend for easy content management.

---

## Tech Stack

- **FullStack:** Next.js (React Framework)  
- **Styling:** Tailwind CSS  
- **Database:** PostGres
- **UI Library** Shadcn
---

## Features

- **Personal Content Hub:** A space where I can post articles, essays, and research findings on topics related to philosophy and science.
- **Simple, Minimalist UI:** A user-friendly interface powered by Tailwind CSS for an elegant and distraction-free reading experience.
- **Interactive Features:** While primarily for personal use, the platform is designed to facilitate discussions, allowing others to engage with my content.
- **Easy Content Management:** Admin (myself) can post, edit, and manage content easily, powered by Next.js and PostGres.

---

## Installation

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js  
- PostGres

### Setup

1. Clone the repository:
    ```bash
    https://github.com/AyoubMzian-Dev/SpectraMind.git
    cd SpectraMind
    ```

2. Install dependencies for both frontend and backend:

    ```bash
    npm install
    ```


3. Set up your PostGres database:

    Create a database in PostGres (e.g., `SpectraMind`) and configure your `.env` file with the database credentials. Example:
    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=yourpassword
    DB_NAME=spectramind
    ```

4. Run the App:
    ```bash
    npm run dev
    ```
Now you should have the project running locally. You can start posting content and interacting with your platform!

---

## Usage

- **Post Articles:** As the primary content creator, you’ll be able to create, edit, and publish articles about philosophy, science, or any intellectual topic you wish to explore.
- **Admin Dashboard:** You’ll have access to a simple dashboard to manage content, ensuring everything is organized and up-to-date.

---

## Future Enhancements

Since this is a personal project, future enhancements could include:

- Adding the ability for others to comment on or like posts
- Implementing tagging and categories for articles
- Adding a content search feature

---

## License

This project is open-source, but as it's a personal platform, feel free to modify or use it for your own needs.
