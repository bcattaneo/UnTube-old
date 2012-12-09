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
	onLock: function() {
		var tLock = top.document.getElementById("untube-lock");
		var pref_manager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
		if (tLock.label == "Activate") {
			pref_manager.setIntPref("extensions.untube.lock", 1);
			tLock.label = "Deactivate";
		}
		else {
			pref_manager.setIntPref("extensions.untube.lock", 0);
			tLock.label = "Activate";
		}
	},
};
window.addEventListener("load", function(e) { UnTube.onLoad(e); }, false);
