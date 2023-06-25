// Difference between async await and then catch

axios(payload)
  .then((d) => {})
  .catch((e) => {});

// method 1
async function getData(payload) {
  try {
    const result = await axios(payload);
  } catch (e) {}
}

// method 2
const getData = async (payload) => {
  try {
    const result = await axios(payload);
  } catch (e) {}
};

getData(payload);
