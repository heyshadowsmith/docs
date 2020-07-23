const Pre = ({ children }) => (
  <pre>
    {children}
    <style jsx>
      {`
        pre {
          border: 1px solid #eaeaea;
          border-radius: var(--geist-radius);
          padding: 20px;
          margin: 24px 0 40px;
          white-space: pre;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
          background: white;
        }
      `}
    </style>
  </pre>
)

export default Pre
