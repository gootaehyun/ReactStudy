// import React, { Component } from "react";
// import LifeCycleSample from "./LifeCycleSample";
// import ErrorBoundary from "./ErrorBoundary";

//랜덤 색상을 생성합니다.
// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }
// class App extends Component {
//   state = {
//     color: "#000000",
//   };
//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}> 랜덤 색상</button>
//         <ErrorBoundary>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }

// export default App;

//8장
// import React from "react";
// import Counter1 from "./Counter1";

// const App = () => {
//   return <Counter1 />;
// };

// export default App;

//8.1
// import React from "react";
// import Info from "./Info";

// const App = () => {
//   return <Info />;
// };

// export default App;

//8.2
// import React, { useState } from "react";
// import Info from "./Info";

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? "숨기기" : "보이기"}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   );
// };

// export default App;

//8.3
// import React from "react";
// import Counter1 from "./Counter1";

// const App = () => {
//   return <Counter1 />;
// };

// export default App;

//8.3.2
// import React from "react";
// import Info from "./Info";

// const App = () => {
//   return <Info />;
// };

// export default App;

//8.4
import React from "react";
import Average from "./Average";

const App = () => {
  return <Average />;
};

export default App;
