import GenderPieChart from "../../Components/PieChart/PieChart";
import AgeHistogram from "../../Components/histogram/Histogram";
import Sidebar from "../../Components/sidebar/Sidebar";
import { useEffect,useState } from "react";
import VaccinationStatusChart from "../../Components/statusbar/statusbar";
import { useDispatch } from "react-redux";
import { logout } from "../../Slices/authslice";
const Dashboard = () => {
    const dispatch = useDispatch();
    const [goats, setGoats] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/goat/`)
        .then(res => res.json())
        .then(data => {
            setGoats(data.goat);
            console.log(data);
        })
        .catch(err => console.error(err));
    }, []);
    return ( 
        <div style={{
            marginLeft: '40vh',
            paddingTop: '10vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
        }}>
        
            <GenderPieChart goats={goats} />
            <div>

            <AgeHistogram goats={goats} />
            <VaccinationStatusChart goats={goats} />
            </div>
        </div>
     );
}
 
export default Dashboard;