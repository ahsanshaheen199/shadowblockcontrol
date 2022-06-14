<?php
/*
Plugin Name: Shadow Block Control
Plugin URI: https://github.com/ahsanshaheen199
Description: A box shadow block control for gutenberg
Version: 1.0
Author: Ahsan Habib Shaheen
License: GPLv2 or later
Text Domain: sbc
*/

function enqueue_block_assets() {
	$dependencies = include_once plugin_dir_path( __FILE__ ) . '/build/block.asset.php';
	wp_enqueue_style('shadowcontrol',plugin_dir_url(__FILE__) . '/build/block.css');
	wp_enqueue_script('shadowcontrol',plugin_dir_url(__FILE__) . '/build/block.js', $dependencies['dependencies'], $dependencies['version'],true);
}

add_action('enqueue_block_editor_assets', 'enqueue_block_assets');
