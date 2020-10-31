const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('Hey!');
    } else {
      reject('Whoops!');
    }
  });
};

somethingWillHappen()
  .then(response => console.log(response))
  .catch(error => console.error(error));
