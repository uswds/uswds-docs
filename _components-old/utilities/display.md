---
permalink: /utilities/display/
layout: styleguide
type: utility
title: Display
category: Utilities
lead: Control the position and display characteristics of an item
subnav:
- text: Display
  href: '#utility-display'
- text: Opacity
  href: '#opacity'
- text: Overflow
  href: '#overflow'
- text: Position
  href: '#position'
- text: Relative position
  href: '#relative-position'
- text: Pinning
  href: '#pinning'
- text: Z-index
  href: '#z-index'
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

utilities:
- base:         display
  var:          display
  output:       true
  responsive:   true
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         opacity
  var:          opacity
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         overflow
  var:          overflow
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         position
  var:          position
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         bottom
  var:          bottom
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         left
  var:          left
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         right
  var:          right
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         top
  var:          top
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         pin
  var:          pin
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         z
  var:          z-index
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
---

{% assign spacing_tokens = site.data.tokens.spacing %}
{% assign neg_reversed = spacing_tokens.negative.smaller
  | concat: spacing_tokens.negative.small
  | reverse %}
{% assign rp_spacing =
  site.data.tokens.special.auto_auto
  | concat: neg_reversed
  | concat: site.data.tokens.special.zero_zero
  | concat: spacing_tokens.positive.smaller
  | concat: spacing_tokens.positive.small
  | concat: site.data.tokens.special.full_percent %}

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="property utilities-property">bottom</span>
    <span class="property utilities-property">display</span>
    <span class="property utilities-property">left</span>
    <span class="property utilities-property">opacity</span>
    <span class="property utilities-property">overflow</span>
    <span class="property utilities-property">position</span>
    <span class="property utilities-property">right</span>
    <span class="property utilities-property">top</span>
    <span class="property utilities-property">z-index</span>
  </div>
</div>

<section class="utilities-section">
{% include utilities/utilities-section-title-bar.html %}

  <section class="utility" id="utility-display">
    {% include utilities/utility-title-bar.html
      title="Display"
    %}
    <section class="utility-examples">
      <div class="display-block border-1px padding-2 margin-bottom-05"><span class="utility-class">.display-block</span></div>
      <div class="display-flex border-1px padding-2 margin-bottom-05"><span class="utility-class">.display-flex</span></div>
      <div class="display-inline border-1px padding-2 margin-bottom-05"><span class="utility-class">.display-inline</span></div>
      <div class="display-inline-block border-1px padding-2 margin-bottom-05"><span class="utility-class">.display-inline-block</span></div>
      <div class="display-inline-flex border-1px padding-2 margin-bottom-05"><span class="utility-class">.display-inline-flex</span></div>
      <div class="display-none border-1px padding-2 margin-bottom-05"><span class="utility-class">.display-inline</span></div>
      <div class="display-table">
        <div class="display-table-row">
          <div class="display-table-cell border-1px padding-2"><span class="utility-class">.display-table-cell</span></div>
          <div class="display-table-cell border-1px padding-2"><span class="utility-class">.display-table-cell</span></div>
        </div>
      </div>

      <div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4 margin-bottom-1">
        <button class="usa-accordion__button" aria-controls="code-relative" aria-expanded="true">Code</button>
        <div id="code-relative" class="usa-accordion__content">
<div markdown="1" class="font-mono-xs">
{% highlight html linenos %}
<div class="display-block border-1px ...">.display-block</div>
<div class="display-flex border-1px ...">.display-flex</div>
<div class="display-inline border-1px ...">.display-inline</div>
<div class="display-inline-block border-1px ...">.display-inline-block</div>
<div class="display-inline-flex border-1px ...">.display-inline-flex</div>
<div class="display-none border-1px ...">.display-inline</div>
<div class="display-table">
<div class="display-table-row">
  <div class="display-table-cell border-1px ...">.display-table-cell</div>
  <div class="display-table-cell border-1px ...">.display-table-cell</div>
