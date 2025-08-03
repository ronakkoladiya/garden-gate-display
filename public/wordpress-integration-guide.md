# WordPress Integration Guide

This guide will help you integrate the HTML/CSS/JS files into your WordPress website.

## Method 1: Custom Page Template (Recommended)

### Step 1: Create Custom Page Templates

1. Access your WordPress theme files (via FTP, cPanel File Manager, or WordPress admin)
2. Navigate to your active theme folder: `/wp-content/themes/your-theme-name/`

3. Create a new file called `page-home.php` and copy the content from `index.html`
4. Create a new file called `page-contact.php` and copy the content from `contact.html`

### Step 2: Convert HTML to WordPress PHP

Replace the HTML head section with WordPress head:

```php
<?php get_header(); ?>
<!-- Add your custom CSS here -->
<style>
/* Copy all the custom CSS from the HTML files */
</style>
```

Replace the footer section:
```php
<?php get_footer(); ?>
```

### Step 3: Create WordPress Pages

1. Go to WordPress Admin → Pages → Add New
2. Create a page titled "Home" with slug "home"
3. Create a page titled "Contact" with slug "contact"
4. Set the Home page as your front page in Settings → Reading

## Method 2: Using a Page Builder Plugin

### Option A: Elementor
1. Install Elementor plugin
2. Create new pages and use HTML widgets
3. Copy sections of HTML code into HTML widgets

### Option B: Beaver Builder
1. Install Beaver Builder plugin
2. Use HTML modules to insert your code sections

## Method 3: Custom Post Type / Shortcodes

Create a custom plugin or add to functions.php:

```php
// Add to functions.php
function freshveggie_home_shortcode() {
    ob_start();
    include(get_template_directory() . '/freshveggie-home.php');
    return ob_get_clean();
}
add_shortcode('freshveggie_home', 'freshveggie_home_shortcode');

function freshveggie_contact_shortcode() {
    ob_start();
    include(get_template_directory() . '/freshveggie-contact.php');
    return ob_get_clean();
}
add_shortcode('freshveggie_contact', 'freshveggie_contact_shortcode');
```

Then use `[freshveggie_home]` and `[freshveggie_contact]` shortcodes on your pages.

## Method 4: Child Theme (Safest)

1. Create a child theme to prevent updates from overriding your changes
2. Copy the HTML structure into child theme files
3. Enqueue custom CSS and JS properly

### Child Theme Example

Create `style.css` in child theme:
```css
/*
Theme Name: Your Theme Child
Template: parent-theme-folder-name
*/

@import url("../parent-theme/style.css");

/* Add your custom CSS here */
```

## Important WordPress Considerations

### 1. Enqueue Scripts and Styles Properly

Add to functions.php:
```php
function freshveggie_enqueue_scripts() {
    wp_enqueue_script('tailwind-cdn', 'https://cdn.tailwindcss.com', array(), '1.0.0', false);
    wp_enqueue_script('lucide-icons', 'https://unpkg.com/lucide@latest/dist/umd/lucide.js', array(), '1.0.0', true);
    wp_enqueue_script('freshveggie-custom', get_template_directory_uri() . '/js/custom.js', array('lucide-icons'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'freshveggie_enqueue_scripts');
```

### 2. Form Handling for Contact Page

WordPress contact form options:
- **Contact Form 7** (recommended)
- **WPForms**
- **Gravity Forms**
- Custom PHP handler

### 3. Navigation Integration

Replace static navigation with WordPress dynamic menu:
```php
wp_nav_menu(array(
    'theme_location' => 'primary',
    'menu_class' => 'your-menu-classes',
    'container' => false
));
```

### 4. SEO and Meta Tags

Install Yoast SEO or RankMath for better SEO control instead of static meta tags.

### 5. Performance Optimization

- Use a caching plugin (WP Rocket, W3 Total Cache)
- Optimize images with WebP format
- Consider loading Tailwind CSS locally instead of CDN

## Security Considerations

1. Validate and sanitize all form inputs
2. Use WordPress nonces for form security
3. Escape output data properly
4. Keep WordPress and plugins updated

## Mobile Responsiveness

The current design is mobile-responsive, but test on various devices and consider:
- WordPress mobile themes
- AMP integration if needed
- Touch-friendly navigation

## Backup Before Implementation

Always backup your WordPress site before making changes:
- Use a backup plugin (UpdraftPlus, BackWPup)
- Manual backup via cPanel/FTP
- Database backup via phpMyAdmin

## Testing Checklist

After integration, test:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms submit properly
- [ ] Mobile responsiveness
- [ ] Loading speed
- [ ] Cross-browser compatibility
- [ ] SEO meta tags
- [ ] Contact form emails

## Need Help?

If you encounter issues:
1. Check WordPress debug logs
2. Test with default theme to isolate issues
3. Consider hiring a WordPress developer
4. Use staging site for testing first

Remember: Always test changes on a staging site before applying to your live website!