import logo from './logo.svg';
import './App.css';
import MasonryLayout from './MasonaryLayout';

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (

    <div>
      <h1>Hello</h1>
      <MasonryLayout columns={2} gap={25}>
        {
          [...Array(12).keys()].map(key => {
            const height = 200 + Math.ceil(Math.random() * 300);

            return (
              <div style={{
                height: `${height}px`, display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#efefef"
              }} />
            )
          })
        }
      </MasonryLayout>
    </div>);
}

export default App;
