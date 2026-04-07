# Design System Specification: Premium Cybersecurity & AI

## 1. Overview & Creative North Star

### Creative North Star: "The Sentinel Prism"
The visual identity of this design system is built on the concept of **The Sentinel Prism**—a convergence of impenetrable security and the fluid, evolving nature of Artificial Intelligence. Unlike standard dark-mode dashboards, this system avoids "flatness" by treating the interface as a multi-dimensional digital space.

To achieve a "billion-dollar startup" aesthetic, we move away from rigid, boxy layouts toward a **Liquid Editorial** approach. This involves intentional asymmetry, generous negative space, and overlapping glass layers that suggest depth without the weight of traditional skeuomorphism. The interface should feel like a high-end physical object—polished, reactive, and sophisticated.

---

## 2. Colors

This system utilizes a high-contrast palette rooted in a deep navy void, punctuated by vibrant, energetic pulses of neon.

### The Palette
- **Core Background:** `#0e1320` (Surface) - A deep, ink-like navy that provides the canvas for neon luminescence.
- **Primary Accent:** `#00f5ff` (Cyan Glow) - Used for primary actions and critical data points.
- **Secondary Accent:** `#8a2be2` (Purple/Secondary Container) - Used for intelligence-driven features and secondary hierarchy.
- **Functional Tones:** 
    - **Error:** `#ffb4ab` (soft coral) to ensure visibility without breaking the futuristic aesthetic.
    - **Surface Tiers:** Ranging from `surface_container_lowest` (#090e1b) to `surface_container_highest` (#303443).

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Layout boundaries must be established through:
1.  **Tonal Shifts:** Placing a `surface_container_high` module over a `surface` background.
2.  **Soft Shadows:** Using elevation to imply separation.
3.  **Negative Space:** Utilizing the Spacing Scale to create "breathing room" that acts as a natural separator.

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of frosted glass. A nested container (e.g., an input field inside a card) should always use a tier higher than its parent (e.g., a `surface_container_highest` input on a `surface_container_low` card) to create a natural, physical sense of depth.

### Signature Textures: Glass & Gradient
To move beyond generic dark modes, apply **Glassmorphism** to floating elements. Use `surface_variant` with 40-60% opacity and a `backdrop-filter: blur(20px)`. Main CTAs should not be flat; use a subtle linear gradient from `primary` (#e9feff) to `primary_container` (#00f5ff) at a 135-degree angle to provide "visual soul."

---

## 3. Typography

The typography strategy pairs **Manrope** for authoritative high-impact moments with **Inter** for precision data and utility.

| Role | Font Family | Size | Weight | Intent |
| :--- | :--- | :--- | :--- | :--- |
| **Display-LG** | Manrope | 3.5rem | 700 (Bold) | Hero headlines / Visionary statements |
| **Headline-MD** | Manrope | 1.75rem | 600 (Semi) | Section headers / Major card titles |
| **Title-MD** | Inter | 1.125rem | 500 (Medium) | Sub-headers / Navigation |
| **Body-LG** | Inter | 1rem | 400 (Regular) | Primary content / Descriptions |
| **Label-MD** | Inter | 0.75rem | 600 (Semi) | Metadata / Small buttons / Tags |

**Editorial Note:** Use wide letter-spacing (tracking) for Labels to give a high-tech, "HUD" (Heads-Up Display) feel.

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved via **Tonal Layering**. Instead of a grey shadow, we use the `surface-container` tiers. 
- **Base Layer:** `surface`
- **Component Layer:** `surface_container_low`
- **Active/Hover Layer:** `surface_container_high`

### Ambient Shadows
When a card must "float" (e.g., a dropdown or modal), use an **Ambient Shadow**:
- **Color:** A tinted version of `surface_container_highest` or a deep purple (`#2c0051`) at 8% opacity.
- **Blur:** 40px - 60px.
- **Offset:** 12px Y-axis.

### The "Ghost Border" Fallback
If a border is required for accessibility, it must be a **Ghost Border**. Use `outline_variant` at 15% opacity. This creates a suggestion of an edge that catches the light without cluttering the UI.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`). Box-shadow: `0px 4px 20px rgba(0, 245, 255, 0.3)`. Text: `on_primary_fixed`.
- **Secondary:** Glass background (`surface_variant` at 20%) with a Ghost Border.
- **Tertiary:** Text-only in `primary_fixed_dim` with a subtle underline on hover.

### Cards & Modules
- **Rule:** Zero divider lines. Use vertical spacing (1.5rem+) or background color shifts to separate content.
- **Style:** `xl` (1.5rem) rounded corners. Background: `surface_container_low`. 
- **Interactive State:** On hover, shift background to `surface_container_high` and increase the Cyan glow intensity.

### Input Fields
- **Background:** `surface_container_lowest`.
- **Border:** Ghost Border (15% opacity).
- **Focus State:** Border color shifts to `primary_container` (#00f5ff) with a 2px outer glow.

### Additional Signature Components
- **Data Glow-Pills:** Small chips used for "System Status: Online" using `primary_fixed_dim` text and a background glow.
- **Glass Modals:** Full-screen overlays using `surface_dim` at 70% opacity with a heavy `backdrop-filter: blur(40px)`.

---

## 6. Do's and Don'ts

### Do:
- **Do** use asymmetrical layouts. For example, a hero image overlapping a text container to create motion.
- **Do** use the `xl` (1.5rem) corner radius for large containers to soften the "tech" look.
- **Do** ensure all interactive elements have a "glow" state (box-shadow) to reinforce the neon futuristic theme.
- **Do** reference the logo's fluid shapes (from {{DATA:IMAGE:IMAGE_1}}) by using organic, rounded vector shapes in the background.

### Don't:
- **Don't** use 100% white (#FFFFFF) for body text. Use `on_surface` (#dee2f5) to reduce eye strain and maintain the premium dark aesthetic.
- **Don't** use 1px solid, high-contrast borders. It breaks the "glass" illusion.
- **Don't** use traditional "Drop Shadows" (Black/Grey). Only use tinted shadows that match the ambient background light.
- **Don't** clutter the screen. If you have a choice between a divider and 24px of white space, choose the white space.

---

*This design system is a living framework. It is intended to feel intentional, layered, and unmistakably premium.*