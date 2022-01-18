import "./App.css";
import { MapboxMap, GeoJSON } from "../../";
import geojson from "./la.json";
import "mapbox-gl/dist/mapbox-gl.css";

function App() {
  return (
    <div className="App">
      <h1>React Mapbox Light</h1>
      <div style={{ height: 500, width: 500 }}>
        <MapboxMap
          token="pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2t1aTVtMWh0MHFlMzJvbm1vOGo2dTQzYSJ9.5sEf-pLMffICqD8spumntg"
          control="bottom-left"
          scrollZoom={false}
          mapboxOptions={{
            style: "mapbox://styles/mapbox/light-v10",
            center: [-2.2783131, 53.1400067],
            zoom: 6,
          }}
        >
          <GeoJSON
            data={geojson as any}
            id="ics"
            layers={[
              {
                id: "fillin",
                type: "line",
                source: "ics",
                layout: {},
                paint: {
                  "line-color": "#FFB366",
                  "line-width": 2,
                },
              },
            ]}
          />
        </MapboxMap>
      </div>
    </div>
  );
}

export default App;
