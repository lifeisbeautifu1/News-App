'use client';

import TimeAgo from 'react-timeago';

interface LiveTimestampProps {
  time: string;
}

const LiveTimestamp = ({ time }: LiveTimestampProps) => {
  return <TimeAgo date={time} />;
};

export default LiveTimestamp;
