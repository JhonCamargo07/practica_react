import { useState, useEffect } from "react";
import { Heading, Image} from "@chakra-ui/react";
import { addDays, format } from 'date-fns/fp';
import reactLogo from "./assets/react.svg";
import * as API from "./services/launches";
import { LaunchItem } from "./components/Launchitem";
import "./App.css";
import "./bootstrap.css";
import logo from "./assets/SpaceX-Logo.png";

export function App() {
  const [launches, setLaunches] = useState([]);
  // const [count, setCount] = useState(0)

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <div>
        <Image src={logo} alt="Logo Space" mb={5} width={300} />
        <Heading as="h1" size="xl" m={4}>
          SpaceX Launches
        </Heading>
        <section>
          {launches.map((launch) => (
            <LaunchItem key={launch.flght_number} {...launch} />
          ))}
        </section>
      </div>
    </>
  );
}
