<?php
/**
 * Front Page Template
 *
 * @package Stationery_Store
 */

get_header();
?>

<main id="main-content">

    <!-- Hero Section -->
    <section class="hero" id="hero">
        <div class="container hero-content">
            <div class="hero-text">
                <h1><?php echo wp_kses_post( get_theme_mod( 'hero_title', 'Premium <em>Stationery</em> for Creative Minds' ) ); ?></h1>
                <p><?php echo esc_html( get_theme_mod( 'hero_subtitle', 'Discover our curated collection of premium stationery supplies.' ) ); ?></p>
                <a href="<?php echo esc_url( get_theme_mod( 'hero_button_url', '#products' ) ); ?>" class="btn btn-primary">
                    <?php echo esc_html( get_theme_mod( 'hero_button_text', 'Shop Now' ) ); ?>
                </a>
            </div>
            <div class="hero-image">
                <?php
                $hero_img = get_theme_mod( 'hero_image' );
                if ( $hero_img ) :
                ?>
                    <img src="<?php echo esc_url( $hero_img ); ?>" alt="<?php esc_attr_e( 'Stationery supplies', 'stationery-store' ); ?>">
                <?php else : ?>
                    <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/hero-placeholder.jpg' ); ?>" alt="<?php esc_attr_e( 'Stationery supplies', 'stationery-store' ); ?>">
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- Categories Section -->
    <section class="categories" id="categories">
        <div class="container">
            <div class="section-header">
                <h2><?php esc_html_e( 'Categories', 'stationery-store' ); ?></h2>
                <p><?php esc_html_e( 'Browse our collection by category', 'stationery-store' ); ?></p>
            </div>
            <div class="category-grid">
                <?php
                $categories = get_categories( array( 'hide_empty' => false, 'number' => 12 ) );
                if ( $categories ) :
                    foreach ( $categories as $cat ) :
                ?>
                    <a href="<?php echo esc_url( get_category_link( $cat->term_id ) ); ?>" class="category-tag">
                        <?php echo esc_html( $cat->name ); ?>
                    </a>
                <?php
                    endforeach;
                else :
                    $defaults = array( 'Notebooks', 'Pens & Pencils', 'Art Supplies', 'Desk Accessories', 'Paper', 'Planners' );
                    foreach ( $defaults as $name ) :
                ?>
                    <span class="category-tag"><?php echo esc_html( $name ); ?></span>
                <?php
                    endforeach;
                endif;
                ?>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section class="products" id="products">
        <div class="container">
            <div class="section-header">
                <h2><?php esc_html_e( 'Featured Products', 'stationery-store' ); ?></h2>
                <p><?php esc_html_e( 'Our most popular items', 'stationery-store' ); ?></p>
            </div>
            <div class="product-grid">
                <?php
                $products = new WP_Query( array(
                    'post_type'      => 'post',
                    'posts_per_page' => 8,
                    'meta_key'       => '_is_featured',
                    'meta_value'     => '1',
                ) );

                if ( $products->have_posts() ) :
                    while ( $products->have_posts() ) : $products->the_post();
                ?>
                    <article class="product-card">
                        <?php if ( has_post_thumbnail() ) : ?>
                            <img class="product-card-image" src="<?php the_post_thumbnail_url( 'medium_large' ); ?>" alt="<?php the_title_attribute(); ?>">
                        <?php else : ?>
                            <div class="product-card-image" style="background: var(--bg-gradient);"></div>
                        <?php endif; ?>
                        <div class="product-card-body">
                            <h3><?php the_title(); ?></h3>
                            <p class="brand"><?php echo esc_html( get_the_category_list( ', ' ) ); ?></p>
                            <?php
                            $price = get_post_meta( get_the_ID(), '_price', true );
                            $sale  = get_post_meta( get_the_ID(), '_sale_price', true );
                            ?>
                            <?php if ( $sale ) : ?>
                                <span class="badge-sale">Sale</span>
                                <p class="price">$<?php echo esc_html( $sale ); ?> <span class="original">$<?php echo esc_html( $price ); ?></span></p>
                            <?php elseif ( $price ) : ?>
                                <p class="price">$<?php echo esc_html( $price ); ?></p>
                            <?php endif; ?>
                        </div>
                    </article>
                <?php
                    endwhile;
                    wp_reset_postdata();
                else :
                    // Placeholder cards
                    for ( $i = 0; $i < 4; $i++ ) :
                ?>
                    <article class="product-card">
                        <div class="product-card-image" style="background: var(--bg-gradient);"></div>
                        <div class="product-card-body">
                            <h3>Sample Product</h3>
                            <p class="brand">Brand Name</p>
                            <p class="price">$12.99</p>
                        </div>
                    </article>
                <?php
                    endfor;
                endif;
                ?>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
        <div class="container">
            <div class="section-header">
                <h2><?php esc_html_e( 'Get in Touch', 'stationery-store' ); ?></h2>
                <p><?php esc_html_e( 'We\'d love to hear from you', 'stationery-store' ); ?></p>
            </div>
            <div class="contact-grid">
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="icon">✉️</div>
                        <div>
                            <strong><?php esc_html_e( 'Email', 'stationery-store' ); ?></strong>
                            <p><?php echo esc_html( get_theme_mod( 'contact_email', 'hello@stationerystore.com' ) ); ?></p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="icon">📞</div>
                        <div>
                            <strong><?php esc_html_e( 'Phone', 'stationery-store' ); ?></strong>
                            <p><?php echo esc_html( get_theme_mod( 'contact_phone', '+1 (555) 123-4567' ) ); ?></p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="icon">📍</div>
                        <div>
                            <strong><?php esc_html_e( 'Address', 'stationery-store' ); ?></strong>
                            <p><?php echo esc_html( get_theme_mod( 'contact_address', '123 Stationery Lane, Creative City' ) ); ?></p>
                        </div>
                    </div>
                </div>
                <form class="contact-form" method="post" action="">
                    <input type="text" name="name" placeholder="<?php esc_attr_e( 'Your Name', 'stationery-store' ); ?>" required>
                    <input type="email" name="email" placeholder="<?php esc_attr_e( 'Your Email', 'stationery-store' ); ?>" required>
                    <input type="text" name="subject" placeholder="<?php esc_attr_e( 'Subject', 'stationery-store' ); ?>">
                    <textarea name="message" placeholder="<?php esc_attr_e( 'Your Message', 'stationery-store' ); ?>" required></textarea>
                    <button type="submit" class="btn btn-primary"><?php esc_html_e( 'Send Message', 'stationery-store' ); ?></button>
                </form>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>
