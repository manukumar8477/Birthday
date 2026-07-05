import { useState, useEffect, useRef } from 'react'
import './App.css'

// Image Database containing ALL 57 images from E:\Birthday\Birthday\public\Photos
const CHILD_PHOTOS = [
  { 
    url: '/Photos/Child/WhatsApp Image 2026-07-04 at 18.04.46 (1).jpeg', 
    compliment: 'Cute since day one ❤️', 
    comment: 'A little angel who brought endless joy and warmth into this world. ❤️',
    age: 'Childhood' 
  },
  { 
    url: '/Photos/Child/WhatsApp Image 2026-07-04 at 18.04.46.jpeg', 
    compliment: 'Pure innocence and beautiful smile ✨', 
    comment: 'That sweet innocence in your eyes and beautiful smile has always been magical. ✨',
    age: 'Childhood' 
  },
  { 
    url: '/Photos/Child/WhatsApp Image 2026-07-04 at 18.04.47 (1).jpeg', 
    compliment: 'Cute since day one ❤️', 
    comment: 'The sweetest, most adorable little star that ever sparkled. 🌸',
    age: 'Childhood' 
  },
  { 
    url: '/Photos/Child/WhatsApp Image 2026-07-04 at 18.04.47.jpeg', 
    compliment: 'Pure innocence and beautiful smile ✨', 
    comment: 'Even back then, your lovely presence was destined to touch hearts. 💖',
    age: 'Childhood' 
  },
  { 
    url: '/Photos/Child/WhatsApp Image 2026-07-04 at 18.04.48.jpeg', 
    compliment: 'Grace, beauty and kindness in one frame 👑', 
    comment: 'A sweet little princess who has grown into an incredibly elegant queen. 👑',
    age: 'Childhood' 
  }
]

const TEEN_PHOTOS = [
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.10.jpeg', 
    compliment: 'Every year you became more amazing 🌸', 
    comment: 'Growing up beautifully, spreading warmth and smiles wherever you go. 🌸',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.13.jpeg', 
    compliment: 'Your smile lights up everything 💖', 
    comment: 'A glowing presence that makes even the ordinary moments look special. 💖',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.14 (1).jpeg', 
    compliment: 'Every year you became more amazing 🌸', 
    comment: 'Elegance and simplicity blended together, showing a beautiful soul. ✨',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.14.jpeg', 
    compliment: 'Your smile lights up everything 💖', 
    comment: 'No matter what, your bright and lovely smile lights up the room. 🌟',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.15.jpeg', 
    compliment: 'Absolutely stunning and beautiful 🌹', 
    comment: 'Blooming gracefully like a gorgeous rose in the morning dew. 🌹',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.16 (1).jpeg', 
    compliment: 'Every year you became more amazing 🌸', 
    comment: 'With every birthday, your inner and outer beauty has grown endlessly. 🎀',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.16.jpeg', 
    compliment: 'Your smile lights up everything 💖', 
    comment: 'Positivity and grace radiating in a single candid, gorgeous moment. 💕',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.18 (1).jpeg', 
    compliment: 'Grace, beauty and kindness in one frame 👑', 
    comment: 'Elegant styles and a kind heart, defining true royalty. 👑',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.18.jpeg', 
    compliment: 'Absolutely stunning and beautiful 🌹', 
    comment: 'Capturing memories with a pure heart and a timeless charm. 🌻',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.26 (1).jpeg', 
    compliment: 'Sparkling eyes and beautiful smile ✨', 
    comment: 'Every moment with you becomes a beautiful memory to treasure. ✨',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.26 (2).jpeg', 
    compliment: 'Truly lovely and elegant 🌸', 
    comment: 'Your presence brings a quiet peace and beautiful joy to everyone. 🌸',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.26.jpeg', 
    compliment: 'Pure grace and elegance 👑', 
    comment: 'A heart of gold and a smile that lights up the entire room. 👑',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.27 (1).jpeg', 
    compliment: 'Always radiating positive vibes 💖', 
    comment: 'Spreading warmth, laughter, and beautiful sunshine wherever you go. 💖',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.27 (2).jpeg', 
    compliment: 'Charming and beautiful soul 🌹', 
    comment: 'A timeless elegance that only grows more stunning with each passing year. 🌹',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.27.jpeg', 
    compliment: 'Absolutely wonderful and sweet 🌻', 
    comment: 'Your kind nature makes you so incredibly special and loved. 🌻',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.28 (1).jpeg', 
    compliment: 'Prettiest smile in the world 💕', 
    comment: 'A beautiful laugh that can turn any cloudy day into sunshine. 💕',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.28 (2).jpeg', 
    compliment: 'Elegance personified 👑', 
    comment: 'Charming and full of grace, walking through life like a princess. 👑',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.28.jpeg', 
    compliment: 'Beautiful inside and out ✨', 
    comment: 'Your kindness and sweet personality make you shine so bright. ✨',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.29 (1).jpeg', 
    compliment: 'Simply gorgeous 🌸', 
    comment: 'Capturing the beautiful magic of youth and happiness in one frame. 🌸',
    age: 'Teenage Years' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.29.jpeg', 
    compliment: 'Sweet and lovely presence 💖', 
    comment: 'A sweet soul who brings endless peace and happiness. 💖',
    age: 'Teenage Years' 
  }
]

