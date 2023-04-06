import Gauge from '@/components/Gauge';

interface Props {
  values: ProjectValues;
}

function GaugeCollection({ values }: Props): JSX.Element {
  return (
    <div className="grid-row-3 grid gap-3">
      {Object.entries(values).map(([key, value]) => (
        <Gauge key={key} text={key} percent={value} />
      ))}
    </div>
  );
}

export default GaugeCollection;
