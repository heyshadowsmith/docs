import refractor from 'refractor'
import rehype from 'rehype'
import classNames from 'classnames'

const literal = '`'

const Code = (
  { className, children, lang, noWrap, color },
  { darkBg } = {}
) => {
  return (
    <>
      {lang ? (
        <code
          className={classNames(className, {
            dark: darkBg,
            'no-wrap': noWrap,
            [`language-${lang}`]: lang !== undefined
          })}
          dangerouslySetInnerHTML={{
            __html: rehype()
              .stringify({
                type: 'root',
                children: refractor.highlight(children, lang)
              })
              .toString()
          }}
        />
      ) : (
        <code
          className={classNames(className, {
            dark: darkBg,
            'no-wrap': noWrap
          })}
        >
          {children}
        </code>
      )}
      <style jsx global>{`
        body {
          background: red;
        }
      `}</style>
      <style jsx>
        {`
        code {
          color: ${color ? color : '#bd10e0'};
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

        :global(pre) code::before {
          content: none;
        }

        :global(pre) code::after {
          content: none;
        }

        
        // highlight.js
        /*

        github.com style (c) Vasily Polovnyov <vast@whiteants.net>

        */

        code.hljs {
          display: block;
          overflow-x: auto;
          padding: 0.5em;
          color: #333;
          background: #f8f8f8;
        }

        code .hljs-comment,
        code .hljs-quote {
          color: #998;
          font-style: italic;
        }

        code .hljs-keyword,
        code .hljs-selector-tag,
        code .hljs-subst {
          color: #333;
          font-weight: bold;
        }

        code .hljs-number,
        code .hljs-literal,
        code .hljs-variable,
        code .hljs-template-variable,
        code .hljs-tag .hljs-attr {
          color: #008080;
        }

        code :global(.hljs-string),
        code .hljs-doctag {
          color: #d14;
        }

        code .hljs-title,
        code .hljs-section,
        code .hljs-selector-id {
          color: #900;
          font-weight: bold;
        }

        code .hljs-subst {
          font-weight: normal;
        }

        code .hljs-type,
        code .hljs-class .hljs-title {
          color: #458;
          font-weight: bold;
        }

        code .hljs-tag,
        code .hljs-name,
        code .hljs-attribute {
          color: #000080;
          font-weight: normal;
        }

        code .hljs-regexp,
        code .hljs-link {
          color: #009926;
        }

        code .hljs-symbol,
        code .hljs-bullet {
          color: #990073;
        }

        code .hljs-built_in,
        code .hljs-builtin-name {
          color: #0086b3;
        }

        code .hljs-meta {
          color: #999;
          font-weight: bold;
        }

        code .hljs-deletion {
          background: #fdd;
        }

        code .hljs-addition {
          background: #dfd;
        }

        code .hljs-emphasis {
          font-style: italic;
        }

        code .hljs-strong {
          font-weight: bold;
        }

      `}
      </style>
    </>
  )
}

export default Code
