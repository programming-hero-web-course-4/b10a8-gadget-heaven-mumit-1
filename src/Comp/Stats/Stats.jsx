import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Line,
  ResponsiveContainer,
} from "recharts";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Stats = () => {
  const data = useLoaderData();

  const newData = data.map((gadget) => ({
    name: gadget.product_title ? gadget.product_title.split(" ")[0] : "N/A",
    price: gadget.price,
    total: gadget.price,
  }));

  useEffect(() => {
    document.title = "Gadget | Stats";
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Gadget | Stats</title>
      </Helmet>
      <div className="bg-base-200">
        <div className="max-w-screen-xl mx-auto px-2">
          <h1 className="py-5 font-bold text-lg">Stats</h1>
        </div>

        <div className="w-11/12 mx-auto lg:hidden">
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart
              data={newData}
              margin={{
                top: 20,
                right: 0,
                bottom: 20,
                left: 0,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis
                dataKey="name"
                interval={0}
                tick={{
                  width: 120,
                  wordBreak: "break-word",
                  display: "none",
                }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="price" barSize={50} fill="#9538E2" />
              <Line type="monotone" dataKey="total" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="w-11/12 mx-auto hidden lg:block">
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart
              data={newData}
              margin={{ top: 20, right: 0, bottom: 20, left: 100 }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" interval={0} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="price" barSize={50} fill="#9538E2" />
              <Line type="monotone" dataKey="total" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Stats;