</div>
{% endhighlight %}
</div>
        </div>
      </div>
    </section><!-- utility-examples -->
  </section><!-- utility -->

  <section class="utility" id="opacity">
    {% include utilities/utility-title-bar.html
      title="Opacity"
    %}

    <section class="utility-examples">
      {% for item in site.data.tokens.opacity %}
        {% assign thisWrap =            false %}
        {% assign thisUtilityClasses =  nil %}
        {% assign thisValueClasses =    nil %}
        {% assign thisExampleClasses =  'grid-col-6' %}
        {% capture thisClass %}
          .opacity-{{ item.token }}
        {% endcapture %}
        {% capture thisValue %}
          {{ item.value }}
        {% endcapture %}
        {% capture thisExample %}
          <div class="bg-primary grid-row radius-sm height-4 padding-x-1 flex-align-center">
            <div class="grid-col opacity-{{ item.token }} height-05 bg-white radius-left-pill"></div>
            <div class="grid-col opacity-{{ item.token }} height-05 bg-black radius-right-pill"></div>
          </div>
        {% endcapture %}
        {% include utilities/utility-example.html
          wrap = thisWrap
          utility = thisClass
          utilityClasses = thisUtilityClasses
          value = thisValue
          valueClasses = thisValueClasses
          example = thisExample
          exampleClasses = thisExampleClasses
        %}
      {% endfor %}
    </section>
  </section>

  <section class="utility" id="overflow">
    {% include utilities/utility-title-bar.html
      title="Overflow"
    %}

    <section class="utility-examples">

      <p class="utility-note"><strong>Note:</strong> <a href="http://www.w3.org/TR/css3-box/#overflow-x">Per the W3C overflow spec:</a> The computed values of ‘overflow-x’ and ‘overflow-y’ are the same as their specified values, except that some combinations with ‘visible’ are not possible: if one is specified as ‘visible’ and the other is ‘scroll’ or ‘auto’, then ‘visible’ is set to ‘auto’. The computed value of ‘overflow’ is equal to the computed value of ‘overflow-x’ if ‘overflow-y’ is the same; otherwise it is the pair of computed values of ‘overflow-x’ and ‘overflow-y’.</p>

      {% assign overflowTokens = 'visible, hidden, scroll, auto'
        | split: ', ' %}
      {% for token in overflowTokens %}
        {% assign thisWrap =            false %}
        {% assign thisUtilityClasses =  nil %}
        {% assign thisValueClasses =    nil %}
        {% assign thisExampleClasses =  'padding-right-3' %}
        {% capture thisClass %}
          .overflow-{{ token }}
        {% endcapture %}
        {% capture thisValue %}
          {{ token }}
        {% endcapture %}
        {% capture thisExample %}
          <div class="overflow-{{ token }} square-card border-1px border-secondary-light padding-2 margin-y-1">
            <div class="square-card bg-primary-lighter"></div>
          </div>
        {% endcapture %}
        {% include utilities/utility-example.html
          wrap = thisWrap
          utility = thisClass
          utilityClasses = thisUtilityClasses
          value = thisValue
          valueClasses = thisValueClasses
          example = thisExample
          exampleClasses = thisExampleClasses
        %}
        {% capture thisClass %}
          .overflow-x-{{ token }}
        {% endcapture %}
        {% capture thisExample %}
          <div class="overflow-x-{{ token }} square-card border-1px border-secondary-light padding-2 margin-y-1">
            <div class="square-card bg-primary-lighter"></div>
          </div>
        {% endcapture %}
        {% include utilities/utility-example.html
          wrap = thisWrap
          utility = thisClass
          utilityClasses = thisUtilityClasses
          value = thisValue
          valueClasses = thisValueClasses
          example = thisExample
          exampleClasses = thisExampleClasses
        %}
        {% capture thisClass %}
          .overflow-y-{{ token }}
        {% endcapture %}
        {% capture thisExample %}
          <div class="overflow-y-{{ token }} square-card border-1px border-secondary-light padding-2 margin-y-1">
            <div class="square-card bg-primary-lighter"></div>
          </div>
        {% endcapture %}
        {% include utilities/utility-example.html
          wrap = thisWrap
          utility = thisClass
          utilityClasses = thisUtilityClasses
          value = thisValue
          valueClasses = thisValueClasses
          example = thisExample
          exampleClasses = thisExampleClasses
        %}

      {% endfor %}
    </section><!-- utility-examples -->
  </section><!-- utility -->

  <section class="utility" id="position">
    {% include utilities/utility-title-bar.html
      title="Position"
    %}

    <section class="utility-examples">
      <div class="grid-row grid-gap">

        <div class="grid-col-12">
          <div class="utility-example-container">
            <p class="margin-0 font-lang-2xs"><span class="utility-class">.position-absolute</span></p>
          </div>
        </div>
        <div class="grid-col-12">
          <div class="utility-example-container">
            <p class="margin-0 font-lang-2xs"><span class="utility-class">.position-fixed</span></p>
          </div>
        </div>
        <div class="grid-col-12">
          <div class="utility-example-container">
            <p class="margin-0 font-lang-2xs"><span class="utility-class">.position-relative</span></p>
          </div>
        </div>
        <div class="grid-col-12">
          <div class="utility-example-container">
            <p class="margin-0 font-lang-2xs"><span class="utility-class">.position-static</span></p>
          </div>
        </div>
        <div class="grid-col-12">
          <div class="utility-example-container">
            <p class="margin-0 font-lang-2xs"><span class="utility-class">.position-sticky</span></p>
          </div>
        </div>
      </div>

      <h4 class="utility-examples-title">Example: Relative, static, and absolute positioning</h4>
      <div class="grid-row grid-gap margin-top-2">
        <div class="tablet:grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 margin-bottom-2 radius-md overflow-hidden">
            <div class="position-static height-card border-1px border-secondary-light padding-2 text-ink"><p class="margin-0 font-lang-2xs text-ink"><span class="utility-class text-ink">.position-static</span></p>
              <div class="position-absolute bottom-0 left-0 bg-secondary-light padding-2 text-ink is-inverse">
                <p class="margin-0 font-lang-2xs"><span class="utility-class">.position-absolute</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="tablet:grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 margin-bottom-2 radius-md overflow-hidden">
            <div class="position-relative height-card border-1px border-secondary-light padding-2 text-ink"><p class="margin-0 font-lang-2xs text-ink"><span class="utility-class text-ink">.position-relative</span></p>
              <div class="position-absolute bottom-0 left-0 bg-secondary-light padding-2 text-ink is-inverse">
                <p class="margin-0 font-lang-2xs"><span class="utility-class">.position-absolute</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-0">
        <button class="usa-accordion__button" aria-controls="code-static-relative" aria-expanded="true">Code</button>
        <div id="code-static-relative" class="usa-accordion__content">
