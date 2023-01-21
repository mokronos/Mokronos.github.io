// alert('Hello World');

const root = ReactDOM.createRoot(document.getElementById('root'));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const element = "mkam";
const headline = <h1>Hello, world!</h1>;
const imgsrc = "/random_stuff/oneshot/images/Darkness.webp";
const eximg = <img src={imgsrc}></img>;

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

function Image(name, ext) {
  return <img src={"/random_stuff/oneshot/images/" + name + "." + ext}></img>;
}

setInterval(tick, 1000);
