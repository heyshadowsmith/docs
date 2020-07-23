import React, { useEffect } from 'react'
import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'
import rehypePrism from '@mapbox/rehype-prism'

import classNames from 'classnames'

import RemarkNote from '~/components/text/remark-note'
import RemarkCaption from '~/components/text/remark-caption'

const RemarkRenderer = ({
  caption,
  allowCopy,
  contentType,
  children,
  components
}) => {
  const renderMarkdown = md => {
    const markdownProcessor = unified()
      .use(markdown)
      .use(remark2rehype)
      .use(rehypePrism)
      // .use(highlight)
      .use(rehype2react, {
        createElement: React.createElement,
        components
      })

    return markdownProcessor.processSync(md).result
  }

  useEffect(() => {
    // reformat and style $ shell commands
    const nodes = document.querySelectorAll(
      'code.language-shell:not(.shell-restyled), code.language-bash:not(.shell-restyled), code.language-sh:not(.shell-restyled), code.language-console:not(.shell-restyled), code.language-zsh:not(.shell-restyled)'
    )
    nodes.forEach(n => {
      n.className = n.className + ' shell-restyled'
      n.innerHTML = `<ul>${n.innerHTML
        .split('\n')
        .map(line => {
          return line.trim() !== '' ? `<li>${line}</li>` : ``
        })
        .join('')}</ul>`
    })
  }, [])

  return contentType === 'default' ? (
    <>{renderMarkdown(children)}</>
  ) : contentType === 'note' ? (
    <RemarkNote type="note">{renderMarkdown(children)}</RemarkNote>
  ) : contentType === 'warning' ? (
    <RemarkNote type="warning">{renderMarkdown(children)}</RemarkNote>
  ) : contentType === 'caption' ? (
    <RemarkCaption components={{ ...components }}>{children}</RemarkCaption>
  ) : contentType === 'code' ? (
    <>
      <div
        className={classNames({
          'allow-copy': allowCopy === true
        })}
      >
        {renderMarkdown(children)}
      </div>
      <RemarkCaption components={{ ...components }}>{caption}</RemarkCaption>
    </>
  ) : contentType === undefined ? (
    <>{renderMarkdown(children)}</>
  ) : (
    <div style={{ marginLeft: '2rem', fontSize: '0.9rem' }}>
      unsupported <b>markdown</b> contentType type:{' '}
      <pre style={{ display: 'inline', backgroundColor: '#FFFF00' }}>
        {contentType}
      </pre>
    </div>
  )
}

export default RemarkRenderer
