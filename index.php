<?php
/*
Plugin Name: Editor Enhancer for Oxygen
Author: Ukuwi
Author URI: https://ukuwi.com
Description: Enhance the Oxygen editor with a better user interface and experience.
Version: 1.0.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: editor_enhancer
*/


/**
 * General direct file access security
 */
if ( ! defined( 'WPINC' ) ) die;


/**
 * Only load styles and scripts if:
 * - user is currently logged in;
 * - Oxygen editor is loaded; and
 * - builder is set to "true".
 */
add_action( 'init', 'load_editor_enhancer_styles_and_scripts' );

function load_editor_enhancer_styles_and_scripts() {

	// Being logged in is most important
	if( ! is_user_logged_in() ) return;
	
	// Check builder is available and editable before loading styles and scripts
	if ( isset($_GET['ct_builder']) && $_GET['ct_builder'] == true ) :

		function enqueue_editor_enhancer_CSS() {
			wp_enqueue_style( 'editor-enhancer', plugin_dir_url(__FILE__) . 'css/enhancer-styles.css' );
		}
		add_action( 'wp_footer', 'enqueue_editor_enhancer_CSS' );

		function enqueue_editor_enhancer_JS() {
			wp_enqueue_script( 'editor-enhancer-keyboard-shortcuts', plugin_dir_url( __FILE__ ) . 'js/keyboard-shortcuts.js', array(), '1.0.0', true );

			wp_enqueue_script( 'editor-enhancer-scripts', plugin_dir_url(__FILE__) . 'js/main.js', array(), false, true );
			wp_localize_script( 'editor-enhancer-scripts', 'siteURL', array( 'link' => get_site_url() ) );
		}
		add_action( 'oxygen_enqueue_ui_scripts', 'enqueue_editor_enhancer_JS' );

	endif;

}