const LATEST_PHOTOS = [
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.30 (1).jpeg', 
    compliment: 'Grace, beauty and kindness in one frame 👑', 
    comment: 'The stunning queen representing ultimate grace and magnetic charm. 👑',
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.30 (2).jpeg', 
    compliment: 'Absolutely stunning and beautiful 🌹', 
    comment: 'A picture-perfect frame capturing your unmatched beauty and style. 🌹',
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.30 (3).jpeg', 
    compliment: 'Grace, beauty and kindness in one frame 👑', 
    comment: 'Combining intellectual elegance, soft kindness, and gorgeous looks. ✨',
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.30.jpeg', 
    compliment: 'Absolutely stunning and beautiful 🌹', 
    comment: 'Radiant, beautiful, and absolutely breathtaking in every way. 💎',
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.31 (1).jpeg', 
    compliment: 'Every year you became more amazing 🌸', 
    comment: 'An amazing soul who brings brightness and warmth into our lives. 🌸',
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.31 (2).jpeg', 
    compliment: 'Radiating beauty and style 👑', 
    comment: 'A modern queen carrying her grace with effortless elegance. 👑', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.31.jpeg', 
    compliment: 'Breathtakingly beautiful 🌹', 
    comment: 'Your beauty is unique and your heart is even more beautiful. 🌹', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.32 (1).jpeg', 
    compliment: 'Grace, beauty and kindness in one frame 👑', 
    comment: 'A symbol of elegance and purity that stands out in any crowd. 🦄',
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.32 (2).jpeg', 
    compliment: 'Absolutely stunning and beautiful 🌹', 
    comment: 'Simply gorgeous, spreading a peaceful joy with your presence. 🕊️',
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.32.jpeg', 
    compliment: 'Sparkling charm and glow ✨', 
    comment: 'Glowing with a special aura of kindness, love, and positivity. ✨', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.33 (1).jpeg', 
    compliment: 'Stunning and elegant queen 👑', 
    comment: 'Poised, elegant, and absolutely magnificent in every single frame. 👑', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.33 (2).jpeg', 
    compliment: 'Heart of gold and pure grace 💖', 
    comment: 'A treasure of a person who fills our lives with sweet memories. 💖', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.33.jpeg', 
    compliment: 'Radiant and beautiful smile 🌸', 
    comment: 'Your beautiful smile continues to be the warmest light we know. 🌸', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.34 (1).jpeg', 
    compliment: 'Absolutely captivating 🌹', 
    comment: 'Capturing a moment of pure bliss, style, and magnetic elegance. 🌹', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.34.jpeg', 
    compliment: 'Your smile lights up everything 💖', 
    comment: 'Your magical smile continues to be the brightest light we know. 💖',
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.35 (1).jpeg', 
    compliment: 'Elegant and charming style ✨', 
    comment: 'Classy and beautiful, showing the world how lovely you are. ✨', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.35.jpeg', 
    compliment: 'Stunning diva look 👑', 
    comment: 'A perfect portrait of grace, style, and modern royalty. 👑', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.36 (1).jpeg', 
    compliment: 'Charming and gentle soul 🌸', 
    comment: 'Bringing softness, peace, and beautiful energy to everyone. 🌸', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.36 (2).jpeg', 
    compliment: 'Simply stunning and glowing 💖', 
    comment: 'Glowing like a bright star, spreading warmth with every glance. 💖', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.36.jpeg', 
    compliment: 'Graceful and classy 🌹', 
    comment: 'Elegance is the only beauty that never fades, and you have it all. 🌹', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.37 (1).jpeg', 
    compliment: 'Grace, beauty and kindness in one frame 👑', 
    comment: 'A true visual masterpiece, reflecting a heart filled with gold. 🌟',
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.37 (2).jpeg', 
    compliment: 'Positivity and light ✨', 
    comment: 'Your bright light makes the world a much warmer place. ✨', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.37.jpeg', 
    compliment: 'Absolutely stunning and beautiful 🌹', 
    comment: 'Classic beauty with an unforgettable, sparkling personality. 💐',
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.38 (1).jpeg', 
    compliment: 'Stunning and beautiful smile 👑', 
    comment: 'A smile that makes everything around you look absolutely magical. 👑', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.45.38.jpeg', 
    compliment: 'Prettiest smile ever 🌸', 
    comment: 'A picture that captures your sweet kindness and gorgeous smile. 🌸', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.46.47.jpeg', 
    compliment: 'Absolutely breathtaking 💖', 
    comment: 'Every memory with you is a gift of pure joy and happiness. 💖', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.47.57.jpeg', 
    compliment: 'Your smile lights up everything 💖', 
    comment: 'An absolute queen of smiles, spreading kindness with each gaze. 👑',
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.47.59.jpeg', 
    compliment: 'Absolutely stunning and beautiful 🌹', 
    comment: 'Glamour, class, and absolute style in one perfect frame. 👑',
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 17.48.00.jpeg', 
    compliment: 'Gorgeous style and aura 🌹', 
    comment: 'An amazing presence that fills every space with beautiful positivity. 🌹', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 18.04.36 (1).jpeg', 
    compliment: 'Pure grace and kindness ✨', 
    comment: 'A beautiful soul inside a gorgeous queen, loved by everyone. ✨', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 18.04.39 (1).jpeg', 
    compliment: 'Magical and sweet presence 🌸', 
    comment: 'Wishing you a future as bright and gorgeous as your heart. 🌸', 
    age: 'Latest' 
  },
  { 
    url: '/Photos/WhatsApp Image 2026-07-04 at 18.04.45.jpeg', 
    compliment: 'Absolutely stunning and beautiful 🌹', 
    comment: 'Wishing you a future as bright and gorgeous as you are! 🌹',
    age: 'Latest' 
  }
]

// Video Database with titles and captions (All 5 valid videos from folder mapped correctly)
const FEATURED_VIDEO_DATA = {
  url: '/Photos/WhatsApp Video 2026-07-04 at 17.45.25.mp4',
  title: 'Beautiful Memories Together 🎥',
  comment: 'A moment worth remembering forever ❤️'
}

const OTHER_VIDEOS_DATA = [
  { 
    url: '/Photos/WhatsApp Video 2026-07-04 at 17.45.17.mp4', 
    title: 'Captured Innocence ✨', 
    comment: 'Beautiful memories captured perfectly ✨' 
  },
  { 
    url: '/Photos/WhatsApp Video 2026-07-04 at 17.45.25 (1).mp4', 
    title: 'Lovely Memories 🌸', 
    comment: 'Every second feels special 🌸' 
  },
  { 
    url: '/Photos/WhatsApp Video 2026-07-04 at 17.45.25 (2).mp4', 
    title: 'Sparkling Laughs 💖', 
    comment: 'Your smile makes this memory priceless 💖' 
  },
  { 
    url: '/Photos/WhatsApp Video 2026-07-04 at 17.45.25 (3).mp4', 
    title: 'Cherished Forever 👑', 
    comment: 'Moments like these stay forever 👑' 
  }
]

// Special Section Qualities Data
const WHY_SPECIAL_QUALITIES = [
  { icon: '👑', title: 'Beautiful', desc: 'Your outer elegance is just a reflection of the deep and sparkling beauty of your kind soul.' },
  { icon: '💖', title: 'Kind', desc: 'You touch everyone with gentleness, bringing comfort and warmth to every heart you meet.' },
  { icon: '🌸', title: 'Caring', desc: 'Your empathy knows no bounds; you always look out for others, spreading sweet love.' },
  { icon: '💪', title: 'Strong', desc: 'You navigate life with silent courage, proving that a soft heart holds immense resilience.' },
  { icon: '💎', title: 'Precious', desc: 'A rare and cherished diamond, bringing irreplaceable joy and light into all our lives.' }
]

// Custom Premium Video Card Component
function VideoCard({ url, title, comment, isFeatured = false }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [aspectRatio, setAspectRatio] = useState(16 / 9)
  const [isPortrait, setIsPortrait] = useState(false)
  const videoRef = useRef(null)

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        // Pause all other videos
        document.querySelectorAll('video').forEach((v) => {
          if (v !== videoRef.current) {
            v.pause()
          }
        })
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const handleVideoPlay = () => setIsPlaying(true)
  const handleVideoPause = () => setIsPlaying(false)

  const handleLoadedMetadata = (e) => {
    const { videoWidth, videoHeight } = e.target
    if (videoWidth && videoHeight) {
      const ratio = videoWidth / videoHeight
      setAspectRatio(ratio)
      setIsPortrait(videoHeight > videoWidth)
    }
  }

  const ratioClass = isPortrait ? 'portrait-card' : 'landscape-card'

  return (
    <div className={`video-grid-item ${isFeatured ? 'featured-video-container' : ''} ${ratioClass}`}>
      <div className="card-decorations">
        <span className="card-decoration-item dec-star-1">✨</span>
        <span className="card-decoration-item dec-heart-1">❤️</span>
        <span className="card-decoration-item dec-star-2">🌸</span>
        <span className="card-decoration-item dec-heart-2">💖</span>
      </div>

      <article className={`video-card ${isFeatured ? 'featured-card' : ''} ${isPlaying ? 'playing' : ''} ${ratioClass}`}>
        <div 
          className="video-frame-inner"
          style={{ 
            aspectRatio: aspectRatio,
            maxHeight: isFeatured ? (isPortrait ? '550px' : '450px') : (isPortrait ? '480px' : '280px'),
            width: '100%'
          }}
        >
          <video
            ref={videoRef}
            src={url}
            preload="metadata"
            playsInline
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
            onLoadedMetadata={handleLoadedMetadata}
            controls={isPlaying}
          />

          {!isPlaying && (
            <div className="video-play-overlay" onClick={handlePlayToggle}>
              <div className="play-btn-circle">
                <span>▶</span>
              </div>
              <p className="video-overlay-text">{title}</p>
            </div>
          )}
        </div>

        <div className="video-comment-box">
          <p className="video-comment">{comment}</p>
        </div>
      </article>
    </div>
  )
}

