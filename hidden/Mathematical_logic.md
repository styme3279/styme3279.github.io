---
layout: page
title: Mathematical Logic
permalink: /page/Mathematical_logic/
nav_exclude: true
---
Here are some resources for learning more about mathematical logic. I took on the order of 4 courses on this field at Cambridge (3 of which were in Part III), and fortunately got the opportunity to write an essay on a topic in the field (try to imagine the nichest topic that could possibly exist in one of the nichest fields of mathematics, and go *even nicher*!) In any case, I'm naively hopeful that someone might take an interest in this page to some degree, since I spent approximately a year's worth of rather intense academic time working on these things. Oh well, I guess it pales in comparison to a PhD.

## Logic and Set Theory

The first mathematical logic course I took was [Logic and Set Theory](/pdf_files/Logic_and_Set_Theory_NotMine.pdf), in Part II. This was both my favourite and best course that year. Unfortunately, I was not taking $$\LaTeX$$ notes then, but the online notes follow the course content reasonably well. I'll give some thoughts and highlights below.

### Compactness/Completeness

I think the completeness and compactness theorems are definitely up there (although, the analogy between the compactness theorem of mathematical logic, and compactness in topology is the pure maths equivalent of the [Entropy](https://en.wikipedia.org/wiki/Entropy)/[Entropy](https://en.wikipedia.org/wiki/Entropy_(information_theory)) distinction, if you want to know the rough reason for this naming 'confusion', look at [this](https://en.wikipedia.org/wiki/Stone%27s_representation_theorem_for_Boolean_algebras)). There's something so powerful about the fact that proofs *have* to be finite, that should be obvious from the moment you start learning what proofs are, but doesn't hit you over the head until you understand the compactness theorem. It's also just incredibly cool that Gödel showed we can always build a complete model for any consistent theory. At first glance, this theorem seemed more important than Gödel's incompleteness theorems, but later when I took Set Theory courses I realized that was not the case, and the incompleteness theorems have claimed their place rightfully (though the completeness theorem remainds underrated).

### Ordinals
As a first introduction to ordinals, this is heavy-going but great. A particular highlight would be the proof that the collection of ordinals don't form a set, and Hartogs' Lemma. Also this forms the basis of almost all future set theory, and serves a great foundation to work from.

### Cardinals
The course is pretty light on cardinals. It basically tells you what an aleph number is, and how addition and multiplication differs from ordinals. It's argubaly justified, since it's hard to say anything about cardinals beyond the obvious things (thanks a lot $$2^{\aleph_{0}}$$). Although I feel like König's theorem probably could have been introduced and proven, especially if you're gonna mention cardinal exponentiation, since that's just about the only thing we *can* say about cardinal exponentiation.

### Basic Set Theory
If you want to really *understand* the axioms of $$\mathrm{ZFC}$$, this is probably the way to go. If you want additional philosophical information about the axioms, the obvious resource is Maddy's [*Believing the Axioms*](https://www.cs.umd.edu/~gasarch/BLOGPAPERS/belaxioms1.pdf). 

A cool unexpectedly useful result is probably Mostowski's collapsing theorem. It looks like a  and I suppose $$\in$$-induction (but this is really the axiom of foundation in a trenchcoat).

## Model Theory and Non-Classical Logic

The second mathematical logic course I took was in Part III. Overall I enjoyed this course a decent amount, and it made me think that maybe model theory was the thing about mathematical logic I liked most (this changed after I did more set theory, although I still enjoy model theory). It was by far the most algebraically-flavoured mathematical logic course. I did take $$\LaTeX$$ notes for this course, but they're very scruffy. [Here they are](/pdf_files/Model%20Theory%20and%20Nonclassical%20Logics.pdf)

### Quantifier-free sentences

Quantifier-free sentences appear early and often in this course. Upon first seeing them, I had no idea how pivotal they would end up being to the rest of (the model theory section of) this course. It remains very unintiuitive to me that for any structure $$M$$ in model theory, any superstructure or substructure of $$M$$ must satisfy the same quantifier-free sentences, but it's true!

### Quantifier Elimination

So much on quantifier elimination. Don't get me wrong, I get it, but the big theorem on equivalent statements to quantifier elimination has so many different, seemingly often irrelevant details. For example, I once looked up what kinds of structures don't have the *amalgamation property*, and apparently it's been challenging to even find such structures. I think this provides some justification for the view of mathematical logic as messing around with arbitrary definitions that rarely, if ever, occur in mathematical structures we would actually care about. Nevertheless, eliminating quantifiers is important, and since model-completeness isn't quite enough, we have to deal with the amalgamation property.

### Tarski-Vaught, the method of diagrams, and Skolemisation

The Tarski-Vaught test was very useful so deserves a mention. I also enjoyed that the majority of a proof of such a useful test is just messing around with the details of establishing that $$M$$ is indeed the domain of a structure $$\mathcal{M}$$.

The method of diagrams was also very useful, one of the few results that actually got brought up in another course (even if it was another mathematical logic course). 

Finally, Skolemisation was really fundamental to my essay. It's another thing that feels very useless initially, but you quickly realize how useful it can be. Whether for proving the downwards Löwenheim-Skolem theorem, or for the Ehrenfeucht-Mostowski functor (and thereby getting structures with huge automorphism groups), just building a bigger language that has constants corresponding to every sentence is an simple idea that goes a long way.

### Ultraproducts

This was possibly my single favourite part of the course. It would be difficult to do it justice without delving into too many technical details. The lecturer also taught this in an interesting parliamentary analogy, where we want to build a new structure out of many other structures, and we want a "Bill" (i.e. some sentence $$\varphi$$) to pass (i.e. hold in the new structure) if enough of the smaller structures "vote" for it. This analogy was made even more interesting by a problem on the second (or possibly third, I don't quite remember) example sheet, where you can actually get around [Arrow's impossibility theorem](https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem) if you have infinitely many voters, since Arrow's impossibility theorem boils down to any [*ultrafilter*](https://en.wikipedia.org/wiki/Ultrafilter) necessarily being *principal* (i.e. there is a *dictator voter*) on a finite set. However, if you assume the axiom of choice, then with an infinite set of voters, you can actually construct a *nonprincipal ultrafilter*, and thereby get around the impossibility result. Łoś' theorem, and that it implies the axiom of choice when taken together with the Boolean Prime Ideal Theorem was also a highlight.

### Types

No, not those kinds of types, they'll come later. Learning about these were relatively cool, since they're important for [non-standard analysis](https://en.wikipedia.org/wiki/Nonstandard_analysis). Also this section explains the link between compactness in logic and compactness in topology via the Stone space (which is a compact, totally disconnected topological space on the set of $$n$$ types of $$\cal{M}$$ over $$A$$). Also Shelah's omitting types theorem is a cool idea.

### Indiscernibles

I suppose I should like this section, since it was *so* important for my essay. I like the idea of indiscernibles, but did feel like the qualities of the Ehrenfeucht-Mostowski functor weren't explained in the clearest way here (I wasn't totally aware until e.g. the third reading what we were assuming and what we were even trying to prove, but to some extent this is a skill issue). From what I can remember it felt a little rushed

### Non-Classical Logic

#### Intuitionistic Logic

This was super interesting. Diaconescu's theorem was great: it's surprising but retrospectively totally obvious that the Axiom of Choice will give you the law of the excluded middle if you assume it in an (otherwise) intuitionistic set theory.

#### Simply-typed Lambda Calculus

I was glad to get to learn about this in a proper course in Cambridge, as opposed to needing to work in formalisation outside of courses to get any information on this. It was interesting to learn about $$\beta$-reduction and all the typability results. But fundamentally the most interesting thing was getting a feel for the intuition that proofs in intuitionistic logic *really are* the same thing as programmes which take in premises and output proofs of the conclusion.

#### Generalized completeness theorem

This section basically explains how the completeness theorem all the way back in Logic and Set Theory is actually a special case of a general theorem on Heyting algebras (where the law of the excluded middle forces the Hyeting algebra to be a Boolean algebra, and then everything becomes way easier). So we can get completeness results in Heyting algebras which will then apply to intuitionistic logic (obviously *slightly* weaker, but not as much as you might think!).


