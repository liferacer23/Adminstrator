import NavBar from "../components/NavBar";
import Widget from "./Widget";
import Featured from "./Featured";
import Chart from "./Chart";
import Transactions from "./Transactions";
export default function Container() {
  return (
    <div className="lg:w-5/6 md:w-full sm-w:full flex flex-col p-1">
      <NavBar />
      <div className="flex flex-wrap justify-around mt-3">
        <Widget type="users" />
        <Widget type="orders" />
        <Widget type="earnings" />
        <Widget type="balance" />
      </div>
      <div className="flex justify-around p-2 mt-3 mx-3">
        <Featured />
        <Chart />
      </div>
      <div>
        <Transactions/>
      </div>
    </div>
  );
}
