function onClickExport() {
    document.getElementById('export-btn').disabled = true
    const filename = document.getElementById('filename').value
    const cb = (tab) => {
        chrome.tabs.sendMessage(tab.id, { action: "CHANGE_POPUP_ALLOW_DOWNLOAD", filename });
    }
    chrome.tabs.getSelected(null, cb);
}
document.getElementById('export-btn').onclick = onClickExport