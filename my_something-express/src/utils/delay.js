export const delay = (min = 300, max = 1500, failRate = 0.1) => {
  const duration = Math.floor(Math.random() * (max - min + 1)) + min;
  const willFail = Math.random() < failRate;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willFail) {
        reject(new Error('💥 Mock Error: Simulated failure'));
      } else {
        resolve();
      }
    }, duration);
  });
};
