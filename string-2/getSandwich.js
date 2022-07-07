function getSandwich(str){
   First = str.indexOf("bread");
	Last = str.lastIndexOf("bread");
	if(First != -1 && Last != -1 && First != Last)
		return str.substring(First+5, Last);
	return ""; 
}
}
