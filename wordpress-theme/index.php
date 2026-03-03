<?php
/**
 * Main Index Template
 *
 * Falls back to this if front-page.php doesn't apply.
 *
 * @package Stationery_Store
 */

get_header();
?>

<main id="main-content" style="padding-top: 100px;">
    <div class="container">

        <?php if ( have_posts() ) : ?>

            <div class="section-header">
                <h2><?php esc_html_e( 'Latest Posts', 'stationery-store' ); ?></h2>
            </div>

            <div class="product-grid">
                <?php while ( have_posts() ) : the_post(); ?>
                    <article class="product-card">
                        <?php if ( has_post_thumbnail() ) : ?>
                            <img class="product-card-image" src="<?php the_post_thumbnail_url( 'medium_large' ); ?>" alt="<?php the_title_attribute(); ?>">
                        <?php endif; ?>
                        <div class="product-card-body">
                            <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                            <p class="brand"><?php echo get_the_date(); ?></p>
                            <p><?php echo wp_trim_words( get_the_excerpt(), 20 ); ?></p>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>

            <?php the_posts_pagination(); ?>

        <?php else : ?>
            <p><?php esc_html_e( 'No posts found.', 'stationery-store' ); ?></p>
        <?php endif; ?>

    </div>
</main>

<?php get_footer(); ?>
