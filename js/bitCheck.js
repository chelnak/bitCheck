var queryBlockChain = function(e) {

    var blockChainUrl = " https://blockchain.info/address/";
    
    if (e.selectionText) {
			blockChainUrl += e.selectionText;	
		}

  
   chrome.tabs.create({"url" : blockChainUrl });


}

 
var queryBlockChainJSON = function(e) {

    var blockChainUrl = " https://blockchain.info/address/";
    
    if (e.selectionText) {
			blockChainUrl += e.selectionText += "?format=json";	
		}

  
	var test =getJSON(blockChainUrl);
	
	//return a random value here to test 	
 	alert(test['hash160']);

}


function getJSON(blockChainUrl) {
	
	var resp;	
	
   var req = new XMLHttpRequest();
    
   req.open('GET', blockChainUrl, false);
   
   req.onreadystatechange = function () {

   if (req.readyState == 4){
			resp = JSON.parse(req.responseText);
			}      
		}
    
   req.send();
    
   return resp;
	
}


chrome.contextMenus.create({
    "title" : "Check BTC Address",
    "contexts" : ["selection"],
	 "onclick" : queryBlockChain
});

  
  
