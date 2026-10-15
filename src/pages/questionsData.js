// src/pages/questionsData.js

export const allowedTeamCode = [
  "SBIX-CHG-AQ-01", 
  "SBIX-SHK-AQ-03",
  "SBIX-BHT-AQ-11",
  "SBIX-BHL-AQ-09",
  "SBIX-GJR-AQ-21",
  "SBIX-BLW-AQ-19",
  "SBIX-BHL-AQ-12",
  "SBIX-NSR-AQ-10",
  "SBIX-BTH-AQ-17",
  "SBIX-CNK-AQ-13",
  "SBIX-KPR-AQ-08",
  "SBIX-MOH-AQ-02",
  "SBIX-FTB-AQ-04",
  "SBIX-DLK-AQ-20",
  "SBIX-KMP-AQ-06",
  "SBIX-JNR-AQ-05",
  "SBIX-BJK-AQ-15",
  "SBIX-JJN-AQ-14",
  "SBIX-GSP-AQ-07",
  "SBIX-LDG-AQ-16"
]

// export const QUESTIONS_DATA = [
//   {
//     id: 1,
//     question: {
//       en: "What is the primary function of the React `useEffect` hook in a component lifecycle?",
//       hi: "React घटक जीवनचक्र (component lifecycle) में `useEffect` हुक का मुख्य कार्य क्या है?",
//       pa: "React ਕੰਪੋਨੈਂਟ ਲਾਈਫਸਾਈਕਲ ਵਿੱਚ `useEffect` ਹੁੱਕ ਦਾ ਮੁੱਖ ਕੰਮ ਕੀ ਹੈ?",
//     },
//     options: {
//       en: [
//         "A. To directly manipulate the DOM styling rules",
//         "B. To perform side effects such as data fetching and subscriptions",
//         "C. To manage global Redux state across routes",
//         "D. To handle form input validations synchronously",
//       ],
//       hi: [
//         "A. DOM स्टाइलिंग नियमों को सीधे बदलना",
//         "B. डेटा लाना (data fetching) और सब्सक्रिप्शन जैसे साइड इफेक्ट्स करना",
//         "C. विभिन्न रूट्स के बीच ग्लोबल Redux स्टेट का प्रबंधन करना",
//         "D. फॉर्म इनपुट वैलिडेसन को सिंक्रोनस रूप से संभालना",
//       ],
//       pa: [
//         "A. DOM ਸਟਾਈਲਿੰਗ ਨਿਯਮਾਂ ਨੂੰ ਸਿੱਧਾ ਬਦਲਣਾ",
//         "B. ਡਾਟਾ ਪ੍ਰਾਪਤ ਕਰਨ ਅਤੇ ਸਬਸਕ੍ਰਿਪਸ਼ਨ ਵਰਗੇ ਸਾਈਡ ਇਫੈਕਟਸ ਕਰਨਾ",
//         "C. ਰੂਟਾਂ ਵਿੱਚ ਗਲੋਬਲ Redux ਸਟੇਟ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰਨਾ",
//         "D. ਫਾਰਮ ਇਨਪੁਟ ਵੈਧਤਾਵਾਂ ਨੂੰ ਸਮਕਾਲੀ ਰੂਪ ਵਿੱਚ ਸੰਭਾਲਣਾ",
//       ],
//     },
//     answer: 1,
//   },
//   {
//     id: 2,
//     question: {
//       en: "In Artificial Intelligence, what does the term 'Machine Learning' specifically refer to?",
//       hi: "आर्टिफिशियल इंटेलिजेंस (AI) में 'मशीन लर्निंग' शब्द का विशेष रूप से क्या अर्थ है?",
//       pa: "ਆਰਟੀਫਿਸ਼ੀਅਲ ਇੰਟੈਲੀਜੈਂਸ ਵਿੱਚ 'ਮਸ਼ੀਨ ਲਰਨਿੰਗ' ਸ਼ਬਦ ਦਾ ਖਾਸ ਤੌਰ 'ਤੇ ਕੀ ਅਰਥ ਹੈ?",
//     },
//     options: {
//       en: [
//         "A. Hardcoding strict rules for every possible input",
//         "B. Algorithms that allow computers to learn from data without explicit programming",
//         "C. The physical manufacturing process of computer microchips",
//         "D. Using high-speed database queries to fetch cached results",
//       ],
//       hi: [
//         "A. हर संभव इनपुट के लिए सख्त नियम हार्डकोड करना",
//         "B. ऐसे एल्गोरिदम जो कंप्यूटर को बिना स्पष्ट प्रोग्रामिंग के डेटा से सीखने की अनुमति देते हैं",
//         "C. कंप्यूटर माइक्रोचिप्स के निर्माण की भौतिक प्रक्रिया",
//         "D. कैश्ड परिणाम प्राप्त करने के लिए हाई-स्पीड डेटाबेस प्रश्नों का उपयोग करना",
//       ],
//       pa: [
//         "A. ਹਰ ਸੰਭਵ ਇਨਪੁਟ ਲਈ ਸਖ਼ਤ ਨਿਯਮਾਂ ਨੂੰ ਹਾਰਡਕੋਡ ਕਰਨਾ",
//         "B. ਐਲਗੋਰਿਦਮ ਜੋ ਕੰਪਿਊਟਰਾਂ ਨੂੰ ਬਿਨਾਂ ਸਪੱਸ਼ਟ ਪ੍ਰੋਗਰਾਮਿੰਗ ਦੇ ਡਾਟਾ ਤੋਂ ਸਿੱਖਣ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦੇ ਹਨ",
//         "C. ਕੰਪੋਨੈਂਟ ਮਾਈਕ੍ਰੋਚਿਪਸ ਦੀ ਭੌਤਿਕ ਨਿਰਮਾਣ ਪ੍ਰਕਿਰਿਆ",
//         "D. ਕੈਸ਼ ਕੀਤੇ ਨਤੀਜੇ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਹਾਈ-ਸਪੀਡ ਡਾਟਾਬੇਸ ਕ্যোਅਰੀਆਂ ਦੀ ਵਰਤੋਂ ਕਰਨਾ",
//       ],
//     },
//     answer: 1,
//   },
//   {
//     id: 3,
//     question: {
//       en: "Which Tailwind CSS class is used to make a container flexbox?",
//       hi: "किसी कंटेनर को फ्लेक्सबॉक्स बनाने के लिए किस Tailwind CSS क्लास का उपयोग किया जाता है?",
//       pa: "ਕੰਟੇਨਰ ਨੂੰ ਫਲੈਕਸਬਾਕਸ ਬਣਾਉਣ ਲਈ ਕਿਹੜੀ Tailwind CSS ਕਲਾਸ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?",
//     },
//     options: {
//       en: ["A. display-flex", "B. d-flex", "C. flex", "D. layout-flex"],
//       hi: ["A. display-flex", "B. d-flex", "C. flex", "D. layout-flex"],
//       pa: ["A. display-flex", "B. d-flex", "C. flex", "D. layout-flex"],
//     },
//     answer: 2,
//   },
//   {
//     id: 4,
//     question: {
//       en: "What is the purpose of the `useState` hook in React?",
//       hi: "React में `useState` हुक का मुख्य उद्देश्य क्या है?",
//       pa: "React ਵਿੱਚ `useState` ਹੁੱਕ ਦਾ ਮਕਸਦ ਕੀ ਹੈ?",
//     },
//     options: {
//       en: [
//         "A. To store stateful values and trigger re-renders when updated",
//         "B. To perform network requests to REST APIs",
//         "C. To prevent components from rendering on mobile devices",
//         "D. To create global state shared across all components automatically",
//       ],
//       hi: [
//         "A. स्टेटफुल मानों को स्टोर करना और अपडेट होने पर री-रेंडर ट्रिगर करना",
//         "B. REST APIs पर नेटवर्क अनुरोध भेजना",
//         "C. कंपोनेंट्स को मोबाइल उपकरणों पर रेंडर होने से रोकना",
//         "D. सभी कंपोनेंट्स के बीच स्वचालित रूप से साझा ग्लोबल स्टेट बनाना",
//       ],
//       pa: [
//         "A. ਸਟੇਟਫੁੱਲ ਮੁੱਲਾਂ ਨੂੰ ਸਟੋਰ ਕਰਨਾ ਅਤੇ ਅੱਪਡੇਟ ਹੋਣ 'ਤੇ ਮੁੜ-ਰੈਂਡਰ ਸ਼ੁਰੂ ਕਰਨਾ",
//         "B. REST APIs ਲਈ ਨੈੱਟਵਰਕ ਬੇਨਤੀਆਂ ਕਰਨਾ",
//         "C. ਮੋਬਾਈਲ ਡਿਵਾਈਸਾਂ 'ਤੇ ਕੰਪੋਨੈਂਟਸ ਨੂੰ ਰੈਂਡਰ ਹੋਣ ਤੋਂ ਰੋਕਣਾ",
//         "D. ਸਾਰੇ ਕੰਪੋਨੈਂਟਸ ਵਿੱਚ ਸਾਂਝੀ ਗਲੋਬਲ ਸਟੇਟ ਆਟੋਮੈਟਿਕਲੀ ਬਣਾਉਣਾ",
//       ],
//     },
//     answer: 0,
//   },
//   {
//     id: 5,
//     question: {
//       en: "In Machine Learning, what is 'Overfitting'?",
//       hi: "मशीन लर्निंग में 'ओवरफिटिंग' (Overfitting) क्या है?",
//       pa: "ਮਸ਼ੀਨ ਲਰਨਿੰਗ ਵਿੱਚ 'ਓਵਰਫਿਟਿੰਗ' (Overfitting) ਕੀ ਹੈ?",
//     },
//     options: {
//       en: [
//         "A. When a model performs poorly on training data and test data",
//         "B. When a model performs exceptionally well on training data but poorly on unseen test data",
//         "C. When a model takes too long to load into memory",
//         "D. When the dataset has too few features to train on",
//       ],
//       hi: [
//         "A. जब मॉडल ट्रेनिंग डेटा और टेस्ट डेटा दोनों पर खराब प्रदर्शन करता है",
//         "B. जब मॉडल ट्रेनिंग डेटा पर बहुत अच्छा प्रदर्शन करता है लेकिन नए टेस्ट डेटा पर खराब",
//         "C. जब मॉडल मेमोरी में लोड होने में बहुत अधिक समय लेता है",
//         "D. जब डेटासेट में ट्रेनिंग के लिए बहुत कम विशेषताएं होती हैं",
//       ],
//       pa: [
//         "A. ਜਦੋਂ ਇੱਕ ਮਾਡਲ ਟ੍ਰੇਨਿੰਗ ਡਾਟਾ ਅਤੇ ਟੈਸਟ ਡਾਟਾ ਦੋਵਾਂ 'ਤੇ ਮਾੜਾ ਪ੍ਰਦਰਸ਼ਨ ਕਰਦਾ ਹੈ",
//         "B. ਜਦੋਂ ਮਾਡਲ ਟ੍ਰੇਨਿੰਗ ਡਾਟਾ 'ਤੇ ਵਧੀਆ ਪ੍ਰਦਰਸ਼ਨ ਕਰਦਾ ਹੈ ਪਰ ਅਣਦੇਖੇ ਟੈਸਟ ਡਾਟਾ 'ਤੇ ਮਾੜਾ",
//         "C. ਜਦੋਂ ਇੱਕ ਮਾਡਲ ਮੈਮੋਰੀ ਵਿੱਚ ਲੋਡ ਹੋਣ ਲਈ ਬਹੁਤ ਜ਼ਿਆਦਾ ਸਮਾਂ ਲੈਂਦਾ ਹੈ",
//         "D. ਜਦੋਂ ਡਾਟਾਸੈੱਟ ਵਿੱਚ ਟ੍ਰੇਨ ਕਰਨ ਲਈ ਬਹੁਤ ਘੱਟ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਹੁੰਦੀਆਂ ਹਨ",
//       ],
//     },
//     answer: 1,
//   },
//   {
//     id: 6,
//     question: {
//       en: "Which HTML5 attribute is used to uniquely identify an element?",
//       hi: "HTML5 में किसी एलिमेंट की विशिष्ट पहचान (unique identification) के लिए किस एट्रिब्यूट का उपयोग किया जाता है?",
//       pa: "HTML5 ਵਿੱਚ ਕਿਸੇ ਐਲੀਮੈਂਟ ਦੀ ਵਿਲੱਖਣ ਪਛਾਣ ਕਰਨ ਲਈ ਕਿਹੜਾ ਐਟਰੀਬਿਊਟ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?",
//     },
//     options: {
//       en: ["A. class", "B. key", "C. id", "D. name"],
//       hi: ["A. class", "B. key", "C. id", "D. name"],
//       pa: ["A. class", "B. key", "C. id", "D. name"],
//     },
//     answer: 2,
//   },
//   {
//     id: 7,
//     question: {
//       en: "What does 'NLP' stand for in Artificial Intelligence?",
//       hi: "आर्टिफिशियल इंटेलिजेंस (AI) में 'NLP' का पूर्ण रूप क्या है?",
//       pa: "ਆਰਟੀਫਿਸ਼ੀਅਲ ਇੰਟੈਲੀਜੈਂਸ ਵਿੱਚ 'NLP' ਦਾ ਪੂਰਾ ਨਾਮ ਕੀ ਹੈ?",
//     },
//     options: {
//       en: [
//         "A. Natural Language Processing",
//         "B. Network Protocol Logic",
//         "C. Neural Predictive Learning",
//         "D. Non-Linear Programming",
//       ],
//       hi: [
//         "A. नेचुरल लैंग्वेज प्रोसेसिंग (Natural Language Processing)",
//         "B. नेटवर्क प्रोटोकॉल लॉजिक (Network Protocol Logic)",
//         "C. न्यूरल प्रेडिक्टिव लर्निंग (Neural Predictive Learning)",
//         "D. नॉन-लीनियर प्रोग्रामिंग (Non-Linear Programming)",
//       ],
//       pa: [
//         "A. Natural Language Processing",
//         "B. Network Protocol Logic",
//         "C. Neural Predictive Learning",
//         "D. Non-Linear Programming",
//       ],
//     },
//     answer: 0,
//   },
//   {
//     id: 8,
//     question: {
//       en: "How do you pass data down from a parent component to a child component in React?",
//       hi: "React में पैरेंट घटक से चाइल्ड घटक में डेटा कैसे भेजा जाता है?",
//       pa: "React ਵਿੱਚ ਪੇਰੈਂਟ ਕੰਪੋਨੈਂਟ ਤੋਂ ਚਾਈਲਡ ਕੰਪੋਨੈਂਟ ਤੱਕ ਡਾਟਾ ਕਿਵੇਂ ਭੇਜਿਆ ਜਾਂਦਾ ਹੈ?",
//     },
//     options: {
//       en: [
//         "A. Via State",
//         "B. Via Props",
//         "C. Via Reducers",
//         "D. Via Context API only",
//       ],
//       hi: [
//         "A. स्टेट के माध्यम से (Via State)",
//         "B. प्रोप्स के माध्यम से (Via Props)",
//         "C. रिड्यूसर के माध्यम से (Via Reducers)",
//         "D. केवल कॉन्टेक्स्ट API के माध्यम से (Via Context API)",
//       ],
//       pa: [
//         "A. State ਰਾਹੀਂ",
//         "B. Props ਰਾਹੀਂ",
//         "C. Reducers ਰਾਹੀਂ",
//         "D. ਸਿਰਫ਼ Context API ਰਾਹੀਂ",
//       ],
//     },
//     answer: 1,
//   },
//   {
//     id: 9,
//     question: {
//       en: "Which HTTP method is typically used to create a new resource on a server?",
//       hi: "सर्वर पर एक नया रिसोर्स बनाने के लिए आमतौर पर किस HTTP मेथड का उपयोग किया जाता है?",
//       pa: "ਸਰਵਰ 'ਤੇ ਨਵਾਂ ਸਰੋਤ ਬਣਾਉਣ ਲਈ ਆਮ ਤੌਰ 'ਤੇ ਕਿਹੜਾ HTTP ਮੈਥਡ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?",
//     },
//     options: {
//       en: ["A. GET", "B. PUT", "C. POST", "D. DELETE"],
//       hi: ["A. GET", "B. PUT", "C. POST", "D. DELETE"],
//       pa: ["A. GET", "B. PUT", "C. POST", "D. DELETE"],
//     },
//     answer: 2,
//   },
//   {
//     id: 10,
//     question: {
//       en: "In Tailwind CSS, which class sets the text color to red-500?",
//       hi: "Tailwind CSS में, कौन सी क्लास टेक्स्ट का रंग red-500 पर सेट करती है?",
//       pa: "Tailwind CSS ਵਿੱਚ ਟੈਕਸਟ ਦਾ ਰੰਗ red-500 ਸੈੱਟ ਕਰਨ ਲਈ ਕਿਹੜੀ ਕਲਾਸ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?",
//     },
//     options: {
//       en: [
//         "A. color-red-500",
//         "B. text-red-500",
//         "C. font-red-500",
//         "D. bg-red-500",
//       ],
//       hi: [
//         "A. color-red-500",
//         "B. text-red-500",
//         "C. font-red-500",
//         "D. bg-red-500",
//       ],
//       pa: [
//         "A. color-red-500",
//         "B. text-red-500",
//         "C. font-red-500",
//         "D. bg-red-500",
//       ],
//     },
//     answer: 1,
//   },
//   {
//     id: 11,
//     question: {
//       en: "What type of learning algorithm uses labeled dataset for training?",
//       hi: "ट्रेनिंग के लिए किस प्रकार का लर्निंग एल्गोरिदम लेबल्ड डेटासेट (labeled dataset) का उपयोग करता है?",
//       pa: "ਟ੍ਰੇਨਿੰਗ ਲਈ ਕਿਹੜਾ ਲਰਨਿੰਗ ਐਲਗੋਰਿਦਮ ਲੇਬਲ ਵਾਲੇ ਡਾਟਾਸੈੱਟ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ?",
//     },
//     options: {
//       en: [
//         "A. Supervised Learning",
//         "B. Unsupervised Learning",
//         "C. Reinforcement Learning",
//         "D. Self-Organizing Maps",
//       ],
//       hi: [
//         "A. सुपरवाइज्ड लर्निंग (Supervised Learning)",
//         "B. अनसुपरवाइज्ड लर्निंग (Unsupervised Learning)",
//         "C. सुदृढ़ीकरण लर्निंग (Reinforcement Learning)",
//         "D. सेल्फ-ऑर्गेनाइजिंग मैप्स (Self-Organizing Maps)",
//       ],
//       pa: [
//         "A. Supervised Learning",
//         "B. Unsupervised Learning",
//         "C. Reinforcement Learning",
//         "D. Self-Organizing Maps",
//       ],
//     },
//     answer: 0,
//   },
//   {
//     id: 12,
//     question: {
//       en: "What does the virtual DOM in React help optimize?",
//       hi: "React में वर्चुअल DOM (Virtual DOM) किसको ऑप्टिमाइज़ करने में मदद करता है?",
//       pa: "React ਵਿੱਚ ਵਰਚੁਅਲ DOM ਕਿਸ ਚੀਜ਼ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ?",
//     },
//     options: {
//       en: [
//         "A. Network bandwidth speed",
//         "B. Real DOM manipulation and rendering performance",
//         "C. Database query execution time",
//         "D. Server-side security checks",
//       ],
//       hi: [
//         "A. नेटवर्क बैंडविड्थ स्पीड",
//         "B. वास्तविक DOM हेरफेर और रेंडरिंग प्रदर्शन",
//         "C. डेटाबेस क्वेरी निष्पादन समय",
//         "D. सर्वर-साइड सुरक्षा जांच",
//       ],
//       pa: [
//         "A. ਨੈੱਟਵਰਕ ਬੈਂਡਵਿਡਥ ਸਪੀਡ",
//         "B. ਅਸਲ DOM ਮੈਨੀਪੁਲੇਸ਼ਨ ਅਤੇ ਰੈਂਡਰਿੰਗ ਪ੍ਰਦਰਸ਼ਨ",
//         "C. ਡਾਟਾਬੇਸ ਕ্যোਅਰੀ ਐਗਜ਼ੀਕਿਊਸ਼ਨ ਸਮਾਂ",
//         "D. ਸਰਵਰ-ਸਾਈਡ ਸੁਰੱਖਿਆ ਜਾਂਚਾਂ",
//       ],
//     },
//     answer: 1,
//   },
//   {
//     id: 13,
//     question: {
//       en: "Which JavaScript keyword is used to declare a constant variable that cannot be reassigned?",
//       hi: "जावास्क्रिप्ट में ऐसे वेरिएबल की घोषणा के लिए किस कीवर्ड का उपयोग किया जाता है जिसे दोबारा बदला नहीं जा सकता?",
//       pa: "JavaScript ਵਿੱਚ ਇੱਕ ਸਥਿਰ (constant) ਵੇਰੀਏਬਲ ਘੋਸ਼ਿਤ ਕਰਨ ਲਈ ਕਿਹੜਾ ਕੀਵਰਡ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?",
//     },
//     options: {
//       en: ["A. var", "B. let", "C. const", "D. static"],
//       hi: ["A. var", "B. let", "C. const", "D. static"],
//       pa: ["A. var", "B. let", "C. const", "D. static"],
//     },
//     answer: 2,
//   },
//   {
//     id: 14,
//     question: {
//       en: "What is a Transformer model in AI primarily known for?",
//       hi: "AI में एक ट्रांसफॉर्मर मॉडल (Transformer Model) मुख्य रूप से किसके लिए जाना जाता है?",
//       pa: "AI ਵਿੱਚ ਇੱਕ ਟਰਾਂਸਫਾਰਮਰ ਮਾਡਲ ਮੁੱਖ ਤੌਰ 'ਤੇ ਕਿਸ ਲਈ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?",
//     },
//     options: {
//       en: [
//         "A. Processing sequence-to-sequence tasks like language modeling efficiently",
//         "B. Rendering 3D graphics in modern web browsers",
//         "C. Managing relational database indexes",
//         "D. Compressing image file sizes",
//       ],
//       hi: [
//         "A. भाषा मॉडलिंग जैसे सीक्वेंस-टू-सीक्वेंस कार्यों को कुशलता से प्रोसेस करने के लिए",
//         "B. आधुनिक वेब ब्राउज़र में 3D ग्राफिक्स रेंडर करने के लिए",
//         "C. रिलेशनल डेटाबेस इंडेक्स को मैनेज करने के लिए",
//         "D. इमेज फाइल साइज को कंप्रेस करने के लिए",
//       ],
//       pa: [
//         "A. ਲੈਂਗੂਏਜ ਮਾਡਲਿੰਗ ਵਰਗੇ ਸੀਕੁਐਂਸ-ਟੂ-ਸੀਕੁਐਂਸ ਕਾਰਜਾਂ ਨੂੰ ਕੁਸ਼ਲਤਾ ਨਾਲ ਪ੍ਰੋਸੈਸ ਕਰਨ ਲਈ",
//         "B. ਆਧੁਨਿਕ ਵੈੱਬ ਬ੍ਰਾਊਜ਼ਰਾਂ ਵਿੱਚ 3D ਗ੍ਰਾਫਿਕਸ ਰੈਂਡਰ ਕਰਨ ਲਈ",
//         "C. ਰਿਲੇਸ਼ਨਲ ਡਾਟਾਬੇਸ ਇੰਡੈਕਸਾਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰਨ ਲਈ",
//         "D. ਚਿੱਤਰ ਫਾਈਲ ਦੇ ਆਕਾਰ ਨੂੰ ਘਟਾਉਣ ਲਈ",
//       ],
//     },
//     answer: 0,
//   },
//   {
//     id: 15,
//     question: {
//       en: "In React, what key rule must be followed when using Hooks?",
//       hi: "React में हुक्स (Hooks) का उपयोग करते समय किस मुख्य नियम का पालन किया जाना चाहिए?",
//       pa: "React ਵਿੱਚ ਹੁੱਕਸ (Hooks) ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਸਮੇਂ ਕਿਸ ਮੁੱਖ ਨਿਯਮ ਦੀ ਪਾਲਣਾ ਕੀਤੀ ਜਾਣੀ ਚਾਹੀਦੀ ਹੈ?",
//     },
//     options: {
//       en: [
//         "A. Hooks must be called inside loops or nested conditions",
//         "B. Hooks must only be called at the top level of React function components",
//         "C. Hooks can only be called in class components",
//         "D. Hooks must always return an array",
//       ],
//       hi: [
//         "A. हुक्स को लूप या नेस्टेड शर्तों के अंदर कॉल किया जाना चाहिए",
//         "B. हुक्स को केवल React फ़ंक्शन घटकों के शीर्ष स्तर (top level) पर कॉल किया जाना चाहिए",
//         "C. हुक्स को केवल क्लास घटकों में कॉल किया जा सकता है",
//         "D. हुक्स को हमेशा एक एरे (array) वापस करना चाहिए",
//       ],
//       pa: [
//         "A. ਹੁੱਕਸ ਨੂੰ ਲੂਪਸ ਜਾਂ ਨੇਸਟਡ ਸ਼ਰਤਾਂ ਦੇ ਅੰਦਰ ਕਾਲ ਕੀਤਾ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ",
//         "B. ਹੁੱਕਸ ਨੂੰ ਸਿਰਫ਼ ਰਿਐਕਟ ਫੰਕਸ਼ਨ ਕੰਪੋਨੈਂਟਸ ਦੇ ਸਿਖਰਲੇ ਪੱਧਰ 'ਤੇ ਕਾਲ ਕੀਤਾ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ",
//         "C. ਹੁੱਕਸ ਨੂੰ ਸਿਰਫ਼ ਕਲਾਸ ਕੰਪੋਨੈਂਟਸ ਵਿੱਚ ਹੀ ਕਾਲ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ",
//         "D. ਹੁੱਕਸ ਨੂੰ ਹਮੇਸ਼ਾ ਇੱਕ ਐਰੇ ਵਾਪਸ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ",
//       ],
//     },
//     answer: 1,
//   },
//   {
//     id: 16,
//     question: {
//       en: "Which status code represents a 'Not Found' error in REST APIs?",
//       hi: "REST APIs में कौन सा स्टेटस कोड 'Not Found' एरर को दर्शाता है?",
//       pa: "REST APIs ਵਿੱਚ 'Not Found' ਗਲਤੀ ਨੂੰ ਕਿਹੜਾ ਸਟੇਟਸ ਕੋਡ ਦਰਸਾਉਂਦਾ ਹੈ?",
//     },
//     options: {
//       en: ["A. 200", "B. 401", "C. 404", "D. 500"],
//       hi: ["A. 200", "B. 401", "C. 404", "D. 500"],
//       pa: ["A. 200", "B. 401", "C. 404", "D. 500"],
//     },
//     answer: 2,
//   },
//   {
//     id: 17,
//     question: {
//       en: "In Tailwind CSS, what utility class makes a text bold?",
//       hi: "Tailwind CSS में, कौन सी यूटिलिटी क्लास टेक्स्ट को बोल्ड बनाती है?",
//       pa: "Tailwind CSS ਵਿੱਚ, ਕਿਹੜੀ ਯੂਟਿਲਿਟੀ ਕਲਾਸ ਟੈਕਸਟ ਨੂੰ ਬੋਲਡ ਬਣਾਉਂਦੀ ਹੈ?",
//     },
//     options: {
//       en: [
//         "A. text-bold",
//         "B. font-bold",
//         "C. weight-bold",
//         "D. style-bold",
//       ],
//       hi: [
//         "A. text-bold",
//         "B. font-bold",
//         "C. weight-bold",
//         "D. style-bold",
//       ],
//       pa: [
//         "A. text-bold",
//         "B. font-bold",
//         "C. weight-bold",
//         "D. style-bold",
//       ],
//     },
//     answer: 1,
//   },
//   {
//     id: 18,
//     question: {
//       en: "What is the role of an Activation Function in Neural Networks?",
//       hi: "न्यूरल नेटवर्क (Neural Networks) में एक्टिवेशन फ़ंक्शन की क्या भूमिका है?",
//       pa: "ਨਿਊਰਲ ਨੈੱਟਵਰਕਾਂ ਵਿੱਚ ਐਕਟੀਵੇਸ਼ਨ ਫੰਕਸ਼ਨ ਦੀ ਕੀ ਭੂਮਿਕਾ ਹੈ?",
//     },
//     options: {
//       en: [
//         "A. To introduce non-linearity into the network output",
//         "B. To delete unused training data",
//         "C. To connect the database to the neural net",
//         "D. To restart the training loop on error",
//       ],
//       hi: [
//         "A. नेटवर्क आउटपुट में नॉन-लीनियरिटी (non-linearity) को लाना",
//         "B. अप्रयुक्त ट्रेनिंग डेटा को हटाना",
//         "C. डेटाबेस को न्यूरल नेट से जोड़ना",
//         "D. त्रुटि होने पर ट्रेनिंग लूप को पुनः प्रारंभ करना",
//       ],
//       pa: [
//         "A. ਨੈੱਟਵਰਕ ਆਉਟਪੁੱਟ ਵਿੱਚ ਨਾਨ-ਲੀਨੀਅਰਟੀ (non-linearity) ਲਿਆਉਣ ਲਈ",
//         "B. ਅਣਵਰਤੇ ਟ੍ਰੇਨਿੰਗ ਡਾਟਾ ਨੂੰ ਮਿਟਾਉਣ ਲਈ",
//         "C. ਡਾਟਾਬੇਸ ਨੂੰ ਨਿਊਰਲ ਨੈੱਟ ਨਾਲ ਜੋੜਨ ਲਈ",
//         "D. ਗਲਤੀ 'ਤੇ ਟ੍ਰੇਨਿੰਗ ਲੂਪ ਨੂੰ ਮੁੜ ਚਾਲੂ ਕਰਨ ਲਈ",
//       ],
//     },
//     answer: 0,
//   },
//   {
//     id: 19,
//     question: {
//       en: "Which operator is used for strict equality comparison in JavaScript?",
//       hi: "जावास्क्रिप्ट में सख्त समानता (strict equality) तुलना के लिए किस ऑपरेटर का उपयोग किया जाता है?",
//       pa: "JavaScript ਵਿੱਚ ਸਖ਼ਤ ਸਮਾਨਤਾ ਤੁਲਨਾ (strict equality) ਲਈ ਕਿਹੜਾ ਆਪਰੇਟਰ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?",
//     },
//     options: {
//       en: ["A. ==", "B. =", "C. ===", "D. !=="],
//       hi: ["A. ==", "B. =", "C. ===", "D. !=="],
//       pa: ["A. ==", "B. =", "C. ===", "D. !=="],
//     },
//     answer: 2,
//   },
//   {
//     id: 20,
//     question: {
//       en: "What is the function of `React.memo()`?",
//       hi: "`React.memo()` का क्या कार्य है?",
//       pa: "`React.memo()` ਦਾ ਕੀ ਕੰਮ ਹੈ?",
//     },
//     options: {
//       en: [
//         "A. To memoize expensive calculations during component renders",
//         "B. To prevent a functional component from re-rendering if its props haven't changed",
//         "C. To store component data in localStorage",
//         "D. To clear unused memory in the browser engine",
//       ],
//       hi: [
//         "A. घटक रेंडर के दौरान कठिन गणनाओं को मेमोइज़ करना",
//         "B. किसी फंक्शनल कंपोनेंट को पुनः रेंडर होने से रोकना यदि उसके प्रोप्स न बदले हों",
//         "C. localStorage में कंपोनेंट डेटा संग्रहीत करना",
//         "D. ब्राउज़र इंजन में अप्रयुक्त मेमोरी को साफ़ करना",
//       ],
//       pa: [
//         "A. ਕੰਪੋਨੈਂਟ ਰੈਂਡਰਾਂ ਦੌਰਾਨ ਮਹਿੰਗੀਆਂ ਗਣਨਾਵਾਂ ਨੂੰ ਮੈਮੋਇਜ਼ ਕਰਨਾ",
//         "B. ਜੇਕਰ ਪ੍ਰੋਪਸ ਨਾ ਬਦਲੇ ਹੋਣ ਤਾਂ ਫੰਕਸ਼ਨਲ ਕੰਪੋਨੈਂਟ ਨੂੰ ਮੁੜ-ਰੈਂਡਰ ਹੋਣ ਤੋਂ ਰੋਕਣਾ",
//         "C. ਕੰਪੋਨੈਂਟ ਡਾਟਾ ਨੂੰ localStorage ਵਿੱਚ ਸਟੋਰ ਕਰਨਾ",
//         "D. ਬ੍ਰਾਊਜ਼ਰ ਇੰਜਣ ਵਿੱਚ ਅਣਵਰਤੀ ਮੈਮੋਰੀ ਨੂੰ ਸਾਫ਼ ਕਰਨਾ",
//       ],
//     },
//     answer: 1,
//   },
// ];

