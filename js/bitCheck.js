 
var queryBlockChain = function(e) {

var blockChainUrl = " https://blockchain.info/address/";

if (e.selectionText) {
	blockChainUrl += e.selectionText;	
	}

   chrome.tabs.create(
          {"url" : blockChainUrl });

}
  
 chrome.contextMenus.create({
    "title" : "Check BTC Address",
    "contexts" : ["selection"],
	 "onclick" : queryBlockChain
  });
  
  