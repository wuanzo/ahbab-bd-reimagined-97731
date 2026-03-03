<?php
/**
 * Stationery Store Theme Functions
 *
 * @package Stationery_Store
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Theme Setup
 */
function stationery_store_setup() {
    // Add title tag support
    add_theme_support( 'title-tag' );

    // Custom logo
    add_theme_support( 'custom-logo', array(
        'height'      => 60,
        'width'       => 200,
        'flex-width'  => true,
        'flex-height' => true,
    ) );

    // Post thumbnails
    add_theme_support( 'post-thumbnails' );

    // HTML5 support
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ) );

    // Register nav menu
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'stationery-store' ),
    ) );
}
add_action( 'after_setup_theme', 'stationery_store_setup' );

/**
 * Enqueue Styles & Scripts
 */
function stationery_store_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'stationery-store-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap',
        array(),
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'stationery-store-style',
        get_stylesheet_uri(),
        array( 'stationery-store-fonts' ),
        wp_get_theme()->get( 'Version' )
    );

    // Main script
    wp_enqueue_script(
        'stationery-store-script',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        wp_get_theme()->get( 'Version' ),
        true
    );
}
add_action( 'wp_enqueue_scripts', 'stationery_store_scripts' );

/**
 * Customizer Settings
 */
function stationery_store_customizer( $wp_customize ) {

    // --- Hero Section ---
    $wp_customize->add_section( 'hero_section', array(
        'title'    => __( 'Hero Section', 'stationery-store' ),
        'priority' => 30,
    ) );

    $wp_customize->add_setting( 'hero_title', array(
        'default'           => 'Premium <em>Stationery</em> for Creative Minds',
        'sanitize_callback' => 'wp_kses_post',
    ) );
    $wp_customize->add_control( 'hero_title', array(
        'label'   => __( 'Hero Title (use <em> for accent)', 'stationery-store' ),
        'section' => 'hero_section',
        'type'    => 'textarea',
    ) );

    $wp_customize->add_setting( 'hero_subtitle', array(
        'default'           => 'Discover our curated collection of premium stationery supplies.',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'hero_subtitle', array(
        'label'   => __( 'Hero Subtitle', 'stationery-store' ),
        'section' => 'hero_section',
        'type'    => 'textarea',
    ) );

    $wp_customize->add_setting( 'hero_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'hero_image', array(
        'label'   => __( 'Hero Image', 'stationery-store' ),
        'section' => 'hero_section',
    ) ) );

    $wp_customize->add_setting( 'hero_button_text', array(
        'default'           => 'Shop Now',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'hero_button_text', array(
        'label'   => __( 'Button Text', 'stationery-store' ),
        'section' => 'hero_section',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'hero_button_url', array(
        'default'           => '#products',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( 'hero_button_url', array(
        'label'   => __( 'Button URL', 'stationery-store' ),
        'section' => 'hero_section',
        'type'    => 'url',
    ) );

    // --- Contact Section ---
    $wp_customize->add_section( 'contact_section', array(
        'title'    => __( 'Contact Info', 'stationery-store' ),
        'priority' => 40,
    ) );

    $wp_customize->add_setting( 'contact_email', array(
        'default'           => 'hello@stationerystore.com',
        'sanitize_callback' => 'sanitize_email',
    ) );
    $wp_customize->add_control( 'contact_email', array(
        'label'   => __( 'Email', 'stationery-store' ),
        'section' => 'contact_section',
        'type'    => 'email',
    ) );

    $wp_customize->add_setting( 'contact_phone', array(
        'default'           => '+1 (555) 123-4567',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'contact_phone', array(
        'label'   => __( 'Phone', 'stationery-store' ),
        'section' => 'contact_section',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'contact_address', array(
        'default'           => '123 Stationery Lane, Creative City',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'contact_address', array(
        'label'   => __( 'Address', 'stationery-store' ),
        'section' => 'contact_section',
        'type'    => 'text',
    ) );

    // --- Footer Section ---
    $wp_customize->add_section( 'footer_section', array(
        'title'    => __( 'Footer', 'stationery-store' ),
        'priority' => 50,
    ) );

    $wp_customize->add_setting( 'footer_tagline', array(
        'default'           => 'Your one-stop destination for premium stationery supplies.',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'footer_tagline', array(
        'label'   => __( 'Footer Tagline', 'stationery-store' ),
        'section' => 'footer_section',
        'type'    => 'textarea',
    ) );
}
add_action( 'customize_register', 'stationery_store_customizer' );
