( function($) {

	let url = siteURL.link + '/wp-admin';

	let oxyuiBackToLinks = '' +
		'<a class="oxygen-toolbar-button-dropdown-option" ng-href="' + url + '/edit.php?post_type=ct_template" href="' + url + '/edit.php?post_type=ct_template">Templates</a>' +
		'<a class="oxygen-toolbar-button-dropdown-option" ng-href="' + url + '/edit.php" href="' + url + '/edit.php">Posts</a>' +
		'<a class="oxygen-toolbar-button-dropdown-option" ng-href="' + url + '/edit.php?post_type=page" href="' + url + '/edit.php?post_type=page">Pages</a>' +
		'<a class="oxygen-toolbar-button-dropdown-option" ng-href="' + url + '/upload.php" href="' + url + '/upload.php">Media</a>';

	// Add some helpful links to the editor's "Back to WP" drop down
	$('#oxygen-topbar .oxygen-back-to-wp-menu .oxygen-toolbar-button-dropdown').prepend(oxyuiBackToLinks);

})( jQuery );