<div markdown="1">
{% highlight html linenos %}
<div class="position-relative">
  <div class="position-static">
    <div class="position-absolute bottom-0 left-0">
      .position-absolute
    </div>
  </div>
</div>

<div class="position-relative">
  <div class="position-relative">
    <div class="position-absolute bottom-0 left-0">
      .position-absolute
    </div>
  </div>
</div>
{% endhighlight %}
</div>
        </div><!-- accordion-content -->
      </div><!-- code-sample -->


      <h4 class="utility-examples-title">Example: Fixed positioning</h4>
      <div class="radius-md overflow-hidden margin-y-2 border-1px border-secondary-light">
        <div class="position-relative height-mobile">
          <div class="position-absolute pin-top bg-secondary-light z-100 padding-2">
            <span class="utility-class">.position-fixed</span>
          </div>
          <div class="position-absolute pin-all overflow-auto padding-top-7 padding-x-3 text-ink">
            <div class="measure-6">
              <p class="text-ink"><span class="display-inline-block bg-ink text-white is-inverse padding-x-1 font-lang-2xs text-bold">Scroll me!</span></p>
              <p class="line-height-sans-6">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <p class="line-height-sans-6">I found Simon Wheeler dozing comfortably by the bar-room stove of the old, dilapidated tavern in the ancient mining camp of Angel's, and I noticed that he was fat and bald-headed, and had an expression of winning gentleness and simplicity upon his tranquil countenance. He roused up and gave me good-day. I told him a friend of mine had commissioned me to make some inquiries about a cherished companion of his boyhood named Leonidas W. Smiley Rev. Leonidas W. Smiley a young minister of the Gospel, who he had heard was at one time a resident of Angel's Camp. I added that, if Mr. Wheeler could tell me any thing about this Rev. Leonidas W. Smiley, I would feel under many obligations to him.</p>
              <p class="line-height-sans-6">Simon Wheeler backed me into a corner and blockaded me there with his chair, and then sat me down and reeled off the monotonous narrative which follows this paragraph. He never smiled, he never frowned, he never changed his voice from the gentle-flowing key to which he tuned the initial sentence, he never betrayed the slightest suspicion of enthusiasm; but all through the interminable narrative there ran a vein of impressive earnestness and sincerity, which showed me plainly that, so far from his imagining that there was any thing ridiculous or funny about his story, he regarded it as a really important matter, and admired its two heroes as men of transcendent genius in finesse. To me, the spectacle of a man drifting serenely along through such a queer yarn without ever smiling, was exquisitely absurd. As I said before, I asked him to tell me what he knew of Rev. Leonidas W. Smiley, and he replied as follows. I let him go on in his own way, and never interrupted him once:</p>
              <p class="line-height-sans-6">There was a feller here once by the name of Jim Smiley, in the winter of '49 or may be it was the spring of '50 I don't recollect exactly, somehow, though what makes me think it was one or the other is because I remember the big flume wasn't finished when he first came to the camp; but any way, he was the curiosest man about always betting on any thing that turned up you ever see, if he could get any body to bet on the other side; and if he couldn't, he'd change sides. Any way that suited the other man would suit him any way just so's he got a bet, he was satisfied. But still he was lucky, uncommon lucky; he most always come out winner. He was always ready and laying for a chance; there couldn't be no solittry thing mentioned but that feller'd offer to bet on it, and -take any side you please, as I was just telling you. If there was a horse-race, you'd find him flush, or you'd find him busted at the end of it; if there was a dog-fight, he'd bet on it; if there was a cat-fight, he'd bet on it; if there was a chicken-fight, he'd bet on it; why, if there was two birds setting on a fence, he would bet you which one would fly first; or if there was a camp-meeting, he would be there reg'lar, to bet on Parson Walker, which he judged to be the best exhorter about here, and so he was, too, and a good man. If he even seen a straddle-bug start to go anywheres, he would bet you how long it would take him to get wherever he was going to, and if you took him up, he would foller that straddle-bug to Mexico but what he would find out where he was bound for and how long he was on the road. Lots of the boys here has seen that Smiley, and can tell you about him. Why, it never made no difference to him he would bet on any thing the dangdest feller. Parson Walker's wife laid very sick once, for a good while, and it seemed as if they warn's going to save her; but one morning he come in, and Smiley asked how she was, and he said she was considerable better thank the Lord for his inftnit mercy and coming on so smart that, with the blessing of Providence, she'd get well yet; and Smiley, before he thought, says, "Well, I'll risk two- and-a-half that she don't, any way."</p>
            </div>
          </div>
        </div>
      </div>
      <div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-2">
        <button class="usa-accordion__button" aria-controls="code-fixed" aria-expanded="true">Code</button>
        <div id="code-fixed" class="usa-accordion__content">
