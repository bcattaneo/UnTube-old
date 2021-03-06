var myUnTube = {
	init: function() {
		var pref_check = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
		var gLock = 0;
		var cLock = top.document.getElementById("untube-lock");
		if (pref_check.prefHasUserValue("extensions.untube.lock")) {
			gLock = pref_check.getIntPref("extensions.untube.lock");
			if (gLock == 1) {
				cLock.label = "Deactivate";
			}
			else {
				cLock.label = "Activate";
			}
		}
		else {
			pref_check.setIntPref("extensions.untube.lock", 1);
			cLock.label = "Deactivate";
		}
		if(gBrowser) gBrowser.addEventListener("DOMContentLoaded", this.onPageLoad, false);
	},
	onPageLoad: function(aEvent) {
		var tLock = top.document.getElementById("untube-lock");
		if (tLock.label == "Activate") return;
		var doc = aEvent.originalTarget;
		var win = doc.defaultView;
		if (win != win.top) return;
		// Fetch domain
		// Credits to Mustafa Yüceel and Chris Zarate.
		var s;
		var host = doc.location.href;
		host=host.replace('http:\/\/','');
		host=host.replace('https:\/\/','');
		re=new RegExp("([^/]+)");
		host=host.match(re)[1];
		host=host.split('.');
		if(host[2]!=null) {
			s=host[host.length-2]+'.'+host[host.length-1];
			domains='ab.ca|ac.ac|ac.at|ac.be|ac.cn|ac.il|ac.in|ac.jp|ac.kr|ac.nz|ac.th|ac.uk|ac.za|adm.br|adv.br|agro.pl|ah.cn|aid.pl|alt.za|am.br|arq.br|art.br|arts.ro|asn.au|asso.fr|asso.mc|atm.pl|auto.pl|bbs.tr|bc.ca|bio.br|biz.pl|bj.cn|br.com|cn.com|cng.br|cnt.br|co.ac|co.at|co.il|co.in|co.jp|co.kr|co.nz|co.th|co.uk|co.za|com.au|com.br|com.cn|com.ec|com.fr|com.hk|com.mm|com.mx|com.pl|com.ro|com.ru|com.sg|com.tr|com.tw|cq.cn|cri.nz|de.com|ecn.br|edu.au|edu.cn|edu.hk|edu.mm|edu.mx|edu.pl|edu.tr|edu.za|eng.br|ernet.in|esp.br|etc.br|eti.br|eu.com|eu.lv|fin.ec|firm.ro|fm.br|fot.br|fst.br|g12.br|gb.com|gb.net|gd.cn|gen.nz|gmina.pl|go.jp|go.kr|go.th|gob.mx|gov.br|gov.cn|gov.ec|gov.il|gov.in|gov.mm|gov.mx|gov.sg|gov.tr|gov.za|govt.nz|gs.cn|gsm.pl|gv.ac|gv.at|gx.cn|gz.cn|hb.cn|he.cn|hi.cn|hk.cn|hl.cn|hn.cn|hu.com|idv.tw|ind.br|inf.br|info.pl|info.ro|iwi.nz|jl.cn|jor.br|jpn.com|js.cn|k12.il|k12.tr|lel.br|ln.cn|ltd.uk|mail.pl|maori.nz|mb.ca|me.uk|med.br|med.ec|media.pl|mi.th|miasta.pl|mil.br|mil.ec|mil.nz|mil.pl|mil.tr|mil.za|mo.cn|muni.il|nb.ca|ne.jp|ne.kr|net.au|net.br|net.cn|net.ec|net.hk|net.il|net.in|net.mm|net.mx|net.nz|net.pl|net.ru|net.sg|net.th|net.tr|net.tw|net.za|nf.ca|ngo.za|nm.cn|nm.kr|no.com|nom.br|nom.pl|nom.ro|nom.za|ns.ca|nt.ca|nt.ro|ntr.br|nx.cn|odo.br|on.ca|or.ac|or.at|or.jp|or.kr|or.th|org.au|org.br|org.cn|org.ec|org.hk|org.il|org.mm|org.mx|org.nz|org.pl|org.ro|org.ru|org.sg|org.tr|org.tw|org.uk|org.za|pc.pl|pe.ca|plc.uk|ppg.br|presse.fr|priv.pl|pro.br|psc.br|psi.br|qc.ca|qc.com|qh.cn|re.kr|realestate.pl|rec.br|rec.ro|rel.pl|res.in|ru.com|sa.com|sc.cn|school.nz|school.za|se.com|se.net|sh.cn|shop.pl|sk.ca|sklep.pl|slg.br|sn.cn|sos.pl|store.ro|targi.pl|tj.cn|tm.fr|tm.mc|tm.pl|tm.ro|tm.za|tmp.br|tourism.pl|travel.pl|tur.br|turystyka.pl|tv.br|tw.cn|uk.co|uk.com|uk.net|us.com|uy.com|vet.br|web.za|web.com|www.ro|xj.cn|xz.cn|yk.ca|yn.cn|za.com';
			domains=domains.split('|');
			for(var i=0;i<domains.length;i++) {
				if(s==domains[i]) {
					s=host[host.length-3]+'.'+s;
					break;
				}
			}
		}
		else {
			s=host.join('.');
		}
		if(s.indexOf("youtube") !== -1) {
			var nodeList = doc.querySelectorAll(".watch-sidebar-body");
			for (var i = 0, length = nodeList.length; i < length; i++) {
				nodeList[i].innerHTML = "<div style=\"font-size: 25px;float:left;margin-top:2px;margin-left: 7px\"><strong>Un</strong></div><div style=\"background:no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflMCg1ne.png) -63px -51px;width:49px;height:30px;margin-left: 40px\"></div>";
			}
			var nodeList = doc.querySelectorAll(".watch-sidebar-foot");
			for (var i = 0, length = nodeList.length; i < length; i++) {
				nodeList[i].innerHTML = "<div style=\"margin-left: 5px;margin-top: 10px\">Hiding YouTube's addictive suggestions.</div>";
			}
		}
	}
}
window.addEventListener("load", function load(event){
	window.removeEventListener("load", load, false);
	myUnTube.init(); 
},false);