export const QUESTIONS_DATA = [
  {
    id: 1,
    question: {
      en: "What is the primary definition of Artificial Intelligence (AI)?",
      hi: "आर्टिफिशियल इंटेलिजेंस (AI) की मुख्य परिभाषा क्या है?",
      pa: "ਆਰਟੀਫਿਸ਼ੀਅਲ ਇੰਟੈਲੀਜੈਂਸ (AI) ਦੀ ਮੁੱਖ ਪਰਿਭਾਸ਼ਾ ਕੀ ਹੈ?",
    },
    options: {
      en: [
        "A. Machines mimicking human intelligence and problem-solving",
        "B. A physical computer mouse with a battery",
        "C. Storing photos in a cloud database",
        "D. Connecting a printer to Wi-Fi",
      ],
      hi: [
        "A. मशीनों द्वारा मानवीय बुद्धि और समस्या-समाधान की नकल करना",
        "B. बैटरी वाला एक भौतिक कंप्यूटर माउस",
        "C. क्लाउड डेटाबेस में तस्वीरें स्टोर करना",
        "D. प्रिंटर को वाई-फाई से कनेक्ट करना",
      ],
      pa: [
        "A. ਮਸ਼ੀਨਾਂ ਦੁਆਰਾ ਮਨੁੱਖੀ ਬੁੱਧੀ ਅਤੇ ਸਮੱਸਿਆ-ਹੱਲ ਦੀ ਨਕਲ ਕਰਨਾ",
        "B. ਬੈਟਰੀ ਵਾਲਾ ਇੱਕ ਭੌਤਿਕ ਕੰਪਿਊਟਰ ਮਾਊس",
        "C. ਕਲਾਉਡ ਡਾਟਾਬੇस ਵਿੱਚ ਫੋਟੋਆਂ ਸਟੋਰ ਕਰਨਾ",
        "D. ਪ੍ਰਿੰਟਰ को Wi-Fi ਨਾਲ ਕਨੈਕਟ ਕਰਨਾ",
      ],
    },
    answer: 0,
  },
  {
    id: 2,
    question: {
      en: "Which of the following is a popular Virtual Assistant powered by AI?",
      hi: "निम्नलिखित में से कौन सा AI द्वारा संचालित एक लोकप्रिय वर्चुअल असिस्टेंट है?",
      pa: "ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ AI ਦੁਆਰਾ ਸੰਚਾਲਿਤ ਇੱਕ ਪ੍ਰਸਿੱਧ ਵਰਚੁਅਲ ਅਸਿਸਟੈਂਟ है?",
    },
    options: {
      en: ["A. Microsoft Notepad", "B. Google Assistant", "C. VLC Media Player", "D. MS Paint"],
      hi: ["A. माइक्रोसॉफ्ट नोटपैड", "B. गूगल असिस्टेंट (Google Assistant)", "C. वीएलसी मीडिया प्लेयर", "D. एमएस पेंट"],
      pa: ["A. ਮਾਈਕ੍ਰੋਸਾੱਫਟ ਨੋਟਪੈਡ", "B. Google Assistant", "C. VLC ਮੀਡੀਆ ਪਲੇਅਰ", "D. MS ਪੇਂਟ"],
    },
    answer: 1,
  },
  {
    id: 3,
    question: {
      en: "How do platforms like Netflix and YouTube recommend videos to you?",
      hi: "Netflix और YouTube जैसे प्लेटफॉर्म आपको वीडियो कैसे रिकमेंड करते हैं?",
      pa: "Netflix ਅਤੇ YouTube ਵਰਗੇ ਪਲੇਟਫਾਰਮ ਤੁਹਾਨੂੰ ਵੀਡੀਓਜ਼ ਕਿਵੇਂ ਸੁਝਾਉਂਦੇ ਹਨ?",
    },
    options: {
      en: [
        "A. Using random number generators",
        "B. Using AI Recommendation Systems based on your watch history",
        "C. By mailing a DVD to your house",
        "D. Showing the same video to everyone worldwide",
      ],
      hi: [
        "A. यादृच्छिक संख्या जनरेटर (random generators) का उपयोग करके",
        "B. आपके देखने के इतिहास के आधार पर AI रिकमेंडेशन सिस्टम का उपयोग करके",
        "C. आपके घर पर डीवीडी मेल करके",
        "D. दुनिया भर में सभी को एक ही वीडियो दिखाना",
      ],
      pa: [
        "A. ਰੈਂਡਮ ਨੰਬਰ ਜেনਰੇਟਰਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ",
        "B. ਤੁਹਾਡੇ ਦੇਖਣ ਦੇ ਇਤਿਹਾਸ 'ਤੇ ਆਧਾਰਿਤ AI ਸਿਫ਼ਾਰਿਸ਼ ਪ੍ਰਣਾਲੀਆਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ",
        "C. ਤੁਹਾਡੇ ਘਰ ਡੀ.ਵੀ.ਡੀ. ਭੇਜ ਕੇ",
        "D. ਦੁਨੀਆ ਭਰ ਵਿੱਚ ਸارਿਆਂ ਨੂੰ ਇੱਕ ਹੀ ਵੀਡੀਓ ਦਿਖਾ ਕੇ",
      ],
    },
    answer: 1,
  },
  {
    id: 4,
    question: {
      en: "What is Face Recognition technology primarily used for?",
      hi: "फेस रिकग्निशन (Face Recognition) तकनीक का मुख्य रूप से किस लिए उपयोग किया जाता है?",
      pa: "ਫੇਸ ਰਿਕਗਨੀਸ਼ਨ (Face Recognition) ਤਕਨੀਕ ਮੁੱਖ ਤੌਰ 'ਤੇ ਕਿਸ ਲਈ ਵਰਤੀ ਜਾਂਦੀ है?",
    },
    options: {
      en: [
        "A. Printing colorful documents",
        "B. Identifying or verifying a person's identity using their face",
        "C. Measuring internet speed",
        "D. Cleaning computer screens",
      ],
      hi: [
        "A. रंगीन दस्तावेज़ प्रिंट करना",
        "B. चेहरे का उपयोग करके किसी व्यक्ति की पहचान की पुष्टि करना",
        "C. इंटरनेट की गति मापना",
        "D. कंप्यूटर स्क्रीन साफ करना",
      ],
      pa: [
        "A. ਰੰਗੀਨ ਦਸਤਾਵੇਜ਼ ਪ੍ਰਿੰਟ ਕਰਨਾ",
        "B. ਚਿਹਰੇ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਕਿਸੇ ਵਿਅਕਤੀ ਦੀ ਪਛਾਣ ਦੀ ਪੁਸ਼ਟੀ ਕਰਨਾ",
        "C. ਇੰਟਰਨੈੱਟ ਦੀ ਗਤੀ ਮਾਪਣا",
        "D. ਕੰਪਿਊਟਰ ਸਕ੍ਰੀਨ ਸਾਫ਼ ਕਰਨਾ",
      ],
    },
    answer: 1,
  },
  {
    id: 5,
    question: {
      en: "What does Machine Learning primarily allow computers to do?",
      hi: "मशीन लर्निंग मुख्य रूप से कंप्यूटर को क्या करने की अनुमति देती है?",
      pa: "ਮਸ਼ੀਨ ਲਰਨਿੰਗ ਮੁੱਖ ਤੌਰ 'ਤੇ ਕੰਪਿਊਟਰ ਨੂੰ ਕੀ ਕਰਨ ਦੀ ਇਜਾਜ਼त ਦਿੰਦੀ है?",
    },
    options: {
      en: [
        "A. Learn and improve from experience without being explicitly programmed",
        "B. Physically run faster",
        "C. Consume less electricity automatically",
        "D. Translate human languages into physical paper books",
      ],
      hi: [
        "A. स्पष्ट रूप से प्रोग्राम किए बिना अनुभव से सीखना और सुधार करना",
        "B. शारीरिक रूप से तेज दौड़ना",
        "C. स्वचालित रूप से कम बिजली की खपत करना",
        "D. मानव भाषाओं को भौतिक कागजी किताबों में अनुवाद करना",
      ],
      pa: [
        "A. ਸਪੱਸ਼ਟ ਤੌਰ 'ਤੇ ਪ੍ਰੋਗਰਾਮ ਕੀਤੇ ਬਿਨਾਂ ਅਨੁਭਵ ਤੋਂ ਸਿੱਖਣਾ ਅਤੇ ਸੁਧਾਰ ਕਰਨਾ",
        "B. ਸਰੀਰਕ ਤੌਰ 'ਤੇ ਤੇਜ਼ ਦੌੜਨਾ",
        "C. ਆਪਣੇ ਆਪ ਘੱਟ ਬਿਜਲੀ ਦੀ ਖਪਤ ਕਰਨਾ",
        "D. ਮਨੁੱਖੀ ਭਾਸ਼ਾਵਾਂ ਨੂੰ ਭੌਤਿਕ ਕਾਗਜ਼ੀ ਕਿਤਾਬਾਂ ਵਿੱਚ ਅਨੁवाद ਕਰਨਾ",
      ],
    },
    answer: 0,
  },
  {
    id: 6,
    question: {
      en: "In Machine Learning, what is 'Training Data'?",
      hi: "मशीन लर्निंग में 'ट्रेनिंग डेटा' (Training Data) क्या होता है?",
      pa: "ਮਸ਼ੀਨ ਲਰਨਿੰਗ ਵਿੱਚ 'ਟ੍ਰੇਨਿੰਗ ਡਾਟਾ' ਕੀ ਹੁੰਦਾ ہے?",
    },
    options: {
      en: [
        "A. Data used to teach an AI model to recognize patterns and make decisions",
        "B. Physical gym equipment for computer engineers",
        "C. A video game tutorial",
        "D. Software installation guide",
      ],
      hi: [
        "A. पैटर्न पहचानने और निर्णय लेने के लिए AI मॉडल को सिखाने हेतु प्रयुक्त डेटा",
        "B. कंप्यूटर इंजीनियरों के लिए भौतिक जिम उपकरण",
        "C. एक वीडियो गेम ट्यूटोरियल",
        "D. सॉफ्टवेयर इंस्टॉलेशन गाइड",
      ],
      pa: [
        "A. ਪੈਟਰਨਾਂ ਨੂੰ ਪਛਾਣਨ ਅਤੇ ਫੈਸਲੇ ਲੈਣ ਲਈ AI ਮਾਡਲ ਨੂੰ ਸਿਖਾਉਣ ਲਈ ਵਰਤਿਆ ਜਾਣ वाला ਡਾਟਾ",
        "B. ਕੰਪਿਊਟਰ ਇੰਜੀਨੀਅਰਾਂ ਲਈ ਜਿਮ ਦਾ ਸਾਮਾਨ",
        "C. ਇੱਕ ਵੀਡੀਓ ਗੇਮ ਟਿਊਟੋਰਿਅਲ",
        "D. ਸੌਫਟਵੇਅਰ ਇੰਸਟਾਲੇਸ਼ਨ ਗਾਈड",
      ],
    },
    answer: 0,
  },
  {
    id: 7,
    question: {
      en: "What is Supervised Learning?",
      hi: "सुपरवाइज्ड लर्निंग (Supervised Learning) क्या है?",
      pa: "Supervised Learning ਕੀ ਹੈ?",
    },
    options: {
      en: [
        "A. Learning using labeled data where the correct answers are provided",
        "B. Learning without any human or computer guidance",
        "C. A robot learning how to walk in an empty room",
        "D. Deleting files automatically",
      ],
      hi: [
        "A. लेबल्ड डेटा का उपयोग करके सीखना जहाँ सही उत्तर दिए गए हों",
        "B. किसी भी मानव या कंप्यूटर मार्गदर्शन के बिना सीखना",
        "C. एक खाली कमरे में चलना सीखने वाला रोबोट",
        "D. फाइलों को स्वचालित रूप से हटाना",
      ],
      pa: [
        "A. ਲੇਬਲ ਵਾਲੇ ਡਾਟਾ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਸਿੱਖਣਾ ਜਿੱਥੇ ਸਹੀ ਜਵਾਬ ਦਿੱਤੇ ਗਏ ਹੋਣ",
        "B. ਬినా ਕਿਸੇ ਮਨੁੱਖੀ ਜਾਂ ਕੰਪਿਊਟਰ ਮਾਰਗਦਰਸ਼ਨ ਦੇ ਸਿੱਖਣਾ",
        "C. ਇੱਕ ਖਾਲੀ ਕਮਰੇ ਵਿੱਚ ਤੁਰਨਾ ਸਿੱਖਦਾ ਰੋਬੋਟ",
        "D. ਫਾਈਲਾਂ ਨੂੰ ਆਪਣੇ ਆਪ ਮਿਟਾਉਣਾ",
      ],
    },
    answer: 0,
  },
  {
    id: 8,
    question: {
      en: "What is Unsupervised Learning?",
      hi: "अनसुपरवाइज्ड लर्निंग (Unsupervised Learning) क्या है?",
      pa: "Unsupervised Learning ਕੀ ਹੈ?",
    },
    options: {
      en: [
        "A. Training a model with labeled answers",
        "B. Finding hidden patterns or structures in unlabeled data",
        "C. Playing a chess game against a teacher",
        "D. Manual data entry",
      ],
      hi: [
        "A. लेबल्ड उत्तरों के साथ मॉडल को प्रशिक्षित करना",
        "B. बिना लेबल्ड डेटा में छिपे हुए पैटर्न या संरचनाओं को ढूंढना",
        "C. शिक्षक के खिलाफ शतरंज का खेल खेलना",
        "D. मैनुअल डेटा प्रविष्टि",
      ],
      pa: [
        "A. ਲੇਬਲ ਵਾਲੇ ਜਵਾਬਾਂ ਨਾਲ ਮਾਡਲ ਨੂੰ ਸਿਖਲਾਈ ਦੇਣਾ",
        "B. ਬਿנਾਂ ਲੇਬਲ ਵਾਲੇ ਡਾਟਾ ਵਿੱਚ ਲੁਕੇ ਹੋਏ ਪੈਟਰਨਾਂ ਜਾਂ ਢਾਂਚਿਆਂ ਨੂੰ ਲੱਭਣਾ",
        "C. ਅਧਿਆਪਕ ਵਿਰੁੱਧ ਸ਼ਤਰੰਜ ਖੇਡਣਾ",
        "D. ਮੈన్ੂਅਲ ਡਾਟਾ ਐਂਟਰੀ",
      ],
    },
    answer: 1,
  },
  {
    id: 9,
    question: {
      en: "What is the primary difference between Robotics and AI?",
      hi: "रोबोटिक्स और AI के बीच मुख्य अंतर क्या है?",
      pa: "ਰੋਬੋਟਿਕਸ ਅਤੇ AI ਵਿੱਚ ਮੁੱਖ ਫਰਕ ਕੀ ਹੈ?",
    },
    options: {
      en: [
        "A. Robotics deals with physical machines/hardware, while AI deals with software intelligence/thinking",
        "B. Robotics is only used in video games",
        "C. AI can move physical objects without a body",
        "D. There is no difference at all",
      ],
      hi: [
        "A. रोबोटिक्स भौतिक मशीनों/हार्डवेयर से संबंधित है, जबकि AI सॉफ्टवेयर इंटेलिजेंस/सोच से संबंधित है",
        "B. रोबोटिक्स का उपयोग केवल वीडियो गेम में किया जाता है",
        "C. AI बिना शरीर के भौतिक वस्तुओं को स्थानांतरित कर सकता है",
        "D. इसमें कोई अंतर नहीं है",
      ],
      pa: [
        "A. ਰੋਬੋਟਿਕਸ ਭੌਤਿਕ ਮਸ਼ੀਨਾਂ/ਹਾਰਡਵੇਅਰ ਨਾਲ ਸਬੰਧਤ ਹੈ, ਜਦੋਂ ਕਿ AI ਸੌਫਟਵੇਅਰ ਬੁੱਧੀ/ਸੋਚ ਨਾਲ ਸਬੰਧਤ ਹੈ",
        "B. ਰੋਬੋਟਿਕਸ ਦੀ ਵਰਤੋਂ ਸਿਰਫ਼ ਵੀਡੀਓ ਗੇਮਾਂ ਵਿੱਚ ਕੀਤੀ ਜਾਂਦੀ ਹੈ",
        "C. AI ਬਿਨਾਂ ਸਰੀਰ ਦੇ ਭੌਤਿਕ ਵਸਤੂਆਂ ਨੂੰ ਹਿਲਾ ਸਕਦਾ ਹੈ",
        "D. ਕੋਈ ਫਰਕ ਨਹੀਂ है",
      ],
    },
    answer: 0,
  },
  {
    id: 10,
    question: {
      en: "What are AI-powered Robots?",
      hi: "AI-संचालित रोबोट (AI-powered Robots) क्या होते हैं?",
      pa: "AI-ਸੰਚਾਲਿਤ ਰੋਬੋਟ ਕੀ ਹੁੰਦੇ ਹਨ?",
    },
    options: {
      en: [
        "A. Robots equipped with AI to perceive their environment and make smart decisions",
        "B. Simple toys operated by physical strings",
        "C. Mechanical clocks that tell time",
        "D. Calculators that solve basic math",
      ],
      hi: [
        "A. ऐसे रोबोट जो अपने पर्यावरण को समझने और स्मार्ट निर्णय लेने के लिए AI से लैस हैं",
        "B. भौतिक डोरियों से संचालित साधारण खिलौने",
        "C. समय बताने वाली यांत्रिक घड़ियाँ",
        "D. बुनियादी गणित हल करने वाले कैलकुलेटर",
      ],
      pa: [
        "A. ਉਹ ਰੋਬੋਟ ਜੋ ਆਪਣੇ ਵਾਤਾਵਰਣ ਨੂੰ ਸਮਝਣ ਅਤੇ ਸਮਾਰਟ ਫੈਸਲੇ ਲੈਣ ਲਈ AI ਨਾਲ ਲੈਸ ਹਨ",
        "B. ਸਧਾਰਨ ਖਿلونੇ ਜੋ ਧਾਗੇ ਨਾਲ ਚੱਲਦੇ ਹਨ",
        "C. ਮਕੈਨੀਕਲ ਘੜੀਆਂ",
        "D. ਕੈਲਕੁलेटर",
      ],
    },
    answer: 0,
  },
  {
    id: 11,
    question: {
      en: "Where are industrial robots commonly used?",
      hi: "औद्योगिक रोबोटों (Industrial Robots) का आमतौर पर कहाँ उपयोग किया जाता है?",
      pa: "ਉਦਯੋਗਿਕ ਰੋਬੋਟਾਂ (Industrial Robots) ਦੀ ਵਰਤੋਂ ਆਮ ਤੌਰ 'ਤੇ ਕਿੱਥੇ ਕੀਤੀ ਜਾਂਦੀ hai?",
    },
    options: {
      en: [
        "A. In manufacturing factories for tasks like welding, assembly, and packaging",
        "B. Inside kitchen ovens for baking cakes",
        "C. Underwater for scuba diving",
        "D. Inside standard home television sets",
      ],
      hi: [
        "A. वेल्डिंग, असेंबली और पैकेजिंग जैसे कार्यों के लिए विनिर्माण कारखानों में",
        "B. केक पकाने के लिए रसोई के ओवन के अंदर",
        "C. स्कूबा डाइविंग के लिए पानी के नीचे",
        "D. मानक घरेलू टेलीविजन सेट के अंदर",
      ],
      pa: [
        "A. ਵੈਲਡਿੰਗ, ਅਸੈਂਬਲੀ ਅਤੇ ਪੈਕਿੰਗ ਵਰਗੇ ਕੰਮਾਂ ਲਈ ਨਿਰਮਾਣ ਫੈਕਟਰੀਆਂ ਵਿੱਚ",
        "B. ਰਸੋਈ ਦੇ ਓਵਨ ਦੇ ਅੰਦਰ",
        "C. ਪਾਣੀ ਦੇ ਹੇਠਾਂ ਸਕੂਬਾ ਡਾਈਵਿੰਗ ਲਈ",
        "D. ਟੀਵੀ ਦੇ ਅੰਦਰ",
      ],
    },
    answer: 0,
  },
  {
    id: 12,
    question: {
      en: "What is Natural Language Processing (NLP)?",
      hi: "नेचुरल लैंग्वेज प्रोसेसिंग (NLP) क्या है?",
      pa: "Natural Language Processing (NLP) ਕੀ है?",
    },
    options: {
      en: [
        "A. A branch of AI that helps computers understand, interpret, and manipulate human language",
        "B. Processing natural organic foods",
        "C. A programming language for writing computer games",
        "D. Translating computer code into electricity",
      ],
      hi: [
        "A. AI की वह शाखा जो कंप्यूटर को मानव भाषा को समझने, व्याख्या करने और हेरफेर करने में मदद करती है",
        "B. प्राकृतिक जैविक खाद्य पदार्थों का प्रसंस्करण",
        "C. कंप्यूटर गेम लिखने के लिए एक प्रोग्रामिंग भाषा",
        "D. कंप्यूटर कोड को बिजली में अनुवाद करना",
      ],
      pa: [
        "A. AI ਦੀ ਇੱਕ ਸ਼ਾਖਾ ਜੋ ਕੰਪਿਊਟਰਾਂ ਨੂੰ ਮਨੁੱਖੀ ਭਾਸ਼ਾ ਨੂੰ ਸਮਝਣ ਅਤੇ ਪੜ੍ਹਨ ਵਿੱਚ ਮਦਦ ਕਰਦੀ है",
        "B. ਕੁਦਰਤੀ ਜੈਵਿਕ ਭੋਜਨ ਦੀ ਪ੍ਰੋਸੈਸਿੰਗ",
        "C. ਗੇਮਾਂ ਲਿਖਣ ਲਈ ਪ੍ਰੋਗਰਾਮਿੰਗ ਭਾਸ਼ਾ",
        "D. ਕੰਪਿਊਟਰ ਕੋਡ ਨੂੰ ਬਿਜਲੀ ਵਿੱਚ ਬਦਲਣਾ",
      ],
    },
    answer: 0,
  },
  {
    id: 13,
    question: {
      en: "What is Speech Recognition used for?",
      hi: "स्पीच रिकग्निशन (Speech Recognition) का उपयोग किसके लिए किया जाता है?",
      pa: "Speech Recognition ਦੀ ਵਰਤੋਂ ਕਿਸ ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ?",
    },
    options: {
      en: [
        "A. Converting spoken words into text",
        "B. Changing the screen brightness",
        "C. Printing documents faster",
        "D. Increasing Wi-Fi range",
      ],
      hi: [
        "A. बोले गए शब्दों को टेक्स्ट में बदलना",
        "B. स्क्रीन की चमक बदलना",
        "C. दस्तावेजों को तेजी से प्रिंट करना",
        "D. वाई-फाई रेंज बढ़ाना",
      ],
      pa: [
        "A. ਬੋਲੇ ਗਏ ਸ਼ਬਦਾਂ ਨੂੰ ਟੈਕਸਟ ਵਿੱਚ ਬਦਲਣਾ",
        "B. ਸਕ੍ਰੀਨ ਦੀ ਚਮਕ ਬਦਲਣਾ",
        "C. ਦਸਤਾਵੇਜ਼ਾਂ ਨੂੰ ਤੇਜ਼ੀ ਨਾਲ ਪ੍ਰਿੰਟ ਕਰਨਾ",
        "D. Wi-Fi ਰੇਂਜ ਵਧਾਉਣਾ",
      ],
    },
    answer: 0,
  },
  {
    id: 14,
    question: {
      en: "How do AI Chatbots assist users?",
      hi: "AI चैटबॉट्स (Chatbots) उपयोगकर्ताओं की कैसे सहायता करते हैं?",
      pa: "AI ਚੈਟਬੋਟਸ ਉਪਭੋਗਤਾਵਾਂ ਦੀ ਕਿਵੇਂ ਮਦਦ ਕਰਦੇ ਹਨ?",
    },
    options: {
      en: [
        "A. By having interactive text or voice conversations to answer questions and provide support",
        "B. By cleaning physical computer keyboards",
        "C. By generating physical electric current",
        "D. By repairing hardware components",
      ],
      hi: [
        "A. प्रश्नों के उत्तर देने और सहायता प्रदान करने के लिए संवादात्मक पाठ या वॉयस बातचीत करके",
        "B. भौतिक कंप्यूटर कीबोर्ड की सफाई करके",
        "C. भौतिक विद्युत धारा उत्पन्न करके",
        "D. हार्डवेयर घटकों की मरम्मत करके",
      ],
      pa: [
        "A. ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦੇਣ ਅਤੇ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਗੱ बातचीत ਕਰਕੇ",
        "B. ਕੀਬોર્ਡ ਸਾਫ਼ ਕਰਕੇ",
        "C. ਬਿਜਲੀ ਪੈਦਾ ਕਰके",
        "D. ਹਾਰਡਵੇਅਰ ਦੀ ਮੁਰम्मत ਕਰke",
      ],
    },
    answer: 0,
  },
  {
    id: 15,
    question: {
      en: "How is AI used in Healthcare?",
      hi: "हेल्थकेयर (Healthcare) में AI का उपयोग कैसे किया जाता है?",
      pa: "ਸਿਹਤ ਸੰਭਾਲ (Healthcare) ਵਿੱਚ AI ਦੀ ਵਰਤੋਂ ਕਿਵੇਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ?",
    },
    options: {
      en: [
        "A. Assisting in disease diagnosis, medical imaging analysis, and drug discovery",
        "B. Designing hospital interior paint colors",
        "C. Managing hospital parking spaces manually",
        "D. Printing paper prescription slips",
      ],
      hi: [
        "A. बीमारी के निदान, मेडिकल इमेजिंग विश्लेषण और दवा की खोज में सहायता करना",
        "B. अस्पताल के आंतरिक पेंट के रंगों को डिजाइन करना",
        "C. अस्पताल की पार्किंग जगहों का मैन्युअल प्रबंधन करना",
        "D. कागज के पर्चे छापना",
      ],
      pa: [
        "A. ਬਿمਾਰੀ ਦੇ ਨਿदान, ਮੈਡੀਕਲ ਇਮੇਜਿੰਗ ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਦਵਾਈ ਦੀ ਖੋਜ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰਨਾ",
        "B. ਹਸਪਤਾਲ ਦੇ ਰੰਗ ਡਿਜ਼ਾਈਨ ਕਰਨਾ",
        "C. ਪਾਰਕਿੰਗ ਪ੍ਰਬੰਧਨ",
        "D. ਪਰਚੀਆਂ ਛਾਪਣਾ",
      ],
    },
    answer: 0,
  },
  {
    id: 16,
    question: {
      en: "What is an application of AI in Agriculture?",
      hi: "कृषि (Agriculture) में AI का एक अनुप्रयोग क्या है?",
      pa: "ਖੇਤੀਬਾੜી (Agriculture) ਵਿੱਚ AI ਦੀ ਇੱਕ ਵਰਤੋਂ ਕੀ ਹੈ?",
    },
    options: {
      en: [
        "A. Crop health monitoring, soil analysis, and automated pest detection",
        "B. Controlling heavy rainfall manually",
        "C. Changing seasonal temperatures",
        "D. Manufacturing tractors using wood",
      ],
      hi: [
        "A. फसल स्वास्थ्य की निगरानी, मिट्टी का विश्लेषण और स्वचालित कीट का पता लगाना",
        "B. भारी वर्षा को मैन्युअल रूप से नियंत्रित करना",
        "C. मौसमी तापमान बदलना",
        "D. लकड़ी का उपयोग करके ट्रैक्टर बनाना",
      ],
      pa: [
        "A. ਫਸਲਾਂ ਦੀ ਸਿਹਤ ਦੀ ਨਿਗਰਾਨੀ, ਮਿੱਟੀ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਕੀੜਿਆਂ ਦਾ ਪਤਾ ਲਗਾਉਣਾ",
        "B. ਮੀਂਹ ਨੂੰ ਕੰਟਰੋਲ ਕਰਨਾ",
        "C. ਤਾਪಮಾನ ਬਦਲਣਾ",
        "D. ਟਰੈਕਟਰ ਬਣਾਉਣਾ",
      ],
    },
    answer: 0,
  },
  {
    id: 17,
    question: {
      en: "How does AI benefit the Banking and Finance sector?",
      hi: "बैंकिंग और वित्त (Banking and Finance) क्षेत्र को AI से क्या लाभ होता है?",
      pa: "ਬੈਂਕਿੰਗ ਅਤੇ ਵਿੱਤ (Banking and Finance) ਖੇਤਰ ਨੂੰ AI ਤੋਂ ਕੀ ਲਾਭ ਹੁੰਦਾ है?",
    },
    options: {
      en: [
        "A. Fraud detection, automated customer service chatbots, and risk assessment",
        "B. Printing physical currency notes",
        "C. Counting coins by hand",
        "D. Delivering cash to houses physically",
      ],
      hi: [
        "A. धोखाधड़ी का पता लगाना, स्वचालित ग्राहक सेवा चैटबॉट्स और जोखिम मूल्यांकन",
        "B. भौतिक करेंसी नोट छापना",
        "C. हाथ से सिक्के गिनना",
        "D. घर-घर जाकर नकदी पहुंचाना",
      ],
      pa: [
        "A. ਧੋਖਾਧੜੀ ਦਾ ਪਤਾ ਲਗਾਉਣਾ, ਆਟੋਮੈਟਿਕ ਗਾਹਕ ਸੇਵਾ ਚੈਟਬੋਟਸ ਅਤੇ ਜੋਖਮ ਮੁਲਾਂਕਣ",
        "B. ਕਰੰਸੀ ਨੋਟ ਛਾਪਣა",
        "C. ਸਿੱक्के ਗਿਣਨਾ",
        "D. ਘਰ-ਘਰ ਨਕਦੀ ਪਹੁੰਚਾਉਣਾ",
      ],
    },
    answer: 0,
  },
  {
    id: 18,
    question: {
      en: "What role does AI play in Self-Driving Cars?",
      hi: "सेल्फ-ड्राइविंग कारों (Self-Driving Cars) में AI की क्या भूमिका है?",
      pa: "ਸੈਲਫ-ਡਰਾਈਵਿੰਗ ਕਾਰਾਂ (Self-Driving Cars) ਵਿੱਚ AI ਦੀ ਕੀ ਭੂਮਿਕਾ है?",
    },
    options: {
      en: [
        "A. Processing sensor data to navigate roads, detect obstacles, and make driving decisions",
        "B. Playing music on the radio",
        "C. Adjusting seat cushions automatically",
        "D. Cleaning the car windows",
      ],
      hi: [
        "A. सड़कों पर नेविगेट करने, बाधाओं का पता लगाने और ड्राइविंग निर्णय लेने के लिए सेंसर डेटा को प्रोसेस करना",
        "B. रेडियो पर संगीत बजाना",
        "C. सीट कुशन को स्वचालित रूप से समायोजित करना",
        "D. कार की खिड़कियां साफ करना",
      ],
      pa: [
        "A. ਸੜਕਾਂ 'ਤੇ ਨੈਵੀਗੇਟ ਕਰਨ, ਰੁਕਾਵਟਾਂ ਦਾ ਪਤਾ ਲਗਾਉਣ ਅਤੇ ਡਰਾਈਵਿੰਗ ਫੈਸਲੇ ਲੈਣ ਲਈ ਸੈਂਸਰ ਡਾਟਾ ਪ੍ਰੋਸੈਸ ਕਰਨਾ",
        "B. ਰੇਡੀਓ ਚਲਾਉਣਾ",
        "C. ਸੀਟਾਂ ਸੈੱਟ ਕਰਨਾ",
        "D. ਖਿੜਕੀਆਂ ਸਾਫ਼ ਕਰਨਾ",
      ],
    },
    answer: 0,
  },
  {
    id: 19,
    question: {
      en: "How is AI used in Smart Cities?",
      hi: "स्मार्ट सिटी (Smart Cities) में AI का उपयोग कैसे किया जाता है?",
      pa: "ਸਮਾਰਟ ਸਿਟੀਜ਼ (Smart Cities) ਵਿੱਚ AI ਦੀ ਵਰਤੋਂ ਕਿਵੇਂ ਕੀਤੀ ਜਾਂਦੀ है?",
    },
    options: {
      en: [
        "A. Managing traffic flow, smart energy grids, and public safety surveillance",
        "B. Sweeping streets using brooms",
        "C. Painting buildings",
        "D. Watering garden plants manually",
      ],
      hi: [
        "A. ट्रैफिक प्रवाह को प्रबंधित करना, स्मार्ट ऊर्जा ग्रिड और सार्वजनिक सुरक्षा निगरानी",
        "B. झाड़ू से सड़कें साफ करना",
        "C. इमारतें रंगना",
        "D. बगीचे के पौधों को मैन्युअल रूप से पानी देना",
      ],
      pa: [
        "A. ਟਰੈਫਿਕ ਪ੍ਰਵਾਹ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰਨਾ, ਸਮਾਰਟ ਊਰਜਾ ਗਰਿੱਡ ਅਤੇ ਜਨਤਕ ਸੁਰੱਖਿਆ ਨਿਗਰਾਨੀ",
        "B. ਗਲੀਆਂ ਸਾਫ਼ ਕਰਨਾ",
        "C. ਇਮਾਰਤਾਂ ਨੂੰ ਰੰਗ ਕਰਨਾ",
        "D. ਪੌਦਿਆਂ ਨੂੰ ਪਾਣੀ ਦੇਣਾ",
      ],
    },
    answer: 0,
  },
  {
    id: 20,
    question: {
      en: "What is an emerging AI trend involving the generation of new text, images, or code?",
      hi: "नया टेक्स्ट, इमेज या कोड जेनरेट करने से जुड़ा उभरता हुआ AI ट्रेंड क्या कहलाता है?",
      pa: "ਨਵਾਂ ਟੈਕਸਟ, ਚਿੱਤਰ ਜਾਂ ਕੋਡ ਤਿਆਰ ਕਰਨ ਨਾਲ ਜੁੜਿਆ ਉੱਭਰਦਾ ਹੋਇਆ AI ਰੁਝਾਨ ਕੀ ਕਹਾਉਂਦਾ hai?",
    },
    options: {
      en: [
        "A. Generative AI",
        "B. Static Database Querying",
        "C. Basic Spreadsheet Sorting",
        "D. Manual Typing",
      ],
      hi: [
        "A. जनरेटिव AI (Generative AI)",
        "B. स्टेटिक डेटाबेस क्वेरीइंग",
        "C. बेसिक स्प्रेडशीट छंटनी",
        "D. मैनुअल टाइपिंग",
      ],
      pa: [
        "A. Generative AI",
        "B. Static Database Querying",
        "C. Basic Spreadsheet Sorting",
        "D. Manual Typing",
      ],
    },
    answer: 0,
  },
];

// Named Export और Default Export दोनों दिए गए हैं ताकि import error न आए
export default QUESTIONS_DATA;