<?php

function update_theme_enqueue_styles() {
  wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css' );
  wp_enqueue_style('webfont-play', 'https://fonts.googleapis.com/css?family=Play:400,700');
}
add_action( 'wp_enqueue_scripts', 'update_theme_enqueue_styles' );
