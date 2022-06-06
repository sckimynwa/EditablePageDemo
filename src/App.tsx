import React, { useState } from 'react';

import type { Value } from '@react-page/editor';
import Editor from '@react-page/editor';

import slate from '@react-page/plugins-slate';
import image from '@react-page/plugins-image';

const cellPlugins = [slate(), image];

export default function SimpleExample() {
  const [value, setValue] = useState<Value | null>(null);

  return (
    <div>
      <Editor cellPlugins={cellPlugins} value={value} onChange={setValue} />
    </div>
  );
}