<div markdown="1">
{% highlight html linenos %}
<div class="position-relative">
  <div class="position-fixed pin-top bg-secondary-light">
    .position-fixed
  </div>
</div>
{% endhighlight %}
</div>
        </div><!-- accordion-content -->
      </div><!-- code-sample -->

      <h4 class="utility-examples-title">Example: Sticky positioning</h4>
      <div class="height-mobile position-relative overflow-hidden border border-secondary-light radius-md">
        <div class="pin-all overflow-scroll padding-x-2">
          <div>
            <div class="position-sticky top-0 bg-secondary-light padding-x-2 padding-y-1 text-bold text-ink display-flex flex-justify">Sticky Heading 1 <span class="utility-class text-normal">.position-sticky</span></div>
            <p class="text-ink padding-x-2"><span class="display-inline-block bg-ink text-white is-inverse padding-x-1 font-lang-2xs text-bold">Scroll me!</span></p>
            <p class="line-height-sans-6 padding-x-2">Thish-yer Smiley had a mare the boys called her the fifteen- minute nag, but that was only in fun, you know, because, of course, she was faster than that and he used to win money on that horse, for all she was so slow and always had the asthma, or the distemper, or the consumption, or something of that kind. They used to give her two or three hundred yards start, and then pass her under way; but always at the fag-end of the race she'd get excited and desperate- like, and come cavorting and straddling up, and scattering her legs around limber, sometimes in the air, and sometimes out to one side amongst the fences, and kicking up m-o-r-e dust, and raising m-o-r-e racket with her coughing and sneezing and blowing her nose and always fetch up at the stand just about a neck ahead, as near as you could cipher it down.</p>
          </div>
          <div>
            <div class="position-sticky top-0 bg-gold padding-x-2 padding-y-1 text-bold text-ink display-flex flex-justify">Sticky Heading 2 <span class="utility-class text-normal">.position-sticky</span></div>
            <p class="line-height-sans-6 padding-x-2">And he had a little small bull pup, that to look at him you'd think he wan's worth a cent, but to set around and look ornery, and lay for a chance to steal something. But as soon as money was up on him, he was a different dog; his underjaw'd begin to stick out like the fo'castle of a steamboat, and his teeth would uncover, and shine savage like the furnaces. And a dog might tackle him, and bully- rag him, and bite him, and throw him over his shoulder two or three times, and Andrew Jackson which was the name of the pup Andrew Jackson would never let on but what he was satisfied, and hadn't expected nothing else and the bets being doubled and doubled on the other side all the time, till the money was all up; and then all of a sudden he would grab that other dog jest by the j'int of his hind leg and freeze on it not chew, you understand, but only jest grip and hang on till they thronged up the sponge, if it was a year. Smiley always come out winner on that pup, till he harnessed a dog once that didn't have no hind legs, because they'd been sawed off by a circular saw, and when the thing had gone along far enough, and the money was all up, and he come to make a snatch for his pet bolt, he saw in a minute how he'd been imposed on, and how the other dog had him in the door, so to speak, and he 'peered sur- prised, and then he looked sorter discouraged-like, and didn't try no more to win the fight, and so he got shucked out bad. He give Smiley a look, as much as to say his heart was broke, and it was his fault, for putting up a dog that hadn't no hind legs for him to take bolt of, which was his main dependence in a fight, and then he limped off a piece and laid down and died. It was a good pup, was that Andrew Jackson, and would have made a name for hisself if he'd lived, for the stuff was in him, and he had genius I know it, because he hadn't had no opportunities to speak of, and it don't stand to reason that a dog could make such a fight as he could under them circumstances, if he hadn't no talent. It always makes me feel sorry when I think of that last fight of his'n, and the way it turned out.</p>
          </div>
          <div>
            <div class="position-sticky top-0 bg-yellow padding-x-2 padding-y-1 text-bold text-ink display-flex flex-justify">Sticky Heading 3 <span class="utility-class text-normal">.position-sticky</span></div>
            <p class="line-height-sans-6 padding-x-2">Well, thish-yer Smiley had rat-tarriers, and chicken cocks, and tom- cats, and all of them kind of things, till you couldn't rest, and you couldn't fetch nothing for him to bet on but he'd match you. He ketched a frog one day, and took him home, and said he cal'klated to edercate him; and so he never done nothing for three months but set in his back yard and learn that frog to jump. And you bet you he did learn him, too. He'd give him a little punch behind, and the next minute you'd see that frog whirling in the air like a doughnut see him turn one summerset, or may be a couple, if he got a good start, and come down flat-footed and all right, like a cat. He got him up so in the matter of catching flies, and kept him in practice so constant, that he'd nail a fly every time as far as he could see him. Smiley said all a frog wanted was education, and he could do most any thing and I believe him. Why, I've seen him set Dan'l Webster down here on this floor Dan'l Webster was the name of the frog and sing out, "Flies, Dan'l, flies!" and quicker'n you could wink, he'd spring straight up, and snake a fly off'n the counter there, and flop down on the floor again as solid as a gob of mud, and fall to scratching the side of his head with his hind foot as indifferent as if he hadn't no idea he'd been doin' any more'n any frog might do. You never see a frog so modest and straightforward as he was, for all he was so gifted. And when it come to fair and square jumping on a dead level, he could get over more ground at one straddle than any animal of his breed you ever see. Jumping on a dead level was his strong suit, you understand; and when it come to that, Smiley would ante up money on him as long as he had a red. Smiley was monstrous proud of his frog, and well he might be, for fellers that had traveled and been everywheres, all said he laid over any frog that ever they see.</p>
          </div>
          <div>
            <div class="position-sticky top-0 bg-orange padding-x-2 padding-y-1 text-bold text-ink display-flex flex-justify">Sticky Heading 4 <span class="utility-class text-normal">.position-sticky</span></div>
            <p class="line-height-sans-6 padding-x-2">Well, Smiley kept the beast in a little lattice box, and he used to fetch him down town sometimes and lay for a bet. One day a feller a stranger in the camp, he was come across him with his box, and says:</p>
            <p class="line-height-sans-6 padding-x-2">"What might it be that you've got in the box?"</p>
            <p class="line-height-sans-6 padding-x-2">And Smiley says, sorter indifferent like, "It might be a parrot, or it might be a canary, may be, but it an't it's only just a frog."</p>
            <p class="line-height-sans-6 padding-x-2">And the feller took it, and looked at it careful, and turned it round this way and that, and says, "H'm so 'tis. Well, what's he good for?"</p>
            <p class="line-height-sans-6 padding-x-2">"Well," Smiley says, easy and careless, "He's good enough for one thing, I should judge he can outjump any frog in Calaveras county."</p>
            <p class="line-height-sans-6 padding-x-2">The feller took the box again, and took another long, particular look, and give it back to Smiley, and says, very deliberate, "Well, I don't see no p'ints about that frog that's any better'n any other frog."</p>
          </div>
        </div>
      </div>
      <div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-2 margin-bottom-1">
        <button class="usa-accordion__button" aria-controls="code-sticky" aria-expanded="true">Code</button>
        <div id="code-sticky" class="usa-accordion__content">
