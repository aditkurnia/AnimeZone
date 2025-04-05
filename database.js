// Sample anime database
const animeDatabase = {
    "jujutsu-kaisen": {
        title: "Jujutsu Kaisen",
        cover: "jujutsu-kaisen.jpeg",
        rating: 4.8,
        studio: "MAPPA",
        synopsis: "Yuji Itadori is an ordinary high school student who joins his school's Occult Club for fun, but discovers a cursed object - a rotting finger of the demon Sukuna. When his friends open the cursed object, they attract monsters called Curses. Yuji swallows the finger to protect his friends and becomes possessed by Sukuna.",
        episodes: 3,
        genre: "Action",
        episodesDetails: [
            {
                number: 1,
                title: "Ryomen Sukuna",
                duration: "24 min",
                cover: "jujutsu-kaisen.jpeg",
                youtubeId: "miiLadou1cw?si" // Example YouTube ID
            },
            {
                number: 2,
                title: "For Myself",
                duration: "24 min",
                cover: "jujutsu-kaisen.jpeg",
                youtubeId: "YKnowHCkAA8?si" // Example YouTube ID
            },
            {
                number: 3,
                title: "Girl of Steel",
                duration: "24 min",
                cover: "jujutsu-kaisen.jpeg",
                youtubeId: "dFeNvr8qPME?si" // Example YouTube ID
            },
            // Additional episodes would be added here
        ]
    },
    "attack-on-titan": {
        title: "Attack on Titan",
        cover: "aot.jpeg",
        rating: 4.9,
        studio: "Wit Studio / MAPPA",
        synopsis: "In a world where humanity lives inside cities surrounded by enormous walls due to the Titans, gigantic humanoid creatures who devour humans seemingly without reason, a young boy named Eren Yeager, his adoptive sister Mikasa Ackerman, and their childhood friend Armin Arlert's lives are changed forever after the appearance of a Colossal Titan.",
        episodes: 3,
        genre: "Action",
        episodesDetails: [
            {
                number: 1,
                title: "To You, 2000 Years From Now",
                duration: "24 min",
                cover: "aot-s1-eps1.png",
                youtubeId: "YhpcFktsODU" // AOT episode 1 YouTube ID
            },
            {
                number: 2,
                title: "That Day",
                duration: "24 min",
                cover: "aot-s1-eps2.png",
                youtubeId: "ZRi1NaAReHY" // AOT episode 2 YouTube ID
            },
            {
                number: 3,
                title: "A Dim Light Amid Despair",
                duration: "24 min",
                cover: "aot-s1-eps3.png",
                youtubeId: "GbkZbTSIW5w" // AOT episode 3 YouTube ID
            },
            // Additional episodes would be added here
        ]
    },
    "my-hero-academia": {
        title: "My Hero Academia",
        cover: "mha.jpeg",
        rating: 4.7,
        studio: "Bones",
        synopsis: "In a world where people with superpowers (known as 'Quirks') are the norm, Izuku Midoriya has dreams of one day becoming a hero, despite being bullied by his classmates for not having a Quirk. After being the only one to try and save his childhood bully from a villain, Midoriya is noticed by the world's greatest hero, All Might, who shares his Quirk with him and helps him enroll in a prestigious high school for heroes in training.",
        episodes: 3,
        genre: "Shonen",
        episodesDetails: [
            {
                number: 1,
                title: "Izuku Midoriya: Origin",
                duration: "24 min",
                cover: "mha.jpeg",
                youtubeId: "ReWxuvNiECk?si" // Example YouTube ID
            },

            // Additional episodes would be added here
        ]
    },
    "one-piece": {
        title: "One Piece",
        cover: "op.jpeg",
        rating: 4.9,
        studio: "Toei Animation",
        synopsis: "Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line, Luffy and his crew search for the One Piece treasure and experience powerful adventures along the way.",
        episodes: 1,
        genre: "Adventure",
        episodesDetails: [
            {
                number: 1,
                title: "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
                duration: "14 min",
                cover: "op.jpeg",
                youtubeId: "iLf2x4L1puo?si" // Example YouTube ID
            },

            // Additional episodes would be added here
        ]
    },
    "spy-x-family": {
        title: "Spy x Family",
        cover: "spy-x-family.jpeg",
        rating: 4.8,
        studio: "Wit Studio / CloverWorks",
        synopsis: "Master spy Twilight is unparalleled at going undercover on dangerous missions for the betterment of the world. But when he receives the ultimate assignment—to get married and have a kid—he may finally be in over his head! Not one to depend on others, Twilight has his work cut out for him procuring both a wife and a child for his mission to infiltrate an elite private school.",
        episodes: 3,
        genre: "Comedy",
        episodesDetails: [
            {
                number: 1,
                title: "Operation Strix",
                duration: "24 min",
                cover: "spy-x-family.jpeg",
                youtubeId: "ftYlLDRjh38?si" // Example YouTube ID
            },
            {
                number: 2,
                title: "Secure a Wife",
                duration: "24 min",
                cover: "spy-x-family.jpeg",
                youtubeId: "wOHVFHTYoSA?si" // Example YouTube ID
            },
            {
                number: 3,
                title: "Prepare for the Interview",
                duration: "24 min",
                cover: "spy-x-family.jpeg",
                youtubeId: "piq46ZRYSwk?si" // Example YouTube ID
            },
            // Additional episodes would be added here
        ]
    },
    "chainsaw-man": {
        title: "Chainsaw Man",
        cover: "csm.jpeg",
        rating: 4.7,
        studio: "MAPPA",
        synopsis: "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash.",
        episodes: 3,
        genre: "Horror",
        episodesDetails: [
            {
                number: 1,
                title: "Dog & Chainsaw",
                duration: "24 min",
                cover: "csm.jpeg",
                youtubeId: "dFlDRhvM4L0?si" // Example YouTube ID
            },

            // Additional episodes would be added here
        ]
    },
    "tokyo-revengers": {
        title: "Tokyo Revengers",
        cover: "tokrev.jpeg",
        rating: 4.6,
        studio: "Liden Films",
        synopsis: "Takemichi Hanagaki's life is at an all-time low. Just when he thought it couldn't get worse, he finds out that Hinata Tachibana, his ex-girlfriend, was murdered by the Tokyo Manji Gang. Suddenly, Takemichi flashes back to exactly 12 years in the past. With this new-found ability, Takemichi decides to exact revenge on his ex-girlfriend's murderers.",
        episodes: 3,
        genre: "Action",
        episodesDetails: [
            {
                number: 1,
                title: "Reborn",
                duration: "24 min",
                cover: "tokrev.jpeg",
                youtubeId: "Ixx143EFpSI?si" // Example YouTube ID
            },
            {
                number: 2,
                title: "Resist",
                duration: "24 min",
                cover: "tokrev.jpeg",
                youtubeId: "ihG6P6TiBgA?si" // Example YouTube ID
            },
            {
                number: 3,
                title: "Resolve",
                duration: "24 min",
                cover: "tokrev.jpeg",
                youtubeId: "uW8sFLbRGRE?si" // Example YouTube ID
            },
            // Additional episodes would be added here
        ]
    },
    "vinland-saga": {
        title: "Vinland Saga",
        cover: "vinland-saga.jpeg",
        rating: 4.8,
        studio: "Wit Studio / MAPPA",
        synopsis: "Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland. It's said to be warm and fertile, a place where there would be no need for fighting—not at all like the frozen village in Iceland where he was born, and certainly not like his current life as a mercenary. War is his home now.",
        episodes: 1,
        genre: "Historical",
        episodesDetails: [
            {
                number: 1,
                title: "Somewhere Not Here",
                duration: "24 min",
                cover: "vinland-saga.jpeg",
                youtubeId: "bytkVhajAFA?si" // Example YouTube ID
            },

            // Additional episodes would be added here
        ]
    },
    "demon-slayer": {
        title: "Demon Slayer: Kimetsu no Yaiba",
        cover: "kimitsu-cover.jpeg",
        rating: 4.9,
        studio: "ufotable",
        synopsis: "Tanjiro Kamado's peaceful life is shattered when his family is slaughtered by demons. Now, he fights to avenge his family and cure his sister who has been turned into a demon.",
        episodes: 1,
        genre: "Action",
        episodesDetails: [
            {
                number: 1,
                title: "Cruelty",
                duration: "24 min",
                cover: "kimitsu.jpeg",
                youtubeId: "DuH3VpwRWDM?si" // Example YouTube ID
            },

            // Additional episodes would be added here
        ]
    }
};

