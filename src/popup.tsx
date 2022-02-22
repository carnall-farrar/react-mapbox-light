import mapboxgl from "mapbox-gl";
import React from "react";
import { renderToString } from "react-dom/server";
import { uuidv4 } from "./uuid";
import { withMap } from "./context";

export interface PopUpProps {
  id?: string;
  lnglat?: mapboxgl.LngLat;
  layer?: mapboxgl.Layer;
  map: mapboxgl.Map;
}

const PopUpComponent: React.FunctionComponent<PopUpProps> = ({
  id = uuidv4(),
  lnglat,
  layer,
  map,
  children,
}) => {
  const popups = document.getElementsByClassName("mapboxgl-popup");
  if (popups.length) {
    popups[0].remove();
  }

  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

  const htmlString = renderToString(children as any);
  if (lnglat && layer) {
    popup.setLngLat(lnglat).setHTML(htmlString).addTo(map);

    map.on("mouseleave", layer.id, () => {
      map.getCanvas().style.cursor = "";
      popup.remove();
    });
  }

  return null;
};

export const PopUp = withMap<PopUpProps>(PopUpComponent);
