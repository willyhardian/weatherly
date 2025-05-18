import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Droplets, MapPin, Wind } from "lucide-react";
import wmo from "./data/wmo.json";
function App() {
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    async function fetchWeather(url) {
        try {
            setLoading(true);
            // const response = await axios.get(url);
            // setWeather(response.data);
            setWeather({
                latitude: -6.125,
                longitude: 106.875,
                generationtime_ms: 0.0940561294555664,
                utc_offset_seconds: 25200,
                timezone: "Asia/Bangkok",
                timezone_abbreviation: "GMT+7",
                elevation: 15,
                current_units: {
                    time: "iso8601",
                    interval: "seconds",
                    temperature_2m: "°C",
                    rain: "mm",
                    weather_code: "wmo code",
                    relative_humidity_2m: "%",
                    wind_speed_10m: "km/h",
                    is_day: "",
                },
                current: {
                    time: "2025-05-18T16:00",
                    interval: 900,
                    temperature_2m: 31.4,
                    rain: 0,
                    weather_code: 3,
                    relative_humidity_2m: 67,
                    wind_speed_10m: 9.9,
                    is_day: 1,
                },
                daily_units: {
                    time: "iso8601",
                    weather_code: "wmo code",
                    temperature_2m_max: "°C",
                    temperature_2m_min: "°C",
                },
                daily: {
                    time: [
                        "2025-05-18",
                        "2025-05-19",
                        "2025-05-20",
                        "2025-05-21",
                        "2025-05-22",
                        "2025-05-23",
                        "2025-05-24",
                    ],
                    weather_code: [80, 3, 3, 95, 95, 3, 95],
                    temperature_2m_max: [
                        34, 33.9, 33.4, 31.8, 31.5, 32.1, 32.9,
                    ],
                    temperature_2m_min: [
                        26.3, 26.2, 26.2, 26.1, 25.7, 26.2, 25.9,
                    ],
                },
            });
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }

    useEffect(() => {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=-6.1818&longitude=106.8223&current=temperature_2m,rain,weather_code,relative_humidity_2m,wind_speed_10m,is_day&timezone=Asia%2FBangkok`;
        fetchWeather(url);
    }, []);
    return (
        <>
            <div className="flex">
                <div className="bg-white w-3/4 p-5">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-3xl my-4 text-orange-400 font-bold">
                                Weatherly
                            </p>
                        </div>
                        <div>
                            <p className="flex gap-2">
                                <MapPin /> Jakarta
                            </p>
                        </div>
                    </div>
                    <label className="input bg-gray-100 rounded-md w-full my-3">
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
                    {loading ? (
                        <div className="rounded-md bg-white p-4 w-1/3">
                            <div className="flex animate-pulse space-x-4">
                                <div className="flex-1 space-y-6 py-1">
                                    <div className="h-2 rounded bg-gray-200"></div>
                                    <div className="space-y-3">
                                        <div className="h-2 rounded bg-gray-200"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="grid grid-cols-6 gap-4">
                                {weather?.daily?.time
                                    ?.slice(1)
                                    .map((item, idx) => {
                                        return (
                                            <div className="rounded-lg bg-white p-4 text-center shadow-md">
                                                <p>
                                                    {new Date(
                                                        item
                                                    ).toLocaleDateString(
                                                        "en-US",
                                                        {
                                                            weekday: "short",
                                                        }
                                                    )}
                                                </p>

                                                <img
                                                    src={
                                                        wmo[
                                                            weather?.daily
                                                                ?.weather_code[
                                                                idx
                                                            ]
                                                        ]?.day?.image
                                                    }
                                                    alt="Weather Icon"
                                                />
                                                <p>
                                                    {
                                                        weather?.daily
                                                            ?.temperature_2m_max[
                                                            idx
                                                        ]
                                                    }
                                                    {
                                                        weather?.daily_units
                                                            ?.temperature_2m_max
                                                    }
                                                </p>
                                            </div>
                                        );
                                    })}
                                <div></div>
                            </div>
                            {/* <div className="flex justify-between">
                                <div>
                                    <p>Weather Forecast</p>
                                    <p className="text-3xl">
                                        {weather?.current?.temperature_2m}
                                        {weather?.current_units?.temperature_2m}
                                    </p>
                                    <p>
                                        {
                                            wmo[
                                                weather?.current?.weather_code
                                            ]?.[
                                                weather?.current?.is_day == 1
                                                    ? "day"
                                                    : "night"
                                            ]?.description
                                        }
                                    </p>
                                </div>
                                <div>
                                    <img
                                        src="http://openweathermap.org/img/wn/01d@2x.png"
                                        alt="weather"
                                        className="w-[5em]"
                                    />
                                </div>
                            </div> */}
                        </div>
                    )}
                    {/* <div className="flex justify-between">
                        <div>
                            <p>Humidity</p>
                            <p>800mb</p>
                        </div>
                        <div>
                            <p>Rain</p>
                            <p>4.3 km</p>
                        </div>
                        <div>
                            <p>Wind Speed</p>
                            <p>87%</p>
                        </div>
                    </div> */}
                </div>
                <div className="w-1/4 bg-orange-50 p-5 h-screen">
                    <p className="font-bold text-center">
                        {new Date().toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                    <div className="text-center mb-5">
                        <img
                            src={
                                wmo[weather?.current?.weather_code]?.[
                                    weather?.current?.is_day == 1
                                        ? "day"
                                        : "night"
                                ]?.image
                            }
                            alt="weather"
                            className="w-1/2 mx-auto"
                        />
                        <p className="text-3xl my-3">
                            {weather?.current?.temperature_2m}
                            {weather?.current_units?.temperature_2m}
                        </p>
                        <p className="my-3">
                            {
                                wmo[weather?.current?.weather_code]?.[
                                    weather?.current?.is_day == 1
                                        ? "day"
                                        : "night"
                                ]?.description
                            }
                        </p>
                        <p className="flex justify-center gap-2">
                            <Wind />
                            {weather?.current?.wind_speed_10m}
                            <span>|</span>
                            <Droplets />
                            {weather?.current?.relative_humidity_2m}
                        </p>
                    </div>
                    {/* <div className="flex justify-between">
                        <h2 className="font-bold mb-5">Other large cities</h2>
                    </div> */}
                    {/* <div className="flex bg-white rounded-lg p-3">
                        <div className="w-1/4 flex justify-center items-center">
                            <img
                                src={
                                    wmo[weather?.current?.weather_code]?.[
                                        weather?.current?.is_day == 1
                                            ? "day"
                                            : "night"
                                    ]?.image
                                }
                                alt="weather"
                                className="w-full"
                            />
                        </div>
                        <div className="w-3/4 flex justify-center flex-col">
                            <div>
                                <p className="text-gray-500">Jakarta</p>
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
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default App;
