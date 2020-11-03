import axios from 'axios';

const getGoats = () => new Promise((resolve, reject) => {
  axios
    .get('https://fir-cows-958ae.firebaseio.com/react-goats.json').then((res) => {
      const goatsObj = res.data;
      const goats = [];
      if (goatsObj) {
        Object.keys(goatsObj).forEach((goatId) => {
          goats.push(goatsObj[goatId]);
        });
      }
      resolve(goats);
    }).catch((error) => reject(error));
});

export default { getGoats };
