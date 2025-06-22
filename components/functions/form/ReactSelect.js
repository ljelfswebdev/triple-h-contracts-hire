'use client';

import dynamic from 'next/dynamic';

const Select = dynamic(() => import('react-select'), { ssr: false });

const customSelectStyles = {
    control: (base, state) => ({
      ...base,
      height: '50px',
      border: '2px solid var(--grey)',
      borderRadius: '5px',
      padding: '0 12px',
      outline: state.isFocused || state.menuIsOpen || state.hasValue
        ? '2px solid var(--primary)'
        : '2px solid transparent',
      outlineOffset: '-2px',
      transition: 'outline 0.2s ease',
      fontFamily: 'inherit',
      fontSize: '16px',
      boxShadow: 'none',
      backgroundColor: 'white',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center', // 💥 critical for alignment
      '&:hover': {
        outline: '2px solid var(--primary)',
      },
    }),
    valueContainer: (base) => ({
      ...base,
      padding: 0,
      margin: 0,
      height: '100%',
      display: 'flex',
      alignItems: 'center', // ✅ vertically align placeholder + text
    }),
    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0,
      height: 'auto',
      lineHeight: 1,
      fontSize: '16px',
      boxShadow: 'none',
    }),
    singleValue: (base) => ({
      ...base,
      margin: 0,
      lineHeight: 1,
      fontSize: '16px',
    }),
    placeholder: (base) => ({
      ...base,
      margin: 0,
      lineHeight: 1,
      fontSize: '16px',
    }),
    indicatorsContainer: (base) => ({
      ...base,
      padding: '0 8px',
      height: '100%',
    }),
    dropdownIndicator: (base) => ({
      ...base,
      padding: 0,
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
  };

export default function ReactSelect(props) {
  return <Select styles={customSelectStyles} {...props} />;
}