function App() {
  const [view, setView] = useState('intro') // State router: 'intro', 'welcome', 'journey', 'celebration'
  const [isMusicPlaying, setIsMusicPlaying] = useState(false) // Single global playback state
  const [currentCelebrationSong, setCurrentCelebrationSong] = useState('soniye') // Track current celebration playlist song
  const [timelineCompleted, setTimelineCompleted] = useState(false) // Blocks celebration access until timeline is scrolled
  const [cakeCut, setCakeCut] = useState(false)
  const [showCelebrationSequence, setShowCelebrationSequence] = useState(false)
  const [activeMessages, setActiveMessages] = useState([])
  const [letterRevealed, setLetterRevealed] = useState(false)
  const [knifeAnimating, setKnifeAnimating] = useState(false)
  const [balloons, setBalloons] = useState([])
  const [revealStep, setRevealStep] = useState(0)
  const [typedTitle, setTypedTitle] = useState('')
  
  // Intro Page States
  const [introRevealStep, setIntroRevealStep] = useState(0)
  const [giftOpened, setGiftOpened] = useState(false)
  const [showMusicPopup, setShowMusicPopup] = useState(false)
  const [giftExploded, setGiftExploded] = useState(false)
  const [cursorTrail, setCursorTrail] = useState([])

  const audioRef = useRef(null)
  if (!audioRef.current) {
    audioRef.current = new Audio()
  }
  
  const canvasRef = useRef(null)
  const observerRef = useRef(null)

  const mainTitleText = "Happy Birthday Kaifreen Chauhan 🎂"

  // Cursor Trail Tracking Effect for Intro Page
  useEffect(() => {
    if (view !== 'intro') return

    const handleMouseMove = (e) => {
      const heart = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 12 + 8,
        color: ['#ff4d6d', '#ff8fa3', '#c084fc', '#ffd700'][Math.floor(Math.random() * 4)],
        rotation: Math.random() * 360,
        opacity: 1
      }
      setCursorTrail((prev) => [...prev.slice(-30), heart])
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [view])

  // Fade out cursor trail hearts
  useEffect(() => {
    if (view !== 'intro' || cursorTrail.length === 0) return

    const interval = setInterval(() => {
      setCursorTrail((prev) => 
        prev
          .map((h) => ({ ...h, opacity: h.opacity - 0.05 }))
          .filter((h) => h.opacity > 0)
      )
    }, 50)

    return () => clearInterval(interval)
  }, [view, cursorTrail.length])

  // Sequential Reveal steps for Intro Section content on load
  useEffect(() => {
    if (view !== 'intro') return

    const timeouts = [
      setTimeout(() => setIntroRevealStep(1), 1000),  // Show Line 1
      setTimeout(() => setIntroRevealStep(2), 2600),  // Show Line 2
      setTimeout(() => setIntroRevealStep(3), 4200),  // Show Line 3
      setTimeout(() => setIntroRevealStep(4), 5800),  // Show Quote block
      setTimeout(() => setIntroRevealStep(5), 7800),  // Show wishes list
      setTimeout(() => setIntroRevealStep(6), 10000), // Show YOU banner
      setTimeout(() => setIntroRevealStep(7), 11500)  // Show Gift container
    ]
    return () => timeouts.forEach(clearTimeout)
  }, [view])

  // Strict-mode safe and race-free typewriter animation for Hero section
  useEffect(() => {
    if (view !== 'welcome') return
    const interval = setInterval(() => {
      setTypedTitle((prev) => {
        if (prev.length < mainTitleText.length) {
          return prev + mainTitleText.charAt(prev.length)
        }
        clearInterval(interval)
        return prev
      })
    }, 65)
    return () => clearInterval(interval)
  }, [view])

  // Sequential Reveal steps for Hero Section content on load
  useEffect(() => {
    if (view !== 'welcome') return
    const timeouts = [
      setTimeout(() => setRevealStep(1), 500),
      setTimeout(() => setRevealStep(2), 1800),
      setTimeout(() => setRevealStep(3), 3100),
      setTimeout(() => setRevealStep(4), 4400),
      setTimeout(() => setRevealStep(5), 5400),
      setTimeout(() => setRevealStep(6), 6400),
      setTimeout(() => setRevealStep(7), 7400),
      setTimeout(() => setRevealStep(8), 8400)
    ]
    return () => timeouts.forEach(clearTimeout)
  }, [view])

  // Single Global Audio State Sync Effect (Handles seamless song loading and autoplay transitions)
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    let targetSrc = ''
    let shouldLoop = true

    if (view === 'intro' || view === 'welcome') {
      targetSrc = '/Music/HappyBirthday.mp3'
      shouldLoop = true
    } else if (view === 'journey') {
      targetSrc = '/Music/YOUR THOUGHTS .mp3'
      shouldLoop = true
    } else if (view === 'celebration') {
      // Retain Hath Fadke loop if already active
      if (audio.src && audio.src.includes('Hathfadke.mp3')) {
        targetSrc = '/Music/Hathfadke.mp3'
        shouldLoop = true
      } else {
        targetSrc = '/Music/SoniyeBirthday.mp3'
        shouldLoop = false
      }
    }

    const currentSrc = audio.src ? new URL(audio.src, window.location.href).pathname : ''
    const normalizedTarget = new URL(targetSrc, window.location.href).pathname

    // Only switch source when target changes
    if (currentSrc !== normalizedTarget) {
      audio.pause()
      audio.src = targetSrc
      audio.load()
    }

    audio.loop = shouldLoop

    // Handle song transitions (for Soniye Birthday -> Hath Fadke loop)
    const handleEnded = () => {
      if (view === 'celebration' && targetSrc === '/Music/SoniyeBirthday.mp3') {
        audio.src = '/Music/Hathfadke.mp3'
        audio.loop = true
        audio.load()
        setCurrentCelebrationSong('hath')
        if (isMusicPlaying) {
          audio.play().catch((err) => console.log('Ended transition play error:', err))
        }
      }
    }

    audio.addEventListener('ended', handleEnded)

    if (isMusicPlaying) {
      audio.play().catch((err) => {
        console.log('Audio playback blocked or interrupted:', err)
        setIsMusicPlaying(false)
      })
    } else {
      audio.pause()
    }

    return () => {
      audio.removeEventListener('ended', handleEnded)
    }
  }, [view, isMusicPlaying])

  // Clean up global audio resource completely on unmount to prevent leaks
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
        audioRef.current = null
      }
    }
  }, [])

  // Unified global play/pause toggle
  const toggleMusic = () => {
    setIsMusicPlaying((prev) => !prev)
  }

  // Start Surprise Website (Goes to photo timeline)
  const startJourney = () => {
    setView('journey')
  }

  // Scroll Animations Handler (Optimized: unobserves once animated to free memory)
  useEffect(() => {
    if (view !== 'journey') return

    const scrollElements = document.querySelectorAll('.scroll-animate')
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated')
            observerRef.current.unobserve(entry.target) // Stop observing once triggered
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    )

    scrollElements.forEach((el) => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [view])

  // Scroll completion observer: unlocks cake celebration when user scrolls to bottom of timeline page
  useEffect(() => {
    if (view !== 'journey') return

    const ctaSection = document.querySelector('.celebration-cta-section')
    if (!ctaSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimelineCompleted(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(ctaSection)

    return () => {
      observer.disconnect()
    }
  }, [view])

  // Scheduler: Birthday message parade for 45 seconds after cake cutting
  useEffect(() => {
    if (!showCelebrationSequence) return

    const messagesList = [
      "Janamdin dian lakh lakh vadhaiyan! ❤️",
      "Rabb hamesha tenu khush rakhe. 🌸",
      "Teri muskaan hamesha chamkdi rahe. ✨",
      "Teri har dua kabool hove. 🤲",
      "Har din tere layi khas hove. 💖",
      "Khushiyan tere kadman nu chumdiyan rahn. 🌺",
      "Rab tere supne poore kare. 🌟",
      "Teri zindagi pyar naal bhari rahe. 💕",
      "Teri hasi sab ton sohni ae. 😊",
      "Har pal yaadgaar ban jave. 🎉",
      "Rabb di rehmat sada tere naal rahe. ❤️",
      "Teri har manzil asaan hove. 🌈",
      "Har nava savera khushiyan leke aave. ☀️",
      "Tera dil hamesha muskraunda rahe. 💝",
      "Teri zindagi phullan wang mehkdi rahe. 🌹",
      "Har ichha poori hove. ✨",
      "Tera har kadam kamyabi wal vadhe. 🏆",
      "Tu hamesha ehve hi pyari lagdi rahe. 💖",
      "Teri hasi kade na mukke. 😊",
      "Rab tenu buri nazar ton bachave. 🧿",
      "Khushiyan tere naal hamesha rehna. 💫",
      "Har saal hor vi sohna hove. 🎂",
      "Ajj da din sirf tera ae. 🥳",
      "Smile... Ajj tera birthday ae! ❤️",
      "Rabb tenu lambi umar deve. 🌸"
    ]
    const animationStyles = ['zoom-fade', 'float-up', 'glow-shimmer', 'bounce-in', 'slide-right', 'scale-glow']
    const colorsList = ['#ff4d6d', '#fbbf24', '#a855f7', '#db2777', '#c084fc', '#ffffff', '#f43f5e', '#ffd700']
    const fontStyles = ['var(--font-cursive)', 'var(--font-serif)', 'var(--font-sans)']

    const interval = setInterval(() => {
      const isMobile = window.innerWidth <= 768
      const baseSize = isMobile ? 1.2 : 1.8
      const varSize = isMobile ? 0.8 : 1.6
      const sizeVal = (Math.random() * varSize + baseSize).toFixed(2)
      
      const newMessage = {
        id: Math.random(),
        text: messagesList[Math.floor(Math.random() * messagesList.length)],
        style: animationStyles[Math.floor(Math.random() * animationStyles.length)],
        color: colorsList[Math.floor(Math.random() * colorsList.length)],
        font: fontStyles[Math.floor(Math.random() * fontStyles.length)],
        left: Math.floor(Math.random() * 60 + 20),
        top: Math.floor(Math.random() * 60 + 20),
        fontSize: `${sizeVal}rem`
      }

      setActiveMessages((prev) => [...prev, newMessage])

      setTimeout(() => {
        setActiveMessages((prev) => prev.filter((m) => m.id !== newMessage.id))
      }, 4500)

    }, 1200)

    const masterTimer = setTimeout(() => {
      clearInterval(interval)
      setShowCelebrationSequence(false)
      setLetterRevealed(true)
    }, 45000)

    return () => {
      clearInterval(interval)
      clearTimeout(masterTimer)
    }
  }, [showCelebrationSequence])

  // Confetti/Sparkles/Hearts Constant Canvas Engine
  useEffect(() => {
    const shouldRun = view === 'welcome' || view === 'intro' || (view === 'celebration' && cakeCut)
    
    if (!shouldRun) {
      const canvas = canvasRef.current
      if (canvas) {
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particles = []
    const colors = [
      '#ff4d6d', '#ff7fb6', '#ffccd5', '#a855f7', '#c084fc', 
      '#e9d5ff', '#d97706', '#f6d365', '#fda085', '#bf953f'
    ]

    class Particle {
      constructor(isBurst = false) {
        this.x = Math.random() * canvas.width
        this.y = isBurst ? (canvas.height * 0.85 + Math.random() * 50) : (Math.random() * canvas.height - 100)
        this.size = Math.random() * 6 + 3
        this.speedX = isBurst ? (Math.random() * 6 - 3) : (Math.random() * 2 - 1)
        this.speedY = isBurst ? (Math.random() * -10 - 5) : (Math.random() * 1.5 + 1.2)
        this.color = colors[colors.length - 1] // Gold
        
        if (Math.random() > 0.3) {
          this.color = colors[Math.floor(Math.random() * colors.length)]
        }
        
        this.rotation = Math.random() * 360
        this.rotationSpeed = Math.random() * 3 - 1.5
        this.type = Math.random() > 0.6 ? 'circle' : Math.random() > 0.4 ? 'heart' : 'star'
        this.gravity = isBurst ? 0.09 : 0.01
        
        if (this.type === 'heart' && !isBurst) {
          this.speedY = Math.random() * -1.5 - 0.8
          this.y = canvas.height + Math.random() * 100
        }
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.speedY += this.gravity
        this.rotation += this.rotationSpeed
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate((this.rotation * Math.PI) / 180)
        ctx.fillStyle = this.color

        if (this.type === 'circle') {
          ctx.beginPath()
          ctx.arc(0, 0, this.size, 0, Math.PI * 2)
          ctx.fill()
        } else if (this.type === 'heart') {
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.bezierCurveTo(-this.size, -this.size, -this.size * 1.8, this.size * 0.4, 0, this.size * 2)
          ctx.bezierCurveTo(this.size * 1.8, this.size * 0.4, this.size, -this.size, 0, 0)
          ctx.fill()
        } else if (this.type === 'star') {
          ctx.beginPath()
          for (let i = 0; i < 5; i++) {
            ctx.lineTo(Math.cos(((18 + i * 72) * Math.PI) / 180) * this.size, -Math.sin(((18 + i * 72) * Math.PI) / 180) * this.size)
            ctx.lineTo(Math.cos(((54 + i * 72) * Math.PI) / 180) * (this.size / 2.2), -Math.sin(((54 + i * 72) * Math.PI) / 180) * (this.size / 2.2))
          }
          ctx.closePath()
          ctx.fill()
        }
        ctx.restore()
      }
    }

    for (let i = 0; i < 80; i++) {
      particles.push(new Particle(false))
    }

    window.triggerBurst = () => {
      for (let i = 0; i < 180; i++) {
        particles.push(new Particle(true))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.update()
        p.draw()

        if (p.y > canvas.height + 50 || p.y < -150 || p.x < -50 || p.x > canvas.width + 50) {
          particles.splice(i, 1)
          if (particles.length < 80) {
            particles.push(new Particle(false))
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [view, cakeCut])

  // Trigger Cake Cutting ceremony actions
  const cutCakeAction = () => {
    if (cakeCut) return
    setKnifeAnimating(true)

    // Slice animation duration
    setTimeout(() => {
      setKnifeAnimating(false)
      setCakeCut(true)
      setShowCelebrationSequence(true) // Activate 45-second text fireworks sequence!

      if (window.triggerBurst) {
        window.triggerBurst()
      }

      // Floating Balloons release
      const colors = ['#ff8fa3', '#c084fc', '#ffd700', '#ff4d6d', '#e9d5ff', '#ffb6c1', '#dda0dd']
      const newBalloons = Array.from({ length: 35 }).map((_, i) => ({
        id: i,
        left: Math.random() * 90 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2.5,
        scale: Math.random() * 0.4 + 0.8
      }))
      setBalloons(newBalloons)

    }, 1200) // Knife sweep completes
  }

  // Pre-load background elements
  const starsArray = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    duration: Math.random() * 10 + 10,
    emoji: Math.random() > 0.6 ? '🌸' : Math.random() > 0.5 ? '✨' : '💖'
  }))

  const greetingLength = 15; // length of "Happy Birthday "
  const greetingPart = typedTitle.slice(0, greetingLength);
  const namePart = typedTitle.slice(greetingLength);

  const handleNavCelebrationClick = () => {
    if (timelineCompleted) {
      setView('celebration')
      window.scrollTo(0,0)
    } else {
      alert("Please scroll through the Photo Journey memories to unlock the Cake Celebration! 📸❤️")
    }
  }

  const handleGiftClick = () => {
    if (giftOpened) return
    setGiftOpened(true)
    setShowMusicPopup(true)
  }

  const handleStartMusicClick = () => {
    setShowMusicPopup(false)
    setGiftExploded(true)
    setIsMusicPlaying(true)

    // Trigger canvas explosion
    if (window.triggerBurst) {
      window.triggerBurst()
    }

    // Auto-transition to welcome page after 3.2 seconds
    setTimeout(() => {
      setView('welcome')
    }, 3200)
  }

  return (
    <>
      {/* Confetti & Floating Hearts canvas layer */}
      <canvas ref={canvasRef} className="celebration-canvas" />

      {/* Floating Sparkles and Flowers in Background */}
      <div className="floating-elements" aria-hidden="true">
        {starsArray.map((star) => (
          <span
            key={star.id}
            className="particle"
            style={{
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          >
            {star.emoji}
          </span>
        ))}
      </div>

      {/* On welcome page, render floating music button in top-right */}
      {view === 'welcome' && (
        <div className="global-music-fixed-container">
          <button
            type="button"
            className={`global-music-circle-btn ${isMusicPlaying ? 'playing' : ''}`}
            onClick={toggleMusic}
            title={isMusicPlaying ? 'Pause Music' : 'Play Music'}
            aria-label={isMusicPlaying ? 'Pause Music' : 'Play Music'}
          >
            <span className="global-music-icon-centered">
              {isMusicPlaying ? '🎵' : '⏸️'}
            </span>
          </button>
        </div>
      )}

      {/* Premium Navigation Header (Includes perfectly aligned circular music control) */}
      {view !== 'welcome' && view !== 'intro' && (
        <nav className="glass-nav">
          <div className="nav-container">
            <span className="nav-logo" onClick={() => setView('welcome')}>Kaifreen 💖</span>
            <div className="nav-links">
              <button 
                onClick={() => { setView('journey'); window.scrollTo(0,0); }} 
                className={`nav-link ${view === 'journey' ? 'active' : ''}`}
              >
                📸 Timeline
              </button>
              <button 
                onClick={handleNavCelebrationClick} 
                className={`nav-link ${view === 'celebration' ? 'active' : ''} ${!timelineCompleted ? 'locked' : ''}`}
              >
                {timelineCompleted ? '🎂 Celebration' : '🔒 Celebration'}
              </button>
              <button
                type="button"
                className={`global-music-circle-btn ${isMusicPlaying ? 'playing' : ''}`}
                onClick={toggleMusic}
                title={isMusicPlaying ? 'Pause Music' : 'Play Music'}
                aria-label={isMusicPlaying ? 'Pause Music' : 'Play Music'}
              >
                <span className="global-music-icon-centered">
                  {isMusicPlaying ? '🎵' : '⏸️'}
                </span>
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* Magical Premium Birthday Welcome Page (Intro Page) */}
      {view === 'intro' && (
        <div className="intro-page">
          {/* Twinkling Moon */}
          <div className="intro-moon">🌙</div>

          {/* Twinkling Star Elements */}
          <div className="intro-stars" aria-hidden="true">
            {Array.from({ length: 45 }).map((_, i) => (
              <span
                key={i}
                className="intro-star"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 4 + 2}s`,
                }}
              />
            ))}
          </div>

          {/* Hearts / Roses / Butterflies / Sparkles floating layer */}
          <div className="intro-floating-elements" aria-hidden="true">
            {Array.from({ length: 15 }).map((_, i) => {
              const emojis = ['💖', '🌹', '🦋', '✨', '🌸']
              return (
                <span
                  key={i}
                  className="intro-floating-emoji"
                  style={{
                    left: `${Math.random() * 90 + 5}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${Math.random() * 12 + 8}s`,
                    fontSize: `${Math.random() * 1.5 + 1}rem`
                  }}
                >
                  {emojis[i % emojis.length]}
                </span>
              )
            })}
          </div>

          {/* Cursor Trail Hearts */}
          {cursorTrail.map((heart) => (
            <span
              key={heart.id}
              className="intro-heart-trail"
              style={{
                left: `${heart.x}px`,
                top: `${heart.y}px`,
                color: heart.color,
                opacity: heart.opacity,
                transform: `translate(-50%, -50%) rotate(${heart.rotation}deg) scale(${heart.opacity})`
              }}
            >
              ❤️
            </span>
          ))}

          {/* Parallax Cosmic Backdrop Glow */}
          <div className="intro-bg-glow" />

          {/* Main Cinematic Text Content */}
          <div className="intro-content-container">
            {introRevealStep >= 1 && (
              <h1 className="intro-main-title animate-fade-in">
                ✨ Today is not just another day... ✨
              </h1>
            )}
            
            {introRevealStep >= 2 && (
              <h2 className="intro-subtitle animate-fade-in pink-glow">
                💖 Today is the most special day because the world's most special girl was born. 💖
              </h2>
            )}

            {introRevealStep >= 3 && (
              <h2 className="intro-title-celebrate animate-fade-in gold-glow">
                🎂 Happy Birthday to the most beautiful soul! 🎂
              </h2>
            )}

            {introRevealStep >= 4 && (
              <div className="intro-quote-card animate-fade-in">
                <p>
                  "Your smile makes every moment brighter, your kindness makes every heart happier, and today is all about celebrating you."
                </p>
              </div>
            )}

            {introRevealStep >= 5 && (
              <div className="intro-blessings-list animate-fade-in">
                <p className="intro-blessing-item">✨ May every dream you wish for come true.</p>
                <p className="intro-blessing-item">✨ May every smile stay forever on your face.</p>
                <p className="intro-blessing-item">✨ May every moment of your life be filled with happiness, love, and endless blessings.</p>
              </div>
            )}

            {introRevealStep >= 6 && (
              <h3 className="intro-you-banner animate-fade-in">
                💝 Today, let's celebrate someone truly unforgettable... <span className="you-highlight">YOU!</span>
              </h3>
            )}

            {/* Gift Box Interaction Section */}
            {introRevealStep >= 7 && (
              <div className={`intro-gift-section ${giftExploded ? 'gift-exploded-fade' : ''}`}>
                <div className="gift-box-wrapper">
                  <div 
                    className={`gift-box ${giftOpened ? 'opened' : ''}`} 
                    onClick={handleGiftClick}
                    title="Tap to open the birthday surprise!"
                  >
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="giftBodyGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#db2777" />
                          <stop offset="100%" stopColor="#9d174d" />
                        </linearGradient>
                        <linearGradient id="giftLidGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f472b6" />
                          <stop offset="100%" stopColor="#be185d" />
                        </linearGradient>
                        <linearGradient id="giftRibbonGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#fbbf24" />
                          <stop offset="100%" stopColor="#d97706" />
                        </linearGradient>
                        <filter id="giftGlow">
                          <feGaussianBlur stdDeviation="8" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>
                      <rect x="15" y="45" width="90" height="70" rx="10" fill="#db2777" opacity="0.3" filter="url(#giftGlow)" />
                      <g className="gift-lid-group">
                        <rect x="10" y="32" width="100" height="20" rx="6" fill="url(#giftLidGrad)" stroke="#fda4af" strokeWidth="1.5" />
                        <rect x="48" y="32" width="24" height="20" fill="url(#giftRibbonGrad)" />
                      </g>
                      <rect x="18" y="52" width="84" height="58" rx="8" fill="url(#giftBodyGrad)" stroke="#f472b6" strokeWidth="1.5" />
                      <rect x="48" y="52" width="24" height="58" fill="url(#giftRibbonGrad)" />
                      <g className="gift-bow-group">
                        <path d="M60 32 C45 12, 35 25, 60 32 Z" fill="url(#giftRibbonGrad)" stroke="#fbbf24" strokeWidth="1.5" />
                        <path d="M60 32 C75 12, 85 25, 60 32 Z" fill="url(#giftRibbonGrad)" stroke="#fbbf24" strokeWidth="1.5" />
                        <circle cx="60" cy="32" r="8" fill="#fbbf24" />
                      </g>
                    </svg>
                  </div>
                  <p className="gift-tap-label">Tap the Gift to Begin Your Birthday Surprise</p>
                </div>
              </div>
            )}
          </div>

          {/* Music Request Glassmorphism Modal Popup */}
          {showMusicPopup && (
            <div className="music-popup-overlay">
              <div className="music-popup-modal">
                <h3 className="music-popup-title">🎵 One Small Request...</h3>
                <p className="music-popup-message">
                  "This birthday surprise is made to be experienced with music. Please start the music to unlock the magical journey."
                </p>
                <button 
                  type="button" 
                  className="music-popup-btn transition-all"
                  onClick={handleStartMusicClick}
                >
                  ▶️ Start the Music
                </button>
              </div>
            </div>
          )}

          {/* Golden particles transition banner */}
          {giftExploded && (
            <div className="transition-overlay-banner">
              <div className="explosion-glow" />
              <h2 className="journey-begin-title">✨ Let the Birthday Journey Begin... ✨</h2>
            </div>
          )}
        </div>
      )}

      {/* Welcome / Breathtaking Hero Landing Page Overlay */}
      {view === 'welcome' && (
        <div className="welcome-overlay">
          <div className="hero-landing-layout">
            
            {/* Left Media Side: Photo frame, backlight glow, glass card, mini cake */}
            <div className="hero-media-side">
              <div className="photo-glow-back" />

              <div className="hero-photo-frame">
                <div className="hero-photo-frame-inner">
                  <img src="/Photos/hero.jpg" alt="Kaifreen Chauhan Hero Photo" fetchpriority="high" />
                </div>
              </div>

              {revealStep >= 8 && (
                <div className="comment-glass-card">
                  <p>A day to celebrate the most beautiful girl with the most beautiful soul 💖</p>
                </div>
              )}

              {revealStep >= 8 && (
                <div className="hero-cake-container">
                  <svg width="140" height="160" viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="120" cy="245" rx="100" ry="15" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="3" />
                    <path d="M50 245 L70 270 H170 L190 245 Z" fill="#d1d5db" />
                    <rect x="40" y="160" width="160" height="75" rx="15" fill="#fbcfe8" />
                    <ellipse cx="120" cy="160" rx="80" ry="10" fill="#f9a8d4" />
                    <ellipse cx="120" cy="235" rx="80" ry="10" fill="#fbcfe8" />
                    <path d="M40 160 C 50 175, 60 175, 70 160 C 80 180, 90 180, 100 160 C 110 170, 120 170, 130 160 C 140 178, 150 178, 160 160 C 170 170, 180 170, 190 160 C 195 170, 200 165, 200 160" fill="none" stroke="#db2777" strokeWidth="8" strokeLinecap="round" />
                    <rect x="65" y="95" width="110" height="60" rx="12" fill="#faf5ff" />
                    <ellipse cx="120" cy="95" rx="55" ry="8" fill="#f3e8ff" />
                    <ellipse cx="120" cy="155" rx="55" ry="8" fill="#faf5ff" />
                    <path d="M65 95 C 75 105, 85 105, 95 95 C 105 110, 115 110, 125 95 C 135 105, 145 105, 155 95 C 165 108, 170 100, 175 95" fill="none" stroke="#c084fc" strokeWidth="6" strokeLinecap="round" />
                    <rect x="116" y="50" width="8" height="40" rx="2" fill="#60a5fa" />
                    <line x1="120" y1="50" x2="120" y2="43" stroke="#374151" strokeWidth="2" />
                    <path className="candle-flame" d="M120 30 C116 38 124 38 120 30 Z" fill="#f97316" style={{ animation: 'candleFlicker 0.4s infinite ease-in-out', transformOrigin: '120px 43px' }} />
                  </svg>
                </div>
              )}
            </div>

            {/* Right Text Side: Splitted title, typewriter, Punjabi badge lists, CTA button */}
            <div className="hero-text-side">
              <div className="hero-typewriter-container">
                <h2 className="hero-typewriter-title">
                  <span className="title-greeting">{greetingPart}</span>
                  {namePart && <span className="title-name-cursive">{namePart}</span>}
                </h2>
              </div>

              <div className="hero-reveals-container">
                {revealStep >= 1 && (
                  <p className="reveal-line">Today is all about someone truly special 💖</p>
                )}
                {revealStep >= 2 && (
                  <p className="reveal-line">A girl with beauty, grace, and a beautiful soul ✨</p>
                )}
                {revealStep >= 3 && (
                  <p className="reveal-line">The prettiest smile and the purest heart 🌸</p>
                )}
              </div>

              <div className="hero-punjabi-badges-grid">
                {revealStep >= 4 && (
                  <span className="punjabi-badge">Teri smile bahut sohni aa ❤️</span>
                )}
                {revealStep >= 5 && (
                  <span className="punjabi-badge"> Tu rab di sab ton pyari creation lagdi aa ✨</span>
                )}
                {revealStep >= 6 && (
                  <span className="punjabi-badge"> Teri presence har jagah positivity le aundi aa 🌸</span>
                )}
                {revealStep >= 7 && (
                  <span className="punjabi-badge">Tu bahut hi special te beautiful aa 👑</span>
                )}
              </div>

              {revealStep >= 8 && (
                <div className="hero-start-btn-container">
                  <button
                    type="button"
                    className="hero-start-btn transition-all"
                    onClick={startJourney}
                  >
                    Start Special Journey ❤️
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Timeline Page Content */}
      {view === 'journey' && (
        <div className="main-app-container visible">
          <header className="main-header scroll-animate">
            <p>Wishing a magical day to</p>
            <h1 className="title-name">Kaifreen Chauhan</h1>
            <p>Happy Birthday! 🎂✨</p>
          </header>

          {/* Beautiful Romantic Punjabi Blessing Letter Card */}
          <div className="punjabi-blessing-section scroll-animate">
            <div className="sohniye-letter-card">
              <div className="card-decorations">
                <span className="card-decoration-item dec-star-1">✨</span>
                <span className="card-decoration-item dec-heart-1">❤️</span>
                <span className="card-decoration-item dec-star-2">🌸</span>
                <span className="card-decoration-item dec-heart-2">💖</span>
              </div>
              
              <h2 className="sohniye-title">Happy Birthday, Sohniye ❤️🎂</h2>
              
              <p className="sohniye-line-highlight">
                Rabb kare teri zindagi hamesha khushiyan naal bhari rahe.
              </p>
              
              <p className="sohniye-paragraph">
                Sach dassa, tu sirf sohni hi nahi, balki dil di vi bahut sohni insaan ae. 
                Teri muskaan kise da vi bura din changa bana sakdi ae. 
                Teri gallan vich jo mithaas ae, oh har kise kol nahi hundi.
              </p>
              
              <div className="sohniye-dua-block">
                <span className="dua-intro-label">Bas ikk hi dua ae... ✨</span>
                <p className="dua-content-text">
                  Rabb tenu hamesha hasda vasda rakhe, har supna tera poora hove, 
                  te teri zindagi vich kade kise cheez di kami na aave.
                </p>
              </div>

              <p className="sohniye-paragraph-sub">
                Ajj da din sirf tera ae, te tu har khushi di haqdar ae.
              </p>

              <h3 className="sohniye-signoff">
                Janamdin dian lakh lakh vadhaiyan, meri sohni muskaan. ❤️🎉
              </h3>
            </div>
          </div>

          <section className="journey-section" aria-label="Photo journey timeline">
            <div className="section-title-wrapper scroll-animate">
              <p className="section-subtitle">Memories through time</p>
              <h2 className="section-title">The Photo Journey</h2>
            </div>

            <div className="photos-timeline">
              {/* Childhood Era */}
              <div className="era-header-wrapper scroll-animate">
                <h3 className="era-header-title">Childhood Days</h3>
              </div>

              <div className="photos-grid">
                {CHILD_PHOTOS.map((photo) => (
                  <div className="photo-grid-item scroll-animate" key={photo.url}>
                    <div className="card-decorations">
                      <span className="card-decoration-item dec-star-1">✨</span>
                      <span className="card-decoration-item dec-heart-1">❤️</span>
                      <span className="card-decoration-item dec-star-2">🌸</span>
                      <span className="card-decoration-item dec-heart-2">💖</span>
                    </div>

                    <article className="photo-card">
                      <span className="card-era-badge">{photo.age}</span>
                      <div className="photo-card-inner">
                        <img src={photo.url} alt={`Kaifreen in ${photo.age}`} loading="lazy" decoding="async" />
                        <div className="compliment-overlay">
                          <p className="compliment-text">{photo.compliment}</p>
                          <p className="compliment-sub">Pure Loveliness</p>
                        </div>
                      </div>
                      <div className="photo-comment-box">
                        <p className="photo-comment">{photo.comment}</p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>

              {/* Teenage Era */}
              <div className="era-header-wrapper scroll-animate">
                <h3 className="era-header-title">Sweet Teenage Years</h3>
              </div>

              <div className="photos-grid">
                {TEEN_PHOTOS.map((photo) => (
                  <div className="photo-grid-item scroll-animate" key={photo.url}>
                    <div className="card-decorations">
                      <span className="card-decoration-item dec-star-1">✨</span>
                      <span className="card-decoration-item dec-heart-1">❤️</span>
                      <span className="card-decoration-item dec-star-2">🌸</span>
                      <span className="card-decoration-item dec-heart-2">💖</span>
                    </div>

                    <article className="photo-card">
                      <span className="card-era-badge">{photo.age}</span>
                      <div className="photo-card-inner">
                        <img src={photo.url} alt={`Kaifreen in ${photo.age}`} loading="lazy" decoding="async" />
                        <div className="compliment-overlay">
                          <p className="compliment-text">{photo.compliment}</p>
                          <p className="compliment-sub">Glow & Grace</p>
                        </div>
                      </div>
                      <div className="photo-comment-box">
                        <p className="photo-comment">{photo.comment}</p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>

              {/* Latest Era */}
              <div className="era-header-wrapper scroll-animate">
                <h3 className="era-header-title">The Glowing Present</h3>
              </div>

              <div className="photos-grid">
                {LATEST_PHOTOS.map((photo) => (
                  <div className="photo-grid-item scroll-animate" key={photo.url}>
                    <div className="card-decorations">
                      <span className="card-decoration-item dec-star-1">✨</span>
                      <span className="card-decoration-item dec-heart-1">❤️</span>
                      <span className="card-decoration-item dec-star-2">🌸</span>
                      <span className="card-decoration-item dec-heart-2">💖</span>
                    </div>

                    <article className="photo-card">
                      <span className="card-era-badge">{photo.age}</span>
                      <div className="photo-card-inner">
                        <img src={photo.url} alt={`Kaifreen recently`} loading="lazy" decoding="async" />
                        <div className="compliment-overlay">
                          <p className="compliment-text">{photo.compliment}</p>
                          <p className="compliment-sub">Stunning Queen</p>
                        </div>
                      </div>
                      <div className="photo-comment-box">
                        <p className="photo-comment">{photo.comment}</p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="special-section-wrapper" aria-label="Why Kaifreen is Special">
            <div className="section-title-wrapper scroll-animate">
              <p className="section-subtitle">Reasons we cherish you</p>
              <h2 className="section-title">Why Kaifreen is Special ❤️</h2>
            </div>

            <div className="special-grid">
              {WHY_SPECIAL_QUALITIES.map((quality, idx) => (
                <div 
                  className="special-card scroll-animate" 
                  key={quality.title}
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <span className="special-card-icon" role="img" aria-label={quality.title}>
                    {quality.icon}
                  </span>
                  <h3 className="special-card-title">{quality.title}</h3>
                  <p className="special-card-desc">{quality.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="video-section-wrapper" aria-label="Special Video Memories">
            <div className="section-title-wrapper scroll-animate">
              <p className="section-subtitle">Beautiful moments captured forever ✨</p>
              <h2 className="section-title">Special Video Memories 🎥❤️</h2>
            </div>

            <div className="scroll-animate">
              <VideoCard
                url={FEATURED_VIDEO_DATA.url}
                title={FEATURED_VIDEO_DATA.title}
                comment={FEATURED_VIDEO_DATA.comment}
                isFeatured={true}
              />
            </div>

            <div className="videos-grid-container scroll-animate">
              {OTHER_VIDEOS_DATA.map((video) => (
                <VideoCard
                  key={video.url}
                  url={video.url}
                  title={video.title}
                  comment={video.comment}
                />
              ))}
            </div>
          </section>

          <section className="message-section-wrapper" aria-label="Special message">
            <div className="message-card scroll-animate">
              <div className="message-card-inner">
                <span className="message-heart" aria-hidden="true">❤️</span>
                <h2 className="message-title">Happy Birthday Kaifreen</h2>
                <p className="message-body">
                  Wishing you endless happiness, success, love, and beautiful memories.
                  Keep smiling because your smile is truly magical.
                  May this year bring everything you dream of.
                </p>
                <div className="message-footer">With Love & Wishes 🌸</div>
              </div>
            </div>
          </section>

          <section className="celebration-cta-section scroll-animate">
            <div className="celebration-cta-banner">
              <h2>The journey is not complete without a wish... 🎂✨</h2>
              <p>A beautiful candlelit celebration is waiting just for you. Proceed to cut the birthday cake!</p>
              <button 
                className="enter-celebration-btn" 
                onClick={() => { setView('celebration'); window.scrollTo(0,0); }}
              >
                Proceed to Cake Celebration 🍰❤️
              </button>
            </div>
          </section>
        </div>
      )}

      {view === 'celebration' && (
        <div className="celebration-page-container">
          <div className="celebration-content">
            <header className="celebration-header">
              <span className="celebration-badge-top">Surprise Ceremony ✨</span>
              <h1 className="celebration-title">Kaifreen's Cake Celebration 🎂</h1>
              <p className="celebration-subtitle">Make a silent wish in your heart and cut the cake... ❤️</p>
            </header>

            <div className="interactive-cake-section">
              {knifeAnimating && (
                <div className="knife-overlay-animation">
                  <div className="virtual-knife">🔪✨</div>
                </div>
              )}

              <div className={`celebration-cake-stand ${cakeCut ? 'cake-is-cut' : ''}`}>
                <svg className="celebration-svg-cake" width="280" height="320" viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="140" cy="270" rx="120" ry="18" fill="url(#plateGrad)" stroke="#c084fc" strokeWidth="2" />
                  <path d="M70 270 L90 305 H190 L210 270 Z" fill="#e9d5ff" opacity="0.8" />
                  <ellipse cx="140" cy="305" rx="50" ry="8" fill="#c084fc" opacity="0.6" />

                  <g className="main-cake-body">
                    <rect x="50" y="170" width="180" height="85" rx="18" fill="url(#bottomTierGrad)" />
                    <ellipse cx="140" cy="170" rx="90" ry="15" fill="#f472b6" />
                    <ellipse cx="140" cy="255" rx="90" ry="15" fill="#db2777" opacity="0.2" />
                    <path d="M50 170 C 65 190, 80 190, 95 170 C 110 195, 125 195, 140 170 C 155 190, 170 190, 185 170 C 200 195, 215 195, 230 170" fill="none" stroke="#db2777" strokeWidth="8" strokeLinecap="round" />

                    <rect x="75" y="100" width="130" height="70" rx="14" fill="url(#topTierGrad)" />
                    <ellipse cx="140" cy="100" rx="65" ry="12" fill="#faf5ff" />
                    <ellipse cx="140" cy="170" rx="65" ry="12" fill="#faf5ff" opacity="0.1" />
                    <path d="M75 100 C 85 112, 95 112, 105 100 C 115 118, 125 118, 135 100 C 145 112, 155 112, 165 100 C 175 118, 185 118, 205 100" fill="none" stroke="#c084fc" strokeWidth="6" strokeLinecap="round" />

                    <circle cx="95" cy="130" r="4" fill="#fbbf24" />
                    <circle cx="120" cy="145" r="4" fill="#60a5fa" />
                    <circle cx="150" cy="125" r="4" fill="#34d399" />
                    <circle cx="170" cy="140" r="4" fill="#f43f5e" />
                    <circle cx="185" cy="120" r="4" fill="#e9d5ff" />
                  </g>

                  <g className={`cake-slice-wedge-group ${cakeCut ? 'slide-out' : ''}`}>
                    <path d="M140 170 L210 190 L210 255 L140 235 Z" fill="url(#sliceSideGrad)" opacity={cakeCut ? 1 : 0} />
                    <path d="M140 170 L140 235 L70 255 L70 190 Z" fill="url(#sliceInnerGrad)" opacity={cakeCut ? 1 : 0} />
                    <path d="M140 170 C 160 175, 190 185, 210 190 L210 255 C 190 250, 160 240, 140 235 Z" fill="#db2777" opacity={cakeCut ? 0.35 : 0} />
                  </g>

                  <g className="cake-candles">
                    <rect x="105" y="60" width="8" height="40" rx="2" fill="#fb7185" />
                    <line x1="109" y1="60" x2="109" y2="52" stroke="#374151" strokeWidth="2" />
                    {!cakeCut && (
                      <path className="candle-flame" d="M109 37 C105 45 113 45 109 37 Z" fill="#f59e0b" style={{ animation: 'candleFlicker 0.6s infinite ease-in-out', transformOrigin: '109px 52px' }} />
                    )}

                    <rect x="136" y="50" width="8" height="50" rx="2" fill="#60a5fa" />
                    <line x1="140" y1="50" x2="140" y2="42" stroke="#374151" strokeWidth="2" />
                    {!cakeCut && (
                      <path className="candle-flame" d="M140 27 C136 35 144 35 140 27 Z" fill="#f97316" style={{ animation: 'candleFlicker 0.4s infinite ease-in-out', transformOrigin: '140px 42px' }} />
                    )}

                    <rect x="167" y="60" width="8" height="40" rx="2" fill="#34d399" />
                    <line x1="171" y1="60" x2="171" y2="52" stroke="#374151" strokeWidth="2" />
                    {!cakeCut && (
                      <path className="candle-flame" d="M171 37 C167 45 175 45 171 37 Z" fill="#f59e0b" style={{ animation: 'candleFlicker 0.5s infinite ease-in-out', transformOrigin: '171px 52px' }} />
                    )}
                  </g>

                  <defs>
                    <linearGradient id="plateGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#faf5ff" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                    <linearGradient id="bottomTierGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#db2777" />
                      <stop offset="50%" stopColor="#fbcfe8" />
                      <stop offset="100%" stopColor="#db2777" />
                    </linearGradient>
                    <linearGradient id="topTierGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#7e22ce" />
                      <stop offset="50%" stopColor="#f3e8ff" />
                      <stop offset="100%" stopColor="#7e22ce" />
                    </linearGradient>
                    <linearGradient id="sliceSideGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f472b6" />
                      <stop offset="100%" stopColor="#db2777" />
                    </linearGradient>
                    <linearGradient id="sliceInnerGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fbcfe8" />
                      <stop offset="100%" stopColor="#f472b6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="cake-actions">
                <button 
                  className={`cut-cake-btn ${cakeCut ? 'disabled' : ''}`}
                  onClick={cutCakeAction}
                  disabled={cakeCut}
                >
                  {cakeCut ? '✨ Wish Made! Celebration On! ✨' : 'Cut the Cake 🎂'}
                </button>
              </div>
            </div>

            {letterRevealed && (
              <div className="heartfelt-letter-container">
                <div className="heartfelt-letter">
                  <div className="wax-seal">💖</div>
                  
                  <div className="letter-header">
                    <span className="letter-salutation">Dearest Kaifreen, 🌹</span>
                  </div>
                  
                  <div className="letter-body">
                    <p>
                      Tumhari maujoodgi is duniya mein ek khoobsurat roshni ki tarah hai,
                      aur tumhari woh pyari si muskaan har din ko khaas bana deti hai.
                    </p>
                    
                    <p>
                      Tum sirf khoobsurat hi nahi ho, balki dil se behad achhi, mazboot aur bahut pyari insaan ho.
                      Tumhari achhai aur sachchai tumhe sabse alag aur behad khaas banati hai.
                    </p>
                    
                    <p>
                      Tum jahan bhi jaati ho, apne saath khushiyan, sukoon aur positivity lekar aati ho.
                      Tumhari presence hi itni khaas hai ki har cheez aur bhi khoobsurat lagne lagti hai.
                    </p>

                    <p>
                      Is khaas din par meri dil se yahi dua hai ki
                      tumhari zindagi hamesha khushiyon, pyaar aur safalta se bhari rahe.
                    </p>
                    
                    <p className="letter-closing">
                      Tumhare saare sapne chahe chhote hon ya bade zaroor poore hon.
                      Tum hamesha aise hi muskurati raho, khush raho, aur apni roshni se sabki zindagi khoobsurat banati raho. 🌟
                    </p>
                  </div>

                  <div className="letter-footer">
                    <p className="footer-label">With all my love & warmest wishes,</p>
                    <p className="footer-signature">Happy Birthday! 🎂✨</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {showCelebrationSequence && (
        <div className="celebration-sequence-overlay">
          {activeMessages.map((msg) => (
            <div
              key={msg.id}
              className={`celebration-floating-message ${msg.style}`}
              style={{
                position: 'absolute',
                left: `${msg.left}%`,
                top: `${msg.top}%`,
                color: msg.color,
                fontFamily: msg.font,
                fontSize: msg.fontSize,
                transform: 'translate(-50%, -50%)',
                zIndex: 2010
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>
      )}

      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="balloon-drift"
          style={{
            left: `${balloon.left}%`,
            backgroundColor: balloon.color,
            animationDelay: `${balloon.delay}s`,
            transform: `scale(${balloon.scale})`,
          }}
        />
      ))}
    </>
  )
}

export default App
