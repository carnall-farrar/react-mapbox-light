import { useState } from "react";
import "./App.css";
import { MapboxMap, GeoJSON } from "../../";
import geojson from "./la.json";
import "mapbox-gl/dist/mapbox-gl.css";

interface propertiesProps {
  lat: number;
  long: number;
  name: string;
}

function App() {
  const [popUpProperty, setPopUpProperty] = useState<
    propertiesProps | undefined
  >();
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
                type: "fill",
                source: "ics",
                layout: {},
                paint: {
                  "fill-color": "#48AFF0",
                  "fill-opacity": 0.8,
                },
              },
              {
                id: "outline",
                type: "line",
                source: "ics",
                layout: {},
                paint: {
                  "line-color": "black",
                  "line-width": 2,
                },
              },
            ]}
            onMouseMove={(e, features) => {
              const rightLayer = features?.filter(
                (row) => row.layer.id === "fillin"
              )[0];
              const property = {
                lat: rightLayer?.properties?.lat,
                long: rightLayer?.properties?.long,
                name: rightLayer?.properties?.rgn19nm,
              };

              setPopUpProperty(property);
            }}
          />
        </MapboxMap>
      </div>
    </div>
  );
}

export default App;
