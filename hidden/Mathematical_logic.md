---
layout: page
title: Mathematical Logic
permalink: /page/Mathematical_logic/
nav_exclude: true
---
Here are some resources for learning more about mathematical logic. I took on the order of 4 courses on this field at Cambridge (3 of which were in Part III), and fortunately got the opportunity to write an essay on a topic in the field (try to imagine the nichest topic that could possibly exist in one of the nichest fields of mathematics, and go *even nicher*!) In any case, I'm naively hopeful that someone might take an interest in this page to some degree, since I spent approximately a year's worth of rather intense academic time working on these things, although this is written for someone who's willing to read through notes, or already has a passing familiarity with the topic.

## Logic and Set Theory

The first mathematical logic course I took was Logic and Set Theory ([notes here](/pdf_files/Logic_and_Set_Theory_NotMine.pdf)), in Part II. This was both my favourite and best course that year. Unfortunately, I was not taking $$\LaTeX$$ notes then, but the online notes follow the course content reasonably well. I'll give some thoughts and highlights below.

### Compactness/Completeness

I think the completeness and compactness theorems are definitely up there (although, the analogy between the compactness theorem of mathematical logic, and compactness in topology is the pure maths equivalent of the [Entropy](https://en.wikipedia.org/wiki/Entropy)/[Entropy](https://en.wikipedia.org/wiki/Entropy_(information_theory)) distinction, if you want to know the rough reason for this naming 'confusion', look at [this](https://en.wikipedia.org/wiki/Stone%27s_representation_theorem_for_Boolean_algebras)). There's something so powerful about the fact that proofs *have* to be finite; this should be obvious from the moment you start learning what proofs are but it doesn't hit you over the head until you understand the compactness theorem. It's also just incredibly cool that Gödel managed to show we can always build a complete model for any consistent theory. At first glance, this theorem seemed more important than Gödel's incompleteness theorems, but later when I took Set Theory courses I realized that was not the case, and the incompleteness theorems have claimed their place rightfully (though the completeness theorem remainds underrated).

### Ordinals
As a first introduction to ordinals, this is heavy-going but great. A particular highlight would be the proof that the collection of ordinals don't form a set, and Hartogs' Lemma. Also this forms the basis of almost all future set theory, and serves a great foundation to work from.

### Cardinals
The course is pretty light on cardinals. It basically tells you what an aleph number is, and how addition and multiplication differs from ordinals. It's argubaly justified, since it's hard to say anything about cardinals beyond the obvious things (thanks a lot $$2^{\aleph_{0}}$$). Although I feel like König's theorem probably could have been introduced and proven, especially if you're going to mention cardinal exponentiation, since that's just about the only thing we *can* say about cardinal exponentiation.

### Basic Set Theory
If you want to really *understand* the axioms of $$\mathrm{ZFC}$$, this is probably the way to go. If you want additional philosophical information about the axioms, the obvious resource is Maddy's [*Believing the Axioms*](https://www.cs.umd.edu/~gasarch/BLOGPAPERS/belaxioms1.pdf). 

A cool unexpectedly useful result is probably Mostowski's collapsing theorem. It looks like a  and I suppose $$\in$$-induction (but this is really the axiom of foundation in a trenchcoat).

## Model Theory and Non-Classical Logic

The second mathematical logic course I took was Model Theory and Non-Classical Logic in Part III. Overall I enjoyed this course a decent amount, and it made me think that model theory was the thing about mathematical logic I was probably going to like most (this changed after I did more set theory, although I still enjoy model theory). It was by far the most algebraically-flavoured mathematical logic course. I did take $$\LaTeX$$ notes for this course, but they're very scruffy. [Here they are](/pdf_files/Model%20Theory%20and%20Nonclassical%20Logics.pdf)

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

## Large Cardinals

In terms of pure content, this is probably the most fascinating mathematical logic course I took. Its subject matter is essentially cardinals that are so big that we can't prove their existence in $$\mathrm{ZFC}$$ (since their existence would entail the consistency of $$\mathrm{ZFC}$$). The idea itself should intrigue anyone with a passing interest in set theory, and the lecturer was fantastic at giving intuitions for the types of object we're dealing with. The most interesting high-level takeaway I got from this course was that virtually every property which makes a cardinal "*too large*" was a property of $$\omega$$. So there is some mathematical justification for the intuition that the conceptual leap from the finite to the infinite is on the same order of magnitude as that from the infinite to the unprovably *gargantuan*. But even this doesn't do justice to the leap from the finite to the infinite, as the large cardinals we define tend to only have a few properties that are analogous to those between the finite and $$\omega$$ — $$\omega$$ itself has all of these properties right away, in one big jump.

### Inaccessible Cardinals and Consistency Strength

The conceptual foundations of the course are laid here. We suppose the existence of an uncountable *regular*, *strong-limit* cardinal $$\kappa$$, and show that these properties entail that $$V_{\kappa}$$ models $$\mathrm{ZFC}$$ (along with second-order replacement), so there is a transitive set model of set theory, and so $$\mathrm{ZFC}$$ is consistent. Therefore $$\mathrm{ZFC}$$ cannot prove the existence of such a cardinal (due to [Gödel's Second Incompleteness Theorem](https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems#Second_incompleteness_theorem)). There are a few other large cardinals in this section, namely weakly inaccessible cardinals (which are the same as inaccessible cardinals under the continuum hypothesis), and worldly cardinals.

### Intro to Measurable Cardinals

We generalize another property of $$\omega$$, that there is a non-principal ultrafilter on it. However, first we mess around with measures (in the probability theory sense of the word). I'm glad we messed around with measures, but it probably wasn't a necessary detour (unless someone had never seen an ultrafilter before, but even then...). 

### Large Cardinals for Infinitary Logic

Languages where you can take finitely many conjunctions and disjunctions, and quantify over finitely many objects have a completeness property for theories containing finitely many sentences (as mentioned in the last two courses). But suppose instead we took infinite-sized conjunctions and disjunctions, and quantified over infinitely many objects with universal or existential quantifiers — would these be complete for theories of infinitely many sentences? Well, not according to $$\mathrm{ZFC}$$, but that shouldn't stop us. If we suppose that such a cardinal existed, we get *strongly compact* cardinals, which actually entail measurability (by a nifty argument involving an application of completeness to a language describing an ultrafilter). Weakly compact cardinals are a more combinatorially flavoured object, but it turns out that these are equivalent to a weaker form of the completeness condition we imposed above (although this is stated without proof).

### Taking the Ultrapower of the Universe

One of the coolest course subsection titles in all of Cambridge mathematics. This essentially refers to the fact that, since measurable cardinals have an ultrafilter on them, we can take an Ultrapower of a model of set theory (assuming that there is an inaccessible above the measurable cardinal). This was pretty cool, although this was definitely where the course really got going and required an engaged brain — also circuitously very useful for my essay (although all of this content was, since my essay was essentially about a certain type of large cardinal property).

### Reflection and bigger cardinals

After taking the ultrapower of the universe, we're introduced to the idea of reflection, which is a consequence of the Keisler Extension Property (which I won't explain here). Essentially, it boils down to the fact that if we have a cardinal $$\kappa$$ such that $$V_{\kappa$$ is a model of set theory, then there is an elementary extension of this model which will model all the same sentences. Then since this model contains $$\kappa$$, anything which it believes about $$\kappa$$, $$V_{\kappa}$$ must believe about arbitrarily large cardinals (below $$\kappa$$, obviously, since $$V_{\kappa}$$ can't see $$\kappa$$ itself). This allows us to reflect certain properties of $$\kappa$$ back to cardinals which form a cofinal set of $$\kappa$$ (for example, inaccessibility, weak comapctness, or even measurability).

### Cardinals that are too big

I'm very glad this section was included. It definitely didn't have to be. Essentially, we keep taking larger and larger cardinals, none of which $$\mathrm{ZFC}$$ can prove. So we wonder, do any of these things actually exist? Do they lead to a contradiction. Well yes, if you go big enough. We impose a property on a cardinal which seems natural enough from some of the discussions about measurable cardinals, but it turns out no such cardinal can exist. These are called Reinhardt cardinals, and they violate a corollary of a result of Kunen that there can be no non-trivial elementary embedding from $$V \to V$$ (the corollary is given by taking $$V$$ to be $$V_{\lambda}$$, so it is essentially immediate). However, there are other large cardinals which we believe to be inconsistent, but haven't proven yet. 

I wonder if some of the more "relaxed" ones will someday be proven inconsistent. I kind of hope not, since it's nice to have a rich consistency structure. I also believe they probably won't be, and if I'm remembering correctly, I think there's relatively decent evidence that these sorts of things should exist. The theorem prover Lean, for example, is actually stronger than $$\mathrm{ZFC}$$, it has the consistency strength of $$\mathrm{ZFC} +$$"There are $$\omega$$ many (in the ordinal sense) inaccessible cardinals," if I remember correctly.

## Forcing and the Continuum Hypothesis

I'm very glad I got the opportunity to take this course. While large cardinals might have been my favourite in a sense, it is basically an exposition of a somewhat niche (but deeply fascinating and rich) field of study. On the other hand, almost every mathematician has heard of forcing, and it's great to be able to say that I have a rudimentary understanding of how Cohen showed that the Continuum Hypothesis is independent of $$\mathrm{ZFC}$$ — and in so doing, seemingly establishing a renaissance of set theory that continues to this day, utilising various different forcing methods to gain independence results, even on some [matters of relevance to the rest of mathematics](https://en.wikipedia.org/wiki/List_of_statements_independent_of_ZFC). The title of this course is Forcing and the Continuum Hypothesis, but what was essentially the same course in prior years was named "Topics in Set Theory," and this does feel like a more appropriate name. I think this course focused on forcing slightly more than the prior course (partly because it didn't need to touch on large cardinals, as that course was already there), but there was still a lot that fits better in the category: "Other set theory results." [Here are the notes](/pdf_files/Forcing%20and%20the%20Continuum%20Hypothesis.pdf).

### Levy Hierarchy

This had already been lectured in a more general manner in the model theory course. It is essentially identical to the commentary in that course on quantifier-free sentences (and how existentially- and universally-quantified sentences are preserved in superstructres and substructures respectively).

### Cardinal Arithmetic

I think this was a pretty good section. It is in some sense surprising that this arises in this course instead of the Large Cardinals course. However, it shouldn't be! This is because how much we can say about cardinal arithmetic is deeply tied to the truth or falsity of the Continuum Hypothesis (inasmuch as we are talking about cardinal exponentiation).

### Gödel Functions and Construtibility

This proof worried me a lot. It was *so* long, and *so* seemingly arbitrary that it seemed to bode poorly for the rest of the course. I needn't have worried, as it's probably the worst proof in the course (depending on whether you count "proving forcing works" as one big theorem, or a lot of smaller theorems, and I think it's probably the latter). I suppose sometimes one just needs to show that every quantifier-free sentence in set theory can be written using one of 10 different basic functions. I think this proof should've just been omitted to make more time at the end of the course when things were actually interesting, but I get why it was included.

### L - the Constructible Universe

I love $$L$$. Gödel was really onto a winner here. You just build up set theory in the obvious way, take an $$\mathrm{Ord}$$-sized union (is $$Ord$$ a size? No? *Morally* an $$\mathrm{Ord}$$-sized union then) over your constructed objects, take that class, and you can show it models set theory. Not just that, but the continuum hypothesis. However, $$V\neq L$$, and I won't countenance anyway who believes otherwise — do you *want* to live in the most boring possible world?

### Forcing

The meat of the course. I'll break this down into subsections, since there's too much to say about it generally.

#### Dense sets and Generic sets

This felt pretty poorly motivated. That being said, forcing is hard, and it is really hard to see how it all clicks into place until it *all* clicks into place, and you have to start somewhere. I suppose dense and generic sets are where you often start, since they're the most concrete *things you actually work with* in forcing when you try to do a forcing prood.

#### Names

This was also poorly motivated to me. It wasn't until very near the end of revising this for exams that I actually understood what these were. Nevertheless, I got there eventually. Possibly a skill issue. Also the nice-names argument is a candidate for the second-worst proof (after Gödel functions) in this course.

#### Generic Model Theorem

At first I reacted pretty strongly against this. I think this was just an aesthetic reaction to the lecturer's love of precise notation vs my love of intuition (which was an issue throughout the course). But we are doing maths here, so it's not *unacceptable* or anything. When I revisited it however, I thought it was mostly explained fine. It just takes some time to see the picture click together. It's not like he didn't *try* to motivate it. Anyway, it's very cool that you can take a model and extend it by a generic set and get a new model that is provably different (but not too different).

#### Independence results

This is the big one. I liked how it was shown that cardinals and cofinalities are preserved under forcings by generic extensions. Countable chain conditions et cetera were at least comprehensible, and the combinatorially flavoured arguments worked well with the style of argument I'd come to expect about cardinals from the Large Cardinals course, so it wasn't too difficult to understand (the second or third time I went through it, so not easy to understand either). Then also $$\mathrm{CH}$$ is independent of $$\mathrm{ZFC}$$. Damn. Crazy.

#### Other Forcing Methods

It was cool that we got the time to see some of the other forcing methods that are available (even if they were all pretty standard stuff, no crazy tree-forcings, that would have to wait for my Essay). Also cool that we can do weird and wonderful things to the whole "continuum function," and as long as they don't violate the "obvious" restrictions, they're good to go and will be consistent with $$\mathrm{ZFC}$$.

#### Some final thoughts on Forcing

I think I probably want to write something more substantial about forcing, just for myself if not for anyone else. It seems like there's no truly good pedagogical material online about forcing, and I doubt that I'll be the first person to do it justice (more accurately, it all looks terrible before you've learnt forcing, and then afterwards you understand what they're all talking about and it becomes very clear — but this is not the purpose of pedagogical material!). Anyway, I think I like the analogy with Galois extensions, but it was bandied about a bit haphazardly by the lecturer (or at least what I wrote down in my notes was haphazard). It's a good intuition, but an even better intuition when it becomes clearer how they diverge. Fields are very simple objects, so extending them is not too hard. They are also natural things that we can imagine and are used to working with, so going from $$\mathbb{Q}$$ to $$\mathbb{Q}[\sqrt{2}]$$ is not a large conceptual leap (if it is even a leap *at all* by the time you're learning Galois theory). This is not the case for set theory. Models of $$\mathrm{ZFC}$$ are *strange* things (apart from $$L$$ which is beautiful, as mentioned before), so extending them is correspondingly stranger, because you are taking an object which you only understand as [the blind men understand the elephant](https://en.wikipedia.org/wiki/Blind_men_and_an_elephant), and from it constructing another such object. The axioms of set theory are also just *obviously* going to be much stronger than those of a field, so preserving them is going to be more demanding. You are going to have to come up with wacky objects and definitions that *are* going to be implied indirectly by the axioms (dense sets, genericity), but very few people can see this before-the-fact (this is why Paul Cohen won a Fields medal). Nevertheless, fundamentally — conceptually — you are doing the same thing as extending a field, it's just going to be much harder.

## My Essay

I will write more about this later hopefully. But also I wrote the whole essay, so if you have any questions about it then email me or ask me or something, if you've read this far I probably either know you or want to hear from you anyway. [Here it is](/pdf_files/Infinite%20Games%20in%20Set%20Theory%20-%20Large%20Cardinals%20from%20Determinacy.pdf). I'm pretty proud of it, since the topic was rather difficult, and I really felt like I good a great sense of the landscape in this nichest of niche fields of maths.



