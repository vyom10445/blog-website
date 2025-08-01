const posts = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Wandering Through the Wilderness",
    timeAgo: "2 hours ago",
    author: "Aarav Mehta",
    category: "Travel",
    content:
      "There’s something deeply peaceful about walking through an untouched forest. The smell of damp leaves, the rustle of animals nearby, and the sunlight filtering through the canopy all work together to calm the mind and soothe the soul. It's in these moments that we realize how disconnected we are from the natural world in our daily routines. Spending time in nature not only reduces stress but also fosters creativity and mindfulness. It's not just a walk—it's a rediscovery of what it means to be human in a world that’s constantly rushing forward.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    title: "How AI Is Changing Everything",
    timeAgo: "4 hours ago",
    author: "Riya Sharma",
    category: "Technology",
    content:
      "Artificial Intelligence is no longer confined to science fiction—it’s a tangible force that’s transforming industries across the globe. From healthcare diagnostics and personalized education to self-driving cars and predictive maintenance, AI has embedded itself into our everyday lives. But with great power comes great responsibility. As we embrace the efficiency and convenience AI brings, we must also question the ethical implications: data privacy, job displacement, and algorithmic bias. The future of AI lies not just in innovation but in ensuring that it serves humanity fairly and transparently.",
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?semt=ais_hybrid&w=740",
    title: "The Secret to the Perfect Pasta",
    timeAgo: "1 day ago",
    author: "Kabir Anand",
    category: "Food",
    content:
      "A great pasta dish isn’t just about boiling noodles and throwing on some sauce. It’s a delicate dance of timing, ingredients, and texture. The water must be salted just right, the pasta should be al dente, and the sauce—whether it's a rich marinara or a light aglio e olio—should cling to the noodles like a warm hug. Fresh ingredients make all the difference, and finishing your pasta in the sauce for the last few minutes is a game-changer. Cooking pasta is simple, yes—but cooking it well? That’s an art.",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    title: "Top 5 Hidden Beaches Around the World",
    timeAgo: "2 days ago",
    author: "Tara Deshmukh",
    category: "Travel",
    content:
      "When most people think of beaches, they imagine crowded tourist spots and overpriced resorts. But if you dig a little deeper, the world offers countless coastal gems tucked away from the spotlight. From the black sand shores of Reynisfjara in Iceland to the tranquil blue waters of Koh Rong Samloem in Cambodia, these beaches provide the kind of solitude and beauty that travel dreams are made of. Bring a book, a hammock, and your sense of adventure—you’re about to fall in love with nature all over again.",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=80",
    title: "5-Minute Workouts That Actually Work",
    timeAgo: "3 days ago",
    author: "Dev Rajput",
    category: "Fitness",
    content:
      "Busy schedules shouldn’t mean neglecting your health. High-Intensity Interval Training (HIIT) has proven that even five-minute routines can boost cardiovascular fitness, build muscle, and increase energy levels. The key lies in maximizing effort during short bursts of activity, followed by brief recovery. Think jumping jacks, burpees, push-ups, and mountain climbers—back-to-back, no excuses. Whether you’re between meetings or stuck in a hotel room, five minutes is all you need to get moving. Consistency matters more than duration, and your future self will thank you.",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    title: "Books That Changed My Perspective",
    timeAgo: "5 days ago",
    author: "Isha Verma",
    category: "Lifestyle",
    content:
      "Books have the unique power to open minds and shift worldviews. I used to think reading was just about knowledge or escape, but some books genuinely changed how I see the world. Titles like 'Man’s Search for Meaning' by Viktor Frankl or 'Sapiens' by Yuval Noah Harari made me rethink purpose, history, and identity. Fiction too has its place—works like '1984' or 'The Alchemist' can leave lasting emotional and philosophical impressions. If you're feeling stuck or uninspired, a great book might be the push you didn’t know you needed.",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
    title: "Capturing Life Through a Lens",
    timeAgo: "1 week ago",
    author: "Rohan Kapoor",
    category: "Photography",
    content:
      "Photography is about more than just pressing a button. It’s about learning to see—really see—the beauty and stories that exist in everyday moments. Whether it’s the glow of golden hour, the expression on a stranger’s face, or the subtle textures of urban architecture, each frame tells a tale. Starting out can feel overwhelming with all the gear and techniques out there, but don’t let that stop you. The best camera is the one you have, and the best photos come from the heart, not the specs.",
  },
  {
    id: 8,
    img: "https://d3o1wlpkmt4nt9.cloudfront.net/wp-content/uploads/2018/02/13150827/startup-failure-1-min.jpg",
    title: "Lessons from My First Startup Failure",
    timeAgo: "8 days ago",
    author: "Neha Jain",
    category: "Business",
    content:
      "Failure is not the opposite of success—it’s part of it. My first startup failed spectacularly. We had a great idea, a small but passionate team, and a working product, yet we overlooked the most critical thing: product-market fit. We were building what we *thought* people wanted, not what they actually needed. We also ignored feedback in favor of our own assumptions. But through that experience, I learned more than I ever could from a course or book. Resilience, humility, and adaptability—those are the real startup skills.",
  },
  {
    id: 9,
    img: "https://blog.cdn.level.game/2024/04/how-to-meditate-properly.webp",
    title: "Why I Meditate Every Morning",
    timeAgo: "10 days ago",
    author: "Aditya Nair",
    category: "Wellness",
    content:
      "Meditation has become a non-negotiable part of my daily routine. I used to wake up and immediately dive into emails, to-do lists, and social media. It was overwhelming. Now, I spend just 10 minutes each morning sitting in stillness, focusing on my breath. It sounds simple, but the effects are profound. I feel calmer, more focused, and more in control of my emotions. Meditation has helped me respond rather than react, stay centered in chaos, and find clarity in confusion. It’s a habit worth cultivating.",
  },
];

export default posts;
