import './App.css';
import { Map, Marker } from "pigeon-maps"
import { Fragment, useState, useEffect } from "react";
import { Dialog ,Transition} from "@headlessui/react";

import Checkout from './components/Checkout';

const App = () => {
    const [center, setCenter] = useState([51.044, -114.062]);
    const [startMarker, setStartMarker] = useState([])
    const [endMarker, setEndMarker] = useState([])
    const [zoom, setZoom] = useState(10);
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(false);
    const [showSelection, setShowSelection] = useState(false);
    const [transport, setTransport] = useState("");

    const [open, setOpen] = useState(false);

    const transports = [
        {name: 'bicycle', icon: "./bicycle.png", rate: 0.2},
        {name: 'bus', icon: "./bus.png", rate: 0.11},
        {name: 'c-train', icon: "./train.png", rate: 0.09},
        {name: 'scooter', icon: "./electric-scooter.png", rate: 0.02},
        {name: 'walk', icon: "./walk.png", rate: 0.1},
    ];

    const getDistance = () => {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(endMarker[0]-startMarker[0]);  // deg2rad below
        const dLon = deg2rad(endMarker[1]-startMarker[1]);
        const a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(startMarker[0])) * Math.cos(deg2rad(endMarker[0])) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
        ;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const d = R * c; // Distance in km
        return d;
    }

    const deg2rad = deg => {return deg*(Math.PI/180)}

    const getButtonContent = () => {
        if (finished) return ("Result");
        else if (loading) return (<svg className="cursor-not-allowed animate-spin h-20 w-20" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"
                        fillOpacity="0"></circle>
                <path className="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>);
        else if (startMarker.length !== 0 && endMarker.length === 0) return ("End");
        else if (startMarker.length === 0) return ("Start");
    }

    const handleTransportSelect = transportation => {
        setTransport(transportation);
        setShowSelection(false);
    }

    const handleTransportAdd = () => {
        setShowSelection(true);
        return;
    }

    const handlePositionAdd = () => {
        if (finished) {
            setFinished(false);
            setStartMarker([]);
            setEndMarker([]);
            setOpen(true);
            console.log(getDistance() * transport.rate);

            return;
        }
        setLoading(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                if (startMarker.length === 0) {
                    setStartMarker([latitude, longitude]);
                }
                if (startMarker.length !== 0 && endMarker.length === 0) {
                    setEndMarker([latitude, longitude]);
                    setFinished(true);
                }
                setCenter([latitude, longitude])
                setLoading(false);
                setZoom(16);
            });
        }
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setCenter([latitude, longitude])
                setLoading(false);
                setZoom(16);
            });
        }
    })

    return (
        <div>
        <Transition.Root show={showSelection} as={Fragment}>
            <Dialog 
                    onClose={() => setShowSelection(false)}
                    className="z-40 absolute bottom-0 w-full flex justify-center">
                <div className="absolute bottom-0 w-50 mb-40 bg-white p-5 border-b border-gray-200 rounded-md">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div>
                        <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Choose your transportation</h3>
                        <ul className="mt-5 space-y-6">
                            {transports.map((item) => (
                                <li key={item.name} className="flow-root">
                                    <div
                                        onClick={() => handleTransportSelect(item)}
                                        className="p-3 flex justify-between items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                                    >
                                        <img src={item.icon} className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                        <span className="ml-4">{item.name.toUpperCase()}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>    
            <Checkout open={open} setOpen={setOpen} />
            <div className="fixed w-full h-full z-0">
                <Map zoom={zoom} center={center}>
                    {startMarker.length !== 0 && <Marker width={50} anchor={startMarker}/>}
                    {endMarker.length !== 0 && <Marker width={50} anchor={endMarker}/>}
                </Map>
            </div>

            <div className="z-40 w-full bottom-0 absolute flex justify-center">
                {!transport && <button
                    onClick={handleTransportAdd}
                    className="absolute bottom-10 border border-transparent rounded-full shadow-sm text-white bg-green-400 h-20 w-20"
                >
                    Select
                </button>}

                {transport && <button
                    onClick={handlePositionAdd}
                    className="absolute bottom-10 border border-transparent rounded-full shadow-sm text-white bg-green-400 h-20 w-20"
                >
                    {getButtonContent()}
                </button>}
                {transport && <button
                    onClick={handleTransportAdd}
                    disabled={startMarker.length !== 0}
                    className="p-3 bg-white absolute bottom-0 right-20 mb-10 border border-transparent rounded-full shadow-sm text-white"
                >
                    <img src={transport.icon} className="flex-shrink-0 h-6 w-6 text-gray-400"/>
                </button>}
            </div>


        </div>
    );
}

export default App;
