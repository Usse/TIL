###div[class^="status-"]
selects classes that starts with "status-"


###[class*=" status-"] — 
selects classes that contains the substring "status-" occurring directly after a space character. 

*Class names are separated by whitespace per the HTML spec, hence the significant space character. This checks any other classes after the first if multiple classes are specified, and adds a bonus of checking the first class in case the attribute value is space-padded (which can happen with some applications that output class attributes dynamically).*


###Adjacent sibling selectors (+)
Adjacent sibling selectors have the following syntax: E1 + E2, where E2 is the subject of the selector. The selector matches if E1 and E2 share the same parent in the document tree and E1 immediately precedes E2, ignoring non-element nodes (such as text nodes and comments).

```css
p + p {
  /* Some declarations */
}
```

This selector means that the style applies only to paragraphs directly following another paragraph.
A plain "p" selector would apply the style to every paragraph in the page.


###General Sibling Selector (~)
The selector matches elements that are siblings of a given element. This example will match a p element if it’s a sibling of an h2 element:

```css
h2 ~ p {
  /* Some declarations */
}
```

The elements don’t have to be adjacent siblings, but they have to have the same parent, and the h2 element **has to occur before** the p element in the document source.

[Demo](https://jsbin.com/dotanu/edit?html,css,output)