<div markdown="1">
{% highlight html linenos %}
<div class="position-relative overflow-scroll">
  <div>
    <div class="position-sticky bg-secondary-light">Sticky Heading 1</div>
    <p>...</p>
  </div>
  <div>
    <div class="position-sticky bg-gold">Sticky Heading 2</div>
    <p>...</p>
  </div>
  <div>
    <div class="position-sticky bg-yellow">Sticky Heading 3</div>
    <p>...</p>
  </div>
  <div>
    <div class="position-sticky bg-orange">Sticky Heading 4</div>
    <p>...</p>
  </div>
</div>
{% endhighlight %}
</div>
        </div>
      </div>
    </section>
  </section>

  <section class="utility" id="relative-position">
    {% include utilities/utility-title-bar.html
      title="Relative position"
      property="top, bottom, left, right"
      var="top"
    %}

    <section class="utility-examples">
      {% assign rpSides = 'top, right, bottom, left'
        | split: ', ' %}
      {% for side in rpSides %}
        {% for item in rp_spacing %}
          {% assign thisWrap =            false %}
          {% assign thisUtilityClasses =  nil %}
          {% assign thisValueClasses =    nil %}
          {% assign thisExampleClasses =  nil %}
          {% capture thisClass %}
            .{{ side }}-{{ item.token }}
          {% endcapture %}
          {% capture thisValue %}
            {{ item.value }}
          {% endcapture %}
          {% capture thisExample %}
          {% endcapture %}
          {% include utilities/utility-example.html
            wrap = thisWrap
            utility = thisClass
            utilityClasses = thisUtilityClasses
            value = thisValue
            valueClasses = thisValueClasses
            example = nil
            exampleClasses = thisExampleClasses
          %}
        {% endfor %}
      {% endfor %}
    </section>
  </section>

  <section class="utility" id="pinning">
    {% include utilities/utility-title-bar.html
      title="Pin"
      property=false
    %}

    <section class="utility-examples">
      <p class="utility-note margin-bottom-3">The <code>pin</code> utilities position an item absolutely to the specified side.</p>
      <div class="grid-row grid-gap">
        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
            <div class="pin-top bg-secondary-light padding-2 text-ink is-inverse">
              <div class="margin-0 font-lang-2xs"><span class="utility-class">.pin-top</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
            <div class="pin-bottom bg-secondary-light padding-2 text-ink is-inverse">
              <div class="margin-0 font-lang-2xs"><span class="utility-class">.pin-bottom</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
            <div class="pin-left bg-secondary-light padding-2 text-ink is-inverse">
              <div class="margin-0 font-lang-2xs"><span class="utility-class">.pin-left</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
            <div class="pin-right bg-secondary-light padding-2 text-ink is-inverse">
              <div class="margin-0 font-lang-2xs"><span class="utility-class">.pin-right</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
            <div class="pin-x bg-secondary-light padding-2 text-ink is-inverse">
              <div class="margin-0 font-lang-2xs"><span class="utility-class">.pin-x</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
            <div class="pin-y bg-secondary-light padding-2 text-ink is-inverse">
              <div class="margin-0 font-lang-2xs"><span class="utility-class">.pin-y</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
            <div class="pin-all bg-secondary-light padding-2 text-ink is-inverse">
              <div class="margin-0 font-lang-2xs"><span class="utility-class">.pin-all</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
            <div class="pin-none bg-secondary-light padding-2 text-ink is-inverse">
              <div class="margin-0 font-lang-2xs"><span class="utility-class">.pin-none</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
            <div class="pin-top pin-x bg-secondary-light padding-2 text-ink is-inverse">
              <div class="margin-0 font-lang-2xs"><span class="utility-class">.pin-top.pin-x</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
            <div class="pin-bottom pin-x bg-secondary-light padding-2 text-ink is-inverse">
              <div class="margin-0 font-lang-2xs"><span class="utility-class">.pin-bottom.pin-x</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
            <div class="pin-left pin-y bg-secondary-light padding-2 text-ink is-inverse">
              <div class="margin-0 font-lang-2xs"><span class="utility-class">.pin-left.pin-y</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
            <div class="pin-right pin-y bg-secondary-light padding-2 text-ink is-inverse">
              <div class="margin-0 font-lang-2xs"><span class="utility-class">.pin-right.pin-y</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>

  <section class="utility z-0 position-relative" id="z-index">
    {% include utilities/utility-title-bar.html
      title="Z-index"
    %}
    <section class="utility-examples position-relative padding-bottom-1">
      <div class="bg-white border border-ink radius-lg width-card-lg padding-2  minh-10 margin-left-0 display-flex flex-justify flex-align-start z-auto">
        <span class="utility-class">.z-auto</span>
        <span class="utility-value">auto</span>
      </div>
      <div class="bg-white border border-ink radius-lg width-card-lg padding-2 padding-top-5 minh-10 margin-left-0 display-flex flex-justify flex-align-start margin-top-neg-3 z-top position-relative shadow-3">
        <span class="utility-class">.z-top</span>
        <span class="utility-value">99999</span>
      </div>
      <div class="bg-gray-1 border border-ink radius-lg width-card-lg padding-2 padding-top-5 minh-10 margin-left-0 display-flex flex-justify flex-align-start margin-top-neg-3 z-500 position-relative shadow-3">
        <span class="utility-class">.z-500</span>
        <span class="utility-value">500</span>
      </div>
      <div class="bg-gray-10 border border-ink radius-lg width-card-lg padding-2 padding-top-5 minh-10 margin-left-0 display-flex flex-justify flex-align-start margin-top-neg-3 z-400 position-relative shadow-3">
        <span class="utility-class">.z-400</span>
        <span class="utility-value">400</span>
      </div>
      <div class="bg-gray-30 border border-ink radius-lg width-card-lg padding-2 padding-top-5 minh-10 margin-left-0 display-flex flex-justify flex-align-start margin-top-neg-3 z-300 position-relative shadow-3">
        <span class="utility-class">.z-300</span>
        <span class="utility-value">300</span>
      </div>
      <div class="bg-gray-50 border border-ink radius-lg width-card-lg padding-2 padding-top-5 minh-10 margin-left-0 display-flex flex-justify flex-align-start margin-top-neg-3 z-200 position-relative shadow-3">
        <span class="utility-class">.z-200</span>
        <span class="utility-value">200</span>
      </div>
      <div class="bg-gray-70 border border-ink radius-lg width-card-lg padding-2 padding-top-5 minh-10 margin-left-0 display-flex flex-justify flex-align-start margin-top-neg-3 z-100 position-relative shadow-3">
        <span class="utility-class">.z-100</span>
        <span class="utility-value">400</span>
      </div>
      <div class="bg-gray-90 border border-ink radius-lg width-card-lg padding-2 padding-top-5 minh-10 margin-left-0 display-flex flex-justify flex-align-start margin-top-neg-3 z-0 position-relative shadow-3">
        <span class="utility-class">.z-0</span>
        <span class="utility-value">0</span>
      </div>
      <div class="bg-black border border-ink radius-lg width-card-lg padding-2 padding-top-5 minh-10 margin-left-0 display-flex flex-justify flex-align-start margin-top-neg-3 z-bottom position-relative shadow-3">
        <span class="utility-class">.z-bottom</span>
        <span class="utility-value">-100</span>
      </div>
    </section>
  </section>
