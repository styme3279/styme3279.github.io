---

layout: post
title: "First Isomorphism Theorem Poem"
categories: random
date: 2024-08-03 14:20:00 +0100
tags: [latex]
comments: true

---

First, I'll prove the first isomorphism theorem (in case you aren't already familiar with it).

**Statement**: If you have a group homomorphism $$\phi : A \to B$$, then let $$K = \mathrm{ker}(\phi)$$. Then we have that $$A/K \cong \mathrm{im}(\phi) \leq B$$.

**Proof**: Define $$\theta$$ on the cosets of $$K$$ in $$A$$ such that $$\theta(gK) = \phi(g)$$. This is well-defined, since if $$gK = hK$$ (as sets), then $$h^{-1}gK = K$$, so $$h^{-1}g \in K$$. Therefore, we know that $$\phi(h^{-1}g) = e$$, so $$\phi(h) = \phi(g)$$, so in particular $$\theta(hK) = \theta(gK)$$ when $$gK = hK$$. 

To show that $$\theta$$ is an isomorphism, we write $$\theta(gKhK) = \theta(ghK)$$ (since $$K$$ is a normal subgroup, $$hK=Kh$$), and $$\theta(ghK) = \phi(gh)$$ by definition, which is precisely $$\theta(gK)\theta(hK)$$.

Then we need to show $$\theta$$ is an isomorphism. We begin by showing it is surjective. If $$h \in \mathrm{im}(\phi)$$, then for some $$g \in A$$, we have $$\phi(g)=h$$. So $$\theta(gK) = \phi(g)=h$$. So $$\theta$$ is surjective. 

Then also we need to show that $$\theta$$ is injective. If $$\theta(gK) = \theta(hK)$$, then $$\phi(g) = \phi(h)$$, so $$h^{-1}g \in K$$. So 

$$\begin{align*} hK &= h \cdot h^{-1}gK\\ &= gK. \end{align*}$$

So $$\theta(hK)=\theta(gK)$$ implies $$hK = gK$$, and $$\theta$$ is injective. $$\Box$$

**Poem** (forgive the occasional slant rhyme and be generous with the meter):

We're given $$\phi$$, a map from a group $$A$$ to $$B$$<br>
And $$K$$ the elements mapping to just the identity.<br>
Then we know that $$K$$'s a normal subgroup of $$A$$<br>
So we obtain a new group when we quotient by $$K$$.<br>

Then we make a new function, $$\theta$$, with some anticipation<br>
sending cosets of $$K$$ to $$\phi$$ of some coset representation.<br>
This maps from our new group to the image of $$\phi$$,<br>
But how do we know that $$\theta$$ is well defined?<br>

If $$gK$$ and $$hK$$ are two names for the same set<br>
Consider $$h^{-1}$$ times $$g$$ and what do we get?<br>
An element that lies in $$K$$, so that when $$\phi$$'s applied<br>
we get back only the identity, and nothing besides.<br>

Then $$\phi(h^{-1})$$ times $$\phi(g)$$<br>
must also yield nothing but $$e$$.<br>
So $$\phi(h)$$ is $$\phi(g)$$, now look how $$\theta$$'s constructed,<br>
its well-definition can no longer be distrusted.<br>

But is it a homom, this function that's at least defined well?<br>
Naturally, the group operation's preserved, can't you tell?<br>
Have $$\theta(gKhK)$$ equals $$\theta(ghK)$$ by normality<br>
equals $$\phi(gh)$$, by our definition's legality.<br>

Which is $$\phi(g)$$ times $$\phi(h)$$, since $$\phi$$ is given<br>
to be exactly a group homomorphism.<br>
Then this we can write as $$\theta(gK)$$ times $$\theta(hK)$$<br>
which makes it exactly a homom, wouldn't you say?<br>

What's more, the image of $$\phi$$ must be the image of $$\theta$$<br>
I don't want to be just a definition repeater<br>
so take $$\phi(g)$$ equals $$h$$, for some $$h$$ in im($$\phi$$)<br>
then $$\theta(gK)$$ is a clear thing to try.<br>

Now if $$\theta(aK)$$ gives us just $$e$$<br>
then $$\phi(a)$$ too gives the identity<br>
so $$a$$ is in $$K$$, then $$aK$$'s just $$K$$, and we're done<br>
since now it's clear $$\theta$$ is one-to-one.<br>

And now we've reached the end of my maths lyricism<br>
Since we've shown $$\theta$$ is an isomorphism.<br>