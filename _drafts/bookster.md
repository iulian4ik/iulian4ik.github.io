---
layout: post
title: Bookster - Make an emotions poster of your favorite book
date: 2016-05-09
permalink: /bookster-an-emotions-poster-of-your-favorite-book/
categories: books chart emotions
---

I love to read. Mostly it is work related literature - posts and books about python, data science, javascript. But lately, thanks to my wife, I started reading some non-technical literature as well - science fiction, to be more specific. 

I've started with classics (Robert Heinlein, Isaac Azimov) and got fascinated while diving in the worlds they've created, the worlds that were supposed to be our future (some of them *are* our present, some of them *aren't*, but this is a topic for another post).

A lot of people enjoy reading books because of their emotional component - a good fiction book takes you on a crazy ride on a rollercoaster, making you happy or sad, empathic or indifferent.

While being in search for some ideas to practice my data science skills, I was thinking about a way of visualizing a book with just a single image. After iterating over several ideas, I thought of creating an emotional intensity poster of a book.

## Entering "Bookster"

Although there's not much Data Science involved in this idea, it uses basic concepts of Natural Language Processing like *tokenization* and *sentiment analysis.* The idea is pretty simple - assign each word in the book a hue based on the word's sentiment and a specific tint to the hue based on the word's valence (it's intensity).

One of the challenges was to find a list of words that are labeled as having a positive/negative sentiment and assigned an intensity to them.

Luckily, there is such a list - the [AFINN](http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010):

>AFINN is a list of English words rated for valence with an integer
between minus five (negative) and plus five (positive). The words have
been manually labeled by Finn Årup Nielsen in 2009-2011.

That is exactly what is needed! Now, we need a book to try this on...

For the purpose of demonstration, let's take the first book in the series of _**"The Lord of the Rings,"** by J.R.R.Tolkien._ This is a fantasy series that is on my reading list for some time already and it is quite popular (a lot of people have at least watched the movies if not read the books) so that we could somehow interpret the results. 

**Fun fact:** According to [wikipedia](https://en.wikipedia.org/wiki/List_of_best-selling_books#List_of_best-selling_single-volume_books), _The Lord Of The Rings_ is the best-selling novel ever written, with over 150 million copies sold.

Let's follow the process step by step:

 1. First of all, we need to split the text into separate words and remove any punctuation sign. Speaking in Data Science terms, this process is called [_tokenization._](https://en.wikipedia.org/wiki/Tokenization_%28lexical_analysis%29) Depending on the language you choose you can achieve this in different ways. In this demo we will use a rough tokenization - meaning we won't split text like *you're* into *you are,* or *can't* into *can not,* etc. Also, we won't take into account the context of words. In English, the same words can have different meanings in different contexts (e.g. _cool_ can be a temperature indicator or awesomeness indicator, depending on the context). We will just remove basic punctuation signs: *, . ! ? : ; " ' ( ) [ ] -.*  This may be innacurate in some cases, but for our task this is good enough.
 2. Next, we need to assign each token a color of specific tint. We'll use <span style="color:green;">green</span> color for positive words and <span style="color:red;">red</span> color for negative words. And the stronger the valence of the word in the AFINN list is, the more intense the color will be. For the neutral words, that are not found in AFINN list, we'll assign them the white color. Now, representing each word by a 4x4 pixel square, we have the following picture:

    ![The Lord Of The Rings bookster]({{ site.url }}/assets/images/bookster-lord-of-the-rings-book-1-sparse-bigger.png)

 3. Let's remove the neutral words and leave only colored ones, so that we'll be able to better see distribution of the positive and negative words and make the squares bigger. Also let's add on mouseover a popup with the corresponding word for each square:

    <div id="lotr-book1-bookster" class="bookster-wrapper"></div>

 4. That's it! Now we can see the emotional landscape of the book. It's hard to say which color prevails though. But we can see now that the book starts on a positive note - the first three rows are mostly green, with few intense red squares. Also there's one bold green square in the beginning that stands for *"superb".* Approximately the second eighth of the book is mostly red, intense red. There's even a sequence of four consecutive *"hated"* words followed by a *"leave"* word, then a *"hated",* a *"loved"* and a *"hated"* again. The middle of the book is balanced and the end is mostly red - because of the battle that ends the first book.
 5. We can stop here, or we can make one more step and find out the actual distribution of emotional words. For this let's use a treemap diagram:
 
     <div id="lotr-book1-treemap"></div>
 
 The distribution of positive and negative words is even, confirming the rollercoaster comparison at the beginning of the post.

<div id="lotr-book1-linechart"></div>

<div>
	<div id="lotr-book1-piechart" style="width: 50%; display: inline-block;"></div>
	<div id="lotr-book1-piecharts-per-chunks" style="width: 49%; display: inline-block;"></div>
</div>

For the sake of comparison, let's see some other book[po]sters:

## Dandelion Wine

<div id="dandelion-wine-bookster" class="bookster-wrapper"></div>

The book is shorter than _The Lord of the Rings_, with 3 consecutive strong positive _"hurray"_ words closer to the middle of the book.

### Treemap

<div id="dandelion-wine-treemap"></div>

The treemap also shows an almost even distribution, but this time with +5 and -5 words as well.

<div>
	<div id="dandelion-wine-piechart" style="width: 50%; display: inline-block;"></div>
	<div id="dandelion-wine-piecharts-per-chunks" style="width: 49%; display: inline-block;"></div>
</div>

## Karlsson

And as the last one, let's see a children's book - the good old _Karlsson._

<div id="karlson-bookster" class="bookster-wrapper"></div>

Even if this is a children's book, we can see that there are negatively charged words as well. First - it would be (probably) impossible to write a totally positive book and second - life is not just positive things, and through light examples, children learn how to deal with it.

### Treemap

<div id="karlson-treemap"></div>

However, if we'll take a look at the distribution of positive vs negative emotions words, we see that there are much more positive that negative words, and there are not -4 and -5 words at all.

<div>
	<div id="karlson-piechart" style="width: 50%; display: inline-block;"></div>
	<div id="karlson-piecharts-per-chunks" style="width: 49%; display: inline-block;"></div>
</div>

## Bookster app

For those of you who would like to create their own boosters, I've created an app that can be found [here](/bookster). Just select your text of choice in .txt format and the app will do everything for you. Enjoy!

<script src="//d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script type="text/javascript" src="/assets/javascripts/bookster/bookster.js"></script>
<script type="text/javascript" src="/assets/javascripts/bookster/bookster-post.js"></script>
<!--<script type="text/javascript" src="{{ site.url }}/assets/javascripts/bookster-treemap.js"></script>-->
<style type="text/css">
	.line {
  fill: none;
  stroke: steelblue;
  stroke-width: 1.5px;
}
</style>