import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBbUXF6CaAhQdAcnyThb_MBT57lwaS5a84",
  authDomain: "portifolio-29f0f.firebaseapp.com",
  projectId: "portifolio-29f0f",
  storageBucket: "portifolio-29f0f.appspot.com",
  messagingSenderId: "434672386501",
  appId: "1:434672386501:web:2b566b5f45c20516a7cbac",
  measurementId: "G-6WEER8D3RK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);