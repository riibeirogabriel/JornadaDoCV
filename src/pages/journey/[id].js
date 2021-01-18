import { useRouter } from 'next/router';

import Journey from '../../components/Journey';

const JourneyComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Journey id={id} />;
};

export default JourneyComponent;
