---
layout: page
title: About
permalink: /about/
---

<div class="about-content">
  <div class="profile-section">
    <div class="profile-image">
      <img src="/images/Photo_of_James.jpg" alt="Photo of me">
    </div>
    <div class="profile-text">
      <p>Hi, I'm James. I studied Mathematics at Cambridge, graduating in 2024 with a BA and MMath degree. While I was there, I mostly studied logic and algebra, although I gained familiarity with virtually all of pure mathematics, and a decent chunk of the purer side of statistical mathematics (when it comes to more applied mathematics, my knowledge gets choppier).</p>
    </div>
  </div>

  <div class="section">
    <h3>AI Safety</h3>
    <p>I'm pretty concerned about AI safety, and think other people should take very seriously that we are training larger and larger gray-box models that we don't really understand, and which seem to be rapidly gaining in intelligence (whatever intelligence is). To this end, I did <a href="https://www.matsprogram.org/">SERI MATS</a> under John Wentworth in 2022. This experience made me both more pessimistic and more optimistic — pessimistic about our chances, optimistic about my ability to try to improve them.</p>
  </div>

  <div class="section">
    <h3>Interests</h3>
    <p>In other news, I enjoy <a href="/galleries/climbing_photos">climbing</a>, philosophy, maths, reading, history, politics and probably other things I've forgotten. If anyone is organizing a retreat where we <em>read</em> about the <em>history</em> of <em>philosophy</em> of <em>maths</em> in a sufficiently hilly area, please send me a message.</p>
  </div>

  <div class="section">
    <h3>Current Status</h3>
    <p>Right now I'm doing whatever I'm saying on my <a href="/now/">now</a> page.</p>
  </div>
</div>

<style>
  .about-content {
    max-width: 100%;
  }

  .profile-section {
    display: flex;
    align-items: flex-start;
    gap: 25px;
    margin-bottom: 35px;
    padding: 25px;
    background: rgba(63, 81, 181, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(63, 81, 181, 0.1);
  }

  .profile-image {
    flex-shrink: 0;
  }

  .profile-image img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid rgba(63, 81, 181, 0.2);
    box-shadow: 0 4px 15px rgba(63, 81, 181, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .profile-image img:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(63, 81, 181, 0.3);
  }

  .profile-text {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .profile-text p {
    margin: 0;
    font-size: 1.1em;
    line-height: 1.6;
  }

  .section {
    margin-bottom: 30px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    border-left: 4px solid #3f51b5;
    transition: all 0.3s ease;
  }

  .section:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: translateX(5px);
    box-shadow: 0 3px 10px rgba(63, 81, 181, 0.1);
  }

  .section h3 {
    margin-top: 0 !important;
    margin-bottom: 15px !important;
    color: #3f51b5 !important;
    font-size: 1.3em !important;
    border-bottom: none !important;
    padding-bottom: 0 !important;
  }

  .section p {
    margin-bottom: 0 !important;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .profile-section {
      flex-direction: column;
      text-align: center;
      gap: 20px;
    }

    .profile-image img {
      width: 150px;
      height: 150px;
    }

    .section {
      padding: 15px;
    }
  }

  @media (max-width: 480px) {
    .profile-image img {
      width: 120px;
      height: 120px;
    }

    .profile-section {
      padding: 20px 15px;
    }
  }
</style>