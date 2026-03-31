# andrewhewitt.dev — Personal Site

One-page personal site built with Next.js 14, Tailwind CSS, and static export.

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Adding Images

All images go in the `public/images/` folder. Drop in your photos and the site picks them up automatically — no code changes needed as long as the filenames match.

### Timeline (Proof of Work) Images

Each milestone in the scroll-jacking timeline expects specific filenames. Replace these with your actual photos:

| Milestone | Filename(s) | Suggested Content |
|---|---|---|
| **District Sales Manager** | `sales-1.jpg`, `sales-2.jpg` | Corporate era, team photos, on the road |
| **Freelancer & Nonprofit** | `freelance-1.jpg`, `freelance-2.jpg` | Center for Creative Economy, early freelance work |
| **Startup Lessons** | `startup-1.jpg` | Early entrepreneurial days, co-working, hustle era |
| **Founded YohDev** | `yohdev-founded-1.jpg`, `yohdev-founded-2.jpg` | YohDev launch, first office, early client work |
| **Lead Software Engineer** | `engineering-1.jpg`, `engineering-2.jpg` | Contract work, team collaboration, shipping code |
| **Marquis Who's Who** | `marquis-1.jpg` | Award/recognition photo, certificate, event |
| **Scaling YohDev** | `scaling-1.jpg`, `scaling-2.jpg`, `scaling-3.jpg` | Leadership team, partnerships, growth moments |

### Dev Connect Section Image

| Filename | Suggested Content |
|---|---|
| `devconnect-event.jpg` | Community event photo, meetup, group shot from a Triad Dev Connect gathering |

### Tips

- **Aspect ratio:** Timeline images look best at **16:9 or 4:3**. The Dev Connect image is displayed at **4:3**.
- **Resolution:** Aim for **1200–1600px wide**. Larger is fine — the browser will scale down. Smaller than 800px may look soft.
- **Format:** `.jpg` or `.png` both work. JPG is lighter for photos.
- **Missing images won't break anything.** A placeholder icon appears if a file is missing, so you can add them incrementally.

### Changing Filenames or Adding More Images

If you want to rename files or add/remove images from a milestone, edit the `timeline` array at the top of `app/page.tsx`. Each entry has an `images` array:

```tsx
{
  year: '2019',
  tag: 'Founder',
  title: 'Founded YohDev',
  description: '...',
  images: [
    { src: '/images/yohdev-founded-1.jpg', alt: 'YohDev launch' },
    { src: '/images/yohdev-founded-2.jpg', alt: 'First client work' },
    // Add more here:
    { src: '/images/yohdev-founded-3.jpg', alt: 'First team meeting' },
  ],
},
```

The `alt` text shows as the caption in the lightbox modal and as a label on the placeholder.

---

## Mailchimp Form Setup

The contact form at the bottom of the page needs your Mailchimp form action URL. In `app/page.tsx`, find:

```
action="MAILCHIMP_FORM_ACTION_URL"
```

Replace it with your actual Mailchimp embedded form action URL (found in **Audience → Signup forms → Embedded forms** in Mailchimp). To apply the `ayohdev` tag automatically, add a hidden input with your tag ID above the form fields.

---

## Deploying

```bash
npm run build
```

This generates a static export in the `out/` folder. Deploy to Vercel, Netlify, or any static host.
