import 'tailwindcss/tailwind.css';
import 'tailwindcss/animations.css';
import 'tailwindcss/typography.css';
import 'tailwindcss/forms.css';
import 'tailwindcss/line-clamp.css';
import 'tailwindcss/aspect-ratio.css';

    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            display: ['Poppins', 'sans-serif']
          },
          animation: {
            'float': 'float 6s ease-in-out infinite',
            'fade-in': 'fadeIn 1s ease-in'
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' }
            },
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' }
            }
          }
        }
      }
    }