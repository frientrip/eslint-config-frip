import { useEffect, useState } from 'react';

console.log('ss');

function ReactHooksTest() {
  const [text, setText] = useState('');

  useEffect(() => {
    const message = `hi ${text}`;
  }, []);
}
