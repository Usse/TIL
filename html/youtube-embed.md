###Youtube embed


embed string

```
www.youtube.com/embed/[VIDEO_ID]

?modestbranding=1;controls=0;showinfo=0;rel=0;fs=1
```


**Modest Branding** This parameter controls the display of the YouTube logo. The options are 0 or 1, we almost always set it to 1.
modestbranding=1

**Controls** – This parameter indicates whether the video player controls will display. Our options are 0, 1, or 2. Default is 1. We almost always change it to 0. If you have a video where you want the viewer to have more control leave this at 1.
controls=0


**Show Info** – This parameter controls the display of information like video title and uploader. Value options are 0 or 1, set the value to 1 to remove the information from the video.
showinfo=0


**Related** – This parameter indicates whether the player should show related videos at the end of your video. If you have a lot of related content, sometimes this is a good idea. More often than not it will display videos from other YouTube users, you’ll have to decide what is best for your situation.
rel=0



####Responsive css

```css

.fullWith--video .videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}
.fullWith--video .videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

```
