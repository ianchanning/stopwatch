jQuery Stopwatch Widget
====

This widget allows you to quickly and easily add a stopwatch to your page. It's great for invoicing software, project management applications, quizzes&mdash; anywhere that you need to track time.

###Usage

Getting started is very simple. First, include the stopwatch CSS file and the JavaScript file in your document HEAD. If you're not already using jQuery, you'll need to include this, as well.

In production, it's a good idea to use the included minified versions of the theme CSS and the stopwatch widget JavaScript file.

```html
<link rel="stylesheet" href="./stopwatch/jq.stopwatch.min.css">
<!-- include jQuery before you include the stopwatch, if you have not already done so -->
<script type="text/javascript" src="./stopwatch/jq.stopwatch.min.js"></script>
```

Next, inside of your document, where you would like the stopwatch to be placed, insert a container DIV.

```html
<div id="myStopwatch"></div>
```

Now, at the end of your document, just before the closing BODY tag, initialize the stopwatch.

```javascript
<script type="text/javascript">
  $(function() {
    $('#myStopwatch').stopwatch('theme-1');
  });
</script>
```

###Themes

The stopwatch widget includes 10 CSS3 themes (`theme-1` through `theme-10`). These themes are designed to work in modern browsers and should work in older versions of IE when a polyfill such as modernizr is used.

If you wish to create your own theme, you have a couple of options:

1. Create the new theme and pass it to the `.stopwatch()` function when you initialize the stopwatch.
2. Create a theme in your own CSS that simply references your `#myStopwatch` div and its child elements, passing a blank string in the `.stopwatch()` function.

Creating a theme is fairly straightforward. Below is the generated HTML that the stopwatch widget creates, for your reference. More information about theme structure can be found at the top of the `jq.stopwatch.css` file.

```html
<div id="myStopwatch" class="stopwatch theme-1">
  <div class="the-time">
    <span class="hr">00</span>
    <span class="min">00</span>
    <span class="sec">00</span>
    <span class="hsec">00</span>
  </div>
  <a href="" class="start-stop">Start</a>
  <a href="" class="reset">Reset</a>
</div>
```

###Multiple Instances

Note that you can also include multiple instances of the stopwatch widget on a single page. For instance:

```html
<div id="myStopwatch1"></div>
<div id="myStopwatch2"></div>
```

```javascript
<script type="text/javascript">
  $(function() {
    $('#myStopwatch1').stopwatch('theme-1');
    $('#myStopwatch2').stopwatch('theme-4');
  });
</script>
```

If you're initializing all stopwatches with the same theme, you can combine selectors:

```javascript
<script type="text/javascript">
  $(function() {
    $('#myStopwatch1, #myStopwatch2').stopwatch('theme-1');
  });
</script>
```

Or give them a shared class name:

```html
<div class="myStopwatch"></div>
```

```javascript
<script type="text/javascript">
  $(function() {
    $('.myStopwatch').stopwatch('theme-1');
  });
</script>
```

###Questions?

Questions, comments, or concerns? Feel free to email me at <a href="mailto:kelli@kellishaver.com">kelli@kellishaver.com</a> or Twitter [@kellishaver](http://twitter.com/kellishaver).
