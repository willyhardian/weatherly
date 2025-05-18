import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="flex">
                <div className="navbar bg-base-100 w-3/4">
                    <label className="input bg-gray-100 rounded-md">
                        <svg
                            className="h-[1em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            type="search"
                            required
                            placeholder="Search city"
                        />
                    </label>
                </div>
                <div className="w-1/4 bg-gray-100 p-5">
                    <h2 className="text-2xl font-bold mb-5">
                        Weather Prediction
                    </h2>
                    <div className="flex bg-white rounded-lg p-3">
                        <div className="w-1/4 flex justify-center items-center">
                            <img
                                src="http://openweathermap.org/img/wn/01d@2x.png"
                                alt="weather"
                                className="h-full"
                            />
                        </div>
                        <div className="w-3/4 flex justify-center flex-col">
                            <div>
                                <p className="text-gray-500">November 10</p>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p>Cloudy</p>
                                </div>
                                <div>
                                    <p className="text-orange-500">26°C</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
