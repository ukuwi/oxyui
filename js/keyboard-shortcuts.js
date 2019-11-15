( function($) {

	function eefoKeyDownActions(event) {
		switch (String.fromCharCode(event.which).toLowerCase()) {

			// Save the editor
			case 's':
				event.preventDefault();
				angular.element('#ct-controller-ui').scope().iframeScope.savePage();
				break;

			// Duplicate the currently selected element
			case 'd':
				event.preventDefault();
				angular.element('#ct-controller-ui').scope().iframeScope.duplicateComponent();
				break;

			// Enter/Exit Quick-View Full-Screen mode
			case 'q':
				event.preventDefault();

				if ( $('#ct-viewport-container').hasClass('viewport-fullscreen') ) {
					$('#ct-viewport-container').removeClass('viewport-fullscreen');
				} else {
					$('#ct-viewport-container').addClass('viewport-fullscreen');
				}
				break;

			// Toggle the "Add" element panel
			case '1':
				event.preventDefault();
				angular.element('#ct-controller-ui').scope().switchActionTab('componentBrowser');
				break;

			// Toggle the DOM Tree panel (aka Structure panel)
			case '2':
				event.preventDefault();
				angular.element('#ct-controller-ui').scope().switchTab('sidePanel','DOMTree');
				break;

			// Toggle the Settings panel
			case '3':
				event.preventDefault();
				angular.element('#ct-controller-ui').scope().toggleSettingsPanel();
				break;

			// Toggle the Stylesheets Manager panel
			case '4':
				event.preventDefault();
				angular.element('#ct-controller-ui').scope().switchTab('sidePanel','styleSheets');
				break;

			// Toggle the Selectors Manager panel
			case '5':
				event.preventDefault();
				angular.element('#ct-controller-ui').scope().switchTab('sidePanel','selectors');
				break;

		}
	}


	/**
	 * Watch for the key presses, including the CTRL or META keys. Comment has been included
	 * in case use of the ALT key would need to be included or recommended in future versions.
	 */
	$(window).bind('keydown', function(event) {
		if ( (event.ctrlKey || event.metaKey)/* && event.altKey*/) {
			eefoKeyDownActions(event);
		}
	});
	$(document).ready(function(){
		$("#ct-artificial-viewport").load(function(){
			$(this).contents().bind('keydown', function(event) {
				if ( (event.ctrlKey || event.metaKey)/* && event.altKey */) {
					eefoKeyDownActions(event);
				}
			});
		});
	});

})( jQuery );
