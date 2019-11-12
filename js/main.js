( function($) {

	let url = siteURL.link + '/wp-admin';

	let oxyuiBackToLinks = '' +
		'<a class="oxygen-toolbar-button-dropdown-option" ng-href="' + url + '/edit.php?post_type=ct_template" href="' + url + '/edit.php?post_type=ct_template">Templates</a>' +
		'<a class="oxygen-toolbar-button-dropdown-option" ng-href="' + url + '/edit.php" href="' + url + '/edit.php">Posts</a>' +
		'<a class="oxygen-toolbar-button-dropdown-option" ng-href="' + url + '/edit.php?post_type=page" href="' + url + '/edit.php?post_type=page">Pages</a>' +
		'<a class="oxygen-toolbar-button-dropdown-option" ng-href="' + url + '/upload.php" href="' + url + '/upload.php">Media</a>';

	// Add some helpful links to the editor's "Back to WP" drop down
	$('#oxygen-topbar .oxygen-back-to-wp-menu .oxygen-toolbar-button-dropdown').prepend(oxyuiBackToLinks);

	// Remove the front end link, since it will be added elsewhere
	$('.oxygen-back-to-wp-menu .oxygen-toolbar-button-dropdown-option:last-child').remove();

	// Add a back to front end link
	let frontEndLink = '' +
		'<a ng-href="{{iframeScope.template.postData.frontendURL}}" target="_blank" style="text-decoration:none;" title="Open in Front End">' +
			'<div class="oxygen-back-to-frontend oxygen-dom-tree-button oxygen-toolbar-button">' +
				'<i class="fa fa-desktop"></i>' +
			'</div>' +
		'</a>';

	$('#oxygen-topbar .oxygen-dom-tree-button.oxygen-toolbar-button').before(frontEndLink);
	

})( jQuery );
