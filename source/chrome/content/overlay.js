var UnTube = {
	onLoad: function() {
		this.initialized = true;
	},
	onChangeLog: function() {
		window.open(
			"chrome://untube/content/ChangeLog",
			"ChangeLog",
			"width=420,height=230,resizable,scrollbars=yes,status=1"
		);
	},
	onsud0: function() {
		var myUrl = "http://addons.mozilla.org/es/firefox/user/6742344/";
		var tBrowser = top.document.getElementById("content");
		var tab = tBrowser.addTab(myUrl);
		tBrowser.selectedTab = tab;
	},
};
window.addEventListener("load", function(e) { UnTube.onLoad(e); }, false); 