// Track current playing video iframe
// Track current playing video iframe
let currentVideoIframe = null;

// Mobile Menu Toggle
function setupMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const menuIcon = mobileMenu.querySelector('i');
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.remove('bi-list');
            menuIcon.classList.add('bi-x-lg');
        } else {
            menuIcon.classList.remove('bi-x-lg');
            menuIcon.classList.add('bi-list');
        }
    });
}

// Get anime ID from URL parameter
function getAnimeIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Load anime details
function loadAnimeDetails() {
    const animeId = getAnimeIdFromUrl();
    const animeDetailContainer = document.getElementById('animeDetailContainer');
    const episodesContainer = document.getElementById('episodesContainer');
    const episodesList = document.getElementById('episodesList');
    
    if (animeId && animeDatabase[animeId]) {
        const anime = animeDatabase[animeId];
        
        // Set page title
        document.title = `AnimeZone - ${anime.title}`;
        
        // Create anime detail HTML
        const detailHTML = `
            <div class="anime-detail">
                <div class="anime-poster">
                    <img src="${anime.cover}" alt="${anime.title}">
                </div>
                <div class="anime-info">
                    <h1 class="anime-title">${anime.title}</h1>
                    <div class="anime-meta">
                        <div class="anime-meta-item">
                            <i class="bi bi-star-fill"></i> ${anime.rating}/5.0
                        </div>
                        <div class="anime-meta-item">
                            <i class="bi bi-camera-reels"></i> ${anime.studio}
                        </div>
                        <div class="anime-meta-item">
                            <i class="bi bi-tag"></i> ${anime.genre}
                        </div>
                        <div class="anime-meta-item">
                            <i class="bi bi-collection"></i> ${anime.episodes} Episodes
                        </div>
                    </div>
                    <div class="anime-tags">
                        <span class="anime-tag">${anime.genre}</span>
                        <span class="anime-tag">Subtitled</span>
                        <span class="anime-tag">HD</span>
                    </div>
                    <div class="anime-description">
                        ${anime.synopsis}
                    </div>
                    <div class="action-buttons">
                        <button class="watch-button" onclick="watchFirstEpisode('${animeId}')">
                            <i class="bi bi-play-fill"></i> Watch Now
                        </button>
                        <a href="#" class="add-list-button">
                            <i class="bi bi-plus"></i> Add to My List
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        animeDetailContainer.innerHTML = detailHTML;
        
        // Create episodes list based on episodesDetails if available, otherwise generate generic
        let episodesHTML = '';
        
        if (anime.episodesDetails && anime.episodesDetails.length > 0) {
            // Use detailed episode info
            anime.episodesDetails.forEach(episode => {
                episodesHTML += `
                    <div class="episode-card">
                        <div class="episode-thumbnail">
                            <a href="#" onclick="watchEpisode('${animeId}', ${episode.number}, '${episode.youtubeId}'); return false;">
                                <img src="${episode.cover}" alt="${anime.title} - Episode ${episode.number}">
                                <div class="episode-number">EP ${episode.number}</div>
                            </a>
                        </div>
                        <div class="episode-info">
                            <h3 class="episode-title">${episode.title}</h3>
                            <div class="episode-meta">
                                <span>${episode.duration}</span>
                                <span>HD</span>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            // If there are more episodes than details provided, add generic entries
            if (anime.episodes > anime.episodesDetails.length) {
                for (let i = anime.episodesDetails.length + 1; i <= anime.episodes; i++) {
                    episodesHTML += `
                        <div class="episode-card">
                            <div class="episode-thumbnail">
                                <a href="#" onclick="watchEpisode('${animeId}', ${i}, 'YhpcFktsODU'); return false;">
                                    <img src="${anime.title.toLowerCase().replace(/\s+/g, '-')}-ep${i}.jpeg" alt="${anime.title} - Episode ${i}">
                                    <div class="episode-number">EP ${i}</div>
                                </a>
                            </div>
                            <div class="episode-info">
                                <h3 class="episode-title">Episode ${i}</h3>
                                <div class="episode-meta">
                                    <span>24 min</span>
                                    <span>HD</span>
                                </div>
                            </div>
                        </div>
                    `;
                }
            }
        } else {
            // Generate generic episode entries
            for (let i = 1; i <= anime.episodes; i++) {
                episodesHTML += `
                    <div class="episode-card">
                        <div class="episode-thumbnail">
                            <a href="#" onclick="watchEpisode('${animeId}', ${i}, 'YhpcFktsODU'); return false;">
                                <img src="${anime.title.toLowerCase().replace(/\s+/g, '-')}-ep${i}.jpeg" alt="${anime.title} - Episode ${i}">
                                <div class="episode-number">EP ${i}</div>
                            </a>
                        </div>
                        <div class="episode-info">
                            <h3 class="episode-title">Episode ${i}</h3>
                            <div class="episode-meta">
                                <span>24 min</span>
                                <span>HD</span>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
        
        episodesList.innerHTML = episodesHTML;
        
    } else {
        // Handle invalid anime ID
        animeDetailContainer.innerHTML = `
            <div class="error-message">
                <h2>Anime Not Found</h2>
                <p>Sorry, the anime you're looking for does not exist or has been removed.</p>
                <a href="index.html" class="back-button">Back to Home</a>
            </div>
        `;
        
        episodesContainer.style.display = 'none';
    }
    
    // Make sure the watch container is hidden initially
    const watchContainer = document.getElementById('watchContainer');
    if (watchContainer) {
        watchContainer.style.display = 'none';
    }
}

// Function to watch first episode
function watchFirstEpisode(animeId) {
    const anime = animeDatabase[animeId];
    if (anime && anime.episodesDetails && anime.episodesDetails.length > 0) {
        const firstEpisode = anime.episodesDetails[0];
        watchEpisode(animeId, firstEpisode.number, firstEpisode.youtubeId);
    } else if (anime) {
        // If no episode details, use generic first episode
        watchEpisode(animeId, 1, 'YhpcFktsODU');
    }
}

// Function to watch an episode
function watchEpisode(animeId, episodeNumber, youtubeId) {
    const anime = animeDatabase[animeId];
    
    // Get containers
    const animeDetailContainer = document.getElementById('animeDetailContainer');
    const episodesContainer = document.getElementById('episodesContainer');
    const watchContainer = document.getElementById('watchContainer');
    
    // Create watch container if it doesn't exist
    if (!watchContainer) {
        const container = document.createElement('div');
        container.id = 'watchContainer';
        container.className = 'watch-container';
        document.querySelector('main').appendChild(container);
    }
    
    // Get episode details
    let episodeTitle = `Episode ${episodeNumber}`;
    let episodeDuration = '24 min';
    
    if (anime.episodesDetails) {
        const episodeDetail = anime.episodesDetails.find(ep => ep.number === episodeNumber);
        if (episodeDetail) {
            episodeTitle = episodeDetail.title;
            episodeDuration = episodeDetail.duration;
        }
    }
    
    // Create watch content with YouTube player and loading animation
    const watchHTML = `
        <div class="watch-header">
            <button class="back-button" onclick="backToAnimeDetails()">
                <i class="bi bi-arrow-left"></i> Back to ${anime.title}
            </button>
            <h2>${anime.title} - ${episodeTitle}</h2>
        </div>
        <div class="video-player-container">
            <div class="youtube-player">
                <!-- Loading Animation -->
                <div id="videoLoading" class="video-loading">
                    <img src="loading.png" alt="Loading" class="loading-img pulse-animation">
                    <div class="loading-text">Loading...</div>
                </div>
                <!-- YouTube iframe -->
                <iframe id="youtubeIframe" 
                        src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0" 
                        frameborder="0" 
                        width="100%" 
                        height="100%" 
                        allowfullscreen 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        onload="hideVideoLoading()"></iframe>
            </div>
        </div>
        <div class="episode-navigation">
            ${episodeNumber > 1 ? `<button class="nav-button" onclick="watchEpisode('${animeId}', ${episodeNumber - 1}, '${episodeNumber === 2 ? 'YhpcFktsODU' : episodeNumber === 3 ? 'ZRi1NaAReHY' : 'YhpcFktsODU'}')"><i class="bi bi-skip-backward-fill"></i> Previous Episode</button>` : ''}
            ${episodeNumber < anime.episodes ? `<button class="nav-button" onclick="watchEpisode('${animeId}', ${episodeNumber + 1}, '${episodeNumber === 1 ? 'ZRi1NaAReHY' : episodeNumber === 2 ? 'GbkZbTSIW5w' : 'YhpcFktsODU'}')">Next Episode <i class="bi bi-skip-forward-fill"></i></button>` : ''}
        </div>
        <div class="episode-info-panel">
            <h3>${episodeTitle}</h3>
            <div class="episode-meta-full">
                <span><i class="bi bi-collection"></i> Episode ${episodeNumber} of ${anime.episodes}</span>
                <span><i class="bi bi-clock"></i> ${episodeDuration}</span>
                <span><i class="bi bi-tag"></i> ${anime.genre}</span>
            </div>
        </div>
    `;
    
    // Hide other containers and show watch container
    animeDetailContainer.style.display = 'none';
    episodesContainer.style.display = 'none';
    
    const watchContainerElement = document.getElementById('watchContainer');
    watchContainerElement.innerHTML = watchHTML;
    watchContainerElement.style.display = 'block';
    
    // Store reference to current iframe for later cleanup
    currentVideoIframe = document.getElementById('youtubeIframe');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Function to hide loading animation when video loads
function hideVideoLoading() {
    const loadingElement = document.getElementById('videoLoading');
    if (loadingElement) {
        // First reduce opacity
        loadingElement.style.opacity = '0';
        // Then hide completely after animation completes
        setTimeout(() => {
            loadingElement.style.display = 'none';
        }, 500); // 500ms matches the transition duration in CSS
    }
}

// Function to go back to anime details
function backToAnimeDetails() {
    const animeDetailContainer = document.getElementById('animeDetailContainer');
    const episodesContainer = document.getElementById('episodesContainer');
    const watchContainer = document.getElementById('watchContainer');
    
    // Clear the iframe src to stop video playback
    if (currentVideoIframe) {
        // Save original src
        const originalSrc = currentVideoIframe.src;
        // Clear the src to stop playback
        currentVideoIframe.src = '';
        // Reset reference
        currentVideoIframe = null;
    }
    
    // Show anime details and episodes
    animeDetailContainer.style.display = 'block';
    episodesContainer.style.display = 'block';
    
    // Hide watch container
    watchContainer.style.display = 'none';
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    loadAnimeDetails();
    
    // Create watch container if it doesn't exist
    if (!document.getElementById('watchContainer')) {
        const container = document.createElement('div');
        container.id = 'watchContainer';
        container.className = 'watch-container';
        container.style.display = 'none';
        document.querySelector('main').appendChild(container);
    }
    
    // Add CSS for loading animation
    addLoadingAnimationStyles();
});

// Add CSS for loading animation
function addLoadingAnimationStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Video Loading Animation */
        .video-loading {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: rgba(20, 20, 30, 0.9);
            z-index: 10;
            transition: opacity 0.5s ease;
        }
        
        .loading-img {
            max-width: 150px;
            max-height: 200px;
            border-radius: 8px;
            margin-bottom: 5px;
        }
        
        .loading-text {
            color: white;
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 2px;
        }
        
        /* Pulse Animation */
        .pulse-animation {
            animation: pulse 1.5s infinite ease-in-out;
        }
        
        @keyframes pulse {
            0% {
                opacity: 0.4;
            }
            50% {
                opacity: 1;
            }
            100% {
                opacity: 0.4;
            }
        }
        
        /* Ensure the video player container is properly positioned for overlay */
        .youtube-player {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
            height: 0;
            overflow: hidden;
        }
        
        .youtube-player iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    `;
    document.head.appendChild(styleElement);
}