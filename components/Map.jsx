import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

const Map = ({ ...props }) => {
  const map = useRef(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY ?? "";
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.4161, 37.7765], // center map on Chad
      zoom: 16.38,
    });

    new mapboxgl.Marker({
      color: "#555555",
    })
      .setLngLat([-122.4161, 37.7765])
      .addTo(map.current);
  }, [mapContainer]);

  return <div className="h-full w-full" ref={mapContainer} />;
};

Map.propTypes = {};

export default Map;
