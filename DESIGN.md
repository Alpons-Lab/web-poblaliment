---
name: Poblaliment
description: Current visual system for the bilingual static food distribution website.
colors:
  paper: '#f5f1e8'
  paper-deep: '#e8e1d4'
  ink: '#10231d'
  ink-soft: '#40554c'
  blue: '#1f4771'
  green: '#168a62'
  orange: '#df6744'
  line: 'rgba(16, 35, 29, 0.18)'
typography:
  display:
    fontFamily: 'Newsreader, Georgia, serif'
    fontSize: '3rem–6rem, depending on context and viewport'
    fontWeight: 400
    lineHeight: '0.91–0.96'
    letterSpacing: '-0.04em'
  body:
    fontFamily: 'DM Sans, Arial, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: 'DM Sans, Arial, sans-serif'
    fontSize: '0.72rem'
    fontWeight: 700
    lineHeight: 1
    letterSpacing: '0.15em'
rounded:
  none: '0px'
  full: '9999px'
spacing:
  frame: '2rem horizontal gutter, 80rem maximum width'
  frame-mobile: '1.25rem horizontal gutter below 800px'
  section: '4rem–6rem vertical padding'
  grid: '2rem'
components:
  button-primary:
    backgroundColor: '{colors.blue}'
    textColor: '{colors.paper}'
    rounded: '{rounded.none}'
    padding: '0.75rem 1.25rem'
  link-action:
    textColor: '{colors.ink}'
    rounded: '{rounded.none}'
    padding: '0.75rem 0.25rem'
---

# Design System: Poblaliment

## Overview

**Creative North Star: "Atlas de producte"**

The current frontend treats Poblaliment as a working product atlas: warm paper, editorial display type, photographic source material, and thin rules that organize information like an open ledger. The visual language gives the homepage a clear narrative arc from place and purpose to service, suppliers, daily work, and contact.

This is a record of the implemented interface, not a claim that the visual identity is final. Content is bilingual, with Catalan as the primary route experience and Spanish following the same composition and component language. The system stays intentionally small so real brand material and supplier information can replace the current working content without changing the underlying structure.

**Key Characteristics:**

- Warm paper surfaces with dark green-black ink.
- Newsreader for large editorial headings and DM Sans for utility and body copy.
- Thin horizontal rules, open rows, and asymmetrical editorial grids.
- Photographic source material as the main visual material, with restrained movement on image-led elements.
- Blue structural bands, orange interaction accents, and green utility accents.

## Colors

The palette is muted and material: a warm paper ground, dark ink for reading, blue for structural emphasis, green for utility accents, and orange for action and state feedback.

### Primary

- **Structural blue** (`#1f4771`): Solid primary actions, the supplier section, and linked directional marks.
- **Action orange** (`#df6744`): Focus outlines, active navigation rules, underlines, small registration marks, and interactive emphasis.

### Secondary

- **Utility green** (`#168a62`): Text selection, the contact section rule, and the mobile navigation scrollbar accent.

### Neutral

- **Paper** (`#f5f1e8`): The page background, light text on the blue band, and the light side of filled actions.
- **Paper deep** (`#e8e1d4`): Tonal section bands, image placeholders, and low-contrast hover surfaces.
- **Ink** (`#10231d`): Primary text, headings, form borders, and the default reading color.
- **Soft ink** (`#40554c`): Supporting copy, labels, captions, and secondary navigation.
- **Rule** (`rgba(16, 35, 29, 0.18)`): Thin borders and dividers on the paper surface.

### Named Rules

**The Ledger Rule.** Use the accent colors sparingly inside open layouts. Let rules, whitespace, rows, and image crops carry most of the structure.

## Typography

**Display Font:** Newsreader (with Georgia fallback)

**Body Font:** DM Sans (with Arial fallback)

**Character:** Newsreader gives headings an editorial, slightly literary voice while DM Sans keeps navigation, labels, form controls, and body copy direct and legible. Headings use tight tracking and compact leading; supporting copy gets generous line-height and constrained measure.

### Hierarchy

- **Display** (400, `3rem–6rem`, `0.91–0.96` line-height, `-0.04em` tracking): Hero headings, section titles, page introductions, supplier names, and large row titles.
- **Body** (400, `1rem`, `1.55` line-height): Default reading text, generally constrained with `max-w-xl` or `max-w-2xl` to keep paragraphs short.
- **Lead** (400, `1.125rem–1.25rem`, relaxed line-height): Hero introductions, signal-band copy, and contact copy that needs more presence without becoming a heading.
- **Label** (700, `0.72rem`, `0.15–0.16em` tracking, uppercase): Eyebrows, supplier kickers, and small metadata labels.
- **Navigation** (400–600, `0.875rem`): Main navigation and mobile navigation; the active item uses stronger weight and an orange rule on desktop.

### Named Rules

**The Two-Voice Rule.** Use Newsreader for hierarchy and editorial emphasis; use DM Sans for navigation, labels, body copy, forms, and interaction text.

## Layout

