export interface Drink {
  id: string;
  name: string;
  shop: string;
  diagnosis: string;
  imagePath: string;
}

export interface AnswerOption {
  emoji: string;
  text: string;
  scores: Record<string, number>;
}

export interface Question {
  id: number;
  prompt: string;
  options: AnswerOption[];
}

export const drinks: Drink[] = [
  {
    id: "matcha",
    name: "Strawberry Matcha Latte",
    shop: "Boba Guys",
    diagnosis:
      "Main Character Syndrome. You are actively romanticizing your life right now. Your stress levels are manageable, but your need for aesthetic, color-blocked beverages is critical.",
    imagePath: "/images/strawberry_matcha.png",
  },
  {
    id: "brownsugar",
    name: "Brown Sugar Boba Milk",
    shop: "Sunright Tea Studio",
    diagnosis:
      "Emotionally Fragile & Calorie Blind. The real world has been harsh to you today, and you require an immediate, aggressively warm, sugary hug from the inside out.",
    imagePath: "/images/brown_sugar_boba.png",
  },
  {
    id: "snowy",
    name: "Snowy Jasmine",
    shop: "Molly Tea",
    diagnosis:
      "A Delicate Flower (Who Needs Heavy Cream). You are trying to be elegant and floral, but deep down, you just want to eat a bowl of whipped cream and pecans.",
    imagePath: "/images/snowy_jasmine.png",
  },
  {
    id: "mango",
    name: "Coconut Mango Boom",
    shop: "Heytea",
    diagnosis:
      "Severe Reality Avoidance. You are completely done with the Bay Area. You are mentally clocked out and trying to teleport to a beach in Maui, but your budget only allows for a $7 beverage.",
    imagePath: "/images/coconut_mango.png",
  },
  {
    id: "fruit",
    name: "Signature Fruit Tea",
    shop: "Yifang Taiwan Fruit Tea",
    diagnosis:
      "Vitamin C Deficit & Chronic Boredom. You need a crisp slap in the face from fresh tropical fruits and the satisfaction of aggressively stabbing a passionfruit seed with your straw.",
    imagePath: "/images/yifang_fruit.png",
  },
  {
    id: "chaos",
    name: "Mango Passionfruit Peach Green Tea",
    shop: "TPumps",
    diagnosis:
      "Arrested Development (Circa 2014). You have chosen absolute chaos. You don't want a refined beverage; you want a violently sweet, nostalgic sugar bomb.",
    imagePath: "/images/tpumps_chaos.png",
  },
  {
    id: "peach",
    name: "Peach Me Sweetea",
    shop: "Tastea",
    diagnosis:
      "Dehydration & Good Vibes. You are having a decent day, but you are incredibly parched. You don't need caffeine shakes; you just need something fruity and deeply refreshing.",
    imagePath: "/images/peach_sweetea.png",
  },
  {
    id: "snob",
    name: "Dong Ding Oolong Tea Latte",
    shop: "Chicha San Chen",
    diagnosis:
      "Tea Superiority Complex. You are a purist silently judging everyone else in line ordering sugar slushies. You demand your leaves be espresso-brewed to perfection.",
    imagePath: "/images/chicha_oolong.png",
  },
  {
    id: "roasted",
    name: "Tie Guan Yin Tea Latte",
    shop: "TP Tea",
    diagnosis:
      "Craving Mature Comfort. You are an adult who has their life mostly together. You want the deep, roasted flavor of premium tea, wrapped in the cozy blanket of milk and boba.",
    imagePath: "/images/tp_tieguanyin.png",
  },
  {
    id: "coffee",
    name: "Vietnamese Coffee with Boba",
    shop: "7 Leaves Cafe",
    diagnosis:
      "Dangerous Levels of Sleep Deprivation. You are running on pure fumes, anxiety, and audacity. You don't need a drink; you need a defibrillator.",
    imagePath: "/images/vietnamese_coffee.png",
  },
];

