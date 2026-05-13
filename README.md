# 🫐 Blueberry Events — Grand Indian Celebrations

A premium, cinematic, and responsive web experience for **Blueberry Events**, a luxury Indian event planning company. This site is designed to evoke exclusivity, cultural heritage, and modern sophistication.

---

## ✨ Key Features
- **Cinematic Experience**: Staggered sequential reveals, parallax effects, and smooth inertia-based scrolling (Lenis).
- **Grand Archive**: A masonry-grid project gallery supporting high-resolution ImageKit assets.
- **Secure Admin Portal**: A hidden, password-protected route for dynamic gallery management.
- **Responsive Motion**: Tailored animations and layouts for mobile, tablet, and desktop viewports.
- **Heritage Design**: A "Velvet & Gold" palette (Midnight Blue, Plum, Garnet, and Kundan Gold) with film-grain texture.

---

## 🛠️ Technology Stack
- **Framework**: Vite + React
- **Motion**: Framer Motion & GSAP
- **Scrolling**: Lenis (Smooth Scroll)
- **Styling**: Tailwind CSS
- **Media**: ImageKit.io (Real-time optimization)
- **Routing**: React Router DOM

---

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory:
```env
VITE_ADMIN_PASSWORD=your_secure_passcode
VITE_IMAGEKIT_PUBLIC_KEY=your_public_key
VITE_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id
```

### 3. Run Development Server
```bash
npm run dev
```

---

## 🔐 Gallery Management (Admin Portal)

The gallery is dynamic and can be managed via a hidden secure route.

- **Route**: `http://localhost:5173/secure/gallery/img_vid`
- **Passcode**: (Defined in `.env`)(admin)
- **Storage**: Custom items are persisted via `localStorage`.

### How to Add Assets:
1. Upload images/videos to your **ImageKit.io** media library.
2. Copy the **URL-endpoint** from ImageKit.
3. Access the Admin Portal, unlock it, and fill the "Add New Project" form.
4. Select a layout size (**Normal**, **Wide**, or **Large**) to match the image orientation.

---

## 📸 Image Specifications

To maintain the "Grand" luxury feel, follow these guidelines for your assets:

| Section | Recommended Dimensions | Ratio |
| :--- | :--- | :--- |
| **Hero Background** | 2560 x 1440 px | 16:9 |
| **Experience Cards** | 1200 x 1600 px | 3:4 |
| **Gallery (Square)** | 1200 x 1200 px | 1:1 |
| **Gallery (Wide)** | 1600 x 800 px | 2:1 |

**Supported Formats**: `.webp` (Best), `.jpg`, `.png`, `.mp4` (Videos).

---

## 🎨 Design System

### Colors
- **Midnight Blue**: `#0D1B2A` (Background Depth)
- **Royal Plum**: `#2D1E2F` (Warmth)
- **Kundan Gold**: `#E0B35A` (Interactive Elements)
- **Antique Ivory**: `#F8F5F2` (Typography)

### Typography
- **Headings**: `Cormorant Garamond` (Serif) — Traditional & Regal.
- **Body**: `Inter` (Sans) — Modern & Clean.

---

## 📁 Project Structure
- `src/components/`: Modular UI components (Navbar, Hero, Gallery, etc.)
- `src/assets/`: Static branding assets and local images.
- `src/App.jsx`: Global routing and smooth scroll orchestration.
- `src/index.css`: Global styles, grain texture, and moving gradients.
