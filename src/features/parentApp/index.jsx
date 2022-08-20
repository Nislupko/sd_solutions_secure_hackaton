import Web3 from 'web3/dist/web3.min.js';
import Map from 'ol/Map';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from "ol/source/Vector";
import {Style, Icon} from "ol/style";
import {transform, fromLonLat} from 'ol/proj.js';
import {useEffect, useState, useRef} from "react";
import OSM from 'ol/source/OSM';
import {CONTACT_ABI, CONTACT_ADDRESS} from "../../contracts/const";
import {useChildren} from "./assignedChildren/hooks/useChildren";

export const ParentPage = () => {
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const { loadChildren } = useChildren();
    const [map, setMap] = useState();
    const [markers, setMarkers] = useState();
    const [kidPoint, setKidPoint] = useState();

    const [child, setChild] = useState([]);
    const mapElement = useRef();
    const mapRef = useRef();
    mapRef.current = map;

    const getChildGeo = async (contract, parentAccount, childId) => {
        const geo = await contract.methods.getTrack().call({from: parentAccount});
        const last = geo[geo.length - 1];
        setChild({id: childId, coords: { latitude: last.latitude, longitude: last.longitude} })
        console.log("[NEW GEO FETCHED]", { latitude: last.latitude, longitude: last.longitude});
    }

    const processRegister = async (accounts) => {
        const [parentAccount] = accounts;
        const contract = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
        const child = await contract.methods.getDevice().call({from: parentAccount});
        console.log("[CHILD]", child);
        const geo = await contract.methods.getTrack().call({from: parentAccount});
        setChild({ id: child, geo });
        await getChildGeo(contract, parentAccount, child)
        setInterval(() => getChildGeo(contract, parentAccount, child), 5000)
    }

    useEffect(() => {
        web3.eth.requestAccounts()
            .then(processRegister)
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        if (map){
            const newMarkers = new VectorLayer({
                source: new VectorSource(),
                style: new Style({
                    image: new Icon({
                        anchor: [0.5, 1],
                        src: 'https://openlayers.org/en/latest/examples/data/icon.png'
                    })
                })
            });
            map.addLayer(newMarkers);
            setMarkers(newMarkers);
        }
    }, [map])

    useEffect(() => {
        if (!map || !child) return;
        const view = map.getView();
        view.setCenter(transform([child?.coords?.longitude, child?.coords?.latitude], 'EPSG:4326', 'EPSG:3857'));
        view.setZoom(15)
        const point = new Feature(new Point(fromLonLat([child?.coords?.longitude, child?.coords?.latitude])));
        if (markers){
            const source = markers.getSource();
            // source.removeFeature(kidPoint);
            source.addFeature(point);
            setKidPoint(point);
        }
    }, [child, map, markers])

    useEffect(() => {
        const initialMap = new Map({
            target: mapElement.current,
            layers: [
                new TileLayer({source: new OSM()}),
            ],
            view: new View({
                center: [40, 40],
                zoom: 0,
            }),
        });
        setMap(initialMap);
    }, []);

    return <div>
        <div className={'content'}>
            <div
                style={{height:'100vh',width:'100%', zIndex:'1', position: 'absolute'}}
                ref={mapElement}
                className="map-container"
            />
            <button
                style={{zIndex:'100', height:"2rem", width: '6rem', position: 'absolute', bottom: "1rem", left: '1rem'}}
                onClick={loadChildren}
            >
                Refresh
            </button>
        </div>
    </div>
}