( function($) {

	let eefoSiteRootURL = eefoLocalVars.siteURL + '/wp-admin';

	let eefoBackToWPLinks = '' +
		'<a class="oxygen-toolbar-button-dropdown-option" ng-href="' + eefoSiteRootURL + '/edit.php?post_type=ct_template" href="' + eefoSiteRootURL + '/edit.php?post_type=ct_template">Templates</a>' +
		'<a class="oxygen-toolbar-button-dropdown-option" ng-href="' + eefoSiteRootURL + '/edit.php" href="' + eefoSiteRootURL + '/edit.php">Posts</a>' +
		'<a class="oxygen-toolbar-button-dropdown-option" ng-href="' + eefoSiteRootURL + '/edit.php?post_type=page" href="' + eefoSiteRootURL + '/edit.php?post_type=page">Pages</a>' +
		'<a class="oxygen-toolbar-button-dropdown-option" ng-href="' + eefoSiteRootURL + '/upload.php" href="' + eefoSiteRootURL + '/upload.php">Media</a>';

	// Add some helpful links to the editor's "Back to WP" drop down
	$('#oxygen-topbar .oxygen-back-to-wp-menu .oxygen-toolbar-button-dropdown').prepend(eefoBackToWPLinks);

	// Remove the front end link, since it will be added elsewhere
	$('.oxygen-back-to-wp-menu .oxygen-toolbar-button-dropdown-option:last-child').remove();

	// Add a back to front end link
	let eefoIsTemplate = eefoLocalVars.istemplate;

	let eefoNgHREF = '';

	if ( eefoIsTemplate == 1 ) {
		eefoNgHREF = 'iframeScope.template.postData.frontendURL';
	} else {
		eefoNgHREF = 'iframeScope.ajaxVar.frontendURL';
	}

	let eefoFrontEndLink = '' +
		'<a ng-href="{{' + eefoNgHREF + '}}" target="_blank" style="text-decoration:none;" title="Open in Front End">' +
			'<div class="oxygen-back-to-frontend oxygen-dom-tree-button oxygen-toolbar-button">' +
				'<i class="fa fa-desktop"></i>' +
			'</div>' +
		'</a>';

	$('#oxygen-topbar .oxygen-dom-tree-button.oxygen-toolbar-button').before(eefoFrontEndLink);

})( jQuery );
