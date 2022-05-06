import { Dialog, DialogContent } from '@mui/material';
import React, { useState } from 'react';

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const AuthDialog: React.FC<IProps> = ({ open, onClose }) => {
  const [formType, setFormType] = useState<'login' | 'register'>('login');

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent></DialogContent>
    </Dialog>
  );
};
