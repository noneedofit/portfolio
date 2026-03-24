module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,md,svx}'],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      colors: {
        rosePine: {
          base: '#191724',
          surface: '#1f1d2e',
          overlay: '#26233a',
          muted: '#6e6a86',
          subtle: '#908caa',
          text: '#e0def4',
          love: '#eb6f92',
          gold: '#f6c177',
          rose: '#ebbcba',
          pine: '#31748f',
          foam: '#9ccfd8',
          iris: '#c4a7e7',
          highlightLow: '#21202e',
          highlightMed: '#403d52',
          highlightHigh: '#524f67'
        }
      }
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.875rem' }],
      xl: ['1.25rem', { lineHeight: '1.875rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }]
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          '--tw-prose-body': theme('colors.rosePine.text'),
          '--tw-prose-headings': theme('colors.rosePine.text'),
          '--tw-prose-links': theme('colors.rosePine.foam'),
          '--tw-prose-links-hover': theme('colors.rosePine.pine'),
          '--tw-prose-underline': theme('colors.rosePine.foam / 0.2'),
          '--tw-prose-underline-hover': theme('colors.rosePine.foam'),
          '--tw-prose-bold': theme('colors.rosePine.text'),
          '--tw-prose-counters': theme('colors.rosePine.foam'),
          '--tw-prose-bullets': theme('colors.rosePine.foam'),
          '--tw-prose-hr': theme('colors.rosePine.rose'),
          '--tw-prose-quote-borders': theme('colors.rosePine.iris'),
          '--tw-prose-captions': theme('colors.rosePine.muted'),
          '--tw-prose-code': theme('colors.rosePine.foam'),
          '--tw-prose-code-bg': theme('colors.zinc.300 / 0.2'),
          '--tw-prose-pre-code': theme('colors.rosePine.foam'),
          '--tw-prose-pre-bg': theme('colors.zinc.900'),
          '--tw-prose-pre-border': 'transparent',
          '--tw-prose-th-borders': theme('colors.rosePine.text'),
          '--tw-prose-td-borders': theme('colors.rosePine.text'),
          // Base
          color: 'var(--tw-prose-body)',
          fontSize: theme('fontSize.lg'),
          lineHeight: theme('fontSize.lg')[1].lineHeight,
          '> *': {
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.10')
          },
          p: {
            marginTop: theme('spacing.3'),
            marginBottom: theme('spacing.3')
          },

          h1: {
            marginTop: 0,
            fontSize: theme('fontSize.4xl')[0],
            lineHeight: theme('fontSize.4xl')[1].lineHeight,
            fontWeight: theme('fontWeight.bold')
          },

          // Headings
          'h2, h3': {
            color: 'var(--tw-prose-headings)',
            fontWeight: theme('fontWeight.semibold')
          },
          h2: {
            fontSize: theme('fontSize.2xl')[0],
            lineHeight: theme('lineHeight.7'),
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.5')
          },
          h3: {
            fontSize: theme('fontSize.xl')[0],
            lineHeight: theme('lineHeight.7'),
            marginTop: theme('spacing.4'),
            marginBottom: theme('spacing.4')
          },
          ':is( h2, h3) + *': {
            marginTop: 0
          },

          // Images
          img: {
            borderRadius: theme('borderRadius.xl')
          },
          video: {
            borderRadius: theme('borderRadius.xl')
          },

          // Inline elements
          a: {
            color: 'var(--tw-prose-links)',
            fontWeight: theme('fontWeight.semibold'),
            textDecoration: 'underline',
            textDecorationColor: 'var(--tw-prose-underline)',
            transitionProperty: 'color, text-decoration-color',
            transitionDuration: theme('transitionDuration.150'),
            transitionTimingFunction: theme('transitionTimingFunction.in-out')
          },
          'a:hover': {
            color: 'var(--tw-prose-links-hover)',
            textDecorationColor: 'var(--tw-prose-underline-hover)'
          },
          ':is(h1,h2,h3,h4,h5,h6) a': {
            color: 'var(--tw-prose-headings)',
            textDecoration: 'none',
            fontWeight: 'inherit'
          },
          strong: {
            color: 'var(--tw-prose-bold)',
            fontWeight: theme('fontWeight.semibold')
          },
          code: {
            display: 'inline-block',
            color: 'var(--tw-prose-code)',
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.semibold'),
            backgroundColor: 'var(--tw-prose-code-bg)',
            borderRadius: theme('borderRadius.lg'),
            paddingLeft: theme('spacing.1'),
            paddingRight: theme('spacing.1')
          },
          'a code': {
            color: 'inherit'
          },
          ':is(h2, h3) code': {
            fontWeight: theme('fontWeight.bold')
          },

          // Quotes
          blockquote: {
            marginTop: theme('spacing.5'),
            marginBottom: theme('spacing.5'),
            paddingLeft: theme('spacing.6'),
            borderLeftWidth: theme('borderWidth.2'),
            color: theme('colors.rosePine.subtle'),
            borderLeftColor: 'var(--tw-prose-quote-borders)',
            fontStyle: 'italic'
          },

          // Figures
          figcaption: {
            color: 'var(--tw-prose-captions)',
            fontSize: theme('fontSize.sm')[0],
            lineHeight: theme('lineHeight.6'),
            marginTop: theme('spacing.3')
          },
          'figcaption > p': {
            margin: 0
          },

          // Lists
          ul: {
            listStyleType: 'disc'
          },
          ol: {
            listStyleType: 'decimal'
          },
          'ul, ol': {
            paddingLeft: theme('spacing.6')
          },
          li: {
            marginTop: theme('spacing.6'),
            marginBottom: theme('spacing.6'),
            paddingLeft: theme('spacing[3.5]')
          },
          'li::marker': {
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.semibold')
          },
          'ol > li::marker': {
            color: 'var(--tw-prose-counters)'
          },
          'ul > li::marker': {
            color: 'var(--tw-prose-bullets)'
          },
          'li :is(ol, ul)': {
            marginTop: theme('spacing.4'),
            marginBottom: theme('spacing.4')
          },
          'li :is(li, p)': {
            marginTop: theme('spacing.3'),
            marginBottom: theme('spacing.3')
          },

          // Code blocks
          pre: {
            color: 'var(--tw-prose-pre-code)',
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.medium'),
            backgroundColor: 'var(--tw-prose-pre-bg)',
            borderRadius: theme('borderRadius.3xl'),
            padding: theme('spacing.8'),
            overflowX: 'auto',
            border: '1px solid',
            borderColor: 'var(--tw-prose-pre-border)'
          },
          'pre code': {
            display: 'inline',
            color: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            backgroundColor: 'transparent',
            borderRadius: 0,
            padding: 0
          },

          // Horizontal rules
          hr: {
            marginTop: theme('spacing.20'),
            marginBottom: theme('spacing.20'),
            borderTopWidth: '1px',
            borderColor: 'var(--tw-prose-hr)',
            '@screen lg': {
              marginLeft: `calc(${theme('spacing.12')} * -1)`,
              marginRight: `calc(${theme('spacing.12')} * -1)`
            }
          },

          // Tables
          table: {
            width: '100%',
            tableLayout: 'auto',
            textAlign: 'left',
            fontSize: theme('fontSize.sm')[0]
          },
          thead: {
            borderBottomWidth: '1px',
            borderBottomColor: 'var(--tw-prose-th-borders)'
          },
          'thead th': {
            color: 'var(--tw-prose-headings)',
            fontWeight: theme('fontWeight.semibold'),
            verticalAlign: 'bottom',
            paddingBottom: theme('spacing.2')
          },
          'thead th:not(:first-child)': {
            paddingLeft: theme('spacing.2')
          },
          'thead th:not(:last-child)': {
            paddingRight: theme('spacing.2')
          },
          'tbody tr': {
            borderBottomWidth: '1px',
            borderBottomColor: 'var(--tw-prose-td-borders)'
          },
          'tbody tr:last-child': {
            borderBottomWidth: 0
          },
          'tbody td': {
            verticalAlign: 'baseline'
          },
          tfoot: {
            borderTopWidth: '1px',
            borderTopColor: 'var(--tw-prose-th-borders)'
          },
          'tfoot td': {
            verticalAlign: 'top'
          },
          ':is(tbody, tfoot) td': {
            paddingTop: theme('spacing.2'),
            paddingBottom: theme('spacing.2')
          },
          ':is(tbody, tfoot) td:not(:first-child)': {
            paddingLeft: theme('spacing.2')
          },
          ':is(tbody, tfoot) td:not(:last-child)': {
            paddingRight: theme('spacing.2')
          }
        }
      }
    })
  }
};
