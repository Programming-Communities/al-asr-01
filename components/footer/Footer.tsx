'use client';
import React from 'react';

interface FooterProps {
  isDark?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark = false }) => {
  return (
    <footer style={{
      background: isDark ? '#000000' : 'linear-gradient(to bottom, #111827, #450a0a)',
      padding: '2rem 1rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Social Media Icons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {['📘', '📷', '🐦', '📺'].map((icon, index) => (
            <a key={index} href="#" style={{
              padding: '0.75rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '0.5rem',
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.3rem',
              width: '50px',
              height: '50px'
            }}>
              {icon}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="/login" style={{
            padding: '0.75rem 2rem',
            textDecoration: 'none',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '0.5rem',
            color: 'white',
            fontSize: '1rem',
            fontWeight: '500',
            background: 'rgba(255, 255, 255, 0.1)'
          }}>
            Login
          </a>
          <a href="/signup" style={{
            padding: '0.75rem 2rem',
            textDecoration: 'none',
            background: '#dc2626',
            border: '1px solid #dc2626',
            borderRadius: '0.5rem',
            color: 'white',
            fontSize: '1rem',
            fontWeight: '500'
          }}>
            Sign Up
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;