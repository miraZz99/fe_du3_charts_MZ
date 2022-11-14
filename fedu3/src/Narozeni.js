import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,} from 'recharts';

const Narozeni = () => {
  const data = [
    { year: "2018", value: 114036 },
    { year: "2019", value: 112231 },
    { year: "2020", value: 110200 },
    { year: "2021", value: 111793 },
    { year: "2022", value: 50011 },
  ]


    return (
      <div className="Populace">
        <h2>Počet živě narozených v ČR za posledních 5 let</h2>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="year" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </div>
    );
};

export default Narozeni;