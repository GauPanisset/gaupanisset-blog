'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '@/technical/ui/button';

const ThemeModeSwitch: React.FunctionComponent = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleSwitchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleSwitchTheme}>
      {theme === 'dark' ? <Moon /> : <Sun />}
    </Button>
  );
};

export { ThemeModeSwitch };
