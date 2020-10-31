const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('Hey!');
    } else {
      reject(new Error('Whoops!'));
    }
  });
};

somethingWillHappen()
  .then(response => console.log(response))
  .catch(error => console.error(error));
