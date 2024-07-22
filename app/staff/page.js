'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const StaffHome = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/staff/appointment');
  }, [router]);

  return null;
};

export default StaffHome;