export const questions: Question[] = [
  {
    id: 1,
    prompt: "Setting up your profile. How are we coping with reality today?",
    options: [
      {
        emoji: "🥺",
        text: "Fragile. I need a warm, sugary hug.",
        scores: { brownsugar: 2, roasted: 2 },
      },
      {
        emoji: "⚡️",
        text: "I need rocket fuel. Sleep is for the weak.",
        scores: { coffee: 3, snob: 2 },
      },
      {
        emoji: "🏝️",
        text: "Take me away from my responsibilities.",
        scores: { mango: 2, fruit: 2 },
      },
      {
        emoji: "✨",
        text: "Thriving and better than everyone else.",
        scores: { matcha: 2, snowy: 2 },
      },
    ],
  },
  {
    id: 2,
    prompt: "Red flags and green flags. What's your current text reply speed?",
    options: [
      {
        emoji: "📱",
        text: "0.2 seconds. I am fueled by anxiety.",
        scores: { coffee: 2, chaos: 2 },
      },
      {
        emoji: "👻",
        text: "Left them on read. Romanticizing my life.",
        scores: { matcha: 2, snob: 2 },
      },
      {
        emoji: "💬",
        text: "Group chat menace. Sending 15 memes.",
        scores: { mango: 2, peach: 2 },
      },
      {
        emoji: "🛌",
        text: "Reply in 3-5 business days from bed.",
        scores: { brownsugar: 2, snowy: 2 },
      },
    ],
  },
  {
    id: 3,
    prompt: "Let's talk compatibility. How brave is your digestive system today?",
    options: [
      {
        emoji: "🧀",
        text: "I fear nothing. Heavy cream and foam.",
        scores: { brownsugar: 4, snowy: 3 },
      },
      {
        emoji: "🥥",
        text: "Plant milk save me. Dairy hurts.",
        scores: { fruit: 2, mango: 3, chaos: 2, peach: 2 },
      },
      {
        emoji: "🧊",
        text: "Clear liquids. Keep milk away.",
        scores: { fruit: 3, chaos: 2, peach: 2 },
      },
      {
        emoji: "🫠",
        text: "I'm willing to risk it all for sugar.",
        scores: { chaos: 2, roasted: 2 },
      },
    ],
  },
  {
    id: 4,
    prompt: "What kind of dynamic are you craving right now? Do you want constant stimulation and chaos, or just absolute peace?",
    options: [
      {
        emoji: "🪨",
        text: "Max chew. Gnawing on my feelings.",
        scores: { brownsugar: 3, mango: 2, peach: 2, roasted: 2 },
      },
      {
        emoji: "🥣",
        text: "Textural explosion—sago, jelly, everything.",
        scores: { mango: 3, fruit: 2 },
      },
      {
        emoji: "☁️",
        text: "Velvety smooth. Just light foam.",
        scores: { snowy: 2, peach: 2, matcha: 2 },
      },
      {
        emoji: "💧",
        text: "Zero chewing. Let me chug in peace.",
        scores: { snob: 2, coffee: 2 },
      },
    ],
  },
  {
    id: 5,
    prompt: "Profile aesthetic. If you don't post it on IG, did it even happen?",
    options: [
      {
        emoji: "📸",
        text: "Camera eats first. Needs beautiful layers.",
        scores: { matcha: 3, mango: 2, roasted: 2 },
      },
      {
        emoji: "🌴",
        text: "Tropical vacation in a cup.",
        scores: { mango: 2, fruit: 2 },
      },
      {
        emoji: "🤎",
        text: "Brown sludge of pure flavor.",
        scores: { brownsugar: 2, roasted: 2, coffee: 2 },
      },
      {
        emoji: "🍵",
        text: "Minimalist, elite, 'tea purist' vibes.",
        scores: { snob: 3, peach: 2 },
      },
    ],
  },
  {
    id: 6,
    prompt: "Setting the scene for our date. What Bay Area microclimate are we dealing with right now?",
    options: [
      {
        emoji: "🥵",
        text: "South Bay sun. Brain freeze required.",
        scores: { mango: 3, peach: 2, fruit: 2 },
      },
      {
        emoji: "🌉",
        text: "Shivering in SF fog. Warm me up.",
        scores: { roasted: 2, brownsugar: 2 },
      },
      {
        emoji: "🧊",
        text: "Iced coffee in a blizzard. I don't feel temperature.",
        scores: { mango: 2, matcha: 2 },
      },
      {
        emoji: "🌪️",
        text: "I am a chaotic neutral. Dealer's choice.",
        scores: { chaos: 2, snowy: 2 },
      },
    ],
  },
  {
    id: 7,
    prompt: "Getting to the sweet stuff. What is your sugar tolerance today?",
    options: [
      {
        emoji: "🍭",
        text: "Vibrate through the floor. 120% sweet.",
        scores: { chaos: 3, brownsugar: 2 },
      },
      {
        emoji: "🍰",
        text: "Decadent dessert level.",
        scores: { snowy: 2, mango: 2 },
      },
      {
        emoji: "🍓",
        text: "Natural, fruity sweetness.",
        scores: { fruit: 2, peach: 2 },
      },
      {
        emoji: "🌿",
        text: "Zero to 25%. Taste the tea leaves.",
        scores: { snob: 3, roasted: 2, matcha: 2 },
      },
    ],
  },
  {
    id: 8,
    prompt: "The final vibe check. Pick the scenario that speaks to your soul right now.",
    options: [
      {
        emoji: "🚗",
        text: "2010s pop in the car with windows down.",
        scores: { chaos: 3, peach: 2 },
      },
      {
        emoji: "💼",
        text: "Typing furiously while quietly judging.",
        scores: { coffee: 3, snob: 2 },
      },
      {
        emoji: "🛁",
        text: "Bubble bath and ignoring my emails.",
        scores: { matcha: 3, snowy: 2 },
      },
      {
        emoji: "🎢",
        text: "Screaming on a rollercoaster.",
        scores: { brownsugar: 2, mango: 2 },
      },
    ],
  },
];
