// import { useCallback } from 'react'
import Copy from '~/components/icons/copy'

// import { useToasts } from '~/components/toasts'

const withClipboard = WrappedComponent => {
  // const toasts = useToasts()

  // const copyToClipboard = useCallback(() => {
  //   if (Array.isArray(text)) {
  //     copy(text.join('\n'))
  //   } else {
  //     copy(text)
  //   }

  //   // Show a toast confirming the copy effect
  //   if (toasts && toasts.current) {
  //     toasts.current.success({
  //       text: 'Copied to clipboard!'
  //     })
  //   }

  //   if (onCopy) {
  //     onCopy()
  //   }
  // }, [onCopy, toasts, text])

  return ({ className, ...props }) => {
    const dark = [
      'language-shell',
      'language-sh',
      'language-bash',
      'language-console',
      'language-zsh'
    ].includes(className)
    return (
      <>
        <div className="copy" onClick={() => {}}>
          <Copy
            stroke="currentColor"
            fill={dark ? '#000' : 'var(--geist-background)'}
            width="18px"
            height="18px"
          />
        </div>
        <WrappedComponent className={className} {...props} />
        <style jsx>{`
          .copy {
            position: absolute;
            width: fit-content;
            right: 8px;
            bottom: 8px;
            cursor: pointer;
            color: ${dark ? '#fff' : 'var(--geist-foreground)'};
            background: ${dark ? '#000' : 'var(--geist-background)'};
          }
          .copy:hover {
            color: var(--accents-5);
          }
        `}</style>
      </>
    )
  }
}

export default withClipboard
