let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    message: 'Hello World',
  }
});

app.message = "wow, crazy";
console.log(app.message);