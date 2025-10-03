---
layout: page
title: Now
permalink: /now/
---

<div class="now-content">
  <div class="current-status">
    <div class="status-text">
      <p>Currently I am living in London, working at the <a href="https://www.safeai.org.uk">LISA</a> offices. I'm working for the <a href="https://arena.education">ARENA Programme</a>, teaching people deep learning skills for AI safety.</p>
    </div>
  </div>

  <div class="section-grid">
    <div class="section books-section">
      <h3>Books</h3>
      <p class="section-subtitle">Books I'm currently reading:</p>
      
      <div class="book-list">
        <div class="book-item">
          <span class="book-type">Fiction:</span>
          <span class="book-title">N/A :(</span>
        </div>
        
        <div class="book-item">
          <span class="book-type">Nonfiction:</span>
          <span class="book-title"><em>The Logic of Scientific Discovery</em> - Karl Popper</span>
        </div>
        
        <div class="book-item">
          <span class="book-type">Nonfiction:</span>
          <span class="book-title"><em>William Pitt the Younger: A Biography</em> - William Hague</span>
        </div>
        
        <div class="book-item">
          <span class="book-type">Nonfiction:</span>
          <span class="book-title"><em>From Third World to First: The Singapore Story</em> - Lee Kuan Yew (I'm mostly reading excerpts)</span>
        </div>
      </div>
      
      <p class="book-note">If you see me in person and have any questions about any of these books, I'd be happy to talk more about them.</p>
    </div>

    <div class="section music-section">
      <h3>Music</h3>
      <div class="music-content">
        <div class="spotify-player">
          <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1EpnnRfJrF4Nnq?utm_source=generator" 
                  width="100%" 
                  height="380" 
                  frameBorder="0" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  allowFullScreen>
          </iframe>
        </div>
        <div class="music-description">
          <p>This playlist is what I'm currently listening to 'on repeat' according to Spotify. I'm not exactly sure how Spotify calculates this playlist, but in my experience it has not been <em>entirely</em> accurate week-to-week. Despite that, it definitely gets at something, and there is a decent chance I'll be listening to one of these songs at the time you're reading this.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .now-content {
    max-width: 100%;
  }

  .current-status {
    margin-bottom: 40px;
    padding: 0;
    background: none;
    border: none;
    text-align: center;
  }

  .status-text p {
    margin: 0;
    font-size: 1.1em;
    line-height: 1.6;
    color: #5a6c7d;
    font-style: italic;
  }

  .section-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .section {
    background: rgba(255, 255, 255, 0.6);
    border-radius: 12px;
    padding: 30px;
    border-left: 4px solid #3f51b5;
    transition: all 0.3s ease;
    height: fit-content;
    min-height: 500px;
  }

  .section:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(63, 81, 181, 0.15);
  }

  .section h3 {
    margin-top: 0 !important;
    margin-bottom: 20px !important;
    color: #3f51b5 !important;
    font-size: 1.4em !important;
    border-bottom: none !important;
    padding-bottom: 0 !important;
  }

  .section-subtitle {
    color: #5a6c7d;
    font-weight: 600;
    margin-bottom: 20px !important;
  }

  .book-list {
    margin-bottom: 25px;
  }

  .book-item {
    display: flex;
    margin-bottom: 15px;
    padding: 12px;
    background: rgba(63, 81, 181, 0.03);
    border-radius: 8px;
    border-left: 3px solid rgba(63, 81, 181, 0.3);
  }

  .book-type {
    font-weight: 600;
    color: #3f51b5;
    min-width: 80px;
    margin-right: 15px;
  }

  .book-title {
    flex: 1;
    line-height: 1.4;
  }

  .book-note {
    font-style: italic;
    color: #5a6c7d;
    margin-bottom: 0 !important;
    padding: 15px;
    background: rgba(63, 81, 181, 0.05);
    border-radius: 8px;
  }

  .music-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .spotify-player {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(63, 81, 181, 0.1);
  }

  .music-description p {
    margin: 0 !important;
    font-style: italic;
    color: #5a6c7d;
    line-height: 1.6;
  }

  /* Responsive design */
  @media (max-width: 1024px) {
    .section-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }
    
    .music-content {
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    .current-status {
      flex-direction: column;
      text-align: center;
      gap: 15px;
    }

    .status-icon {
      font-size: 2em;
    }

    .status-text p {
      font-size: 1.1em;
    }

    .section {
      padding: 20px;
    }

    .book-item {
      flex-direction: column;
      gap: 5px;
    }

    .book-type {
      min-width: auto;
      margin-right: 0;
    }
  }

  @media (max-width: 480px) {
    .section {
      padding: 15px;
    }

    .current-status {
      padding: 20px 15px;
    }
  }
</style> 