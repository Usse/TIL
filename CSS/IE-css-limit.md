##Stylesheet Limits in Internet Explorer

[KB 262161](https://support.microsoft.com/en-us/kb/262161) outlines the maximum number of stylesheets and rules supported by **Internet Explorer 6 to 9**.

- A sheet may contain up to *4095 rules*
- A sheet may @import up to *31 sheets*
- @import nesting supports up to *4 levels deep*

The root of the limitations is that Internet Explorer uses a 32bit integer to identify, sort, and apply the cascading rules. The integer’s 32bits are split into five fields: four sheetIDs of 5 bits each, and one 12bit ruleID. The 5 bit sheetIDs results in the 31 @import limit, and the 12 bit ruleID results in the 4095 rules-per-sheet limitation. 

While these limits are entirely sufficient for most sites, there are some sites (particularly when using frameworks and controls) that can encounter the limits, requiring workarounds.


[Test page](http://demos.telerik.com/testcases/BrokenTheme.aspx)



If you want to test how many css rules are used in the stylesheet use:

```js

function countCSSRules() {
    var results = '',
        log = '';
    if (!document.styleSheets) {
        return;
    }
    for (var i = 0; i < document.styleSheets.length; i++) {
        countSheet(document.styleSheets[i]);
    }
    function countSheet(sheet) {
        var count = 0;
        if (sheet && sheet.cssRules) {
            for (var j = 0, l = sheet.cssRules.length; j < l; j++) {
                if( !sheet.cssRules[j].selectorText ) {
                    continue;
                }
                count += sheet.cssRules[j].selectorText.split(',').length;
            }

            log += '\nFile: ' + (sheet.href ? sheet.href : 'inline <style> tag');
            log += '\nRules: ' + sheet.cssRules.length;
            log += '\nSelectors: ' + count;
            log += '\n--------------------------';
            if (count >= 4096) {
                results += '\n********************************\nWARNING:\n There are ' + count + ' CSS rules in the stylesheet ' + sheet.href + ' - IE will ignore the last ' + (count - 4096) + ' rules!\n';
            }
        }
    }
    console.log(log);
    console.log(results);
};
countCSSRules();
```