const gallery = require("./gallery.json");

console.log(gallery);

export function App() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
            }}
            >
            {gallery.map(item => {
                return (
                    <img 
                        key={item.urls.thumb}
                        src={item.urls.thumb} 
                        style={{
                            height: "200px",
                        }}
                        />
                );
            })}
        </div>
    );
}