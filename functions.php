<?php

function update_theme_enqueue_scripts() {
  wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css' );
  wp_enqueue_style('webfont-play', 'https://fonts.googleapis.com/css?family=Playfair+Display:700,900"');

  wp_enqueue_script('update-site', get_stylesheet_directory_uri() . "/js/site.js");
}
add_action( 'wp_enqueue_scripts', 'update_theme_enqueue_scripts' );

function update_header_widgets_init() {

	register_sidebar( array(
		'name'          => __('Header sidebar', 'update-divi-childtheme'),
		'id'            => 'header_sidebar_1',
		'before_widget' => '<div id="%1$s" class="widget-item %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2>',
		'after_title'   => '</h2>',
	) );

}
add_action( 'widgets_init', 'update_header_widgets_init' );

function update_header_top() {
  if ( is_active_sidebar( 'header_sidebar_1' ) ) :
    ?>
  	<div id="header-sidebar" class="header-sidebar widget-area" role="complementary">
  		<?php dynamic_sidebar( 'header_sidebar_1' ); ?>
  	</div><!-- #header-sidebar -->
    <?php
  endif;
}
add_action("et_header_top", "update_header_top");

function update_newsletter_form() {
  $form = do_shortcode('[mc4wp_form]');
  if($form) :
    ?>
    <div id="update-newsletter-form" class="update-newsletter-form-container">
      <div class="update-newsletter-form">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/news_bg_.png" class="bg-img" />
        <h2><?php _e('Subscribe to our political innovation newsletter', 'update-divi-childtheme'); ?></h2>
        <?php echo do_shortcode('[mc4wp_form]'); ?>
      </div>
    </div>
    <?php
  endif;
}
add_action( 'wp_footer', 'update_newsletter_form' );