The page uses a centered frame of `min(100% - 2rem, 80rem)`. Below `800px`, the frame narrows to `min(100% - 1.25rem, 80rem)`. Large sections use generous vertical padding, typically `4rem` on compact screens and `6rem` at larger breakpoints, with `2rem` as the main grid gap.

The homepage hero and the reusable `PageIntro` use an asymmetrical two-column grid: the text column is slightly wider than the image column, with the image aligned to the bottom. The homepage hero can occupy up to `min(760px, calc(100vh - 84px))`; inner pages use the same composition without forcing viewport height. At `800px` and below, the hero stacks text above image, the gallery becomes one column, and the two secondary gallery images sit side by side.

Content is organized as full-width bands and centered editorial sections. Service, supplier, brand, and value content uses ruled rows instead of card grids. The homepage gallery uses one larger feature image beside two smaller images on wide screens. The header keeps desktop navigation inline and changes to a horizontally scrollable mobile navigation row.

## Elevation & Depth

The system is flat at rest. Depth comes from paper-to-deep-paper tonal shifts, the blue supplier band, thin rules, image cropping, and small state transforms. There is no component shadow vocabulary; the hero image index alone uses a local text shadow for legibility over photography. Hover states lift or scale imagery slightly and change tonal surfaces without adding floating cards.

### Named Rules

**The Flat-by-Default Rule.** Use tonal layering and rules for structure. Reserve movement for state feedback and image entrance rather than adding decorative shadows.

## Shapes

Primary interface surfaces are square and editorial. Buttons, links, rows, fields, and section bands do not use corner radii. The logo image is the exception: it is circular in the header. Photography is clipped to its aspect-ratio frame with overflow hidden, while the hero receives a small orange registration corner outside its top-right edge.

Borders are thin and quiet on paper surfaces, with stronger two- or four-pixel accent rules used for focus, active navigation, the signal band, and the contact panel. Form controls use a transparent background and an underline silhouette rather than a boxed field.

## Components

### Buttons and action links

Actions are confident, compact, and editorial rather than pill-shaped.

- **Primary:** Blue fill, paper text, square corners, and `0.75rem 1.25rem` padding. Used for the main hero action, contact form submission, and equivalent high-priority actions.
- **Hover:** The filled action translates upward by `1px`; it does not change to a new fill color.
- **Secondary:** Text links use ink or paper text with a `2px` orange underline and a small northeast arrow. Hover changes text toward orange where the surface allows it.
- **Focus:** All focus-visible elements receive a `3px` orange outline with a `4px` offset.

### Cards and containers

The site does not use card containers as a primary organizing device. Use full-width tonal bands, ruled rows, open sections, and image figures. Where a media block needs a placeholder or surface behind the image, use paper deep with no radius.

### Inputs and fields

Inputs and the textarea are transparent, square, and separated from their labels by a small vertical gap. Each field has a `2px` ink underline and `0.75rem` vertical padding. Focus changes the underline to orange. The textarea remains vertically resizable.

### Navigation

The header uses a paper surface with a bottom rule. The brand lockup combines the circular logo with a tracked wordmark and a smaller context line at larger widths. Desktop navigation is inline from the medium breakpoint upward; the current item is darker, semibold, and marked by a `2px` orange rule below it. The mobile navigation is a horizontally scrollable row below the main header row. The locale switcher stays compact and uses green for the current locale.

### Editorial media

`MotionVisual` figures pair an object-fit image with a small caption and a bottom rule. Images enter with a restrained upward fade, lift `5px` on hover, and respect the global reduced-motion path. Hero media uses a `4:5` aspect ratio on wide screens and `16:11` below `800px`; gallery media uses a larger feature frame and smaller supporting crops.

### Ruled rows

Services, suppliers, brands, and value statements are presented as open rows with bottom or top rules, generous vertical padding, and grid columns at larger widths. Row feedback is lightweight: a tonal background, a rotated or translated arrow mark, a text color shift, or a small image scale.

## Do's and Don'ts

- **Do** keep Catalan and Spanish routes visually parallel so the second locale feels complete.
- **Do** use Newsreader for large hierarchy and DM Sans for functional reading and interaction text.
- **Do** preserve the warm paper ground and dark ink as the default reading environment.
- **Do** use blue for primary actions and structural bands, orange for interaction feedback, and green for the small utility accents already established in the interface.
- **Do** organize repeatable content as ruled rows with clear columns and whitespace.
- **Do** use the available photography in deliberate aspect-ratio frames, with captions where the image carries editorial context.
- **Do** keep motion restrained and preserve the reduced-motion behavior.
- **Don't** turn supplier, service, brand, or value content into a dominant rounded card grid.
- **Don't** introduce a new typeface, shadow system, or decorative gradient without an explicit identity decision.
- **Don't** use orange as a large background field; its current role is accent and state feedback.
- **Don't** replace the square editorial controls with pill-shaped buttons or boxed form fields.
- **Don't** add visual claims about the brand, suppliers, contact details, or product provenance that are not present in the content data.
