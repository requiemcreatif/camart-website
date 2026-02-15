Design System: Editorial monochrome aesthetic using Playfair Display (italic, serif) for expressive headlines and Inter (sans-serif) for body text. Dark #0A0A0A and warm gray #F2F2F2 palette with sharp corners throughout.

Sections designed:

Navbar — Logo in italic serif, navigation links with letter-spacing, a subtle divider, and a white CTA button ("Contáctanos") with sharp edges
Hero — Full-width cinematic concert background with dark overlay, "BOOKING & MANAGEMENT" badge, large italic headline "Donde la Música Encuentra su Escenario", subtitle, and two CTAs (solid white + outlined)
Artists Grid — Light gray background section with "ROSTER" label, italic headline "Nuestros Artistas", 3-column grid of 6 artist cards (Putolargo, Telitah Dancer, Chico Lopez, Soulmacklein, Lion Messager, Erin) each with photo, name, description, and "Leer más" button
Latest News — Dark section with featured article (large image + title + description) and two smaller news cards in a side column
Contact Form — Split layout with italic headline "Hablemos de tu Próximo Evento", contact info (email/phone with icons) on the left, and a clean form (name, surname, email, message, checkbox, submit button) on the right
Footer — Dark footer with logo, tagline, social icons, three link columns (Navigation, Legal, Contact), divider line, and copyright bar

Font replaced — All instances of Playfair Display (serif) have been replaced with Inter (sans-serif) across every section: navbar, hero, artist cards, news, contact form, and footer.

Italic removed — All fontStyle: "italic" properties from the former serif headlines have been set to "normal". Headlines now use Inter 800 weight for strong visual impact without relying on italic styling.

Hero description updated — The subtitle text now uses the full provided copy about Cam Art Booking, Hip-hop/Reggae artists, and the Cam Art Festival invitation.

The artist cards have a dark #1A1A1A background against the #111111 section bg, creating subtle depth. The contact form fields have dark backgrounds with subtle borders.

I notice the submit button is now white (text on white bg) — the text inside it was #FFFFFF which stayed white, but the button fill also became #FFFFFF. Let me fix the submit button to have proper contrast, and also check the "Leer más" buttons on the cards.

The full page is now consistently dark throughout. The sections have subtle depth variations — #0A0A0A for the page background, #111111 for the artists section, #1A1A1A for the artist cards, and #161616 for the news cards and form fields — creating layered depth without losing the unified dark aesthetic.

The entire site is now in dark mode with an urban feel:

Page base: #0A0A0A deep black
Artists section: #111111 — slightly lifted, with #1A1A1A card backgrounds for layered depth
News section: #0A0A0A with #161616 news cards
Contact section: #111111 with #161616 form fields and #333333 borders
Footer: #0A0A0A with #1A1A1A divider
Buttons: White fill with dark text for strong contrast
Text hierarchy: #F2F2F2 headlines, #999999 body text, #555555 labels — all readable against dark backgrounds
Subtle #1A1A1A border lines between sections add quiet visual separation
