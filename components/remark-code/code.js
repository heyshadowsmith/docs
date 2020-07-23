import classNames from 'classnames'

const literal = '`'

const Code = ({ className, children }, { darkBg } = {}) => {
  // console.log('code >> ', children)
  return (
    <>
      <code
        className={classNames(className, {
          dark: darkBg
          // 'no-wrap': noWrap
        })}
      >
        {children}
      </code>
      <style jsx>
        {`
        code {
          color: #bd10e0;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
            serif;
          font-size: 0.9em;
          white-space: pre-wrap;
        }

        code.no-wrap {
          white-space: nowrap;
        }

        code::before {
          content: '${literal}';
        }

        code::after {
          content: '${literal}';
        }

        

        
        :global(pre) code {
          color: #000;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
            serif;
          font-size: 13px;
          line-height: 20px;
        }

        :global(pre) code::before {
          content: none;
        }

        :global(pre) code::after {
          content: none;
        }

        :global(pre) code.language-shell :global(ul),
        :global(pre) code.language-console :global(ul),
        :global(pre) code.language-bash :global(ul),
        :global(pre) code.language-sh :global(ul),
        :global(pre) code.language-zsh :global(ul) {
          display: block;
          margin: 0;
          padding: 0;
        }


        :global(pre) code.language-shell :global(ul li),
        :global(pre) code.language-console :global(ul li),
        :global(pre) code.language-bash :global(ul li),
        :global(pre) code.language-sh :global(ul li),
        :global(pre) code.language-zsh :global(ul li) {
          display: flex;
          margin: 0;
          padding: 0;
          flex-shrink: 0;
          flex-grow: 0;
        }


        :global(pre) code.language-shell :global(ul li)::before,
        :global(pre) code.language-console :global(ul li)::before,
        :global(pre) code.language-bash :global(ul li)::before,
        :global(pre) code.language-sh :global(ul li)::before,
        :global(pre) code.language-zsh :global(ul li)::before {
          content: '$ ';
          user-select: none;
          white-space: pre;
          color: #CCC;
          display: block;
          flex-shrink: 0;
          flex-grow: 0;
        }


        :global(pre) code.language-shell,
        :global(pre) code.language-console,
        :global(pre) code.language-bash,
        :global(pre) code.language-sh,
        :global(pre) code.language-zsh {
          color: #fff;
          background: transparent;
        }

        


        :global(pre).dark {
          border-color: #333;
          background: transparent;
        }

        code.dark {
          color: #fff;
        }
        code.dark.bash {
          color: #50e3c2;
        }

        
      `}
      </style>
    </>
  )
}

export default Code
