import React, { useEffect } from 'react';
import { useAuthContext } from '../Hooks/useAuthContext';

const Logout = () => {
  const { user, handleLogOut } = useAuthContext()

  useEffect(() => {
    handleLogOut();
  }, []);

  return null;
};

export default Logout;