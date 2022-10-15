document.documentElement.classList.remove("no-js");

function popupWindow(url, title, win, w, h) {
	const y = win.top.outerHeight / 2 + win.top.screenY - (h / 2);
	const x = win.top.outerWidth / 2 + win.top.screenX - (w / 2);
	return win.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + y + ', left=' + x);
}

function invite() {
	popupWindow('https://discord.com/oauth2/authorize?client_id=1020299746969133066&scope=applications.commands%20bot&permissions=328565385280', 'Add to server', window, 500, 700)
	return false;
}