</section>

<section id="utility-mixins" class="padding-top-4">
  <h2 class="site-h2 margin-y-0">Utility mixins</h2>
  {% include utilities/utility-mixin-intro.html %}

  <table class="usa-table--borderless site-table-responsive site-table-simple">
    <thead>
      <tr>
        <th scope="col" class="tablet:maxw-card-lg">Utility</th>
        <th scope="col">Mixin</th>
        <th scope="col">Example</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .display-<code>value</code>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-display(<code>value</code>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-display('block')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .opacity-<a href="{{ site.baseurl }}/design-tokens/opacity/" class="token">opacity</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-opacity(<a href="{{ site.baseurl }}/design-tokens/opacity/" class="token">opacity</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-opacity(0)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .overflow-<code>modifier</code>-<code>value</code>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-overflow-<code>modifier</code>(<code>value</code>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-overflow-x('hidden')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .position-<code>value</code>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-position(<code>value</code>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-position('relative')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .bottom-<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-bottom(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-bottom('auto')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .left-<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-left(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-left(-2px)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .right-<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-right(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-right('full')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .top-<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-top(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-top('05')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .pin-<code>value</code>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-pin-<code>value</code>
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-pin-x
          </span>
        </td>
      </tr>
    </tbody>
  </table>
  {% include utilities/utility-mixin-using.html %}
</section>

<section id="advanced-settings" class="padding-top-4">
  <h2 class="site-h2 margin-y-0">Advanced settings</h2>

  {% include utilities/responsive-variants.html %}
  {% include utilities/state-variants.html %}
  {% include utilities/output-control.html %}

  <section class="utilities-section margin-top-6">
    {% include utilities/values-intro.html %}

    <aside class="example border-left-05 border-secondary-light padding-left-105 margin-top-2">
      <h4 class="font-lang-2xs margin-top-0 margin-bottom-05">Example</h4>
<pre class="font-mono-xs margin-0 padding-0 bg-transparent">
$top-palettes: (
  'palette-units-system-smaller',
  'palette-units-system-smaller-negative', // note: no trailing comma
);
</pre>
    <h4 class="font-lang-2xs margin-top-2 margin-bottom-05">Output</h4>
<pre class=" font-mono-xs margin-0 padding-0 bg-transparent">
.top-1px     { margin: 1px; }
.top-2px     { margin: 2px; }
.top-neg-1px { margin: -1px; }
.top-neg-2px { margin: -2px; }
</pre>
    </aside>

    {% include utilities/standard-palettes.html %}
    {% include utilities/spacing-palettes.html %}

  </section>
</section>
