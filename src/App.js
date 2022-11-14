import logo from "./logo.svg";
import "./App.css";
// JSX: Javascript XML
// ES6
// Babel
function Feature() {
  return (
    <div className="feature">
      <img src="" alt="" className="feature-image" />
      <h3 className="feture-title">Title2</h3>
      <p className="feature-desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
        sapiente? Omnis facilis eos rerum fugiat cum nulla aperiam, obcaecati
        necessitatibus quo. Reiciendis excepturi quae suscipit omnis aliquid
        veniam sequi distinctio.
      </p>
    </div>
  );
}
// parent component
function App() {
  // const name = "Evondev";
  // function fullname(firstName, lastName) {
  //   return `${firstName}  ${lastName}`;
  // }
  return (
    <div>
      {/* children component */}
      {/* <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature> */}
      <YoutubeItem image="https://images.unsplash.com/photo-1668067446629-307d4ef9e0f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"></YoutubeItem>
      <YoutubeItem image="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"></YoutubeItem>
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h1>Hello {name === "evondev" ? "Tuan" : "Anh"}</h1>
  //       <h2>{fullname("Nguyen Duy", "Thai")}</h2>
  //       {/* <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p> */}
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}
// Props -> Propertise
function YoutubeItem(props) {
  console.log(props);
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img
          src="https://images.unsplash.com/photo-1668355127376-91b48ed7ee7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"
          alt=""
          className="youtube-avatar"
        />
      </div>
      <div className="youtube-info">
        <h3 className="youtube-title">Learning React</h3>
        <h4 className="youtube-author">Evondev</h4>
      </div>
    </div>
  );
}
export default App;
