/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';
import { GetTopMindshareQueryQueryOptions } from '../../queryFn/getTopMindshare';
import { MINDSHARE_DURATION, MINDSHARE_FIELDS } from '../../utils/constants';
import { Treemap, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useState } from 'react';
import { Button, ButtonGroup } from '@heroui/react';

const CustomizedContent = (props: any) => {
  const { x, y, width, height, name, data } = props;
  const { pfpUrl } = data?.userInfo || {};
  const mindshare = (data?.last7dMindshare * 100).toFixed(2);

  const chartData = data?.daily.map((d: any) => ({
    mindshare: d.mindshare ? d.mindshare : 0,
    time: new Date(d._time).toLocaleDateString,
  }));

  return (
    <g transform={`translate(${x},${y})`} className="recharts-layer recharts-treemap-rectangle">
      Background Rectangle
      <rect width={width} height={height} fill="#d32f2f" stroke="#fff" rx={10} ry={10} />
      {/* Profile Picture */}
      {pfpUrl && <image href={pfpUrl} x={10} y={10} width={45} height={45} clipPath="circle()" />}
      {/* User Name */}
      <text x={65} y={37.5} fill="#FFD700" fontSize={16} fontWeight="bold">
        {name}
      </text>
      {/* Mindshare Percentage */}
      <text x={15} y={75} fill="#fff" fontSize={14} fontWeight="bold">
        {mindshare}%
      </text>
      {/* Ranking Badge */}
      {data?.rank === 1 && (
        <g transform={`translate(${width - 40}, ${10})`}>
          <polygon points="10,0 20,15 0,15" fill="#FFD700" stroke="#fff" strokeWidth={1} />
          <text x={5} y={12} fontSize={12} fontWeight="bold" fill="#000">
            1
          </text>
        </g>
      )}
      <foreignObject x={10} y={height - 50} width={width - 20} height={40}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="mindshare" stroke="#fff" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </foreignObject>
    </g>
  );
};

export interface MindshareTreemapProps {
  width?: string;
  height?: string;
  minHeight?: number;
}

export const MindshareTreemap = ({
  width = '100%',
  height = '100%',
  minHeight = 300,
}: MindshareTreemapProps) => {
  const [duration, setDuration] = useState(MINDSHARE_DURATION.SEVEN);

  const { data, isLoading, isError } = useQuery(
    GetTopMindshareQueryQueryOptions({
      keys: [MINDSHARE_FIELDS.MINDSHARE, duration, 'desc'],
      variables: {
        duration: duration,
        field: MINDSHARE_FIELDS.MINDSHARE,
        limit: 20,
        desc: true,
      },
    })
  );

  if (isLoading) return <p>Loading mindshare data...</p>;
  if (isError) return <p>Error fetching mindshare data.</p>;

  const formattedData =
    data?.map((user: any) => ({
      name: user?.userInfo?.displayName || 'Unknown',
      size: user?.last7dMindshare * 10000 || 0,
      data: user,
    })) || [];

  const handleButtonClick = (duration: string) => {
    setDuration(duration);
  };

  return (
    <div className="w-full h-full">
      <h1> MindshareTreeView </h1>
      <div>
        <h1 className="text-white"> MindshareTreeView </h1>
        <ButtonGroup className="light">
          <Button onPress={() => handleButtonClick(MINDSHARE_DURATION.SEVEN)}>7D</Button>
          <Button onPress={() => handleButtonClick(MINDSHARE_DURATION.THIRTY)}>30D</Button>
        </ButtonGroup>
      </div>
      <ResponsiveContainer width={width} height={height} minHeight={minHeight}>
        <Treemap
          data={formattedData}
          dataKey="size"
          nameKey="name"
          // aspectRatio={16 / 9}
          stroke="#fff"
          fill="#8884d8"
          // isAnimationActive={false}
          content={<CustomizedContent />}
        >
          <Tooltip
            content={({ payload }) => {
              if (!payload || payload.length === 0) return null;
              const item = payload[0].payload;
              return (
                <div style={{ background: '#fff', padding: 10, borderRadius: 5 }}>
                  <strong>{item.name}</strong>
                  <p>Username: @{item.username}</p>
                  <p>Mindshare: {item.size.toFixed(6)}</p>
                </div>
              );
            }}
          />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
};
