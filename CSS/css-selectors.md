###div[class^="status-"]
selects classes that starts with "status-"

###[class*=" status-"] — 
selects classes that contains the substring "status-" occurring directly after a space character. 

*Class names are separated by whitespace per the HTML spec, hence the significant space character. This checks any other classes after the first if multiple classes are specified, and adds a bonus of checking the first class in case the attribute value is space-padded (which can happen with some applications that output class attributes dynamically).*




