# Barot Vas Cha Raja

A premium digital experience created for Barot Vas Cha Raja Ganpati Mandal.

The website is designed as a mobile-first experience for visitors who scan the QR code placed at the Mandap. It brings the Mandal's identity, announcements, festival information, memories, social links, and donation details together in one place.

## About

Barot Vas Cha Raja is a React-based frontend website created to give the Ganpati Mandal a modern digital presence while keeping the overall experience connected to the traditional and devotional feel of the festival.

The design combines a dark burgundy and antique-gold visual theme with subtle 3D effects, animations, glassmorphism elements, and responsive layouts.

The main focus of the project is to make the website visually impressive while keeping it simple and accessible for visitors, especially on mobile devices.

## Features

### Premium Hero Section

The landing section introduces the Mandal with the Ganpati Bappa image and the Mandal's identity.

It includes:

- Shri Ganeshaya Namah
- Ganpati Bappa Morya
- Barot Vas Cha Raja
- A warm welcome message
- Cinematic background effects
- Subtle particles and 3D interactions

### Announcement

A dedicated announcement bar is placed at the top of the website for important festival updates.

Announcements can be written in Hindi and updated from the project configuration.

For example:

> विशेष सूचना • आज शाम ७:३० बजे महाआरती का आयोजन किया गया है।

### Social and Quick Links

Important Mandal links are available through interactive cards.

These can include:

- Instagram
- WhatsApp
- Facebook
- YouTube
- Mandap Location
- Aarti Information
- Photo Gallery
- Other important links

### Year-Wise Gallery

The website includes a dedicated gallery for the Mandal's memories.

The gallery is organized by year:

- 2020
- 2021
- 2022
- 2023
- 2024
- 2025

Each year can contain photographs from that year's Ganpati celebration.

The gallery uses a responsive 3D-inspired grid with interactive image cards and a fullscreen viewing experience.

### Since 2020

A dedicated section highlights the Mandal's journey since 2020 and connects the history section with the yearly photo gallery.

### Festival Countdown

A live countdown is displayed for the upcoming Ganpati celebration.

The countdown is configured to reach 14 September 2026.

### Festival Information

Festival-related information can be displayed in Hindi, including:

- Aarti timings
- Maha Aarti
- Mahaprasad
- Special events
- Other important festival activities

The information is configurable so that it can be updated without changing the overall design.

### Donation

A dedicated donation section allows visitors to support the Mandal.

It can contain:

- Donation QR code
- UPI ID
- Donation instructions
- Copy UPI functionality
- Hindi devotional messaging

The QR code is displayed clearly so that it can be scanned easily from a mobile device.

## Mobile First

The website is designed primarily for mobile users.

The main use case is a visitor scanning the QR code at the Mandap and opening the website on their phone.

The interface therefore focuses on:

- Fast access to important information
- Touch-friendly interactions
- Responsive layouts
- Readable Hindi text
- Optimized images
- Smooth animations
- No unnecessary horizontal scrolling

The website is also responsive across tablets, laptops, and desktop screens.

## Design

The visual design follows a combination of traditional Ganpati aesthetics and modern web design.

The main visual direction uses:

- Deep burgundy
- Maroon
- Antique gold
- Warm ivory
- Dark charcoal

The website uses subtle lighting, gradients, glassmorphism, depth, and 3D interactions to create a premium experience without making the interface unnecessarily complicated.

Animations are intended to enhance the experience rather than distract from the Ganpati idol or important information.

## Technology

The project is built using:

- React
- Vite
- JavaScript
- Tailwind CSS
- Framer Motion
- Lucide React
- CSS 3D transforms

The project is completely frontend-based and does not currently require a backend or database.

## Project Structure

```text
Barot Vas Cha Raja
|
├── public
│   └── gallery
│       ├── 2020
│       ├── 2021
│       ├── 2022
│       ├── 2023
│       ├── 2024
│       └── 2025
|
├── src
│   ├── assets
│   ├── components
│   ├── data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
|
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md