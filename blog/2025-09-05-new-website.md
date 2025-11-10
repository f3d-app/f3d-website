---
slug: new-website
title: New website!
authors: [mwestphal, meak]
tags: [website]
---

Welcome to the new website!

<!-- truncate -->

It is time to say goodbye to our technical albeit beloved markdown based website that we have been rocking
since we moved to github 4 years ago.

This is a needed change as F3D grows and we want to show case more and have a more flexible website.
Actually, this change is overdue, but we are more likely to spend some time on the new gaussian splatting improvements
or mentoring new contributors than doing actual web development, so we are kinda late on this.

That being said, why do we need this change?

Well, for starters, our online doc has always been about the latest master, built automatically from the sources.
This is great, we can always check the website a few minutes after merging, BUT, it means that users do not have access to
the documentation of the release they are using.
A few users got very confused looking for options that did not exists and documentation about yet to release features.
So here we are, versionned documentation!
Just pick whichever version you are using on the top-right corner and you are good to go!

But that means that, if we support versions, which part of the website should NOT be versioned?
And how do we generate that?

So we had to design a whole new website which is not generated from the sources in order to show unversioned:

 - Landing page
- Gallery
- Download page
- Donation page
- Blog
- Contribution guide

And if we create proper web pages for these, can we not integrate some juicy javascript into it?
Yes we can! We took some care to improve all these pages until it felt just right!

You will also have the chance to occasionally read what F3D maintainers want to share.

The website is also open source, the code can be found [here](https://github.com/f3d-app/f3d-website).
We are happy to review modification to any part of the website if you are a web developer. Also, if you are a technical writer, feel free to reach out in order to contribute by submitting blog articles too!

Special thanks to [Mariami](https://www.linkedin.com/in/mariami-zedginidze/) for the initial design and the great color scheme!

Take a look and let us know what you think!
