import { useState, useEffect } from 'react';
import avatarImage from '../images/avatar.jpg';

export default function() {
  const mockData = {
    name: 'David Ford',
    address: 'Rye Golf Club (Old), UK',
    avatar: avatarImage,
    details: {
      quality: 80,
      handicap: 'PRO',
      sgTotal: 4.14,
    },
  }

  const [data, setData] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setData(mockData);
      setLoader(false);
    }, 2000);
  }, []);

  return { data, loader }
}