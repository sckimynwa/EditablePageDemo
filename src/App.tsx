import React, { useState } from 'react';

import type { Value } from '@react-page/editor';
import Editor from '@react-page/editor';

import slate from '@react-page/plugins-slate';
import image from '@react-page/plugins-image';
import { Box } from '@mui/material';

const cellPlugins = [slate(), image];

export default function SimpleExample() {
  const [value, setValue] = useState<Value | null>(null);

  return (
    <Box
      sx={{
        padding: '32px 64px',
      }}
    >
      <Editor cellPlugins={cellPlugins} value={value} onChange={setValue} />
    </Box>
  );
}
