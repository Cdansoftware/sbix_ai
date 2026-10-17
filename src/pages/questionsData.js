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
  "SBIX-LDG-AQ-16",
  "SBIX-JNU-AQ-62",
  "SBIX-SBS-AQ-14"
];

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
      pa: "ਆਰਟੀਫਿਸ਼ੀਅਲ ਇੰਟੈਲੀਜੈਂਸ (AI) ਦੀ ਮੁੱਖ ਪਰਿਭਾਸ਼ਾ ਕੀ है?",
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
        "B. ਬੈਟਰੀ ਵਾਲਾ ਇੱਕ ਭੌਤਿਕ ਕੰਪਿਊਟਰ ਮਾਊਸ",
        "C. ਕਲਾਉਡ ਡਾਟਾਬੇਸ ਵਿੱਚ ਫੋਟੋਆਂ ਸਟੋਰ ਕਰਨਾ",
        "D. ਪ੍ਰਿੰਟਰ को Wi-Fi ਨਾਲ ਕਨੈਕਟ ਕਰਨਾ",
      ],
    },
    answer: 0,
  },
  {
    id: 2,
    question: {
      en: "Which type of AI is designed to perform a specific task, such as recognising faces or filtering spam emails?",
      hi: "किस प्रकार की AI को किसी विशिष्ट कार्य को करने के लिए डिज़ाइन किया गया है, जैसे चेहरों को पहचानना या स्पैम ईमेल को फ़िल्टर करना?",
      pa: "ਕਿਹੜੀ ਕਿਸਮ ਦਾ AI ਕਿਸੇ ਖਾਸ ਕੰਮ ਨੂੰ ਕਰਨ ਲਈ ਤਿਆਰ ਕੀਤਾ ਗਿਆ है, ਜਿਵੇਂ ਕਿ ਚਿਹਰਿਆਂ ਨੂੰ ਪਛਾਣਨਾ ਜਾਂ ਸਪैम ਈਮੇਲਾਂ ਨੂੰ ਫਿਲਟਰ ਕਰਨਾ?",
    },
    options: {
      en: [
        "A. General AI",
        "B. Super AI",
        "C. Narrow AI",
        "D. Human Intelligence",
      ],
      hi: [
        "A. जनरल AI",
        "B. सुपर AI",
        "C. नैरो AI (Narrow AI)",
        "D. मानव बुद्धि",
      ],
      pa: ["A. ਜਨਰਲ AI", "B. ਸੁਪਰ AI", "C. ਨੈਰੋ AI", "D. ਮਨੁੱਖੀ ਬੁੱਧੀ"],
    },
    answer: 1,
  },
  {
    id: 3,
    question: {
      en: "A farmer uses an AI application to detect crop diseases from leaf photographs. Which technology is most directly involved?",
      hi: "एक किसान पत्तियों की तस्वीरों से फसल के रोगों का पता लगाने के लिए AI एप्लिकेशन का उपयोग करता है। इसमें कौन सी तकनीक सबसे प्रत्यक्ष रूप से शामिल है?",
      pa: "एक ਕਿਸ਼ਾਨ ਪੱਤਿਆਂ ਦੀਆਂ ਤਸਵੀਰਾਂ ਤੋਂ ਫਸਲ ਦੀਆਂ ਬیمਾਰੀਆਂ ਦਾ ਪਤਾ ਲਗਾਉਣ ਲਈ AI ਐਪਲੀਕੇਸ਼ਨ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ। ਇਸ ਵਿੱਚ ਕਿਹੜੀ ਤਕਨੀਕ ਸਿੱਧੇ ਤੌਰ 'ਤੇ ਸ਼ਾਮਲ ਹੈ?",
    },
    options: {
      en: [
        "A. Computer Vision",
        "B. Speech Recognition",
        "C. Data Compression",
        "D. Text Generation",
      ],
      hi: [
        "A. कंप्यूटर विज़न (Computer Vision)",
        "B. स्पीच रिकग्निशन",
        "C. डेटा संपीड़न (Compression)",
        "D. टेक्स्ट जनरेशन",
      ],
      pa: [
        "A. ਕੰਪਿਊਟਰ ਵਿਜ਼ਨ (Computer Vision)",
        "B. ਸਪੀਚ ਰਿਕਗਨੀਸ਼ਨ",
        "C. ਡਾਟਾ ਕੰਪ੍ਰੈਸ਼ਨ",
        "D. ਟੈਕਸਟ ਜਨਰੇਸ਼ਨ",
      ],
    },
    answer: 2,
  },
  {
    id: 4,
    question: {
      en: "A machine-learning model performs very well on training data but poorly on new data. What is this problem called?",
      hi: "एक मशीन-लर्निंग मॉडल ट्रेनिंग डेटा पर बहुत अच्छा प्रदर्शन करता है लेकिन नए डेटा पर खराब। इस समस्या को क्या कहा जाता है?",
      pa: "ਇੱਕ ਮਸ਼ੀਨ-ਲਰਨਿੰਗ ਮਾਡਲ ਟ੍ਰੇਨਿੰਗ ਡਾਟਾ 'ਤੇ ਬਹੁਤ ਵਧੀਆ ਪ੍ਰਦਰਸ਼ਨ ਕਰਦਾ ਹੈ ਪਰ ਨਵੇਂ ਡਾਟਾ 'ਤੇ ਮਾੜा। ਇਸ ਸਮੱਸਿਆ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ है?",
    },
    options: {
      en: [
        "A. Clustering",
        "B. Overfitting",
        "C. Translation",
        "D. Data Encryption",
      ],
      hi: [
        "A. क्लस्टरिंग",
        "B. ओवरफिटिंग (Overfitting)",
        "C. ट्रांसलेशन",
        "D. डेटा एन्क्रिप्शन",
      ],
      pa: [
        "A. ਕਲੱਸਟਰિંગ",
        "B. ਓਵਰਫਿਟਿੰਗ (Overfitting)",
        "C. ਟਰਾਂਸਲੇਸ਼ਨ",
        "D. ਡਾਟਾ ਐਨਕ੍ਰਿਪਸ਼ਨ",
      ],
    },
    answer: 1,
  },
  {
    id: 5,
    question: {
      en: "Which of the following is an example of supervised learning?",
      hi: "निम्नलिखित में से कौन सा सुपरवाइज्ड लर्निंग (supervised learning) का उदाहरण है?",
      pa: "ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਉਦਾਹਰਣ ਸੁਪਰਵਾਈਜ਼ਡ ਲਰਨਿੰਗ (supervised learning) ਦੀ ਹੈ?",
    },
    options: {
      en: [
        "A. Grouping customers without predefined categories",
        "B. Discovering patterns in unlabelled photographs",
        "C. Training a model using labelled images of cats and dogs",
        "D. Randomly selecting images without learning from them",
      ],
      hi: [
        "A. पूर्व-परिभाषित श्रेणियों के बिना ग्राहकों को समूहीकृत करना",
        "B. बिना लेबल वाली तस्वीरों में पैटर्न खोजना",
        "C. बिल्ली और कुत्ते की लेबल वाली छवियों का उपयोग करके एक मॉडल को प्रशिक्षित करना",
        "D. उनसे सीखे बिना छवियों को यादृच्छिक रूप से चुनना",
      ],
      pa: [
        "A. ਪਹਿਲਾਂ ਤੋਂ ਪਰਿਭਾਸ਼ਿਤ ਸ਼੍ਰੇਣੀਆਂ ਤੋਂ ਬਿਨਾਂ ਗਾਹਕਾਂ ਨੂੰ ਗਰੁੱਪ ਕਰਨਾ",
        "B. ਬਿਨਾਂ ਲੇਬਲ ਵਾਲੀਆਂ ਫੋਟੋਆਂ ਵਿੱਚ ਪੈਟਰਨ ਲੱਭਣਾ",
        "C. ਬਿੱਲੀਆਂ ਅਤੇ ਕੁੱਤਿਆਂ ਦੀਆਂ ਲੇਬਲ ਵਾਲੀਆਂ ਤਸਵੀਰਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਮਾਡਲ ਨੂੰ ਟ੍ਰੇਨ ਕਰਨਾ",
        "D. ਸਿੱਖਣ ਤੋਂ ਬਿਨਾਂ ਰੈਂਡਮ ਤਸਵੀਰਾਂ ਚੁਣਨਾ",
      ],
    },
    answer: 2,
  },
  {
    id: 6,
    question: {
      en: "A self-driving car detects a pedestrian crossing the road. Which sequence best describes its decision-making process?",
      hi: "एक सेल्फ-ड्राइविंग कार सड़क पार कर रहे पैदल यात्री का पता लगाती है। कौन सा क्रम उसकी निर्णय लेने की प्रक्रिया का सबसे अच्छा वर्णन करता है?",
      pa: "ਇੱਕ ਸੈਲਫ-ਡਰਾਈਵਿੰਗ ਕਾਰ ਸੜਕ ਪਾਰ ਕਰ ਰਹੇ ਪੈਦਲ ਯਾਤਰੀ ਦਾ ਪਤਾ ਲਗਾاتی है। ਕਿਹੜਾ ਕ੍ਰਮ ਇਸਦੀ ਫੈਸਲੇ ਲੈਣ ਦੀ ਪ੍ਰਕਿਰਿਆ ਦਾ ਸਭ ਤੋਂ ਵਧੀਆ ਵਰਣਨ ਕਰਦਾ ਹੈ?",
    },
    options: {
      en: [
        "A. Detect the pedestrian, interpret the situation, and choose an appropriate action",
        "B. Store the image and continue at the same speed",
        "C. Play music and ignore the road",
        "D. Print a map before responding",
      ],
      hi: [
        "A. पैदल यात्री का पता लगाएं, स्थिति की व्याख्या करें, और उचित कार्रवाई चुनें",
        "B. छवि को सहेजें और उसी गति से आगे बढ़ें",
        "C. संगीत बजाएं और सड़क को नजरअंदाज करें",
        "D. प्रतिक्रिया देने से पहले एक नक्शा प्रिंट करें",
      ],
      pa: [
        "A. ਪੈਦਲ ਯਾਤਰੀ ਦਾ ਪਤਾ ਲਗਾਓ, ਸਥਿਤੀ ਨੂੰ ਸਮਝੋ, ਅਤੇ ਢੁਕਵੀਂ ਕਾਰਵਾਈ ਚੁਣੋ",
        "B. ਤਸਵੀਰ ਨੂੰ ਸਟੋਰ ਕਰੋ ਅਤੇ ਉਸੇ ਰਫ਼ਤਾਰ ਨਾਲ ਜਾਰੀ ਰੱਖੋ",
        "C. ਸੰਗੀਤ ਚਲਾਓ ਅਤੇ ਸੜਕ ਨੂੰ ਨਜ਼ਰਅੰਦਾਜ਼ ਕਰੋ",
        "D. ਜਵਾਬ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਨਕਸ਼ਾ ਪ੍ਰਿੰਟ ਕਰੋ",
      ],
    },
    answer: 0,
  },
  {
    id: 7,
    question: {
      en: "What is the main purpose of training data in Machine Learning?",
      hi: "मशीन लर्निंग में ट्रेनिंग डेटा का मुख्य उद्देश्य क्या है?",
      pa: "ਮਸ਼ੀਨ ਲਰਨਿੰਗ ਵਿੱਚ ਟ੍ਰੇਨਿੰਗ ਡਾਟਾ ਦਾ ਮੁੱਖ ਉਦੇਸ਼ ਕੀ है?",
    },
    options: {
      en: [
        "A. To decorate the model's interface",
        "B. To guarantee that all predictions are correct",
        "C. To replace the computer's processor",
        "D. To provide examples from which a model can learn patterns",
      ],
      hi: [
        "A. मॉडल के इंटरफ़ेस को सजाने के लिए",
        "B. यह गारंटी देने के लिए कि सभी भविष्यवाणियां सही हैं",
        "C. कंप्यूटर के प्रोसेसर को बदलने के लिए",
        "D. ऐसे उदाहरण प्रदान करना जिनसे एक मॉडल पैटर्न सीख सके",
      ],
      pa: [
        "A. ਮਾਡਲ ਦੇ ਇੰਟਰਫੇਸ ਨੂੰ ਸਜਾਉਣ ਲਈ",
        "B. ਇਸ ਗੱਲ ਦੀ ਗਰੰਟੀ ਦੇਣ ਲਈ ਕਿ ਸਾਰੀਆਂ ਭਵਿੱਖਬਾਣੀਆਂ ਸਹੀ ਹਨ",
        "C. ਕੰਪਿਊਟਰ ਦੇ ਪ੍ਰੋਸੈਸਰ ਨੂੰ ਬਦਲਣ ਲਈ",
        "D. ਅਜਿਹੇ ਉਦਾਹਰਣ ਪ੍ਰਦਾਨ ਕਰਨਾ ਜਿਨ੍ਹਾਂ ਤੋਂ ਮਾਡਲ ਪੈਟਰਨ ਸਿੱਖ ਸਕੇ",
      ],
    },
    answer: 3,
  },
  {
    id: 8,
    question: {
      en: "Which statement best distinguishes Robotics from AI?",
      hi: "कौन सा कथन रोबोटिक्स को AI से सबसे अच्छे तरीके से अलग करता है?",
      pa: "ਕਿਹੜਾ ਬਿਆਨ ਰੋਬੋਟਿਕਸ ਨੂੰ AI ਤੋਂ ਸਭ ਤੋਂ ਵਧੀਆ ਤਰੀਕੇ ਨਾਲ ਵੱਖ ਕਰਦਾ है?",
    },
    options: {
      en: [
        "A. Robotics concerns physical robotic systems, while AI concerns intelligent computational capabilities",
        "B. Robotics and AI are exactly the same field",
        "C. AI can operate only inside robots",
        "D. Every robot must use machine learning",
      ],
      hi: [
        "A. रोबोटिक्स भौतिक रोबोटिक प्रणालियों से संबंधित है, जबकि AI बुद्धिमान कम्प्यूटेशनल क्षमताओं से संबंधित है",
        "B. रोबोटिक्स और AI बिल्कुल एक ही क्षेत्र हैं",
        "C. AI केवल रोबोट के अंदर काम कर सकता है",
        "D. प्रत्येक रोबोट को मशीन लर्निंग का उपयोग करना चाहिए",
      ],
      pa: [
        "A. ਰੋਬੋਟਿਕਸ ਭੌਤਿਕ ਰੋਬੋਟਿਕ ਪ੍ਰਣਾਲੀਆਂ ਨਾਲ ਸਬੰਧਤ ਹੈ, ਜਦੋਂ ਕਿ AI ਬੁੱਧੀਮਾਨ ਕੰਪਿਊਟੇਸ਼ਨਲ ਸਮਰੱਥਾਵਾਂ ਨਾਲ ਸਬੰਧਤ ਹੈ",
        "B. ਰੋਬੋਟਿਕਸ ਅਤੇ AI ਬਿਲਕੁਲ ਇੱਕੋ ਖੇਤਰ ਹਨ",
        "C. AI ਸਿਰਫ਼ ਰੋਬੋਟਾਂ ਦੇ ਅੰਦਰ ਕੰਮ ਕਰ ਸਕਦਾ है",
        "D. ਹਰ ਰੋਬੋਟ ਨੂੰ ਮਸ਼ੀਨ ਲਰਨਿੰਗ ਦੀ ਵਰਤੋਂ ਕਰਨੀ ਚਾਹੀਦੀ है",
      ],
    },
    answer: 0,
  },
  {
    id: 9,
    question: {
      en: "A language translation application converts a Punjabi sentence into English. Which AI field is most directly involved?",
      hi: "एक भाषा अनुवाद एप्लिकेशन एक पंजाबी वाक्य को अंग्रेजी में अनुवादित करता है। कौन सा AI क्षेत्र सबसे प्रत्यक्ष रूप से शामिल है?",
      pa: "ਇੱਕ ਭਾਸ਼ਾ ਅਨੁਵਾਦ ਐਪਲੀਕੇਸ਼ਨ ਇੱਕ ਪੰਜਾਬੀ ਵਾਕ ਨੂੰ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਅਨੁਵਾਦ ਕਰਦੀ ਹੈ। ਕਿਹੜਾ AI ਖੇਤਰ ਸਿੱਧੇ ਤੌਰ 'ਤੇ ਸ਼ਾਮਲ ਹੈ?",
    },
    options: {
      en: [
        "A. Computer Vision",
        "B. Natural Language Processing",
        "C. Industrial Robotics",
        "D. Biometric Authentication",
      ],
      hi: [
        "A. कंप्यूटर विज़न",
        "B. नेचुरल लैंग्वेज प्रोसेसिंग (NLP)",
        "C. इंडस्ट्रियल रोबोटिक्स",
        "D. बायोमेट्रिक प्रमाणीकरण",
      ],
      pa: [
        "A. ਕੰਪਿਊਟਰ ਵਿਜ਼ਨ",
        "B. ਨੈਚੁਰਲ ਲੈਂਗਵੇਜ ਪ੍ਰੋਸੈਸਿੰਗ (NLP)",
        "C. ਇੰਡਸਟ੍ਰੀਅਲ ਰੋਬੋਟਿਕਸ",
        "D. ਬਾਇਓਮੈਟ੍ਰਿਕ ਪ੍ਰਮਾਣੀਕਰਨ",
      ],
    },
    answer: 1,
  },
  {
    id: 10,
    question: {
      en: "Which statement best describes unsupervised learning?",
      hi: "कौन सा कथन अनसुपरवाइज्ड लर्निंग (unsupervised learning) का सबसे अच्छा वर्णन करता है?",
      pa: "ਕਿਹੜਾ ਬਿਆਨ ਅਨਸੁਪਰਵਾਈਜ਼ਡ ਲਰਨਿੰਗ (unsupervised learning) ਦਾ ਸਭ ਤੋਂ ਵਧੀਆ ਵਰਣन ਕਰਦਾ है?",
    },
    options: {
      en: [
        "A. Learning exclusively from labelled answers",
        "B. Discovering patterns in data without supplied target labels",
        "C. Following a fixed instruction for every possible input",
        "D. Learning only by receiving physical rewards",
      ],
      hi: [
        "A. विशेष रूप से लेबल किए गए उत्तरों से सीखना",
        "B. आपूर्ति किए गए लक्ष्य लेबल के बिना डेटा में पैटर्न की खोज करना",
        "C. प्रत्येक संभावित इनपुट के लिए एक निश्चित निर्देश का पालन करना",
        "D. केवल भौतिक पुरस्कार प्राप्त करके सीखना",
      ],
      pa: [
        "A. ਵਿਸ਼ੇਸ਼ ਤੌਰ 'ਤੇ ਲੇਬਲ ਕੀਤੇ ਜਵਾਬਾਂ ਤੋਂ ਸਿੱਖਣਾ",
        "B. ਦਿੱਤੇ ਗਏ ਟਾਰਗੇਟ ਲੇਬਲਾਂ ਤੋਂ ਬਿਨਾਂ ਡਾਟਾ ਵਿੱਚ ਪੈਟਰਨ ਲੱਭਣਾ",
        "C. ਹਰ ਸੰਭਵ ਇਨਪੁਟ ਲਈ ਇੱਕ ਨਿਸ਼ਚਿਤ ਹਿਦਾਇਤ ਦੀ ਪਾਲਣਾ ਕਰਨਾ",
        "D. ਸਿਰਫ਼ ਭੌਤਿਕ ਇਨਾਮ ਪ੍ਰਾਪਤ ਕਰके ਸਿੱਖਣਾ",
      ],
    },
    answer: 1,
  },
  {
    id: 11,
    question: {
      en: "A generative AI tool provides a convincing but false historical fact. What is this commonly called?",
      hi: "एक जनरेटिव AI टूल एक आश्वस्त करने वाला लेकिन झूठा ऐतिहासिक तथ्य प्रदान करता है। इसे आमतौर पर क्या कहा जाता है?",
      pa: "ਇੱਕ ਜਨਰੇਟਿਵ AI ਟੂਲ ਇੱਕ ਯਕੀਨ ਦਿਵਾਉਣ ਵਾਲਾ ਪਰ ਝੂਠਾ ਇਤਿਹਾਸਕ ਤੱਥ ਪ੍ਰਦਾਨ ਕਰਦਾ है। ਇਸਨੂੰ ਆਮ ਤੌਰ 'ਤੇ ਕੀ ਕਿਹਾ ਜਾਂਦਾ है?",
    },
    options: {
      en: [
        "A. Image Recognition",
        "B. Data Normalisation",
        "C. AI Hallucination",
        "D. Network Routing",
      ],
      hi: [
        "A. इमेज रिकग्निशन",
        "B. डेटा सामान्यीकरण",
        "C. AI हैलूसिनेशन (AI Hallucination)",
        "D. नेटवर्क रूटिंग",
      ],
      pa: [
        "A. ਚਿੱਤਰ ਪਛਾਣ",
        "B. ਡਾਟਾ ਨਾਰਮਲਾਈਜ਼ੇਸ਼ਨ",
        "C. AI ਹੈਲੂਸੀਨੇਸ਼ਨ (AI Hallucination)",
        "D. ਨੈੱਟਵਰਕ ਰੂਟਿੰਗ",
      ],
    },
    answer: 2,
  },
  {
    id: 12,
    question: {
      en: "A school plans to introduce facial recognition for attendance. Which concern is most important?",
      hi: "एक स्कूल उपस्थिति के लिए फेशियल रिकग्निशन शुरू करने की योजना बना रहा है। कौन सी चिंता सबसे महत्वपूर्ण है?",
      pa: "ਇک ਸਕੂਲ ਹਾਜ਼ਰੀ ਲਈ ਫੇਸ ਰਿਕਗਨੀਸ਼ਨ ਸ਼ੁਰੂ ਕਰਨ ਦੀ ਯੋਜਨਾ ਬਣਾ ਰਿਹਾ है। ਕਿਹੜੀ ਚਿੰਤਾ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ है?",
    },
    options: {
      en: [
        "A. The colour of the school uniform only",
        "B. The number of classroom chairs",
        "C. The font used on the attendance register",
        "D. Privacy, consent, biometric data security, and recognition accuracy",
      ],
      hi: [
        "A. केवल स्कूल यूनिफॉर्म का रंग",
        "B. कक्षा की कुर्सियों की संख्या",
        "C. उपस्थिति रजिस्टर पर प्रयुक्त फ़ॉन्ट",
        "D. गोपनीयता, सहमति, बायोमेट्रिक डेटा सुरक्षा और पहचान सटीकता",
      ],
      pa: [
        "A. ਸਿਰਫ਼ ਸਕੂਲ ਦੀ ਵਰਦੀ ਦਾ ਰੰਗ",
        "B. ਕਲਾਸਰੂਮ ਦੀਆਂ ਕੁਰਸੀਆਂ ਦੀ ਗਿਣਤੀ",
        "C. ਹਾਜ਼ਰੀ ਰਜਿਸਟਰ 'ਤੇ ਵਰਤਿਆ ਫੌਂਟ",
        "D. ਗੋਪਨੀਯਤਾ, ਸਹਿਮਤੀ, ਬਾਇਓਮੈਟ੍ਰਿਕ ਡਾਟਾ ਸੁਰੱਖਿਆ, ਅਤੇ ਪਛਾਣ ਦੀ ਸ਼ੁੱਧਤਾ",
      ],
    },
    answer: 3,
  },
  {
    id: 13,
    question: {
      en: "A robot in a factory uses sensors to position components before welding them. What is the main role of the sensors?",
      hi: "एक कारखाने में एक रोबोट घटकों को वेल्ड करने से पहले उन्हें स्थिति में लाने के लिए सेंसर का उपयोग करता है। सेंसर की मुख्य भूमिका क्या है?",
      pa: "ਇੱਕ ਫੈਕਟਰੀ ਵਿੱਚ ਇੱਕ ਰੋਬੋਟ ਪੁਰਜ਼ਿਆਂ ਨੂੰ ਵੇਲਡ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਉਨ੍ਹਾਂ ਨੂੰ ਸਹੀ ਸਥਿਤੀ ਵਿੱਚ ਲਿਆਉਣ ਲਈ ਸੈਂਸਰਾਂ ਦੀ ਵਰਤੋਂ ਕਰਦਾ है। ਸੈਂਸਰਾਂ ਦੀ ਮੁੱਖ ਭੂਮਿਕਾ ਕੀ है?",
    },
    options: {
      en: [
        "A. To translate documents",
        "B. To recommend music",
        "C. To provide information about the robot's surroundings or the components",
        "D. To generate essays",
      ],
      hi: [
        "A. दस्तावेज़ों का अनुवाद करना",
        "B. संगीत की सिफारिश करना",
        "C. रोबोट के परिवेश या घटकों के बारे में जानकारी प्रदान करना",
        "D. निबंध तैयार करना",
      ],
      pa: [
        "A. ਦਸਤਾਵੇਜ਼ਾਂ ਦਾ ਅਨੁਵਾਦ ਕਰਨਾ",
        "B. ਸੰਗੀਤ ਦੀ ਸਿਫਾਰਸ਼ ਕਰਨਾ",
        "C. ਰੋਬੋਟ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਜਾਂ ਪੁਰਜ਼ਿਆਂ ਬਾਰੇ ਜਾਣਕਾਰੀ ਪ੍ਰਦਾਨ ਕਰਨਾ",
        "D. ਲੇਖ ਤਿਆਰ ਕਰਨਾ",
      ],
    },
    answer: 2,
  },
  {
    id: 14,
    question: {
      en: "An agricultural robot identifies weeds and sprays only the affected areas. What is a potential benefit?",
      hi: "एक कृषि रोबोट खरपतवारों की पहचान करता है और केवल प्रभावित क्षेत्रों पर छिड़काव करता है। इसका संभावित लाभ क्या है?",
      pa: "ਇੱਕ ਖੇਤੀਬਾੜੀ ਰੋਬੋਟ ਨਦੀਨਾਂ (ਘਾਹ-ਫੂਸ) ਦੀ ਪਛਾਣ ਕਰਦਾ ਹੈ ਅਤੇ ਸਿਰਫ਼ ਪ੍ਰਭਾਵਿਤ ਖੇਤਰਾਂ ਵਿੱਚ ਸਪਰੇਅ ਕਰਦਾ ਹੈ। ਇਸ ਦਾ ਸੰਭਾਵੀ ਲਾਭ ਕੀ है?",
    },
    options: {
      en: [
        "A. Guaranteed elimination of all crop diseases",
        "B. More targeted weed control and potentially reduced chemical use",
        "C. Automatic improvement of every soil type",
        "D. Removal of the need for agricultural monitoring",
      ],
      hi: [
        "A. सभी फसल रोगों की गारंटीकृत समाप्ति",
        "B. अधिक लक्षित खरपतवार नियंत्रण और संभावित रूप से कम रासायनिक उपयोग",
        "C. हर मिट्टी के प्रकार में स्वचालित सुधार",
        "D. कृषि निगरानी की आवश्यकता को समाप्त करना",
      ],
      pa: [
        "A. ਸਾਰੀਆਂ ਫਸਲਾਂ ਦੀਆਂ ਬਿਮਾਰੀਆਂ ਦਾ ਪੂਰਾ ਖਾਤਮਾ",
        "B. ਵਧੇਰੇ ਨਿਸ਼ਾਨਾ ਨਦੀਨ ਕੰਟਰੋਲ ਅਤੇ ਰਸਾਇਣਕ ਵਰਤੋਂ ਵਿੱਚ ਸੰਭਾਵੀ ਕਮੀ",
        "C. ਹਰ ਮਿੱਟੀ ਦੀ ਕਿਸਮ ਵਿੱਚ ਆਪਣੇ ਆਪ ਸੁਧਾਰ",
        "D. ਖੇਤੀਬਾੜੀ ਨਿਗਰਾਨੀ ਦੀ ਲੋੜ ਨੂੰ ਖਤਮ ਕਰਨਾ",
      ],
    },
    answer: 1,
  },
  {
    id: 15,
    question: {
      en: "A student wants to determine whether an AI crop-disease model is reliable. Which evidence is most useful?",
      hi: "एक छात्र यह निर्धारित करना चाहता है कि क्या AI फसल-रोग मॉडल विश्वसनीय है। कौन सा प्रमाण सबसे उपयोगी है?",
      pa: "ਇੱਕ ਵਿਦਿਆਰਥੀ ਇਹ ਪਤਾ ਲਗਾਉਣਾ ਚਾਹੁੰਦਾ ਹੈ कि ਕੀ AI ਫਸਲ-ਰੋਗ ਮਾਡਲ ਭਰੋਸੇਯੋਗ है। ਕਿਹੜਾ ਸਬੂਤ ਸਭ ਤੋਂ ਵੱਧ ਉਪਯੋਗੀ ਹੈ?",
    },
    options: {
      en: [
        "A. The colour of the application logo",
        "B. The number of lines of code",
        "C. The number of pictures displayed on its home screen",
        "D. Performance on representative, previously unseen images with verified labels",
      ],
      hi: [
        "A. एप्लिकेशन लोगो का रंग",
        "B. कोड की पंक्तियों की संख्या",
        "C. इसकी होम स्क्रीन पर प्रदर्शित चित्रों की संख्या",
        "D. सत्यापित लेबल के साथ प्रतिनिधि, पहले अनदेखी छवियों पर प्रदर्शन",
      ],
      pa: [
        "A. ਐਪਲੀਕੇਸ਼ਨ ਲੋਗੋ ਦਾ ਰੰਗ",
        "B. ਕੋਡ ਦੀਆਂ ਲਾਈਨਾਂ ਦੀ ਗਿਣਤੀ",
        "C. ਇਸਦੀ ਹੋਮ ਸਕ੍ਰੀਨ 'ਤੇ ਦਿਖਾਈਆਂ ਗਈਆਂ ਤਸਵੀਰਾਂ ਦੀ ਗਿਣਤੀ",
        "D. ਪ੍ਰਮָਣਿਤ ਲੇਬਲਾਂ ਵਾਲੀਆਂ ਅਣਦੇਖੀਆਂ ਤਸਵੀਰਾਂ 'ਤੇ ਪ੍ਰਦਰਸ਼ਨ",
      ],
    },
    answer: 3,
  },
  {
    id: 16,
    question: {
      en: "A student uses an AI chatbot to prepare a school assignment. Which practice is most appropriate?",
      hi: "एक छात्र स्कूल असाइनमेंट तैयार करने के लिए AI चैटबॉट का उपयोग करता है। कौन सा अभ्यास सबसे उपयुक्त है?",
      pa: "ਇੱਕ ਵਿਦਿਆਰਥੀ ਸਕੂਲ ਅਸਾਈਨਮੈਂਟ ਤਿਆਰ ਕਰਨ ਲਈ AI ਚੈਟਬੋਟ ਦੀ ਵਰਤੋਂ ਕਰਦਾ है। ਕਿਹੜਾ ਤਰੀਕਾ ਸਭ ਤੋਂ ਵੱਧ ਢੁਕਵਾਂ है?",
    },
    options: {
      en: [
        "A. Copy every answer without checking it",
        "B. Assume all generated facts are accurate",
        "C. Verify important claims using reliable sources and use the output responsibly",
        "D. Avoid understanding the topic because the AI has answered",
      ],
      hi: [
        "A. बिना जांचे हर उत्तर को कॉपी करें",
        "B. मान लें कि सभी जनरेट किए गए तथ्य सटीक हैं",
        "C. विश्वसनीय स्रोतों का उपयोग करके महत्वपूर्ण दावों को सत्यापित करें और आउटपुट का जिम्मेदारी से उपयोग करें",
        "D. विषय को समझने से बचें क्योंकि AI ने उत्तर दे दिया है",
      ],
      pa: [
        "A. ਬਿਨਾਂ ਜਾਂਚ ਕੀਤੇ ਹਰ ਜਵਾਬ ਨੂੰ ਕਾਪੀ ਕਰੋ",
        "B. ਮੰਨ ਲਓ ਕਿ ਸਾਰੇ ਤਿਆਰ ਕੀਤੇ ਤੱਥ ਸਹੀ ਹਨ",
        "C. ਭਰੋਸੇਯੋਗ ਸਰורਤਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਮਹੱਤਵਪੂਰਨ ਦਾਅਵਿਆਂ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ ਅਤੇ ਜ਼ਿੰਮੇਵਾਰੀ ਨਾਲ ਵਰਤੋਂ ਕਰੋ",
        "D. ਵਿਸ਼ੇ ਨੂੰ ਸਮਝਣ ਤੋਂ ਪਰਹੇਜ਼ ਕਰੋ ਕਿਉਂਕਿ AI ਨੇ ਜਵਾਬ ਦੇ ਦਿੱਤਾ ਹੈ",
      ],
    },
    answer: 2,
  },
  {
    id: 17,
    question: {
      en: "Which statement about recommendation systems is most accurate?",
      hi: "सिफ़ारिश प्रणालियों (recommendation systems) के बारे में कौन सा कथन सबसे सटीक है?",
      pa: "ਸਿਫ਼ਾਰਸ਼ ਪ੍ਰਣਾਲੀਆਂ (recommendation systems) ਬਾਰੇ ਕਿਹੜਾ ਬਿਆਨ ਸਭ ਤੋਂ ਵੱਧ ਸਹੀ ਹੈ?",
    },
    options: {
      en: [
        "A. They can use patterns in user behaviour to suggest potentially relevant content or products",
        "B. They always know exactly what a user wants",
        "C. They operate only on photographs",
        "D. They do not require information or a recommendation method",
      ],
      hi: [
        "A. वे संभावित रूप से प्रासंगिक सामग्री या उत्पादों का सुझाव देने के लिए उपयोगकर्ता के व्यवहार में पैटर्न का उपयोग कर सकते हैं",
        "B. वे हमेशा ठीक-ঠিক जानते हैं कि उपयोगकर्ता क्या चाहता है",
        "C. वे केवल तस्वीरों पर काम करते हैं",
        "D. उन्हें जानकारी या सिफ़ारिश विधि की आवश्यकता नहीं होती है",
      ],
      pa: [
        "A. ਉਹ ਸੰਭਾਵੀ ਤੌਰ 'ਤੇ ਢੁਕਵੀਂ ਸਮੱਗਰੀ ਜਾਂ ਉਤਪਾਦਾਂ ਦਾ ਸੁਝਾਅ ਦੇਣ ਲਈ ਉਪਭੋਗਤਾ ਦੇ ਵਿਵਹਾਰ ਵਿੱਚ ਪੈਟਰਨਾਂ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹਨ",
        "B. ਉਹ હંમેਸ਼ਾ ਬਿਲਕੁਲ ਜਾਣਦੇ ਹਨ ਕਿ ਉਪਭੋਗਤਾ ਕੀ ਚਾਹੁੰਦਾ ਹੈ",
        "C. ਉਹ ਸਿਰਫ਼ ਤਸਵੀਰਾਂ 'ਤੇ ਕੰਮ ਕਰਦੇ ਹਨ",
        "D. ਉਹਨਾਂ ਨੂੰ ਜਾਣਕਾਰੀ ਜਾਂ ਸਿਫ਼ਾਰਸ਼ ਤਰੀਕੇ ਦੀ ਲੋੜ ਨਹੀਂ ਹੁੰਦੀ",
      ],
    },
    answer: 0,
  },
  {
    id: 18,
    question: {
      en: "A school wants to introduce AI-based student scholarship rankings. Which safeguard is most appropriate?",
      hi: "एक स्कूल AI-आधारित छात्र छात्रवृत्ति रैंकिंग शुरू करना चाहता है। कौन सा सुरक्षा उपाय सबसे उपयुक्त है?",
      pa: "ਇੱਕ ਸਕੂਲ AI-ਅਧਾਰਿਤ ਵਿਦਿਆਰਥੀ ਸਕਾਲਰਸ਼ਿਪ ਰੈਂਕਿੰਗ ਸ਼ੁਰੂ ਕਰਨਾ ਚਾਹੁੰਦਾ ਹੈ। ਕਿਹੜਾ ਬਚਾਅ ਉਪਾਅ ਸਭ ਤੋਂ ਵੱਧ ਢੁਕਵਾਂ ਹੈ?",
    },
    options: {
      en: [
        "A. Accept every ranking without review",
        "B. Keep all decision criteria secret from everyone",
        "C. Evaluate fairness, protect student data, and provide meaningful human oversight",
        "D. Rank students using their names alone",
      ],
      hi: [
        "A. बिना समीक्षा के हर रैंकिंग को स्वीकार करें",
        "B. सभी निर्णय मानदंडों को सभी से गुप्त रखें",
        "C. निष्पक्षता का मूल्यांकन करें, छात्र डेटा की रक्षा करें, और सार्थक मानवीय निरीक्षण प्रदान करें",
        "D. केवल उनके नामों का उपयोग करके छात्रों को रैंक करें",
      ],
      pa: [
        "A. ਬਿਨਾਂ ਸਮੀਖਿਆ ਦੇ ਹਰ ਰੈਂਕਿੰਗ ਨੂੰ ਸਵੀਕਾਰ ਕਰੋ",
        "B. ਸਾਰੇ ਫੈਸਲੇ ਦੇ ਮਾਪਦੰਡਾਂ ਨੂੰ ਸਾਰਿਆਂ ਤੋਂ ਗੁਪਤ ਰੱਖੋ",
        "C. ਨਿਰਪੱਖਤਾ ਦਾ ਮੁਲਾਂਕਣ ਕਰੋ, ਵਿਦਿਆਰਥੀ ਡਾਟਾ ਸੁਰੱਖਿਅਤ ਕਰੋ, ਅਤੇ ਅਰਥਪೂರ್ಣ ਮਨുੱਖੀ ਨਿਗਰਾਨੀ ਪ੍ਰਦਾਨ ਕਰੋ",
        "D. ਸਿਰਫ਼ ਉਹਨਾਂ ਦੇ ਨਾਵਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਰੈਂਕ ਦਿਓ",
      ],
    },
    answer: 2,
  },
  {
    id: 19,
    question: {
      en: "What is the main role of a machine-learning model?",
      hi: "मशीन-लर्निंग मॉडल की मुख्य भूमिका क्या है?",
      pa: "ਮਸ਼ੀਨ-ਲਰਨਿੰਗ ਮਾਡਲ ਦੀ ਮੁੱਖ ਭੂਮਿਕਾ ਕੀ ਹੈ?",
    },
    options: {
      en: [
        "A. To physically manufacture electronic devices",
        "B. To learn patterns from data and use them to make predictions or decisions",
        "C. To guarantee that no errors will occur",
        "D. To replace every dataset",
      ],
      hi: [
        "A. भौतिक रूप से इलेक्ट्रॉनिक उपकरण बनाना",
        "B. डेटा से पैटर्न सीखना और भविष्यवाणियां या निर्णय लेने के लिए उनका उपयोग करना",
        "C. यह गारंटी देना कि कोई त्रुटि नहीं होगी",
        "D. प्रत्येक डेटासेट को बदलना",
      ],
      pa: [
        "A. ਭੌਤਿਕ ਤੌਰ 'ਤੇ ਇਲੈਕਟ੍ਰਾਨਿਕ ਉਪਕਰਣ ਤਿਆਰ ਕਰਨਾ",
        "B. ਡਾਟਾ ਤੋਂ ਪੈਟਰਨ ਸਿੱਖਣਾ ਅਤੇ ਭਵਿੱਖਬਾਣੀਆਂ ਜਾਂ ਫੈਸਲੇ ਲੈਣ ਲਈ ਉਹਨਾਂ ਦੀ ਵਰਤੋਂ ਕਰਨਾ",
        "C. ਇਸ ਗੱਲ ਦੀ ਗਰੰਟੀ ਦੇਣਾ ਕਿ ਕੋਈ ਗਲਤੀ ਨਹੀਂ ਹੋਵੇगी",
        "D. ਹਰ ਡਾਟਾਬੇਸ ਨੂੰ ਬਦਲਣਾ",
      ],
    },
    answer: 1,
  },
  {
    id: 20,
    question: {
      en: "A smart city uses AI to analyse electricity consumption and predict demand. How can this help?",
      hi: "एक स्मार्ट शहर बिजली की खपत का विश्लेषण करने और मांग की भविष्यवाणी करने के लिए AI का उपयोग करता है। इससे कैसे मदद मिल सकती है?",
      pa: "ਇੱਕ ਸਮਾਰਟ ਸ਼ਹਿਰ ਬਿਜਲੀ ਦੀ ਖਪਤ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨ ਅਤੇ ਮੰਗ ਦੀ ਭਵਿੱਖਬਾਣੀ ਕਰਨ ਲਈ AI ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ। ਇਹ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ है?",
    },
    options: {
      en: [
        "A. It guarantees that electricity will never be interrupted",
        "B. It removes the need for power stations",
        "C. It prevents citizens from using electricity",
        "D. It can support demand forecasting and more efficient resource planning",
      ],
      hi: [
        "A. यह गारंटी देता है कि बिजली कभी बाधित नहीं होगी",
        "B. यह पावर स्टेशनों की आवश्यकता को हटा देता है",
        "C. यह नागरिकों को बिजली का उपयोग करने से रोकता है",
        "D. यह मांग पूर्वानुमान और अधिक कुशल संसाधन योजना का समर्थन कर सकता है",
      ],
      pa: [
        "A. ਇਹ ਗਰੰਟੀ ਦਿੰਦਾ ਹੈ ਕਿ ਬਿਜਲੀ ਕਦੇ ਵੀ ਬੰਦ ਨਹੀਂ ਹੋਵੇगी",
        "B. ਇਹ ਪਾਵਰ ਸਟੇਸ਼ਨਾਂ ਦੀ ਲੋੜ ਨੂੰ ਖਤਮ ਕਰ ਦਿੰਦਾ है",
        "C. ਇਹ ਨਾਗਰਿਕਾਂ ਨੂੰ ਬਿਜਲੀ ਵਰਤਣ ਤੋਂ ਰੋਕਦਾ ਹੈ",
        "D. ਇਹ ਮੰਗ ਦੀ ਭਵਿੱਖਬਾਣੀ ਅਤੇ ਵਧੇਰੇ ਕੁਸ਼ਲ ਸਾਧਨ ਯੋਜਨਾਬੰਦੀ ਦਾ ਸਮਰਥਨ ਕਰ ਸਕਦਾ है",
      ],
    },
    answer: 3,
  },
];

// Named Export और Default Export दोनों दिए गए हैं ताकि import error न आए
export default QUESTIONS_DATA;
