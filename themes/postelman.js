/**
 * Postelman Theme for Insomnia
 * Warm colour palette with washed black background
 */

// Colour palette
const colors = {
  background: '#242424',
  success: '#95b384',    // Warm green (GET, POST)
  notice: '#ff8c42',     // Warm orange (warnings)
  warning: '#d4945f',    // Warm tan
  danger: '#d77a61',     // Warm coral red (DELETE)
  surprise: '#6ba4d9',   // Warm blue (JSON keys)
  info: '#7fb3d5',       // Warm light blue
};

module.exports = {
  name: 'postelman',
  displayName: 'Postelman Theme',
  theme: {
    rawCss: `
      /* Editor settings */
      .editor .CodeMirror {
        line-height: 1.8rem;
      }

      /* JSON syntax highlighting */
      .cm-s-default .cm-number,
      .cm-s-default .cm-atom {
        color: ${colors.success} !important;
      }
      .cm-s-default .cm-property,
      .cm-s-default .cm-string-2 {
        color: ${colors.surprise} !important;
      }

      /* Notice banners */
      .notice.error {
        border-style: unset;
        background-color: var(--color-danger);
        color: white;
      }
      .notice.success {
        border-style: unset;
        background-color: var(--color-success);
        color: black;
      }
      .notice.warning {
        border-style: unset;
        background-color: var(--color-warning);
        color: white;
      }
      .notice.info {
        border-style: unset;
        background-color: var(--color-info);
        color: black;
      }

      /* Method badges - sidebar */
      #sidebar div[role="gridcell"] span.text-\\[0\\.65rem\\] {
        border-color: var(--hl-md);
        background-color: transparent;
        --color-font-success: var(--color-success);
        --color-font-notice: var(--color-notice);
        --color-font-warning: var(--color-warning);
        --color-font-danger: var(--color-danger);
        --color-font-surprise: var(--color-surprise);
        --color-font-info: var(--color-info);
      }

      /* Method badges - global */
      span.text-\\[0\\.65rem\\] {
        border-color: var(--hl-md);
        background-color: transparent;
        --color-font-success: var(--color-success);
        --color-font-notice: var(--color-notice);
        --color-font-warning: var(--color-warning);
        --color-font-danger: var(--color-danger);
        --color-font-surprise: var(--color-surprise);
        --color-font-info: var(--color-info);
      }

      /* Tabs styling */
      div[role="tab"] {
        border: none;
        font-weight: 700;
        font-size: 1.1rem;
      }
      div[role="tab"] button {
        font-weight: 700;
        font-size: 1.1rem;
      }
      div[role="tablist"] {
        border-bottom: none;
      }

      /* Sidebar text styling */
      #sidebar div[role="gridcell"] {
        font-weight: 700;
        font-size: 0.80rem;
      }
      #sidebar div[role="gridcell"] span {
        font-weight: 700;
        font-size: 0.80rem;
      }
    `,
    background: {
      default: colors.background,
      success: colors.success,
      notice: colors.notice,
      warning: colors.warning,
      danger: colors.danger,
      surprise: colors.surprise,
      info: colors.info
    },
    foreground: {
      default: '#f8f8f2',
      success: '#282a36',
      notice: '#282a36',
      warning: '#282a36',
      danger: '#282a36',
      surprise: '#282a36',
      info: '#282a36'
    },
    highlight: {
      default: 'rgba(200, 200, 200, 1)',
      xxs: 'rgba(200, 200, 200, 0.05)',
      xs: 'rgba(200, 200, 200, 0.1)',
      sm: 'rgba(200, 200, 200, 0.2)',
      md: 'rgba(200, 200, 200, 0.3)',
      lg: 'rgba(200, 200, 200, 0.6)',
      xl: 'rgba(200, 200, 200, 0.8)',
    },
    styles: {
      sidebar: {
        background: {
          default: colors.background
        },
        highlight: {
          default: '#cccccc',
          xxs: 'rgba(98, 98, 98, 0.05)',
          xs: 'rgba(98, 98, 98, 0.1)',
          sm: 'rgba(98, 98, 98, 0.2)',
          md: 'rgba(98, 98, 98, 0.4)',
          lg: 'rgba(98, 98, 98, 0.6)',
          xl: 'rgba(98, 98, 98, 0.8)'
        },
        foreground: {
          default: '#cccccc',
        },
      },
      paneHeader: {
        background: {
          default: colors.background,
          success: colors.success,
          notice: colors.notice,
          warning: colors.warning,
          danger: colors.danger,
          surprise: colors.surprise,
          info: colors.info
        }
      },
      pane: {
        background: {
          default: colors.background,
          success: colors.success,
          notice: colors.notice,
          warning: colors.warning,
          danger: colors.danger,
          surprise: colors.surprise,
          info: colors.info
        },
        highlight: {
          default: '#8F8F8F',
          xs: '#37373D',
          md: '#ffffff12',
          lg: '#A9A9A9',
          xl: '#6D6D6D'
        },
      },
      transparentOverlay: {
        background: {
          default: 'rgba(40, 40, 40, 0.5)',
        }
      },
      dialog: {
        background: {
          default: colors.background,
          success: colors.success,
          notice: colors.notice,
          warning: colors.warning,
          danger: colors.danger,
          surprise: colors.surprise,
          info: colors.info
        }
      },
      link: {
        background: {
          surprise: colors.warning,
        },
      },
    }
  }
}
