/* eslint-disable */
import { boot } from 'quasar/wrappers'
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "XXXXX",
  authDomain: "XXX",
  projectId: "XXX",
  storageBucket: "XXXX",
  messagingSenderId: "XXXX",
  appId: "XXXX",
  measurementId: "G-XXXXX"
};

const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

 firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        unsubscribe();
        resolve(user);
      }, reject);
    })
  };

export default boot(({ app, router, store }) => {
  app.config.globalProperties.$firebase = firebase;
  app.config.globalProperties.$analytics = analytics;

  router.beforeEach(async (to, from, next) => {
    const auth = to.meta.requiresAuth
    if (auth && !await firebase.getCurrentUser()) {
      next('/');
    } else {
      next();
    }
  })
})

export { firebase, analytics };

