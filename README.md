# 🎬 The Line — Awwwards Site of the Month Recreation

An Awwwards-grade, highly responsive and motion-heavy frontend recreation of **[The Line Animation Studio](https://thelinestudio.com/)** website. Built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, **Motion (Framer Motion)**, and **TypeScript**.

---

## ✨ Features & Highlights

- 🎭 **Awwwards-Level Motion & Animations**:
  - Scroll-driven 3D rotational transforms, scaling parallax overlays, and smooth canvas planes.
  - Custom cursor follower (`CursorPlane`) with dynamic label reveals on interactive media.
  - Mix-blend-mode red accent overlays and image hover transformations.
- 🌓 **Dynamic Theme Switching (`NavThemeProvider`)**:
  - Viewport-aware intersection observer (`IntersectionObserverPlane`) dynamically toggles the fixed navigation bar between light and dark themes based on background context.
- 📱 **Fluid Responsive Architecture**:
  - Custom viewport detection (`WindowSizeProvider`) with tailored desktop and mobile layouts.
  - Interactive mobile sidebar menu with fluid cubic-bezier slide transitions.
- ⚡ **Streamlined & Consolidated Architecture**:
  - Consolidated SVG icon system ([components/Icons.tsx](file:///f:/The-Line-Awwward-Website/components/Icons.tsx)) replacing fragmented SVG files.
  - Atomic UI component primitive library ([components/ui](file:///f:/The-Line-Awwward-Website/components/ui)).
  - Clean modular section breakdown (`Hero`, `Group`, `TheStudio`, `ClientsPlusPartners`, `News`, `Contact`, `Footer`).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Motion / Framer Motion](https://motion.dev/) (`motion/react`)
- **Icons**: Custom React SVG components system

---

## 📁 Project Structure

```text
The-Line-Awwward-Website/
├── app/                        # Next.js App Router (Layout & main Page)
├── components/                 # Shared & composite UI components
│   ├── ui/                     # Primitive UI components (Button, Video, CardBoilerPlate, etc.)
│   ├── Icons.tsx               # Unified SVG Icon system (Logo, Arrows, Brands)
│   ├── NavBar.tsx              # Fixed Navigation Bar, Desktop/Mobile menus & Sidebar
│   ├── ProjectCard.tsx         # Interactive project showcase cards
│   ├── HighlightCard.tsx       # Hover/scroll highlight section card
│   └── Input.tsx               # Animated newsletter input component
├── sections/                   # Main page section modules
│   ├── Hero.tsx                # Hero section with animated logo overlay
│   ├── Group.tsx               # Video hero stack & project showcase cards
│   ├── TheStudio.tsx           # Studio lowdown, awards & press mentions grid
│   ├── ClientsPlusPartners.tsx # Brand partner showreel & interactive reel video
│   ├── News.tsx                # Studio news feed cards & updates
│   ├── Contact.tsx             # Contact call-to-action & closing logo block
│   └── Footer.tsx              # Footer layout, address links & accordion group
├── providers/                  # Application context providers
│   ├── index.tsx               # RootProviders wrapper
│   ├── NavThemeProvider.tsx    # Navigation color theme state management
│   └── WindowSizeProvider.tsx # Viewport width / desktop state management
├── public/                     # Static media assets (Videos, Images, Fonts)
└── utils/                      # Helper utilities (cn Tailwind class merger)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.17.0 or higher
- **npm**: v9 or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Thakuma07/Line.git
   cd Line
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Compiles the production build.
- `npm run start`: Runs the compiled production server.
- `npx tsc --noEmit`: Executes TypeScript type checking.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
