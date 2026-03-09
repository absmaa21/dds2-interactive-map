import './Dds2Map.css'
import {lazy, Suspense, useEffect} from "react";
import Loading from "../components/Loading.tsx";
import MapDrawer from "../components/dds2-map/MapDrawer.tsx"
import MarkerDrawer from "../components/dds2-map/MarkerDrawer.tsx";
import useMapData from "../hooks/useMapData.ts";


const Map = lazy(() => import('../components/dds2-map/Dds2Leaflet.tsx'))

function Dds2Map() {

  const MapData = useMapData()
  const mapDrawerWidth: number = 280

  useEffect(() => {
    document.title = 'DDS2 Interactive Map'
  }, []);

  return (
    <div className={'container'}>
      <MarkerDrawer chosenMarker={MapData.chosenMarker}/>

      <Suspense fallback={<Loading/>}>
        <Map/>
      </Suspense>

      <MapDrawer width={mapDrawerWidth}/>
    </div>
  );
}

export default Dds2Map;