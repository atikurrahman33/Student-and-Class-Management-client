import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Partnars from "../Partnars/Partnars";
import POpularCourse from "../PopularCourse/POpularCourse";
import ShowUsers from "../ShowUsers/ShowUsers";
import Teacher from "../Teacher/Teacher";





const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partnars></Partnars>
            <POpularCourse></POpularCourse>
            <ShowUsers></ShowUsers>
            <Teacher></Teacher>
            <FAQ></FAQ>
            
            
        </div>
    );
};

export default Home;