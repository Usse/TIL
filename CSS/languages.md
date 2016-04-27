##:lang()

The :lang CSS pseudo-class matches elements based on the language the element is determined to be in. In HTML, the language is determined by a combination of the lang attribute, the <meta> element, and possibly by information from the protocol (such as HTTP headers). For other document types there may be other document methods for determining the language.


```html
<div lang="en">
  <p>
    Test Lorem ipsum dolor sit amet, consectetur adipisicing 
    elit. Assumenda repellendus, cupiditate eligendi minus atque excepturi. 
    Rem iusto magni eos, minus laboriosam harum sequi voluptatum eum 
    deserunt voluptatibus cupiditate fugit eius.
  </p>
</div>
```

```css
p:lang(en) { 
    background: yellow;
}
```



####Compatibility

| Chrome  | IE   | Safari |
| ------- |------| ------ |
| 1.0 +   | 8 +  | 3.1 +  |
