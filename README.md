# react-mapbox-light

A modern and light adaptation of `mapbox-gl` for React.

## Components

- MapboxMap
- GeoJSON

## Getting Started

```
npm i react-mapbox-light mapbox-gl --save
```

You will need to add mapbox CSS by importing it into your JS/TS files or inject it into your HTML

```
import "mapbox-gl/dist/mapbox-gl.css";
```

```html
<html>
  <head>
    ...
    <link
      href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
      rel="stylesheet"
    />
  </head>
</html>
```

```tsx
import { MapboxMap, GeoJSON } from 'react-mapbox-light';
...

      <MapboxMap
        token={process.env.REACT_APP_MAPBOX_TOKEN!}
        control="bottom-left"
        scrollZoom={false}
        mapboxOptions={{
          style: "mapbox://styles/mapbox/light-v10",
          center: [-2.2783131, 53.1400067],
          zoom: 6,
        }}
      >
        <GeoJSON
            data={geojson}
            id="outline-layer"
            layers={[
                {
                id: "outline",
                type: "line",
                source: "outline-layer",
                layout: {},
                paint: {
                    "line-color": "#fff",
                    "line-width": 2,
                },
                },
            ]}
        />
      </MapboxMap>
```
