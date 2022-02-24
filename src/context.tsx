import * as React from "react";
import * as MapboxGl from "mapbox-gl";

export const MapContext = React.createContext(undefined) as React.Context<
  MapboxGl.Map | undefined
>;

interface MapOutputProps {
  map: MapboxGl.Map;
}

export interface MapInputProps {}

export function withMap<T>(
  Component: React.FC<Omit<T, "map"> & MapOutputProps>
) {
  const MappedComponent: React.FC<Omit<T, "map"> & MapInputProps> = (props) => {
    return (
      <MapContext.Consumer>
        {(map) => map && <Component {...props} map={map} />}
      </MapContext.Consumer>
    );
  };

  return MappedComponent;
}
